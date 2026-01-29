<?php
/**
 * Endpoint: reseñas de Google Maps (Place Details API v1).
 * Cache 24h en archivo. Subir a Hostinger en: public_html/api/
 *
 * Las credenciales van en config.php (no se sube a Git).
 * Copiá config.example.php como config.php y completá $API_KEY y $PLACE_ID.
 */

header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Cache-Control: public, max-age=3600');

$configFile = __DIR__ . '/config.php';
if (!is_file($configFile)) {
    http_response_code(500);
    header('Content-Type: application/json; charset=utf-8');
    echo json_encode([
        'error' => 'Falta config.php. Copiá config.example.php como config.php y completá $API_KEY y $PLACE_ID.',
        'httpCode' => 500,
        'details' => null,
    ], JSON_UNESCAPED_UNICODE);
    exit;
}
require $configFile;

$CACHE_TTL_SECONDS = 86400; // 24 horas

function sendError($message, $httpCode = 500, $details = null) {
    http_response_code($httpCode);
    echo json_encode([
        'error' => $message,
        'httpCode' => $httpCode,
        'details' => $details,
    ], JSON_UNESCAPED_UNICODE);
    exit;
}

function normalizeResponse($raw) {
    $name = null;
    if (!empty($raw['displayName']['text'])) {
        $name = $raw['displayName']['text'];
    }
    $ratingAvg = isset($raw['rating']) ? (float) $raw['rating'] : null;
    $total = isset($raw['userRatingCount']) ? (int) $raw['userRatingCount'] : null;
    $googleMapsUri = !empty($raw['googleMapsUri']) ? $raw['googleMapsUri'] : null;

    $reviews = [];
    if (!empty($raw['reviews']) && is_array($raw['reviews'])) {
        foreach ($raw['reviews'] as $r) {
            $author = null;
            $profileUri = null;
            if (!empty($r['authorAttribution'])) {
                $author = $r['authorAttribution']['displayName'] ?? null;
                $profileUri = $r['authorAttribution']['uri'] ?? null;
            }
            $rating = isset($r['rating']) ? (float) $r['rating'] : null;
            $relativeTime = !empty($r['relativePublishTimeDescription']) ? $r['relativePublishTimeDescription'] : null;
            $text = null;
            if (!empty($r['text']['text'])) {
                $text = $r['text']['text'];
            }
            $reviews[] = [
                'author' => $author,
                'profileUri' => $profileUri,
                'rating' => $rating,
                'relativeTime' => $relativeTime,
                'text' => $text,
            ];
        }
    }

    return [
        'name' => $name,
        'ratingAvg' => $ratingAvg,
        'total' => $total,
        'googleMapsUri' => $googleMapsUri,
        'reviews' => $reviews,
    ];
}

// Validar configuración (debe venir de config.php)
if (empty($API_KEY) || empty($PLACE_ID) || $API_KEY === 'TU_GOOGLE_MAPS_API_KEY' || $PLACE_ID === 'TU_PLACE_ID') {
    sendError('API no configurada: editar config.php con tu $API_KEY y $PLACE_ID.', 500, 'Missing config');
}

$languageCode = isset($LANGUAGE_CODE) && $LANGUAGE_CODE !== '' ? $LANGUAGE_CODE : 'es';
$CACHE_FILE = __DIR__ . '/cache/google-reviews-' . preg_replace('/[^a-z0-9_-]/i', '', $languageCode) . '.json';

// Cache: si existe y no venció, devolverlo
$cacheDir = dirname($CACHE_FILE);
if (!is_dir($cacheDir)) {
    if (!@mkdir($cacheDir, 0755, true)) {
        sendError('No se pudo crear el directorio de cache.', 500, 'mkdir failed');
    }
}
if (file_exists($CACHE_FILE) && (time() - filemtime($CACHE_FILE)) < $CACHE_TTL_SECONDS) {
    $cached = @file_get_contents($CACHE_FILE);
    if ($cached !== false) {
        header('X-Google-Reviews: from-cache');
        echo $cached;
        exit;
    }
}

// Llamar a Google Places API (New) – Place Details
$url = 'https://places.googleapis.com/v1/places/' . $PLACE_ID . '?languageCode=' . rawurlencode($languageCode);
$opts = [
    'http' => [
        'method' => 'GET',
        'header' =>
            "X-Goog-Api-Key: $API_KEY\r\n" .
            "X-Goog-FieldMask: displayName,rating,userRatingCount,googleMapsUri,reviews\r\n",
        'ignore_errors' => true,
    ],
];
$ctx = stream_context_create($opts);
$response = @file_get_contents($url, false, $ctx);

if ($response === false) {
    sendError('Error al conectar con Google Places API.', 500, 'fetch failed');
}

$code = 200;
if (isset($http_response_header[0]) && preg_match('/\d{3}/', $http_response_header[0], $m)) {
    $code = (int) $m[0];
}

$data = json_decode($response, true);
if (json_last_error() !== JSON_ERROR_NONE) {
    sendError('Respuesta inválida de Google.', 500, json_last_error_msg());
}

if ($code >= 400) {
    $details = $data['error']['message'] ?? $response;
    sendError('Error de Google Places API.', $code, $details);
}

$output = normalizeResponse($data);
$json = json_encode($output, JSON_UNESCAPED_UNICODE);
if ($json === false) {
    sendError('Error al serializar respuesta.', 500, json_last_error_msg());
}

// Guardar cache
@file_put_contents($CACHE_FILE, $json, LOCK_EX);

header('X-Google-Reviews: fresh');
echo $json;
