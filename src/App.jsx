import React, { Suspense, lazy } from 'react';
import { Helmet } from 'react-helmet';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';

const AppBelowFold = lazy(() => import('@/components/AppBelowFold'));

function App() {
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
      
      <div className="min-h-screen bg-brand-beige-pale">
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