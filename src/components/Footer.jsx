import React from 'react';
import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react';
import logo from '../assets/imgs/logo/completo/logo_v1Asset 5.svg';

const Footer = () => {
  return (
    <footer className="bg-forest text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-5 gap-8">
          {/* Información de contacto */}
          <div>
            <img
              src={logo}
              alt="Logo Posada del Arcángel"
              className="w-56 mb-6 transition-transform duration-300 hover:scale-110"
              style={{ display: 'block' }}
            />
          </div>
            <div className="space-y-4">
            <h4 className="font-display text-[#b5bc5e] text-lg mb-6 text-center">Ubicación</h4>
              <a
                href="https://maps.app.goo.gl/nanBVxe5UNXXKAF76"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start space-x-3 hover:text-[#5e9fe1] transition-colors group"
              >
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0 text-[#cd6718]" />
                <div>
                  <span className="block">Villa Los Coihues</span>
                  <span className="block">Lago Gutiérrez, Bariloche</span>
                  <span className="block">Río Negro, Argentina</span>
                </div>
              </a>
            </div>
            <div className="space-y-4">
              <h4 className="font-display text-[#b5bc5e] text-lg mb-6 text-center">Contacto</h4>
            <div className="space-y-4">              
              <a
                href="tel:+54294444XXXX"
                className="flex items-center space-x-3 hover:text-[#5e9fe1] transition-colors"
              >
                <Phone className="w-5 h-5 flex-shrink-0 text-[#cd6718]" />
                <span>(0294) 444-XXXX</span>
              </a>
              
              <a
                href="https://wa.me/54294XXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 hover:text-[#5e9fe1] transition-colors"
              >
                <MessageCircle className="w-5 h-5 flex-shrink-0 text-[#cd6718]" />
                <span>+54 9 294 XXX-XXXX</span>
              </a>
              
              <a
                href="mailto:info@posadadelarcangel.com"
                className="flex items-center space-x-3 hover:text-[#5e9fe1] transition-colors"
              >
                <Mail className="w-5 h-5 flex-shrink-0 text-[#cd6718]" />
                <span>info@posadadelarcangel.com</span>
              </a>
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h4 className="font-display text-[#b5bc5e] text-lg mb-6 text-center">Enlaces Rápidos</h4>
            <ul className="space-y-3 text-center">
              <li>
                <a
                  href="#cabin-gallery"
                  className="hover:text-[#cd6718] cursor-pointer transition-colors"
                >
                  Cabañas
                </a>
              </li>
              <li>
                <a
                  href="#location"
                  className="hover:text-[#cd6718] cursor-pointer transition-colors"
                >
                  Ubicación
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-[#cd6718] cursor-pointer transition-colors"
                >
                  Contacto
                </a>
              </li>
              <li>
                <a
                  href="gallery"
                  className="hover:text-[#cd6718] cursor-pointer transition-colors"
                >
                  Galería
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-[#cd6718] cursor-pointer transition-colors"
                >
                  Servicios
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#cd6718] cursor-pointer transition-colors"
                >
                  Nosotros
                </a>
              </li>
            </ul>
          </div>

          {/* Información adicional */}
          <div>
            <h4 className="font-display text-[#b5bc5e] text-lg mb-6 text-center">Información</h4>
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
          <p className="text-sm text-[#f2e7ce]">
            © 2026 Cabañas Arcángeles. Todos los derechos reservados. 
            Made by <a href="https://www.posicionarte.online/" target="_blank" rel="noopener noreferrer" className="text-display text-[#b5bc5e] hover:text-[#cd6718]">Posicionarte Online</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;