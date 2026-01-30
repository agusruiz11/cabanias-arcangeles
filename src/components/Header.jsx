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
          <div className="flex-shrink-0">
            {isGalleryPage ? (
              <Link to="/" className="transition-opacity duration-200 hover:opacity-80 hover:scale-110 transition-transform duration-200 inline-block">
                <img src={logoNegro} alt="Cabañas Arcángeles" className="h-10 md:h-12 w-auto" />
              </Link>
            ) : (
              <button
                onClick={() => scrollToSection('hero')}
                className="transition-opacity duration-200 hover:opacity-80 hover:scale-110 transition-transform duration-200"
              >
                <img 
                  src={isScrolled ? logoNegro : logoBlanco} 
                  alt="Cabañas Arcángeles" 
                  className="h-10 md:h-12 w-auto"
                />
              </button>
            )}
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
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
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
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
