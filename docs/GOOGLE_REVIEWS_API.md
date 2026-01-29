# Reseñas de Google Maps (API + React)

## Resumen

- **Backend:** endpoint PHP en `/public_html/api/google-reviews.php` que llama a Google Places API (New) Place Details, cachea la respuesta 24 h en archivo y normaliza el JSON.
- **Frontend:** componente React + TypeScript `GoogleReviews.tsx` que consume ese endpoint y muestra hasta 5 reseñas con “Leer más/menos” y link a Google Maps.

La API Key **no** se expone en el frontend; solo el PHP la usa.

---

## 1. Configuración del endpoint PHP (Hostinger)

1. **Subir archivos a Hostinger**
   - Copiá la carpeta `public_html/api/` del repo a la raíz web de tu hosting (por ejemplo `public_html/api/` en Hostinger).
   - Asegurate de que exista `public_html/api/cache/` y que sea **escribible** (permisos 755 o 775 según el servidor).

2. **Completar constantes en** `public_html/api/google-reviews.php` (al inicio del archivo):

   ```php
   $API_KEY = 'TU_GOOGLE_MAPS_API_KEY';
   $PLACE_ID = 'TU_PLACE_ID_DE_GOOGLE_MAPS';
   ```

   - **API Key:** creala en [Google Cloud Console](https://console.cloud.google.com/) → APIs & Services → Credentials. Habilitá **Places API (New)** para el proyecto. Las reseñas (`reviews`) requieren el SKU "Place Details Enterprise" o superior; revisá [Usage and Billing](https://developers.google.com/maps/billing-and-pricing/sku-details) si no ves reseñas.
   - **Place ID:** es el ID del lugar “Cabañas Arcángeles” en Google Maps. Podés obtenerlo desde la [Place ID Finder](https://developers.google.com/maps/documentation/places/web-service/place-id) o desde la URL del negocio en Maps (el ID suele estar en la URL o en el embed).

3. **Build estática en Hostinger**
   - El sitio React se sirve como estático (por ejemplo desde `public_html/` o una subcarpeta).
   - El PHP vive en `public_html/api/` y se ejecuta cuando se llama a `https://tudominio.com/api/google-reviews.php`.

---

## 2. Uso del componente en la sección Nosotros

El componente **ya está integrado** en la sección Nosotros:

- En `src/components/AboutSection.jsx` se importa y se renderiza `<GoogleReviews />` debajo de las tarjetas de Booking y Google.

Para usarlo en **otra** sección o página:

```jsx
import GoogleReviews from '@/components/GoogleReviews';

// En el JSX:
<GoogleReviews />
```

El componente hace `fetch` a **`/api/google-reviews.php`** (ruta relativa al origen). En producción, el mismo dominio que sirve el React debe servir también el PHP (por ejemplo `tudominio.com` → React y `tudominio.com/api/google-reviews.php` → PHP).

**Desarrollo local:** si corrés solo Vite (`npm run dev`), el PHP no está en local. Opciones:
- Proxy en `vite.config.js` hacia tu Hostinger (o un PHP local) para que `/api/google-reviews.php` apunte al backend, o
- Probar directamente en el entorno de Hostinger después del deploy.

---

## 3. Formato de respuesta del API

El PHP devuelve siempre este formato (o error con status 500 y JSON `{ error, httpCode, details }`):

```json
{
  "name": "string",
  "ratingAvg": number | null,
  "total": number | null,
  "googleMapsUri": "string | null",
  "reviews": [
    {
      "author": "string | null",
      "profileUri": "string | null",
      "rating": number | null,
      "relativeTime": "string | null",
      "text": "string | null"
    }
  ]
}
```

---

## 4. Cache y costos

- El PHP guarda la respuesta en `public_html/api/cache/google-reviews.json` y la reutiliza **24 horas**.
- Si el archivo existe y no venció, no se llama a Google (ideal: 1 request/día para minimizar uso de la API).

---

## 5. Archivos involucrados

| Archivo | Rol |
|--------|-----|
| `public_html/api/google-reviews.php` | Endpoint: llama a Places API, cachea, normaliza JSON. |
| `public_html/api/cache/` | Directorio de cache (debe ser escribible). |
| `src/components/GoogleReviews.tsx` | Componente React: fetch, loading, error, empty, cards y “Ver todas en Google”. |
| `src/components/AboutSection.jsx` | Integración: renderiza `<GoogleReviews />` en Nosotros. |
