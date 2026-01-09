import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation, Clock, Car, ArrowRight, Utensils, ShoppingCart, Wifi } from 'lucide-react';
import MapIframe from './Iframe';

const Location = () => {
  return (
    <section id="location" className="py-20" style={{ backgroundColor: '#FDFBEE' }}>
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
            Instrucciones detalladas para llegar a Posada del Arcángel
          </p>
        </motion.div>

        {/* Sección 1: Desde Bariloche a Villa Los Coihues */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-forest rounded-full flex items-center justify-center mr-4">
                <Car className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-display text-3xl font-bold text-forest">Desde Bariloche</h3>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-xl text-forest mb-4">Cómo llegar a Villa Los Coihues</h4>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-lake rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm font-bold">1</span>
                    </div>
                    <p className="text-slate-600">
                      Saliendo desde Bariloche, ya sea por Av. Bustillo o Av. de los Pioneros, se recorren 8,5 km hasta el cruce con la ruta N° 82.
                    </p>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-lake rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm font-bold">2</span>
                    </div>
                    <p className="text-slate-600">
                      Doblando allí hacia la izquierda, tomamos esa ruta. Al cabo de 1 km, se presenta una bifurcación: a la derecha se va a Cerro Catedral; a la izquierda se continúa por ruta N° 82 hacia Villa Los Coihues.
                    </p>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-lake rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm font-bold">3</span>
                    </div>
                    <p className="text-slate-600">
                      Después de recorridos unos 4 kilómetros, se llega a un cruce. Doblar a la derecha, por camino consolidado.
                    </p>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-lake rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm font-bold">4</span>
                    </div>
                    <p className="text-slate-600">
                      Allí es la entrada a la Villa.
                    </p>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-forest">Total distancia recorrida: 14 km</p>
                      <p className="text-slate-600">Tiempo aproximado en vehículo: 20'</p>
                    </div>
                    <Navigation className="w-8 h-8 text-forest" />
                  </div>
                </div>
              </div>
              
                <MapIframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12016.167424984873!2d-71.4147339!3d-41.155438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x961a704734d37de9%3A0x186a0e3a0dd032dc!2sVilla%20Los%20Coihues%2C%20R%C3%ADo%20Negro!5e0!3m2!1ses!2sar!4v1758821083603!5m2!1ses!2sar"
                  title="Mapa desde Bariloche a Villa Los Coihues"
                />
            </div>
          </div>
        </motion.div>

        {/* Sección 2: Dentro de Villa Los Coihues */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-lake rounded-full flex items-center justify-center mr-4">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-display text-3xl font-bold text-forest">Villa Los Coihues</h3>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-xl text-forest mb-4">Usted está en Villa Los Coihues</h4>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-forest rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm font-bold">1</span>
                    </div>
                    <p className="text-slate-600">
                      Dejamos la ruta N° 82. Se recorren 300 mt de camino consolidado hasta el puente sobre el arroyo Gutiérrez, habiendo dejado atrás la hostería El Retorno.
                    </p>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-forest rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm font-bold">2</span>
                    </div>
                    <p className="text-slate-600">
                      Se continúa derecho tres cuadras, por calle 'Bosques Petrificados'. Se dobla a la derecha por calle 'Parque Nacional Arrayanes'. Sobre la izq., a 50 mt, está ubicada la Posada del Arcángel.
                    </p>
                  </div>
                </div>
                
                <div className="mt-6">
                  <h5 className="font-semibold text-lg text-forest mb-3">Servicios en Villa Los Coihues:</h5>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="flex items-center space-x-2">
                      <Utensils className="w-4 h-4 text-forest" />
                      <span className="text-slate-600">Restaurante</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <ShoppingCart className="w-4 h-4 text-forest" />
                      <span className="text-slate-600">Supermercado (sobre ruta N° 82)</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <ShoppingCart className="w-4 h-4 text-forest" />
                      <span className="text-slate-600">Maxi-Kiosco</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <ShoppingCart className="w-4 h-4 text-forest" />
                      <span className="text-slate-600">Lavandería</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Wifi className="w-4 h-4 text-forest" />
                      <span className="text-slate-600">Locutorios/Internet</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <MapIframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3003.7629705095574!2d-71.41494399999999!3d-41.1615232!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x961a7047a643debf%3A0x361ee0169af3c424!2zQ2FiYcOxYXMgQXJjw6FuZ2VsZXM!5e0!3m2!1ses!2sar!4v1758821147284!5m2!1ses!2sar"
                title="Mapa de Villa Los Coihues - Posada del Arcángel"
              />
            </div>
          </div>
        </motion.div>

        {/* Información de contacto y distancias */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
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
            <div className="w-12 h-12 bg-lake rounded-full flex items-center justify-center mx-auto mb-4">
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
            <div className="w-12 h-12 bg-gradient-to-br from-forest to-lake rounded-full flex items-center justify-center mx-auto mb-4">
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

          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <ArrowRight className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold text-lg text-forest mb-2">Coordenadas</h3>
            <p className="text-slate-600 text-sm">
              Lat: -41.2000°<br />
              Lon: -71.5000°<br />
              <span className="text-xs text-gray-500">Villa Los Coihues</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Location;