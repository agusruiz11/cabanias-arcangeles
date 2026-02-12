import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import OptimizedImage from '@/components/OptimizedImage';
import heroImage from '../assets/imgs/bg/hero.jpg';
import logoV1 from '../assets/imgs/logo/completo/logo_v1Asset 5.svg';
import logoMobile from '../assets/imgs/logo/casa/logo_icono_v1Asset 19.svg';


const Hero = () => {

  return (
    <section 
      id="hero" 
      className="relative min-h-[52vh] md:min-h-screen md:h-auto flex items-center justify-center overflow-hidden w-full"
    >
      {/* Background: mobile = imagen completa (object-contain), poco relleno verde; desktop = object-cover */}
      <div className="hero-bg absolute inset-0 z-0 w-full min-h-[52vh] md:min-h-[100dvh] bg-[#15301f] md:bg-transparent">
        <OptimizedImage
          src={heroImage}
          alt="Vista panorámica del lago Gutiérrez en Bariloche con montañas nevadas"
          priority
          className="w-full h-full object-contain md:object-cover object-center min-w-full"
        />
        <div className="absolute inset-0 bg-black/50" aria-hidden />
      </div>

      {/* Content: centrado. Mobile: menos espacio entre bloques y con el siguiente */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto flex flex-col items-center justify-center gap-2 md:gap-6 py-2 md:py-0 pb-2 md:pb-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <OptimizedImage
            src={logoMobile}
            alt="Cabañas Arcángeles"
            priority
            className="h-20 w-auto mx-auto drop-shadow-2xl md:hidden"
            style={{ filter: 'drop-shadow(2px 2px 8px rgba(0, 0, 0, 0.8)) drop-shadow(0 0 20px rgba(0, 0, 0, 0.5))' }}
          />
          <OptimizedImage
            src={logoV1}
            alt="Cabañas Arcángeles"
            priority
            className="h-48 lg:h-80 w-auto mx-auto drop-shadow-2xl hidden md:block"
            style={{ filter: 'drop-shadow(2px 2px 8px rgba(0, 0, 0, 0.8)) drop-shadow(0 0 20px rgba(0, 0, 0, 0.5))' }}
          />
        </motion.div>

        <motion.p 
          className="text-[clamp(12px,1.5vw,26px)] leading-tight md:text-xl lg:text-4xl max-w-4xl mx-auto lg:mb-3 lg:mt-6 drop-shadow-2xl font-display font-semibold"
          style={{ textShadow: '2px 2px 6px rgba(0, 0, 0, 0.8), 0 0 15px rgba(0, 0, 0, 0.5)' }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Cabañas en Bariloche <br /> a 200 metros del lago Gutiérrez
        </motion.p>
        <motion.p 
          className="text-[clamp(14px,3.5vw,18px)] md:text-xl lg:text-3xl max-w-prose mx-auto leading-relaxed drop-shadow-2xl font-italic font-light lg:mb-4"
          style={{ textShadow: '2px 2px 6px rgba(0, 0, 0, 0.8), 0 0 15px rgba(0, 0, 0, 0.5)' }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Ubicación ideal, tranquilidad real.
        </motion.p>

        {/* Mobile: CTA grande centrado. Desktop: botón estándar */}
        <motion.div 
          className="flex flex-col items-center w-full max-w-md mx-auto -mt-0.5 md:mt-0"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Button 
            asChild
            className="font-display w-[65%] max-w-xs h-6 md:h-auto md:min-h-0 md:w-auto bg-brand-dark-green hover:bg-brand-olive-green md:bg-brand-olive-green md:hover:bg-brand-lime-green text-white px-1 py-1 md:px-4 md:py-2 text-[10px] md:text-lg lg:text-xl font-semibold rounded-lg md:rounded-full shadow-lg hover:scale-105 transition-all duration-200"
          >
            <a href="#contact">
              Consultas y Reservas
            </a>
          </Button>
        </motion.div>
      </div>

      {/* Scroll indicator - solo desktop */}
      <motion.div 
        className="hidden md:flex absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <motion.div 
            className="w-1 h-3 bg-white rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;