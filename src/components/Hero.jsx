import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import bgHero from '../assets/imgs/bg-hero.jpg';

const Hero = () => {
  const handleWhatsApp = () => {
    toast({
      title: "🚧 Esta función no está implementada aún",
      description: "¡Pero no te preocupes! Puedes solicitarla en tu próximo prompt! 🚀"
    });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          className="w-full h-full object-cover" 
          alt="Vista panorámica del lago Gutiérrez en Bariloche con montañas nevadas"
          src={bgHero} />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <motion.h1 
          className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight drop-shadow-2xl"
          style={{ textShadow: '2px 2px 8px rgba(0, 0, 0, 0.8), 0 0 20px rgba(0, 0, 0, 0.5)' }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Cabañas en Bariloche
          <span className="block text-3xl md:text-4xl lg:text-5xl mt-2 text-blue-200" style={{ textShadow: '2px 2px 8px rgba(0, 0, 0, 0.8), 0 0 20px rgba(0, 0, 0, 0.5)' }}>
            Posada del Arcángel
          </span>
        </motion.h1>

        <motion.p 
          className="text-lg md:text-xl lg:text-2xl mb-8 max-w-2xl mx-auto leading-relaxed drop-shadow-2xl"
          style={{ textShadow: '2px 2px 6px rgba(0, 0, 0, 0.8), 0 0 15px rgba(0, 0, 0, 0.5)' }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Vive la magia de la Patagonia en nuestras cabañas de lujo, 
          rodeadas por la naturaleza del lago Gutiérrez
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Button 
            onClick={handleWhatsApp}
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg rounded-full flex items-center gap-3 shadow-lg transform hover:scale-105 transition-all duration-200"
          >
            <MessageCircle className="w-6 h-6" />
            Consultar por WhatsApp
          </Button>
          
          <div className="flex gap-3">
            <Button 
              onClick={() => toast({
                title: "🚧 Esta función no está implementada aún",
                description: "¡Pero no te preocupes! Puedes solicitarla en tu próximo prompt! 🚀"
              })}
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-slate-800 px-6 py-3 rounded-full"
            >
              <Phone className="w-5 h-5 mr-2" />
              Llamar
            </Button>
            
            <Button 
              onClick={() => toast({
                title: "🚧 Esta función no está implementada aún",
                description: "¡Pero no te preocupes! Puedes solicitarla en tu próximo prompt! 🚀"
              })}
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-slate-800 px-6 py-3 rounded-full"
            >
              <Mail className="w-5 h-5 mr-2" />
              Email
            </Button>
          </div>
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