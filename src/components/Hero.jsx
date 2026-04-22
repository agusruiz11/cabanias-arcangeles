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
      className="relative min-h-[70vh] md:min-h-screen md:h-auto flex items-end justify-start md:items-center md:justify-center overflow-hidden w-full"
    >
      {/* Background */}
      <div className="hero-bg absolute inset-0 z-0 w-full min-h-[70vh] md:min-h-[100dvh]">
        <OptimizedImage
          src={heroImage}
          alt="Vista panorámica del lago Gutiérrez en Bariloche con montañas nevadas"
          priority
          className="w-full h-full object-cover object-center min-w-full"
        />
        <div className="absolute inset-0 bg-black/50" aria-hidden />
      </div>

      {/* Mobile: texto centrado abajo */}
      <div className="md:hidden relative z-10 w-full px-6 pb-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p
            className="font-display font-bold uppercase leading-none drop-shadow-2xl"
            style={{ fontSize: 'clamp(36px, 10vw, 52px)', textShadow: '2px 2px 8px rgba(0,0,0,0.8)' }}
          >
            <span className="text-white">CABAÑAS EN</span>
            <br />
            <span className="text-brand-lime-green">BARILOCHE</span>
          </p>
          <div className="w-2/3 mx-auto border-t border-brand-lime-green my-3" />
          <p
            className="text-white font-display font-medium drop-shadow-xl"
            style={{ fontSize: 'clamp(14px, 4vw, 18px)', textShadow: '1px 1px 6px rgba(0,0,0,0.8)' }}
          >
            A 200 metros del <span className="text-brand-lime-green">Lago Gutiérrez</span>
          </p>
        </motion.div>
      </div>

      {/* Desktop: centrado con logo y botón */}
      <div className="hidden md:flex relative z-10 text-center text-white px-4 max-w-4xl mx-auto flex-col items-center justify-center gap-6 py-0 pt-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <OptimizedImage
            src={logoV1}
            alt="Cabañas Arcángeles"
            priority
            className="h-36 lg:h-60 w-auto mx-auto drop-shadow-2xl"
            style={{ filter: 'drop-shadow(2px 2px 8px rgba(0, 0, 0, 0.8)) drop-shadow(0 0 20px rgba(0, 0, 0, 0.5))' }}
          />
        </motion.div>

        <motion.p
          className="text-xl lg:text-4xl max-w-4xl mx-auto lg:mb-3 lg:mt-6 drop-shadow-2xl font-display font-semibold leading-tight"
          style={{ textShadow: '2px 2px 6px rgba(0, 0, 0, 0.8), 0 0 15px rgba(0, 0, 0, 0.5)' }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Cabañas en Bariloche <br /> a 200 metros del lago Gutiérrez
        </motion.p>
        <motion.p
          className="text-xl lg:text-3xl max-w-prose mx-auto leading-relaxed drop-shadow-2xl font-italic font-light lg:mb-4"
          style={{ textShadow: '2px 2px 6px rgba(0, 0, 0, 0.8), 0 0 15px rgba(0, 0, 0, 0.5)' }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Ubicación ideal, tranquilidad real.
        </motion.p>

        <motion.div
          className="flex flex-col items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Button
            asChild
            className="font-display bg-brand-olive-green hover:bg-brand-lime-green text-white px-4 py-2 text-lg lg:text-xl font-semibold rounded-full shadow-lg hover:scale-105 transition-all duration-200"
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