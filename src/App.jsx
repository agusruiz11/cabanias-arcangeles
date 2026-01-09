import React from 'react';
import { Helmet } from 'react-helmet';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Environment from '@/components/Environment';
import CabinGallery from '@/components/CabinGallery';
import Amenities from '@/components/Amenities';
import Services from '@/components/Services';
import Location from '@/components/Location';
import Testimonials from '@/components/Testimonials';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';

function App() {
  return (
    <>
      <Helmet>
        <title>Cabañas en Bariloche - Posada del Arcángel | Lago Gutiérrez</title>
        <meta name="description" content="Cabañas de lujo en Bariloche cerca del lago Gutiérrez. Disfruta de la naturaleza patagónica con todas las comodidades. Reserva ahora en Posada del Arcángel." />
      </Helmet>
      
      <div className="min-h-screen" style={{ backgroundColor: '#FDFBEE' }}>
        <Header />
        <Hero />
        <Environment />
        <CabinGallery />
        {/* <Amenities /> */}
        <Services />
        <Location />
        {/* <Testimonials /> */}
        <FinalCTA />
        <Footer />
        <FloatingButtons />
        <Toaster />
      </div>
    </>
  );
}

export default App;