import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import OptimizedImage from '@/components/OptimizedImage';
import dormitorio4 from '@/assets/imgs/dormitorio4.jpg';
import environment from '@/assets/imgs/environment.jpg';
import gutierrezLake from '@/assets/imgs/Gutiérrez_Lake.jpg';
import banio from '@/assets/imgs/banio.jpg';
import banio2 from '@/assets/imgs/banio2.jpg';
import cabania1 from '@/assets/imgs/cabania1.jpg';
import cabania2 from '@/assets/imgs/cabania2.jpg';
import cocina from '@/assets/imgs/cocina.jpg';
import dormitorio1 from '@/assets/imgs/dormitorio1.jpg';
import dormitorio2 from '@/assets/imgs/dormitorio2.jpg';
import dormitorio3 from '@/assets/imgs/dormitorio3.jpg';
import patio from '@/assets/imgs/patio.jpg';
import sala from '@/assets/imgs/sala.jpg';
import sala2 from '@/assets/imgs/sala2.jpg';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Imágenes restantes y adicionales de las cabañas para la galería completa
const galleryImages = [
  { src: dormitorio4, title: 'Dormitorio', description: 'Amplio dormitorio con vista' },
  { src: environment, title: 'Entorno', description: 'Naturaleza patagónica' },
  { src: gutierrezLake, title: 'Lago Gutiérrez', description: 'Vista al lago desde las cabañas' },
  { src: cabania1, title: 'Exterior Cabaña 4 personas', description: 'Vista frontal con deck' },
  { src: cabania2, title: 'Exterior Cabaña 6 personas', description: 'Cabaña amplia con deck' },
  { src: sala, title: 'Sala de Estar', description: 'Espacio acogedor con chimenea' },
  { src: sala2, title: 'Sala Amplia', description: 'Sala de la cabaña para 6 personas' },
  { src: dormitorio1, title: 'Dormitorio Principal', description: 'Cama matrimonial' },
  { src: dormitorio2, title: 'Segundo Dormitorio', description: 'Dos camas individuales' },
  { src: dormitorio3, title: 'Tercer Dormitorio', description: 'Dormitorio adicional' },
  { src: cocina, title: 'Cocina', description: 'Cocina equipada' },
  { src: banio, title: 'Baño', description: 'Baño completo' },
  { src: banio2, title: 'Segundo Baño', description: 'Baño secundario' },
  { src: patio, title: 'Deck y Parrilla', description: 'Terraza con vista panorámica' },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="min-h-screen bg-brand-beige-pale">
      <Helmet>
        <title>Galería de Fotos - Cabañas Posada del Arcángel | Bariloche</title>
        <meta name="description" content="Galería de fotos de nuestras cabañas en Bariloche. Descubre los espacios, el entorno y las vistas al Lago Gutiérrez." />
      </Helmet>
      <Header />
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4">
          {/* Breadcrumb / Volver */}
          <div className="mb-8">
            <Link
              to="/"
              className="inline-flex items-center text-brand-dark-green hover:text-brand-burnt-orange font-medium transition-colors"
            >
              ← Volver al inicio
            </Link>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="font-display text-4xl md:text-5xl font-bold text-forest mb-4">
              Galería de Fotos
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Descubre todos los espacios de nuestras cabañas en la Patagonia
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6"
          >
            {galleryImages.map((image, index) => (
              <motion.button
                key={`${image.title}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                onClick={() => setSelectedImage(image)}
                className="group relative aspect-[4/3] overflow-hidden rounded-xl shadow-lg focus:outline-none focus:ring-2 focus:ring-brand-olive-green focus:ring-offset-2"
              >
                <OptimizedImage
                  src={image.src}
                  alt={image.title}
                  aspectRatio="4/3"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white text-left">
                    <h3 className="font-semibold text-lg">{image.title}</h3>
                    <p className="text-sm text-gray-200">{image.description}</p>
                  </div>
                </div>
              </motion.button>
            ))}
          </motion.div>
        </div>
      </main>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 p-2 text-white hover:bg-white/10 rounded-full transition-colors"
              aria-label="Cerrar"
            >
              <X className="w-8 h-8" />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25 }}
              className="relative max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <OptimizedImage
                src={selectedImage.src}
                alt={selectedImage.title}
                loading="eager"
                className="w-full h-auto max-h-[85vh] object-contain rounded-lg shadow-2xl"
              />
              <div className="mt-4 text-center text-white">
                <h3 className="text-xl font-semibold">{selectedImage.title}</h3>
                <p className="text-gray-300">{selectedImage.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default Gallery;
