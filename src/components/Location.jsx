import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation, Clock, Car, Footprints, Waves, UtensilsCrossed, Map } from 'lucide-react';
import MapIframe from './Iframe';
import OptimizedImage from '@/components/OptimizedImage';
import map from '../assets/imgs/maps/mapa_01.png';

// Maps Embed API permite controlar el zoom (el parámetro z no funciona en el embed estándar).
// Requiere VITE_GOOGLE_MAPS_EMBED_API_KEY en .env. La API es gratuita.
// Habilitar "Maps Embed API" en Google Cloud Console.
const MAP_EMBED_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_EMBED_API_KEY;
const MAP_PLACE = 'Cabañas+Arcángeles,+Villa+Los+Coihues,+Bariloche';
const MAP_ZOOM = 11; // Vista amplia: Bariloche, aeropuerto, Cerro Catedral (menor = más alejado)

const getMapSrc = () => {
  if (MAP_EMBED_API_KEY) {
    return `https://www.google.com/maps/embed/v1/place?key=${MAP_EMBED_API_KEY}&q=${MAP_PLACE}&zoom=${MAP_ZOOM}&language=es`;
  }
  // Fallback: embed estándar (el zoom no se puede controlar con parámetros)
  return 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3003.7629705095574!2d-71.41494399999999!3d-41.1615232!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x961a7047a643debf%3A0x361ee0169af3c424!2zQ2FiYcOxYXMgQXJjw6FuZ2VsZXM!5e0!3m2!1ses!2sar!4v1758821147284!5m2!1ses!2sar';
};

const Location = () => {
  return (
    <section id="location" className="py-20 bg-brand-beige-pale">
      <div className="w-full px-4 md:px-0">
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
          <p className="text-xl md:text-2xl text-slate-600 max-w-2xl mx-auto">
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
          <div className="bg-white rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg border border-gray-100 overflow-hidden">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6 lg:mb-8">
              <div className="w-12 h-12 bg-forest rounded-full flex items-center justify-center flex-shrink-0">
                <Car className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-display text-xl sm:text-2xl lg:text-3xl font-bold text-forest leading-tight">
                Parque Nacional Arrayanes 160, Villa Los Coihues, Bariloche
              </h3>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 lg:items-start">
                <div>
                  <div className="text-slate-600 space-y-4 text-lg leading-relaxed">
                      <p>
                        Saliendo desde Bariloche por <span className="font-semibold text-forest">Av. Bustillo</span> o <span className="font-semibold text-forest">Av. de los Pioneros</span>, se recorren aproximadamente <span className="font-semibold text-forest">8,5 km</span> hasta el cruce con la <span className="font-semibold text-forest">Ruta Provincial N.º 82</span>.
                      </p>
                      <p>
                        Al doblar allí hacia la izquierda, se toma dicha ruta y, luego de <span className="font-semibold text-forest">5 km</span>, se visualizará el supermercado <span className="font-semibold text-forest">“Todo”</span> Frente al mismo se encuentra el ingreso a <span className="font-semibold text-forest">Villa Los Coihues</span>.
                      </p>
                      <p>
                        Una vez ingresado, se recorren 300 metros de camino consolidado hasta cruzar el puente sobre el arroyo Gutiérrez. Desde allí, se continúa derecho tres cuadras por la calle Bosques Petrificados.
                      </p>
                      <p>
                        Luego, se dobla a la derecha en la calle Parque Nacional Arrayanes y, a 50 metros sobre la izquierda, se encuentran las <span className="font-semibold text-forest">Cabañas Arcángeles</span>.
                      </p>
                    </div>
                </div>
              
              <div className="w-full">
                <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto lg:min-h-[320px] rounded-xl overflow-hidden group">
                  <OptimizedImage
                    src={map}
                    alt="Ubicación de Cabañas Arcángeles en Villa Los Coihues"
                    aspectRatio="4/3"
                    className="absolute inset-0 w-full h-full object-contain transition-transform duration-300 ease-in-out group-hover:scale-110"
                  />
                </div>
              </div>
            </div>
          </div>
          <MapIframe 
            src={getMapSrc()}
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6"
        >
          <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-100">
            <div className="w-12 h-12 bg-forest rounded-full flex items-center justify-center mb-4">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold text-lg text-forest mb-3">Accesos principales</h3>
            <ul className="text-slate-600 text-sm space-y-1.5">
              <li>• Aeropuerto Internacional de Bariloche - 30 min</li>
              <li>•  Centro Cívico - 25 min</li>
              <li>• Cerro Catedral - 15 min</li>
              <li>• Cerro Otto - 20 min</li>
              <li>• Cerro Campanario - 20 min</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-100">
            <div className="w-12 h-12 bg-forest rounded-full flex items-center justify-center mb-4">
              <Footprints className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold text-lg text-forest mb-3">Senderos y miradores de la zona</h3>
            <ul className="text-slate-600 text-sm space-y-1.5">
              <li>• Cascada de los Duendes - a 5 min del sendero</li>
              <li>• Mirador del Lago Gutiérrez - a 5 min del sendero</li>
              <li>• Playa Muñoz - a 5 min del sendero</li>
              <li>• Refugio Frey - a 5 min del sendero</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-100">
            <div className="w-12 h-12 bg-brand-medium-blue rounded-full flex items-center justify-center mb-4">
              <Waves className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold text-lg text-forest mb-3">Lagos y playas</h3>
            <ul className="text-slate-600 text-sm space-y-1.5">
              <li>• Playa Lago Gutiérrez - 200 m</li>
              <li>• Playa Bonita (Lago Nahuel Huapi) - 10 min</li>
              <li>• Bahía Serena (Lago Nahuel Huapi) - 15 min</li>
              <li>• Playa del Viento (Lago Moreno) - 15 min</li>
              <li>• Lago Mascardi - 30 min</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-100">
            <div className="w-12 h-12 bg-brand-medium-blue rounded-full flex items-center justify-center mb-4">
              <UtensilsCrossed className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold text-lg text-forest mb-3">Gastronomía y experiencias</h3>
            <ul className="text-slate-600 text-sm space-y-1.5">
              <li>• Cervecería Kunstmann - 10 min</li>
              <li>• Cervecería Berlina - 15 min</li>
              <li>• Fábrica Cervecería Wesley - 20 min</li>
              <li>• Colonia Suiza - 30 min</li>
              <li>• Cervecería Patagonia - 35 min</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-100">
            <div className="w-12 h-12 bg-gradient-to-br from-brand-dark-green to-brand-medium-blue rounded-full flex items-center justify-center mb-4">
              <Map className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold text-lg text-forest mb-3">Actividades de día completo</h3>
            <ul className="text-slate-600 text-sm space-y-1.5">
              <li>• Circuito Chico (inicio del recorrido) - 25 min</li>
              <li>• Puerto Blest e Isla Victoria (excursión lacustre, salida desde Puerto Pañuelo) - 35 min</li>
              <li>• Cerro Tronador / Pampa Linda (inicio de camino de ripio) - 30 min</li>
              <li>• Villa La Angostura - 1 h 30 min</li>
              <li>• Villa Traful - 2 h</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Location;