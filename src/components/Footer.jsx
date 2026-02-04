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
              alt="Logo Cabañas Arcángeles"
              className="w-56 mb-6 mx-auto transition-transform duration-300 hover:scale-110"
              style={{ display: 'block' }}
            />
          </div>
            <div className="space-y-4">
            <h4 className="font-display text-[#b5bc5e] text-xl mb-6 text-center">Ubicación</h4>
              <a
                href="https://maps.app.goo.gl/nanBVxe5UNXXKAF76"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start space-x-3 hover:text-[#5e9fe1] transition-colors group"
              >
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0 text-[#cd6718]" />
                <div className="text-base">
                  <span className="block">Villa Los Coihues</span>
                  <span className="block">Lago Gutiérrez, Bariloche</span>
                  <span className="block">Río Negro, Argentina</span>
                </div>
              </a>
            </div>
            <div className="space-y-4">
              <h4 className="font-display text-[#b5bc5e] text-xl mb-6 text-center">Contacto</h4>
            <div className="space-y-4 text-base">              
              <a
                href="tel:+5491162092643"
                className="flex items-center space-x-3 hover:text-[#5e9fe1] transition-colors"
              >
                <Phone className="w-5 h-5 flex-shrink-0 text-[#cd6718]" />
                <span>+54 9 11 6209-2643</span>
              </a>
              
              <a
                href="https://wa.me/5491162092643"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 hover:text-[#5e9fe1] transition-colors"
              >
                <MessageCircle className="w-5 h-5 flex-shrink-0 text-[#cd6718]" />
                <span>+54 9 11 6209-2643</span>
              </a>
              
              <a
                href="mailto:info@cabañasarcangeles.com"
                className="flex items-center space-x-3 hover:text-[#5e9fe1] transition-colors"
              >
                <Mail className="w-5 h-5 flex-shrink-0 text-[#cd6718]" />
                <span>info@cabañasarcangeles.com</span>
              </a>
              <a
                href="https://www.instagram.com/arcangelesbariloche"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 hover:text-[#5e9fe1] transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="w-5 h-5 flex-shrink-0 text-[#cd6718]"
                >
                  <rect x="2" y="2" width="20" height="20" rx="6" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="17" cy="7" r="1.2" fill="currentColor"/>
                </svg>
                <span>@arcangelesbariloche</span>
              </a>
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h4 className="font-display text-[#b5bc5e] text-xl mb-6 text-center">Enlaces Rápidos</h4>
            <ul className="space-y-3 text-center text-base">
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
            <h4 className="font-display text-[#b5bc5e] text-xl mb-6 text-center">Información</h4>
            <div className="space-y-3 text-base">
              <p>Check-in: 15:00 hs</p>
              <p>Check-out: 11:00 hs</p>
              <p>Capacidad: 2-8 personas por cabaña</p>
              <p>Mascotas: no permitidas</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 text-center">
          <p className="text-base text-[#f2e7ce]">
            © 2026 Cabañas Arcángeles. Todos los derechos reservados. 
            Made by <a href="https://posicionarte.online/" target="_blank" rel="noopener noreferrer" className="text-display text-[#b5bc5e] hover:text-[#cd6718]">Posicionarte Online</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;