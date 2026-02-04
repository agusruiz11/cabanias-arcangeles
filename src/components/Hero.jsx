import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import OptimizedImage from '@/components/OptimizedImage';
import heroImage from '../assets/imgs/bg/hero.jpg';
import logoV1 from '../assets/imgs/logo/completo/logo_v1Asset 5.svg';
import logoMobile from '../assets/imgs/logo/casa/logo_icono_v1Asset 19.svg';


const Hero = () => {

  return (
    <section 
      id="hero" 
      className="relative h-[55vh] min-h-[500px] md:min-h-screen md:h-auto flex items-center justify-center overflow-hidden w-full"
    >
      {/* Background Image - Mobile: imagen completa (object-contain) con relleno min arriba/abajo. Desktop: full screen (object-cover) */}
      <div className="hero-bg absolute inset-0 z-0 w-full md:min-h-[100dvh] bg-[#15301f] md:bg-transparent md:pt-0 md:pb-0">
        <OptimizedImage
          src={heroImage}
          alt="Vista panorámica del lago Gutiérrez en Bariloche con montañas nevadas"
          priority
          className="w-full h-full object-contain md:object-cover object-center min-w-full"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className=""
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

        {/* <motion.span>
          <span className="font-display font-bold text-2xl md:text-3xl lg:text-3xl my-8 max-w-2xl mx-auto leading-relaxed drop-shadow-2xl font-light">
            Viví Bariloche, dormí como en casa.
          </span>
        </motion.span> */}

        <motion.p 
          className="text-md md:text-xl lg:text-4xl lg:mb-4 mt-4 max-w-2xl mx-auto leading-relaxed drop-shadow-2xl "
          style={{ textShadow: '2px 2px 6px rgba(0, 0, 0, 0.8), 0 0 15px rgba(0, 0, 0, 0.5)' }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Cabañas en Bariloche <br/>a 200 metros del lago Gutiérrez
        </motion.p>
        <motion.p 
          className="text-lg md:text-xl lg:text-4xl lg:mb-4 mt-0 max-w-2xl mx-auto leading-relaxed drop-shadow-2xl font-italic font-light"
          style={{ textShadow: '2px 2px 6px rgba(0, 0, 0, 0.8), 0 0 15px rgba(0, 0, 0, 0.5)' }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Ubicación ideal, tranquilidad real.
        </motion.p>

        {/* Desktop: botón dentro del contenido */}
        <motion.div 
          className="hidden md:flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Button 
            asChild
            className="font-display bg-brand-olive-green hover:bg-brand-lime-green text-white px-4 py-2 text-sm md:text-lg lg:text-xl rounded-full shadow-lg hover:scale-105 transition-all duration-200"
          >
            <a href="#contact">
              Consultas y Reservas
            </a>
          </Button>
        </motion.div>
      </div>

      {/* Mobile: botón en la franja verde debajo de la imagen */}
      <motion.div
        className="md:hidden absolute bottom-0 left-0 right-0 min-h-28 py-6 flex justify-center items-center z-10"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <Button 
          asChild
          className="font-display bg-brand-olive-green hover:bg-brand-lime-green text-white px-6 py-3 text-base rounded-full shadow-lg hover:scale-105 transition-all duration-200"
        >
          <a href="#contact">
            Consultas y Reservas
          </a>
        </Button>
      </motion.div>

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