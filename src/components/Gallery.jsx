import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import OptimizedImage from '@/components/OptimizedImage';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Imágenes cabaña 4 personas
import habitacion1_4 from '@/assets/imgs/cabanias/4/habitacion1.jpg';
import habitacion2_4 from '@/assets/imgs/cabanias/4/habitacion2.jpg';
import cama_4 from '@/assets/imgs/cabanias/4/cama.jpg';
import banio_4 from '@/assets/imgs/cabanias/4/banio.jpg';
import cocina_4 from '@/assets/imgs/cabanias/4/cocina.jpg';
import ventana_4 from '@/assets/imgs/cabanias/4/ventana.jpg';
import parrilla_4 from '@/assets/imgs/cabanias/4/parrilla.jpg';

// Imágenes cabaña 6 personas
import habitacion_6 from '@/assets/imgs/cabanias/6/habitacion.jpg';
import habPrincipal_6 from '@/assets/imgs/cabanias/6/habPrincipal.jpg';
import habSecundaria_6 from '@/assets/imgs/cabanias/6/habSecundaria.jpg';
import comedor_6 from '@/assets/imgs/cabanias/6/comedor.jpg';
import cocina_6 from '@/assets/imgs/cabanias/6/cocina.jpg';
import banio_6 from '@/assets/imgs/cabanias/6/banio.jpg';
import living_6 from '@/assets/imgs/cabanias/6/living.jpg';

// Imágenes loft 8 personas
import principal_8 from '@/assets/imgs/cabanias/8/principal.jpg';
import habitacion_8 from '@/assets/imgs/cabanias/8/habitacion.jpg';
import living_8 from '@/assets/imgs/cabanias/8/living.jpg';
import cocina_8 from '@/assets/imgs/cabanias/8/cocina.jpg';
import banio_8 from '@/assets/imgs/cabanias/8/banio.jpg';
import patio_8 from '@/assets/imgs/cabanias/8/patio.jpg';
import divan_8 from '@/assets/imgs/cabanias/8/divan_arriba.jpg';

// Imágenes extras de gallery: lazy load solo cuando el usuario selecciona la pestaña "extras"
const galleryExtrasLoaders = import.meta.glob('../assets/imgs/gallery/*.jpg', { eager: false });

const galleryByCabin = {
  '4-personas': {
    title: 'Cabaña para 4 Personas',
    images: [
      { src: cama_4, title: 'Habitación Principal', description: 'Cama matrimonial con vista panorámica' },
      { src: habitacion1_4, title: 'Habitación Principal', description: 'Cama matrimonial con vista panorámica' },
      { src: habitacion2_4, title: 'Sala de estar', description: 'Espacio acogedor con cama adicional y ventana' },
      { src: ventana_4, title: 'Vista', description: 'Vista desde la cabaña' },
      { src: cocina_4, title: 'Cocina', description: 'Cocina equipada' },
      { src: banio_4, title: 'Baño', description: 'Baño completo' },
      { src: parrilla_4, title: 'Parrilla', description: 'Parrilla en patio privado' },
    ],
  },
  '6-personas': {
    title: 'Cabaña para 6 Personas',
    images: [
      { src: habitacion_6, title: 'Habitación Principal', description: 'Cama matrimonial con vista panorámica' },
      { src: habPrincipal_6, title: 'Habitación Principal', description: 'Cama matrimonial con vista panorámica' },
      { src: habSecundaria_6, title: 'Habitación Secundaria', description: 'Dos camas individuales' },
      { src: comedor_6, title: 'Comedor', description: 'Espacio comedor con mesa y sillas' },
      { src: cocina_6, title: 'Cocina', description: 'Cocina equipada' },
      { src: banio_6, title: 'Baño', description: 'Baño completo' },
      { src: living_6, title: 'Living', description: 'Espacio living con sofá y TV' },
    ],
  },
  'Loft': {
    title: 'Loft para 8 Personas',
    images: [
      { src: principal_8, title: 'Living principal', description: 'Amplio living con sillones y TV' },
      { src: habitacion_8, title: 'Habitación Principal', description: 'Cama matrimonial con vista panorámica' },
      { src: divan_8, title: 'Diván', description: 'Diván en el piso superior' },
      { src: living_8, title: 'Living', description: 'Espacio living comedor con mesa y sillas' },
      { src: cocina_8, title: 'Cocina', description: 'Cocina equipada' },
      { src: banio_8, title: 'Baño', description: 'Baño completo' },
      { src: patio_8, title: 'Patio', description: 'Amplio patio privado con parrilla' },
    ],
  },
  extras: {
    title: 'Entorno y más',
    images: [], // Se cargan dinámicamente al seleccionar la pestaña
  },
};

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeTab, setActiveTab] = useState('4-personas');
  const [extrasImages, setExtrasImages] = useState([]);
  const [extrasLoading, setExtrasLoading] = useState(false);

  // Cargar imágenes extras solo cuando el usuario selecciona esa pestaña
  useEffect(() => {
    if (activeTab !== 'extras' || extrasImages.length > 0) return;
    setExtrasLoading(true);
    Promise.all(
      Object.values(galleryExtrasLoaders).map((loader) => loader().then((mod) => mod.default))
    )
      .then((urls) => {
        setExtrasImages(
          urls.map((src) => ({
            src,
            title: 'Cabañas Arcángeles',
            description: 'Entorno y vistas de nuestras cabañas en Bariloche',
          }))
        );
      })
      .finally(() => setExtrasLoading(false));
  }, [activeTab, extrasImages.length]);

  const currentSectionImages =
    activeTab === 'extras'
      ? extrasImages
      : galleryByCabin[activeTab].images;

  const tabs = [
    { key: '4-personas', label: '4 Personas' },
    { key: '6-personas', label: '6 Personas' },
    { key: 'Loft', label: 'Loft' },
    { key: 'extras', label: 'Entorno y más' },
  ];

  const currentSection = galleryByCabin[activeTab];

  return (
    <div className="min-h-screen bg-brand-beige-pale">
      <Helmet>
        <title>Galería de Fotos - Cabañas Arcángeles | Bariloche</title>
        <meta name="description" content="Galería de fotos de nuestras cabañas en Bariloche. Descubre los espacios de cabañas para 4, 6 y 8 personas, el entorno y las vistas al Lago Gutiérrez." />
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
            <p className="text-xl md:text-2xl text-slate-600 max-w-2xl mx-auto">
              Descubre todos los espacios de nuestras cabañas en la Patagonia
            </p>
          </motion.div>

          {/* Pestañas de selección */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            <div className="bg-brand-beige-light rounded-full p-1 inline-flex flex-wrap justify-center">
              {tabs.map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`px-4 py-2 sm:px-6 sm:py-3 rounded-full font-medium transition-all duration-300 text-base sm:text-lg ${
                    activeTab === tab.key
                      ? 'bg-brand-dark-green text-white shadow-lg transform scale-105'
                      : 'text-brand-dark-brown hover:text-brand-dark-green hover:bg-brand-beige-pale'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6"
          >
            {extrasLoading && activeTab === 'extras' ? (
              <div className="col-span-full flex justify-center py-16">
                <div className="w-10 h-10 border-2 border-brand-olive-green border-t-transparent rounded-full animate-spin" aria-hidden />
              </div>
            ) : (
              currentSectionImages.map((image, index) => (
                <motion.button
                  key={`${activeTab}-${index}`}
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
                      <p className="text-base text-gray-200">{image.description}</p>
                    </div>
                  </div>
                </motion.button>
              ))
            )}
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
