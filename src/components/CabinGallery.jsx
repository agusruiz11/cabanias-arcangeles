import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Bed, Sofa, Bath, Utensils, Flame, LayoutGrid, Layers } from 'lucide-react';
import OptimizedImage from '@/components/OptimizedImage';
// Imágenes de las cabañas
// 4 personas
import habitacion1 from '../assets/imgs/cabanias/4/habitacion1.jpg';
import habitacion2 from '../assets/imgs/cabanias/4/habitacion2.jpg';
import cama from '../assets/imgs/cabanias/4/cama.jpg';
import banio from '../assets/imgs/cabanias/4/banio.jpg';
import cocina from '../assets/imgs/cabanias/4/cocina.jpg';
import vista from '../assets/imgs/cabanias/4/ventana.jpg';
import parrilla from '../assets/imgs/cabanias/4/parrilla.jpg';
// 6 personas
import habitacion6 from '../assets/imgs/cabanias/6/habitacion.jpg';
import habitacionPrincipal6 from '../assets/imgs/cabanias/6/habPrincipal.jpg';
import habitacionSecundaria6 from '../assets/imgs/cabanias/6/habSecundaria.jpg';
import comedor from '../assets/imgs/cabanias/6/comedor.jpg';
import cocina6 from '../assets/imgs/cabanias/6/cocina.jpg';
import banio6 from '../assets/imgs/cabanias/6/banio.jpg';
import living6 from '../assets/imgs/cabanias/6/living.jpg';
// Loft - 8 personas
import imgPrincial from '../assets/imgs/cabanias/8/principal.jpg';  
import habitacionLoft from '../assets/imgs/cabanias/8/habitacion.jpg';
import livingLoft from '../assets/imgs/cabanias/8/living.jpg';
import cocinaLoft from '../assets/imgs/cabanias/8/cocina.jpg';
import banioLoft from '../assets/imgs/cabanias/8/banio.jpg';
import patioLoft from '../assets/imgs/cabanias/8/patio.jpg';
import divanLoft from '../assets/imgs/cabanias/8/divan_arriba.jpg';

