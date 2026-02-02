import React, { useState } from 'react';
import { motion } from 'framer-motion';
import OptimizedImage from '@/components/OptimizedImage';
import cabania1 from '../assets/imgs/cabania1.jpg';
import sala from '../assets/imgs/sala.jpg';
import dormitorio1 from '../assets/imgs/dormitorio1.jpg';
import dormitorio2 from '../assets/imgs/dormitorio2.jpg';
import cocina from '../assets/imgs/cocina.jpg';
import banio from '../assets/imgs/banio.jpg';
import cabania2 from '../assets/imgs/cabania2.jpg';
import sala2 from '../assets/imgs/sala2.jpg';
import dormitorio3 from '../assets/imgs/dormitorio3.jpg';
import dormitorio4 from '../assets/imgs/dormitorio4.jpg';
import banio2 from '../assets/imgs/banio2.jpg';
import patio from '../assets/imgs/patio.jpg';

const CabinGallery = () => {
  const [activeTab, setActiveTab] = useState('4-personas');

  const cabinTypes = {
    '4-personas': {
      title: 'Cabañas para 4 Personas',
      description: 'Ideal para familias pequeñas o parejas que buscan intimidad',
      capacity: '4 personas',
      size: '65 m²',
      features: ['2 dormitorios', '1 baño completo', 'Cocina equipada', 'Deck privado', 'Chimenea', 'Vista al lago'],
      images: [
        {
          title: "Exterior Cabaña 4 personas",
          description: "Vista frontal con deck y montañas de fondo",
          src: cabania1
        },
        {
          title: "Sala de Estar",
          description: "Espacio acogedor con chimenea y ventanales",
          src: sala
        },
        {
          title: "Dormitorio Principal",
          description: "Cama matrimonial con vista panorámica",
          src: dormitorio1
        },
        {
          title: "Segundo Dormitorio",
          description: "Dormitorio con dos camas individuales",
          src: dormitorio2
        },
        {
          title: "Cocina Equipada",
          description: "Cocina completa con electrodomésticos modernos",
          src: cocina
        },
        {
          title: "Baño Completo",
          description: "Baño moderno con ducha escocesa",
          src: banio
        }
      ]
    },
    '6-personas': {
      title: 'Cabaña para 6 Personas',
      description: 'Perfecta para familias grandes o grupos de amigos',
      capacity: '6 personas',
      size: '95 m²',
      features: ['3 dormitorios', '2 baños completos', 'Cocina amplia', 'Deck grande', 'Chimenea', 'Vista panorámica', 'Parrilla'],
      images: [
        {
          title: "Exterior Cabaña 6 personas",
          description: "Cabaña amplia con deck extenso y vista al lago",
          src: cabania2
        },
        {
          title: "Sala de Estar Amplia",
          description: "Espacio generoso con chimenea y sofás cómodos",
          src: sala2
        },
        {
          title: "Dormitorio Principal",
          description: "Suite principal con baño privado",
          src: dormitorio1
        },
        {
          title: "Segundo Dormitorio",
          description: "Dormitorio con cama matrimonial",
          src: dormitorio2
        },
        {
          title: "Tercer Dormitorio",
          description: "Dormitorio con literas para niños",
          src: dormitorio3
        },
        {
          title: "Cocina Amplia",
          description: "Cocina espaciosa con isla central",
          src: cocina
        },
        {
          title: "Baño Principal",
          description: "Baño principal con bañera",
          src: banio
        },
        {
          title: "Segundo Baño",
          description: "Baño secundario con ducha",
          src: banio2
        },
        {
          title: "Deck y Parrilla",
          description: "Terraza amplia con parrilla y vista panorámica",
          src: patio
        }
      ]
    },
    '8-personas': {
      title: 'Loft para 8 Personas',
      description: 'Ideal para grupos grandes, familias extensas o reuniones con amigos',
      capacity: '8 personas',
      size: '120 m²',
      features: ['4 dormitorios', '3 baños completos', 'Cocina amplia', 'Deck grande', 'Chimenea', 'Vista panorámica', 'Parrilla'],
      images: [
        {
          title: "Exterior Cabaña 8 personas",
          description: "Cabaña amplia con deck extenso y vista al lago",
          src: cabania2
        },
        {
          title: "Sala de Estar Amplia",
          description: "Espacio generoso con chimenea y sofás cómodos",
          src: sala2
        },
        {
          title: "Dormitorio Principal",
          description: "Suite principal con baño privado",
          src: dormitorio1
        },
        {
          title: "Segundo Dormitorio",
          description: "Dormitorio con cama matrimonial",
          src: dormitorio2
        },
        {
          title: "Tercer Dormitorio",
          description: "Dormitorio con literas",
          src: dormitorio3
        },
        {
          title: "Cuarto Dormitorio",
          description: "Dormitorio adicional para grupos grandes",
          src: dormitorio4
        },
        {
          title: "Cocina Amplia",
          description: "Cocina espaciosa con isla central",
          src: cocina
        },
        {
          title: "Baño Principal",
          description: "Baño principal con bañera",
          src: banio
        },
        {
          title: "Segundo Baño",
          description: "Baño secundario con ducha",
          src: banio2
        },
        {
          title: "Deck y Parrilla",
          description: "Terraza amplia con parrilla y vista panorámica",
          src: patio
        }
      ]
    }
  };

  const currentCabin = cabinTypes[activeTab];

  return (
    <section id="cabin-gallery" className="py-20 bg-brand-beige-pale overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full box-border">
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
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Elige la cabaña perfecta para tu estadía en la naturaleza patagónica <br />
            Contamos con cabañas para 4, 6 y 8 personas.
          </p>
        </motion.div>

        {/* Pestañas de selección */}
        <div className="flex justify-center mb-12">
          <div className="bg-brand-beige-light rounded-full p-1 inline-flex">
            {Object.keys(cabinTypes).map((tabKey) => (
              <button
                key={tabKey}
                onClick={() => setActiveTab(tabKey)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
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
              <h3 className="font-display text-3xl font-bold text-forest mb-4">
                {currentCabin.title}
              </h3>
              <p className="text-lg text-slate-600 mb-6">
                {currentCabin.description}
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                  <div className="text-2xl font-bold text-forest">{currentCabin.capacity}</div>
                  <div className="text-sm text-brand-dark-brown">Capacidad</div>
                </div>
                <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                  <div className="text-2xl font-bold text-forest">{currentCabin.size}</div>
                  <div className="text-sm text-brand-dark-brown">Superficie</div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-forest mb-3">Características:</h4>
                <div className="grid grid-cols-2 gap-2">
                  {currentCabin.features.map((feature, index) => (
                    <div key={index} className="flex items-center text-sm text-brand-dark-brown">
                      <div className="w-2 h-2 bg-brand-olive-green rounded-full mr-2"></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="relative w-full min-w-0 aspect-[4/3] min-h-[16rem] md:min-h-[20rem] rounded-xl overflow-hidden">
              <OptimizedImage
                src={currentCabin.images[0].src}
                alt={currentCabin.images[0].title}
                aspectRatio="4/3"
                className="w-full h-full max-w-full object-cover rounded-xl shadow-lg"
              />
              <div className="absolute bottom-4 left-4 bg-black/60 text-white p-3 rounded-lg">
                <h4 className="font-semibold">{currentCabin.images[0].title}</h4>
                <p className="text-sm text-gray-200">{currentCabin.images[0].description}</p>
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
          <h3 className="text-2xl font-bold text-forest mb-8 text-center">
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
                      <p className="text-sm text-gray-200">{image.description}</p>
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