import React from 'react';
import { motion } from 'framer-motion';
import { 
  Wifi, 
  Car, 
  Flame, 
  Tv, 
  Utensils, 
  Bed, 
  Droplets, 
  TreePine,
  Coffee,
  Zap,
  Wind,
  Shield
} from 'lucide-react';

const Amenities = () => {
  const amenities = [
    { icon: Bed, title: "Ropa Blanca", description: "Sábanas y toallas incluidas" },
    { icon: Wifi, title: "WiFi Gratuito", description: "Internet de alta velocidad" },
    { icon: Car, title: "Estacionamiento", description: "Espacio privado para tu vehículo" },
    { icon: Flame, title: "Calefacción", description: "Calefacción central y chimenea" },
    { icon: Tv, title: "TV Cable", description: "Televisión con canales premium" },
    { icon: Utensils, title: "Cocina Equipada", description: "Utensilios y electrodomésticos" },
    { icon: Droplets, title: "Agua Caliente", description: "Disponible las 24 horas" },
    { icon: TreePine, title: "Deck Privado", description: "Terraza con vista al bosque" },
    { icon: Coffee, title: "Desayuno", description: "Productos regionales incluidos" },
    { icon: Zap, title: "Electricidad", description: "Energía eléctrica garantizada" },
    { icon: Wind, title: "Ventilación", description: "Ambientes bien ventilados" },
    { icon: Shield, title: "Seguridad", description: "Zona segura y tranquila" }
  ];

  return (
    <section className="py-20 bg-snow">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-forest mb-6">
            Comodidades
          </h2>
          <p className="text-xl md:text-2xl text-slate-600 max-w-2xl mx-auto">
            Todo lo que necesitas para una estadía perfecta en la Patagonia
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {amenities.map((amenity, index) => {
            const IconComponent = amenity.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                  <div className="w-16 h-16 bg-gradient-to-br from-forest to-lake rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-xl text-forest mb-2">{amenity.title}</h3>
                  <p className="text-base text-slate-600">{amenity.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Amenities;