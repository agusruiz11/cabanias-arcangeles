import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import OptimizedImage from '@/components/OptimizedImage';
import heroImage from '../assets/imgs/hero3.jpg';
import logoV1 from '../assets/imgs/logo/completo/logo_v1Asset 5.svg';

const Hero = () => {

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image - LCP: priority + eager para above-the-fold */}
      <div className="absolute inset-0 z-0 min-h-[100dvh]">
        <OptimizedImage
          src={heroImage}
          alt="Vista panorámica del lago Gutiérrez en Bariloche con montañas nevadas"
          priority
          className="w-full h-full object-cover min-h-[50vh]"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <OptimizedImage
            src={logoV1}
            alt="Cabañas Arcángeles"
            priority
            className="h-36 md:h-48 lg:h-80 w-auto mx-auto drop-shadow-2xl"
            style={{ filter: 'drop-shadow(2px 2px 8px rgba(0, 0, 0, 0.8)) drop-shadow(0 0 20px rgba(0, 0, 0, 0.5))' }}
          />
        </motion.div>

        {/* <motion.span>
          <span className="font-display font-bold text-2xl md:text-3xl lg:text-3xl my-8 max-w-2xl mx-auto leading-relaxed drop-shadow-2xl font-light">
            Viví Bariloche, dormí como en casa.
          </span>
        </motion.span> */}

        <motion.p 
          className="text-lg md:text-xl lg:text-2xl mb-0 mt-6 max-w-2xl mx-auto leading-relaxed drop-shadow-2xl "
          style={{ textShadow: '2px 2px 6px rgba(0, 0, 0, 0.8), 0 0 15px rgba(0, 0, 0, 0.5)' }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Cabañas en Bariloche a 200 metros del lago Gutiérrez.
        </motion.p>
        <motion.p 
          className="text-lg md:text-xl lg:text-2xl mb-8 mt-0 max-w-2xl mx-auto leading-relaxed drop-shadow-2xl font-italic font-light"
          style={{ textShadow: '2px 2px 6px rgba(0, 0, 0, 0.8), 0 0 15px rgba(0, 0, 0, 0.5)' }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Ubicación ideal, tranquilidad real.
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Button 
            asChild
            className="font-display bg-brand-olive-green hover:bg-brand-lime-green text-white px-8 py-4 text-lg rounded-full shadow-lg transform hover:scale-105 transition-all duration-200"
          >
            <a href="#contact">
              Reservá tu estadía
            </a>
          </Button>
          
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
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