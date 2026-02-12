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

2. **Credenciales en un archivo que no se sube a Git**
   - En el servidor (y solo ahí), copiá `config.example.php` como **`config.php`** dentro de `public_html/api/`.
   - Editá **`config.php`** y reemplazá con tus valores reales:

   ```php
   $API_KEY = 'TU_GOOGLE_MAPS_API_KEY';
   $PLACE_ID = 'TU_PLACE_ID_DE_GOOGLE_MAPS';
   ```

   - **`config.php`** está en `.gitignore` y **nunca** se sube al repo; así la API Key no se filtra.

   - **API Key:** creala en [Google Cloud Console](https://console.cloud.google.com/) → APIs & Services → Credentials. Habilitá **Places API (New)** para el proyecto. Las reseñas (`reviews`) requieren el SKU "Place Details Enterprise" o superior; revisá [Usage and Billing](https://developers.google.com/maps/billing-and-pricing/sku-details) si no ves reseñas.
   - **Place ID:** es el ID del lugar “Cabañas Arcángeles” en Google Maps. Podés obtenerlo desde la [Place ID Finder](https://developers.google.com/maps/documentation/places/web-service/place-id) o desde la URL del negocio en Maps (el ID suele estar en la URL o en el embed).

3. **Build estática en Hostinger**
   - El sitio React se sirve como estático (por ejemplo desde `public_html/` o una subcarpeta).
   - El PHP debe estar en **la misma raíz web** que el React, en la ruta `/api/`. Copiá la carpeta `public_html/api/` del repo a la raíz de tu hosting (ej. `public_html/api/` en Hostinger), de modo que `https://tudominio.com/api/google-reviews.php` sea el script PHP y no el `index.html` del SPA. El `.htaccess` del proyecto ya evita reescribir `/api/` a `index.html`.

---

## Checklist de despliegue (Hostinger)

Para que las reseñas funcionen en producción (ej. `https://dodgerblue-dragonfly-324921.hostingersite.com/`):

1. **Subir la API junto con el build**
   - Después de `npm run build`, subí el contenido de `dist/` a la raíz web (index.html, assets/, .htaccess).
   - **Además**, subí la carpeta **`public_html/api/`** del repo a la raíz web como **`api/`**. En el servidor debe quedar:
     - `public_html/index.html` (o la raíz que use Hostinger)
     - `public_html/assets/`
     - `public_html/api/google-reviews.php`
     - `public_html/api/config.php` (creado en el servidor, ver paso 2)
     - `public_html/api/cache/` (carpeta vacía, permisos 755 o 775)

2. **Crear `config.php` en el servidor**
   - En el panel de Hostinger (o por FTP), dentro de `api/`, copiá `config.example.php` como `config.php`.
   - Editá `config.php` y reemplazá `$API_KEY` y `$PLACE_ID` por los valores reales de Google.

3. **Comprobar que la API responde**
   - Abrí en el navegador: `https://tudominio.com/api/google-reviews.php`
   - Si ves **JSON** (aunque sea con `{"error":"..."}`): la API está en el servidor; si hay error, revisá `config.php` y la API Key / Place ID.
   - Si ves la **misma página que el sitio** (HTML del SPA): la carpeta `api/` no está en la raíz web o el servidor está reescribiendo; subí de nuevo `api/` al mismo nivel que `index.html`.

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
- **Mock para ver las tarjetas:** crear `.env.local` en la raíz con `VITE_GOOGLE_REVIEWS_MOCK=true`. El componente mostrará 3 reseñas de ejemplo (con y sin foto, texto largo) para poder editar la UI sin API. Si no configurás nada y la API falla en dev, también se usa el mock como fallback.
- Crear un archivo `.env` en la raíz del proyecto con `VITE_API_PROXY_TARGET=https://tudominio.com` (reemplazá por la URL real del sitio). Así las peticiones a `/api/` se redirigen al backend en producción y las reseñas cargan en local.
- O proxy hacia un PHP local (ej. `php -S localhost:8080` en `public_html` y `VITE_API_PROXY_TARGET=http://localhost:8080`).
- O probar directamente en el entorno de Hostinger después del deploy.

**URL de la API:** por defecto el componente llama a `/api/google-reviews.php`. Si en producción la API está en otra URL (otro dominio o path), definí en el build `VITE_GOOGLE_REVIEWS_API_URL=https://tudominio.com/api/google-reviews.php`.

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
      "photoUri": "string | null",
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

## 5. Error 403: "This API method requires billing to be enabled"

Si en la consola del navegador ves **403 (Forbidden)** o el mensaje de Google diciendo que la facturación debe estar habilitada:

1. Entrá a [Google Cloud Console](https://console.cloud.google.com/) y seleccioná el proyecto que usa la API Key (el ID del proyecto suele aparecer en el mensaje de error, ej. `#762820170520`).
2. Andá a **Facturación** (Billing) y **vinculá una cuenta de facturación** al proyecto, o habilitá la facturación si aún no está activa.
3. Enlace directo (reemplazá `TU_PROJECT_ID` por el ID de tu proyecto):  
   `https://console.developers.google.com/billing/enable?project=TU_PROJECT_ID`
4. Después de habilitar la facturación, esperá unos minutos y probá de nuevo. Las reseñas de Google Places (New) requieren un proyecto con facturación activa; Google ofrece créditos gratuitos para empezar.

---

## 6. Archivos involucrados

| Archivo | Rol |
|---------|-----|
| `public_html/api/google-reviews.php` | Endpoint: llama a Places API, cachea, normaliza JSON. No contiene credenciales. |
| `public_html/api/config.php` | **No está en Git.** Lo creás en el servidor copiando `config.example.php`; acá van `$API_KEY` y `$PLACE_ID`. |
| `public_html/api/config.example.php` | Plantilla para crear `config.php` (sí se sube al repo, sin valores reales). |
| `public_html/api/cache/` | Directorio de cache (debe ser escribible). |
| `src/components/GoogleReviews.tsx` | Componente React: fetch, loading, error, empty, cards y “Ver todas en Google”. |
| `src/components/AboutSection.jsx` | Integración: renderiza `<GoogleReviews />` en Nosotros. |
