import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation, Clock, Car, ArrowRight, Utensils, ShoppingCart, Wifi } from 'lucide-react';
import MapIframe from './Iframe';

const Location = () => {
  return (
    <section id="location" className="py-20 bg-brand-beige-pale">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-forest mb-6">
            Cómo Llegar
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Instrucciones detalladas para llegar a Cabañas Arcángeles
          </p>
        </motion.div>

        {/* Sección 1: Desde Bariloche a Villa Los Coihues */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-forest rounded-full flex items-center justify-center mr-4">
                <Car className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-display text-3xl font-bold text-forest">Villa Los Coihues</h3>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8">
                              <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-forest rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm font-bold">1</span>
                    </div>
                    <p className="text-slate-600">
                      completar info necesaria para llegar a Villa Los Coihues
                    </p>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-forest rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm font-bold">2</span>
                    </div>
                    <p className="text-slate-600">
                      completar info necesaria
                    </p>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-forest rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm font-bold">3</span>
                    </div>
                    <p className="text-slate-600">
                      info necesaria para llegar a Cabañas Arcángeles
                    </p>
                  </div>                
                
                <div className="mt-6 p-4 bg-brand-beige-pale rounded-lg border border-brand-olive-green">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-forest">info adicional de ser necesaria - completar</p>
                      <p className="font-semibold text-forest">Total distancia recorrida: 14 km</p>
                      <p className="text-slate-600">Tiempo aproximado en vehículo: 20'</p>
                    </div>
                    <Navigation className="w-8 h-8 text-forest" />
                  </div>
                </div>
              </div>
              
              <MapIframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3003.7629705095574!2d-71.41494399999999!3d-41.1615232!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x961a7047a643debf%3A0x361ee0169af3c424!2zQ2FiYcOxYXMgQXJjw6FuZ2VsZXM!5e0!3m2!1ses!2sar!4v1758821147284!5m2!1ses!2sar"
                title="Mapa de Villa Los Coihues - Cabañas Arcángeles"
              />
            </div>
          </div>
          <MapIframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3003.7629705095574!2d-71.41494399999999!3d-41.1615232!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x961a7047a643debf%3A0x361ee0169af3c424!2zQ2FiYcOxYXMgQXJjw6FuZ2VsZXM!5e0!3m2!1ses!2sar!4v1758821147284!5m2!1ses!2sar"
                title="Mapa de Villa Los Coihues - Cabañas Arcángeles"
                className='mt-10 rounded-xl'
          />
        </motion.div>

        {/* Información de contacto y distancias */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center">
            <div className="w-12 h-12 bg-forest rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold text-lg text-forest mb-2">Dirección</h3>
            <p className="text-slate-600 text-sm">
              Calle Parque Nacional Arrayanes<br />
              Villa Los Coihues, Lago Gutiérrez<br />
              San Carlos de Bariloche, Río Negro
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center">
            <div className="w-12 h-12 bg-brand-medium-blue rounded-full flex items-center justify-center mx-auto mb-4">
              <Navigation className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold text-lg text-forest mb-2">Distancias</h3>
            <ul className="text-slate-600 text-sm space-y-1">
              <li>• Centro de Bariloche: 14 km</li>
              <li>• Cerro Catedral: 5 km</li>
              <li>• Aeropuerto: 25 km</li>
              <li>• Villa La Angostura: 60 km</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center">
            <div className="w-12 h-12 bg-gradient-to-br from-brand-dark-green to-brand-medium-blue rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold text-lg text-forest mb-2">Tiempos de Viaje</h3>
            <ul className="text-slate-600 text-sm space-y-1">
              <li>• Al centro: 20 minutos</li>
              <li>• A Cerro Catedral: 10 minutos</li>
              <li>• Al aeropuerto: 30 minutos</li>
              <li>• A Villa La Angostura: 1 hora</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Location;