import React, { useState, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoBlanco from '../assets/imgs/logo/texto/logo_texto_blancoAsset 30.svg';
import logoNegro from '../assets/imgs/logo/texto/logo_texto_negroAsset 31.svg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isGalleryPage = location.pathname === '/gallery';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = useCallback((sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMenuOpen(false);
  }, []);

  const navItems = [
    // { label: 'Home', id: 'hero' },
    { label: 'Cabañas', id: 'cabin-gallery' },
    { label: 'Ubicación', id: 'location' },
    { label: 'Contacto', id: 'contact' },
    { label: 'Galería', id: 'gallery', isRoute: true },
    { label: 'Servicios', id: 'services' },
    { label: 'Nosotros', id: 'about' }
  ];

  const navLinkClass = `${isGalleryPage || isScrolled ? 'text-brand-dark-green' : 'text-white'} font-display hover:text-brand-burnt-orange font-medium transition-colors duration-200 relative group`;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled || isGalleryPage
        ? 'backdrop-blur-md shadow-lg' 
        : 'bg-transparent'
    }`} style={{
      backgroundColor: isScrolled || isGalleryPage ? 'rgba(249, 243, 231, 0.95)' : 'transparent'
    }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex-shrink-0 flex flex-col items-center">
            {isGalleryPage ? (
              <Link to="/" className="transition-opacity duration-200 hover:opacity-80 hover:scale-110 transition-transform duration-200 inline-block">
                <img src={logoNegro} alt="Cabañas Arcángeles" className="h-12 md:h-14 w-auto mx-auto" />
              </Link>
            ) : (
              <button
                onClick={() => scrollToSection('hero')}
                className="transition-opacity duration-200 hover:opacity-80 hover:scale-110 transition-transform duration-200"
              >
                <img 
                  src={isScrolled ? logoNegro : logoBlanco} 
                  alt="Cabañas Arcángeles" 
                  className="h-10 md:h-14 w-auto mx-auto"
                />
              </button>
            )}
            <span className={`font-italic text-sm md:text-sm lg:text-xl max-w-2xl mx-auto leading-relaxed drop-shadow-2xl text-center mt-2 ${
              isScrolled ? 'text-brand-dark-green' : 'text-white'
            }`}>
              Viví Bariloche, dormí como en casa.
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              item.isRoute ? (
                <Link key={item.id} to="/gallery" className={navLinkClass}>
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-burnt-orange transition-all duration-200 group-hover:w-full"></span>
                </Link>
              ) : isGalleryPage ? (
                <Link key={item.id} to={`/#${item.id}`} className={navLinkClass}>
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-burnt-orange transition-all duration-200 group-hover:w-full"></span>
                </Link>
              ) : (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={navLinkClass}
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-burnt-orange transition-all duration-200 group-hover:w-full"></span>
                </button>
              )
            ))}
            <a
              href="https://www.instagram.com/arcangelesbariloche"
              target="_blank"
              rel="noopener noreferrer"
              className={`${navLinkClass} flex items-center`}
              aria-label="Instagram"
            >
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.379-.06-3.808v-.63c0-2.43.012-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
              </svg>
            </a>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-4">
            <a
              href="https://www.instagram.com/arcangelesbariloche"
              target="_blank"
              rel="noopener noreferrer"
              className={`${isGalleryPage || isScrolled ? 'text-brand-dark-green' : 'text-white'} hover:text-brand-burnt-orange transition-colors duration-200`}
              aria-label="Instagram"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.379-.06-3.808v-.63c0-2.43.012-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
              </svg>
            </a>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`${isGalleryPage || isScrolled ? 'text-brand-dark-green' : 'text-white'} hover:text-brand-burnt-orange focus:outline-none focus:text-brand-burnt-orange transition-colors duration-200`}
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-md rounded-lg shadow-lg mx-4 mb-4">
              {navItems.map((item) => (
                item.isRoute ? (
                  <Link
                    key={item.id}
                    to="/gallery"
                    onClick={() => setIsMenuOpen(false)}
                    className="block w-full text-left px-3 py-2 text-base font-medium text-brand-dark-green hover:text-brand-burnt-orange hover:bg-brand-beige-pale rounded-md transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                ) : isGalleryPage ? (
                  <Link
                    key={item.id}
                    to={`/#${item.id}`}
                    onClick={() => setIsMenuOpen(false)}
                    className="block w-full text-left px-3 py-2 text-base font-medium text-brand-dark-green hover:text-brand-burnt-orange hover:bg-brand-beige-pale rounded-md transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="block w-full text-left px-3 py-2 text-base font-medium text-brand-dark-green hover:text-brand-burnt-orange hover:bg-brand-beige-pale rounded-md transition-colors duration-200"
                  >
                    {item.label}
                  </button>
                )
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
