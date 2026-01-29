import React from 'react';
import Environment from '@/components/Environment';
import Location from '@/components/Location';
import CabinGallery from '@/components/CabinGallery';
import Services from '@/components/Services';
import AboutSection from '@/components/AboutSection';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';

/**
 * Contenido below-the-fold de la home. Cargado con React.lazy para reducir
 * el JS inicial y mejorar FCP/TTI.
 */
function AppBelowFold() {
  return (
    <>
      <Environment />
      <Location />
      <CabinGallery />
      <Services />
      <AboutSection />
      {/* <Testimonials /> */}
      <Contact />
    </>
  );
}

export default React.memo(AppBelowFold);
