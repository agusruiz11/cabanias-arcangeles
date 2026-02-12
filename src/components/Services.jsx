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
  Scissors,
  Tv,
  Coffee,
  Refrigerator,
  ChefHat
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Wifi,
      text: "Internet WiFi Fibra Optica"
    },
    {
      icon: ParkingCircle,
      text: "Estacionamiento privado"
    },
    {
      icon: Tv,
      text: "Televisión por cable"
    },
    {
      icon: UtensilsCrossed,
      text: "Espacio común con parrillas"
    },
    {
      icon: Lock,
      text: "Alarma"
    },
    {
      icon: BedDouble,
      text: "Provisión de ropa blanca"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-100">
      <div className="w-full px-4 md:px-0">
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

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 md:gap-8">
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
                <p className="text-sm sm:text-base md:text-lg text-gray-800 font-medium leading-tight px-1">
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