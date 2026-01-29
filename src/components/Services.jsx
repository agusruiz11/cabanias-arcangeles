import React from 'react';
import { motion } from 'framer-motion';
import { KayakIcon } from '../assets/icons/KayakIcon';
import {
  CigaretteOff,
  Wifi,
  ParkingCircle,
  Umbrella,
  UtensilsCrossed,
  Dumbbell,
  Flame,
  Waves,
  Sparkles,
  Lock,
  Wind,
  Sun,
  Grid3x3,
  Zap,
  BedDouble,
  Luggage,
  Scissors
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: CigaretteOff,
      text: "Departamentos para no fumadores"
    },
    {
      icon: Wifi,
      text: "Internet WiFi"
    },
    {
      icon: ParkingCircle,
      text: "Estacionamiento cubierto"
    },
    {
      icon: Umbrella,
      text: "Exclusivo deck a metros del lago"
    },
    {
      icon: UtensilsCrossed,
      text: "Parrillas"
    },
    {
      icon: Dumbbell,
      text: "Gimnasio"
    },
    {
      icon: KayakIcon,
      text: "Kayak"
    },
    {
      icon: Flame,
      text: "Calefacción centralizada por piso radiante"
    },
    {
      icon: Waves,
      text: "Acceso al lago"
    },
    {
      icon: Sparkles,
      text: "Servicio diario de limpieza"
    },
    {
      icon: Lock,
      text: "Caja de seguridad"
    },
    {
      icon: Wind,
      text: "Secador de pelo en cada departamento"
    },
    {
      icon: Sun,
      text: "Reposeras"
    },
    {
      icon: Grid3x3,
      text: "Aberturas con sistema DVH"
    },
    {
      icon: Zap,
      text: "Generador de Emergencia"
    },
    {
      icon: BedDouble,
      text: "Ropa de cama y toallas"
    },
    {
      icon: Luggage,
      text: "Depósito para equipajes"
    },
    {
      icon: Scissors,
      text: "Plancha y tabla de planchar (a petición)"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6" style={{ color: '#2196F3' }}>
            Servicios
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-9 gap-6 md:gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center"
              >
                <div className="mb-3 flex items-center justify-center h-12">
                  <IconComponent className="w-8 h-8 md:w-10 md:h-10 text-black" strokeWidth={1.5} />
                </div>
                <p className="text-xs sm:text-sm md:text-base text-gray-800 font-medium leading-tight px-1">
                  {service.text}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;