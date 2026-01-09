import React from 'react';
import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-forest text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Información de contacto */}
          <div>
            <h3 className="font-display text-2xl font-bold mb-6">Posada del Arcángel</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <div>
                  <span className="block">Villa Los Coihues</span>
                  <span className="block">Lago Gutiérrez, Bariloche</span>
                  <span className="block">Río Negro, Argentina</span>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span>(0294) 444-XXXX</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <MessageCircle className="w-5 h-5 flex-shrink-0" />
                <span>+54 9 294 XXX-XXXX</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span>info@posadadelarcangel.com</span>
              </div>
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              <li><span className="hover:text-blue-200 cursor-pointer transition-colors">Nuestras Cabañas</span></li>
              <li><span className="hover:text-blue-200 cursor-pointer transition-colors">Servicios</span></li>
              <li><span className="hover:text-blue-200 cursor-pointer transition-colors">Ubicación</span></li>
              <li><span className="hover:text-blue-200 cursor-pointer transition-colors">Reservas</span></li>
              <li><span className="hover:text-blue-200 cursor-pointer transition-colors">Contacto</span></li>
            </ul>
          </div>

          {/* Información adicional */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Información</h4>
            <div className="space-y-3 text-sm">
              <p>Check-in: 15:00 hs</p>
              <p>Check-out: 11:00 hs</p>
              <p>Capacidad: 2-6 personas por cabaña</p>
              <p>Mascotas: Consultar disponibilidad</p>
              <p>Temporada alta: Dic - Mar</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 text-center">
          <p className="text-sm text-gray-300">
            © 2025 Posada del Arcángel. Todos los derechos reservados. 
            Cabañas en Bariloche - Villa Los Coihues.
            Made by <a href="https://www.posicionarte.online/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600">Posicionarte Online</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;