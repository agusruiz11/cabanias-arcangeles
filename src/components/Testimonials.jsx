import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const Testimonials = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-brand-dark-green to-brand-dark-brown text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border border-white rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-white rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 border border-white rounded-full"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Quote className="w-16 h-16 mx-auto mb-8 text-brand-beige-light" />
          
          <blockquote className="text-2xl md:text-4xl font-medium leading-relaxed mb-8 font-italic">
            "Un refugio de paz en el corazón de la Patagonia, donde cada amanecer 
            es una postal y cada atardecer una promesa de regreso"
          </blockquote>
          
          <div className="flex flex-col items-center">
            <div className="w-16 h-1 bg-brand-beige-light mb-4"></div>
            <p className="text-lg text-brand-beige-pale">
              La experiencia perfecta te espera en Posada del Arcángel
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;