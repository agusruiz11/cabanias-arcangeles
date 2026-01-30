import React from 'react';
import { motion } from 'framer-motion';
import OptimizedImage from '@/components/OptimizedImage';
import environment from '../assets/imgs/environment.jpg';

const Environment = () => {
  return (
    <section className="py-20 bg-brand-beige-pale">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold text-forest mb-6">
              El Entorno Perfecto
            </h2>
            <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
              <p>
              Cabañas Arcángeles es un complejo de cabañas, ubicado en Villa Los Coihues, a 200 metrosdel lago Gutiérrez.
              </p>
              <p>
              Allí, lo esperan cabañas de 4, 5 y hasta 8 personas, construídas sobre la ladera del cerro San Martín, y en la armonía del entorno de un bosque nativo de cipreses, ñires y maitenes.
              </p>
              <p>
              Rodeado por los imponentes cerros Otto y Ventana,	el entorno ofrece múltiples actividades al aire libre, con senderos cercanos que llevan a cascadas y miradores, alquiler de bicicletas, paseos a caballo y disfrutar de las playas del Lago Gutiérrez y salidas en kayak.
              </p>
              <p>
              Y por supuesto, en invierno, <span className="font-italic">la cita infaltable</span> a solo 20 minutos:
              El esquí en Cerro Catedral.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
              <OptimizedImage
                src={environment}
                alt="Vista del lago Gutiérrez con montañas y bosque patagónico"
                aspectRatio="4/3"
                className="w-full h-full object-cover min-h-[24rem]"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-brand-medium-blue rounded-full opacity-20"></div>
            <div className="absolute -top-6 -right-6 w-16 h-16 bg-brand-dark-green rounded-full opacity-20"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Environment;