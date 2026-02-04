# Optimizaciones de performance aplicadas

Resumen de cambios realizados para mejorar LCP, INP, CLS y reducir JS/CSS inicial. Pensado para usuarios en mobile 4G.

---

## 1. Imágenes (máxima prioridad)

### Cambios realizados

- **`OptimizedImage.jsx`**: Componente reutilizable que aplica:
  - `loading="lazy"` por defecto (below-the-fold).
  - `loading="eager"` + `fetchpriority="high"` cuando `priority={true}` (solo LCP).
  - `decoding="async"` en imágenes lazy para no bloquear el main thread.
  - Soporte de `aspectRatio` para reservar espacio y evitar CLS.

- **Hero (LCP)**:
  - Imagen de fondo del lago: `priority`, sin lazy. Mejora LCP al indicar al navegador que la cargue primero.
  - Logo: también con `priority` por estar above-the-fold.
  - Contenedor con `min-h-[100dvh]` para estabilidad en móvil.

- **Environment, CabinGallery, Gallery**:
  - Todas las imágenes usan `OptimizedImage` con `loading="lazy"` (por defecto).
  - Contenedores con `aspect-[4/3]` para evitar saltos de layout (CLS).

- **Eliminado**: import de `bg-hero.jpg` no usado en Hero.

### Métricas que mejoran

- **LCP**: prioridad explícita en la imagen hero y logo.
- **CLS**: `aspect-ratio` y tamaños mínimos evitan desplazamientos al cargar.
- **Peso inicial**: lazy loading reduce imágenes descargadas en la primera carga.

### Optimizaciones adicionales aplicadas (feb 2025)

- **vite-plugin-image-optimizer**: Compresión JPEG (quality 82) y PNG (quality 85) en build. Reduce ~77% el peso total de imágenes.
- **Hero responsive**: `<picture>` con `bg-mobile.jpg` para móviles y `hero.jpg` para desktop. Menor peso en 4G.
- **Gallery extras**: Imágenes de "Entorno y más" cargadas solo al seleccionar esa pestaña (lazy con `import.meta.glob` eager: false).
- **Environment carrusel**: Preload solo de la imagen actual y la siguiente (no las 3 de golpe).
- **Location mapa**: OptimizedImage con lazy loading.
- **Preconnect**: `fonts.googleapis.com` y `fonts.gstatic.com` en index.html para reducir latencia de fuentes.

### Próximos pasos (opcionales)

- **srcset/sizes**: Cuando existan varios tamaños (p. ej. 400w, 800w, 1200w), pasar `srcSet` y `sizes` a `OptimizedImage` para servir el tamaño adecuado por viewport.

---

## 2. React

### Code splitting y lazy loading

- **Ruta `/gallery`**: `Gallery` se carga con `React.lazy()`; solo se descarga al visitar esa ruta. Reduce JS inicial.
- **Home below-the-fold**: `AppBelowFold.jsx` agrupa Environment, Location, CabinGallery, Services, Testimonials y Contact. Se carga con `React.lazy()` después del Hero. El usuario ve Header + Hero de inmediato; el resto llega en un segundo chunk.

- **Suspense**: Fallbacks mínimos (`min-h-[30vh]` en home, contenedor centrado en `/gallery`) para evitar layout brusco.

### Optimizaciones de componentes

- **Header**: `scrollToSection` envuelto en `useCallback` para no recrear la función y evitar re-renders innecesarios en hijos.
- **Header**: listener de scroll con `{ passive: true }` para no bloquear scroll (mejor INP).
- **AppBelowFold**: envuelto en `React.memo` (sin props; evita re-renders por arriba).
- **OptimizedImage**: `React.memo` para no re-renderizar por igualdad de props.

### Métricas que mejoran

- **FCP / TTI**: Menos JS en la carga inicial.
- **INP**: Menos trabajo en el main thread gracias a `passive: true` y callbacks estables.

---

## 3. Tailwind CSS

### Content / purge

- **`tailwind.config.js`**: `content` reducido a `['./index.html', './src/**/*.{js,jsx}']`. Se eliminaron rutas inexistentes (`./pages/**`, `./components/**`, `./app/**`). El CSS generado incluye solo clases usadas en el proyecto.

### CLS

- Uso de `aspect-ratio` (p. ej. `aspect-[4/3]`) en galerías y bloques de imagen para reservar espacio y evitar saltos.

### Efecto

- Menor tamaño del CSS final y menos clases innecesarias.

---

## 4. Vite (build)

### `vite.config.js`

- **`build.target: 'es2020'`**: Bundles más pequeños al poder usar sintaxis moderna.
- **`manualChunks`**: Separación de dependencias en chunks:
  - `vendor-react`: React + ReactDOM.
  - `vendor-motion`: Framer Motion.
  - `vendor-router`: react-router, react-helmet.
  - `vendor-lucide`: lucide-react.
  - `vendor-radix`: @radix-ui/*.
  - `vendor`: resto de node_modules.
  - Mejor caché: cambios en la app no invalidan todo el vendor.
- **`chunkFileNames` / `entryFileNames` / `assetFileNames`**: Uso de `[hash]` para cache busting y nombres estables.
- **`assetsInlineLimit: 4096`**: Assets pequeños (< 4KB) en base64 para menos requests.
- **`minify: 'terser'`** con `passes: 2`: mejor compresión.
- **`sourcemap: false`** en build de producción: menos peso y exposición de código.

### Compresión (gzip / brotli)

- No configurada en Vite; suele hacerse en el servidor (nginx, Apache, CDN). Si usás Hostinger u otro host, activar compresión allí.

---

## 5. Performance general

### Fuentes

- **`font-display: swap`** ya estaba en `index.css`; evita texto invisible y mejora LCP percibido.
- **Preload de fuentes**: No añadido; en Vite los assets se hashean y la ruta final de la fuente no está fija en `index.html`. Si más adelante usás fuentes desde una URL fija (p. ej. en `public/`), se puede añadir `<link rel="preload">` para la fuente principal.

### HTML

- **`index.html`**: `lang="es"`, título por defecto útil y viewport antes del favicon para prioridad.

### Otros

- **FloatingButtons**: Corregido `className` duplicado que podía generar comportamientos raros en estilos.

---

## 6. Quick wins vs optimizaciones más profundas

### Quick wins (ya aplicados)

- Lazy loading nativo en imágenes.
- Prioridad LCP en hero y logo.
- Aspect-ratio en imágenes para CLS.
- Code splitting por ruta (`/gallery`) y por bloque (below-the-fold en home).
- Tailwind content ajustado.
- Chunks de vendor en Vite.
- Scroll listener pasivo y `useCallback` en Header.

### Optimizaciones posibles a futuro

- **Imágenes**: WebP/AVIF en build y `<picture>`; generación de `srcset` para varios anchos.
- **Framer Motion**: Valorar sustituir animaciones simples por CSS (transition/keyframes) en componentes que no necesiten lógica compleja, para reducir JS.
- **Preload de fuentes**: Si las fuentes se sirven desde una ruta estable (p. ej. `public/fonts/`), añadir preload.
- **Compresión**: Activar gzip/brotli en el servidor de producción.

---

## Cómo medir

- **Lighthouse** (Chrome DevTools): Performance, con modo “Mobile” y throttling “Slow 4G” para simular 4G.
- **Core Web Vitals**: LCP, INP, CLS en PageSpeed Insights o en Search Console una vez en producción.
