import React, { Suspense, lazy, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';

const AppBelowFold = lazy(() => import('@/components/AppBelowFold'));

/** IDs de secciones de la home que se pueden abrir por hash (ej. /#about) */
const HOME_SECTION_IDS = ['cabin-gallery', 'location', 'contact', 'services', 'about'];

function scrollToHashSection() {
  const hash = window.location.hash?.slice(1);
  if (!hash || !HOME_SECTION_IDS.includes(hash)) return;
  const el = document.getElementById(hash);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    return true;
  }
  return false;
}

function App() {
  const location = useLocation();

  // Al volver desde otra vista (ej. gallery) con hash (/#about), hacer scroll a esa sección.
  // El contenido below-the-fold es lazy, así que reintentamos hasta que el elemento exista.
  useEffect(() => {
    if (location.pathname !== '/') return;
    const hash = window.location.hash?.slice(1);
    if (!hash || !HOME_SECTION_IDS.includes(hash)) return;

    const tryScroll = (attempt = 0) => {
      if (scrollToHashSection()) return;
      const maxAttempts = 10;
      const delay = attempt < 3 ? 50 : 150;
      if (attempt < maxAttempts) {
        setTimeout(() => tryScroll(attempt + 1), delay);
      }
    };

    const t = setTimeout(() => tryScroll(), 0);
    return () => clearTimeout(t);
  }, [location.pathname, location.key]);

  return (
    <>
      <Helmet>
        <title>Cabañas Arcángeles - Bariloche | Lago Gutiérrez</title>
        <meta name="description" content="Cabañas en Bariloche a 200 metros del lago Gutiérrez. Ubicación ideal, tranquilidad real. Viví Bariloche, dormí como en casa. Reserva tu estadía ahora." />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://posadadelarcangel.com/" />
        <meta property="og:title" content="Cabañas Arcángeles - Bariloche | Lago Gutiérrez" />
        <meta property="og:description" content="Cabañas en Bariloche a 200 metros del lago Gutiérrez. Ubicación ideal, tranquilidad real. Viví Bariloche, dormí como en casa. Reserva tu estadía ahora." />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Posada del Arcángel" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://posadadelarcangel.com/" />
        <meta name="twitter:title" content="Cabañas Arcángeles - Bariloche | Lago Gutiérrez" />
        <meta name="twitter:description" content="Cabañas en Bariloche a 200 metros del lago Gutiérrez. Ubicación ideal, tranquilidad real. Viví Bariloche, dormí como en casa. Reserva tu estadía ahora." />
        <meta name="twitter:image" content="/og-image.png" />
      </Helmet>
      
      <div className="min-h-screen w-full max-w-[100vw] overflow-x-hidden bg-brand-beige-pale">
        <Header />
        <Hero />
        <Suspense fallback={<div className="min-h-[30vh]" aria-hidden />}>
          <AppBelowFold />
        </Suspense>
        <Footer />
        <FloatingButtons />
        <Toaster />
      </div>
    </>
  );
}

export default App;