const CabinGallery = () => {
  const [activeTab, setActiveTab] = useState('6-personas');

  const cabinTypes = {
    '4-personas': {
      title: 'Cabañas para 4 Personas',
      description: 'Ideal para familias pequeñas o parejas que buscan intimidad',
      size: '65 m²',
      features: [
        { text: 'Dormitorio con cama matrimonial', icon: Bed },
        { text: 'Living-Comedor con cocina integrada y Sofa Cama', icon: Sofa },
        { text: 'Baño completo', icon: Bath },
        { text: 'Cocina equipada', icon: Utensils },
        { text: 'Sector de Parrillas compartidas', icon: Flame }
      ],
      cardImage: {
        title: "Habitación Principal",
        description: "Dormitorio con cama matrimonial",
        src: cama
      },
      images: [
        {
          title: "Habitación Principal",
          description: "Dormitorio con cama matrimonial",
          src: habitacion1
        },
        {
          title: "Sala de estar",
          description: "Living-Comedor con cocina integrada y Sofa Cama",
          src: habitacion2
        },
        {
          title: "Cocina",
          description: "Cocina equipada",
          src: cocina
        },
        {
          title: "Baño",
          description: "",
          src: banio
        },
        {
          title: "Parrilla",
          description: "Sector de Parrillas compartidas",
          src: parrilla
        }
      ]
    },
    '6-personas': {
      title: 'Cabaña para 6 Personas',
      description: 'Perfecta para familias grandes o grupos de amigos',
      size: '95 m²',
      features: [
        { text: 'Dormitorio en suite con cama matrimonial', icon: Bed },
        { text: 'Dormitorio con 2 camas individuales', icon: Bed },
        { text: 'Living-Comedor con cocina integrada y Sofa Cama', icon: Sofa },
        { text: 'Baño completo', icon: Bath },
        { text: 'Cocina equipada', icon: Utensils },
        { text: 'Sector de Parrillas compartidas', icon: Flame }
      ],
      cardImage: {
        title: "Habitación Principal (Suite)",
        description: "Dormitorio en suite con cama matrimonial",
        src: habitacion6
      },
      images: [
        {
          title: "Habitación Principal (Suite)",
          description: "Dormitorio en suite con cama matrimonial",
          src: habitacionPrincipal6
        },
        {
          title: "Habitación Secundaria",
          description: "Dormitorio con 2 camas individuales",
          src: habitacionSecundaria6
        },
        {
          title: "Living-Comedor",
          description: "Living-Comedor con cocina integrada",
          src: comedor
        },
        {
          title: "Cocina",
          description: "Cocina equipada",
          src: cocina6
        },
        {
          title: "Baño",
          description: "",
          src: banio6
        },
        {
          title: "Living",
          description: "Living con TV y Sofa Cama",
          src: living6
        }
      ]
    },
    '8-personas': {
      title: 'Loft para 8 Personas',
      description: 'Loft de espacios integrados ideal para grupos grandes o familias numerosas.',
      size: '120 m²',
      features: [
        { text: 'Loft de espacios integrados', icon: LayoutGrid },
        { text: 'Planta alta con cama matrimonial y sofá cama', icon: Layers },
        { text: 'Living con dos sofás cama', icon: Sofa },
        { text: 'Comedor', icon: Sofa },
        { text: 'Cocina equipada', icon: Utensils },
        { text: 'Dos baños', icon: Bath },
        { text: 'Sector de parrillas compartidas', icon: Flame }
      ],
      cardImage: {
        title: "Espacios integrados",
        description: "Vista general del loft y su living principal",
        src: imgPrincial
      },
      images: [
        {
          title: "Habitación Principal",
          description: "Dormitorio principal con cama matrimonial",
          src: habitacionLoft
        },
        {
          title: "Living-Comedor",
          description: "Living-Comedor con cocina integrada",
          src: livingLoft
        },
        {
          title: "Planta alta",
          description: "Planta alta con sofá cama",
          src: divanLoft
        },
        {
          title: "Cocina",
          description: "Cocina equipada",
          src: cocinaLoft
        },
        {
          title: "Baño",
          description: "",
          src: banioLoft
        },
        {
          title: "Parrilla",
          description: "Sector de parrillas compartidas",
          src: patioLoft
        }
      ]
    }
  };

  const currentCabin = cabinTypes[activeTab];

  return (
    <section id="cabin-gallery" className="py-20 bg-brand-beige-pale overflow-x-hidden">
      <div className="w-full px-4 sm:px-6 md:px-0 box-border">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-forest mb-6">
            Nuestras Cabañas
          </h2>
        </motion.div>

        {/* Pestañas de selección */}
        <div className="flex justify-center mb-12">
          <div className="bg-brand-beige-light rounded-full p-1 inline-flex">
            {Object.keys(cabinTypes).map((tabKey) => (
              <button
                key={tabKey}
                onClick={() => setActiveTab(tabKey)}
                className={`px-6 py-3 rounded-full font-medium text-base md:text-lg transition-all duration-300 ${
                  activeTab === tabKey
                    ? 'bg-brand-dark-green text-white shadow-lg transform scale-105'
                    : 'text-brand-dark-brown hover:text-brand-dark-green hover:bg-brand-beige-pale'
                }`}
              >
                {tabKey === '4-personas' ? '4 Personas' : tabKey === '6-personas' ? '6 Personas' : '8 Personas'}
              </button>
            ))}
          </div>
        </div>

        {/* Información de la cabaña seleccionada */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-br from-brand-beige-pale to-brand-beige-light rounded-2xl p-4 sm:p-6 md:p-8 mb-12 border border-brand-olive-green overflow-hidden"
        >
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center min-w-0">
            <div className="min-w-0">
              <h3 className="font-display text-3xl md:text-4xl font-bold text-forest mb-5">
                {currentCabin.title}
              </h3>

              <div>
                <h4 className="font-semibold text-lg text-forest mb-4">Características</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {currentCabin.features.map((feature, index) => {
                    const IconComponent = feature.icon;
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        className="group flex items-center gap-3 p-3 sm:p-4 bg-white/80 hover:bg-white rounded-xl border border-brand-olive-green/20 shadow-sm hover:shadow-md hover:border-brand-olive-green/40 transition-all duration-300"
                      >
                        <div className="flex-shrink-0 text-burnt-orange flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <IconComponent className="w-7 h-7 sm:w-8 sm:h-8" strokeWidth={2} />
                        </div>
                        <span className="text-sm sm:text-base text-brand-dark-brown font-medium leading-snug">
                          {feature.text}
                        </span>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
            
            <div className="relative w-full min-w-0 aspect-[4/3] min-h-[16rem] md:min-h-[20rem] rounded-xl overflow-hidden">
              <OptimizedImage
                src={currentCabin.cardImage.src}
                alt={currentCabin.cardImage.title}
                aspectRatio="4/3"
                className="w-full h-full max-w-full object-cover rounded-xl shadow-lg"
              />
              <div className="absolute bottom-4 left-4 bg-black/60 text-white p-3 rounded-lg">
                <h4 className="font-semibold text-lg">{currentCabin.cardImage.title}</h4>
                <p className="text-base text-gray-200">{currentCabin.cardImage.description}</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Galería de imágenes */}
        <motion.div
          key={`gallery-${activeTab}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-forest mb-8 text-center">
            Galería de Fotos - {currentCabin.title}
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 min-w-0">
            {currentCabin.images.map((image, index) => (
              <motion.div
                key={`${image.title}-${index}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer min-w-0 w-full"
              >
                <div className="relative w-full min-w-0 overflow-hidden rounded-xl shadow-lg aspect-[4/3]">
                  <OptimizedImage
                    src={image.src}
                    alt={`${image.title} - ${image.description}`}
                    aspectRatio="4/3"
                    className="w-full h-full max-w-full object-cover group-hover:scale-110 transition-transform duration-500 min-h-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 text-white">
                      <h4 className="font-semibold text-lg">{image.title}</h4>
                      <p className="text-base text-gray-200">{image.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CabinGallery;