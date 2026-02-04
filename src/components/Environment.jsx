import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import OptimizedImage from '@/components/OptimizedImage';
import environment from '../assets/imgs/environment.jpg';
import environment2 from '../assets/imgs/bg/hero3.jpg';
import environment3 from '../assets/imgs/Gutiérrez_Lake.jpg';

const CAROUSEL_IMAGES = [
  { src: environment, alt: 'Entrada a Cabañas Arcángeles'},
  { src: environment2, alt: 'Cabañas Arcángeles' }, // Reemplazar con environment2
  { src: environment3, alt: 'Lago Gutiérrez' }, // Reemplazar con environment3
];

const CAROUSEL_INTERVAL_MS = 4500;

const IMAGE_TRANSITION = {
  type: 'tween',
  ease: [0.25, 0.1, 0.25, 1],
  duration: 0.7,
};

const Environment = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState(new Set());

  const getImageUrl = useCallback((img) => (typeof img === 'string' ? img : img?.default ?? img), []);

  // Preload solo la imagen actual y la siguiente para transiciones suaves sin cargar todo de golpe
  useEffect(() => {
    const toPreload = [currentIndex, (currentIndex + 1) % CAROUSEL_IMAGES.length];
    toPreload.forEach((i) => {
      if (loadedImages.has(i)) return;
      const url = getImageUrl(CAROUSEL_IMAGES[i].src);
      if (!url) return;
      const img = new Image();
      img.onload = () => setLoadedImages((prev) => new Set(prev).add(i));
      img.src = url;
    });
  }, [currentIndex, getImageUrl, loadedImages]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % CAROUSEL_IMAGES.length);
    }, CAROUSEL_INTERVAL_MS);
    return () => clearInterval(timer);
  }, []);

  const currentLoaded = loadedImages.has(currentIndex);

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
              La Posada
            </h2>
            <div className="space-y-6 text-xl text-slate-700 leading-relaxed">
              <p>
              Cabañas Arcángeles es un complejo de cabañas, ubicado en Villa Los Coihues, a 200 metrosdel lago Gutiérrez.
              </p>
              <p>
              Allí, lo esperan cabañas de 4, 6 y hasta 8 personas, construídas sobre la ladera del cerro San Martín, y en la armonía del entorno de un bosque nativo de cipreses, ñires y maitenes.
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
            {/* Aspect ratio fijo en mobile y desktop para evitar CLS y saltos al cambiar imagen */}
            <div className="rounded-2xl overflow-hidden shadow-2xl w-full aspect-[4/3] bg-slate-200/60">
              <div className="relative w-full h-full">
                {/* Placeholder sutil mientras carga */}
                <AnimatePresence>
                  {!currentLoaded && (
                    <motion.div
                      initial={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.35, ease: 'easeOut' }}
                      className="absolute inset-0 bg-gradient-to-br from-slate-200/90 via-slate-100 to-slate-200/90 overflow-hidden"
                      aria-hidden
                    >
                      <div
                        className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                        style={{ animation: 'shimmer 2s ease-in-out infinite' }}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
                <AnimatePresence mode="sync" initial={false}>
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={IMAGE_TRANSITION}
                    className="absolute inset-0"
                  >
                    <OptimizedImage
                      src={CAROUSEL_IMAGES[currentIndex].src}
                      alt={CAROUSEL_IMAGES[currentIndex].alt}
                      className="block w-full h-full object-cover object-center"
                      onLoad={() => setLoadedImages((prev) => new Set(prev).add(currentIndex))}
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
            {/* Indicadores del carrusel */}
            <div className="flex justify-center gap-2 mt-4">
              {CAROUSEL_IMAGES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ease-out ${
                    i === currentIndex ? 'bg-brand-dark-green scale-[1.15]' : 'bg-slate-300 hover:bg-slate-400'
                  }`}
                  aria-label={`Ver imagen ${i + 1}`}
                />
              ))}
            </div>
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-brand-medium-blue rounded-full opacity-20 hidden lg:block"></div>
            <div className="absolute -top-6 -right-6 w-16 h-16 bg-brand-dark-green rounded-full opacity-20 hidden lg:block"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Environment;