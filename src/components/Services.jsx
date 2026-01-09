import React from 'react';
import { motion } from 'framer-motion';
import { Check, Plus } from 'lucide-react';

const Services = () => {
  const includedServices = [
    "Limpieza diaria",
    "Cambio de ropa blanca",
    "Desayuno continental",
    "WiFi de alta velocidad",
    "Estacionamiento privado",
    "Uso de parrilla y deck",
    "Calefacción central",
    "Agua caliente 24hs"
  ];

  const optionalServices = [
    "Servicio de mucama extra",
    "Cena gourmet",
    "Excursiones guiadas",
    "Traslado desde/hacia aeropuerto",
    "Alquiler de bicicletas",
    "Servicio de lavandería",
    "Masajes relajantes",
    "Actividades para niños"
  ];

  return (
    <section id="services" className="py-20" style={{ backgroundColor: '#FDFBEE' }}>
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-forest mb-6">
            Servicios
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Disfruta de nuestros servicios incluidos y personaliza tu experiencia 
            con nuestros servicios opcionales
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Servicios Incluidos */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-100"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mr-4">
                <Check className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-display text-2xl font-bold text-forest">
                Servicios Incluidos
              </h3>
            </div>
            
            <div className="space-y-4">
              {includedServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center"
                >
                  <Check className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                  <span className="text-slate-700">{service}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Servicios Opcionales */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-100"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-lake rounded-full flex items-center justify-center mr-4">
                <Plus className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-display text-2xl font-bold text-forest">
                Servicios Opcionales
              </h3>
            </div>
            
            <div className="space-y-4">
              {optionalServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center"
                >
                  <Plus className="w-5 h-5 text-lake mr-3 flex-shrink-0" />
                  <span className="text-slate-700">{service}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;