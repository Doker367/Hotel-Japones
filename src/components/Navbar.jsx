import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Detectar sección activa
      const sections = ['hero', 'experience', 'rooms', 'services', 'gallery', 'booking', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Inicio', href: '#hero', id: 'hero' },
    { name: 'Experiencia', href: '#experience', id: 'experience' },
    { name: 'Habitaciones', href: '#rooms', id: 'rooms' },
    { name: 'Servicios', href: '#services', id: 'services' },
    { name: 'Galería', href: '#gallery', id: 'gallery' },
    { name: 'Reservar', href: '#booking', id: 'booking' },
    { name: 'Contacto', href: '#contact', id: 'contact' }
  ];

  const smoothScrollTo = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-dark-main/95 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.5)] border-b border-gold-elegant/20 py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a 
            href="#hero" 
            onClick={(e) => smoothScrollTo(e, 'hero')}
            className="flex flex-col items-start group"
          >
            <span
              className={`font-zen text-3xl tracking-wider transition-colors duration-300 ${
                isScrolled ? 'text-white-soft' : 'text-white-soft'
              }`}
            >
              和の宿
            </span>
            <span
              className={`font-zen text-xs tracking-widest transition-colors duration-300 ${
                isScrolled ? 'text-gold-elegant' : 'text-gold-elegant/80'
              }`}
            >
              WA NO YADO
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => smoothScrollTo(e, item.id)}
                className={`font-zen text-sm tracking-wider transition-all duration-300 
                          hover:text-gold-elegant relative group ${
                  activeSection === item.id 
                    ? 'text-gold-elegant' 
                    : isScrolled ? 'text-white-soft' : 'text-white-soft'
                }`}
              >
                {item.name}
                <span className={`absolute -bottom-1 left-0 h-px bg-gold-elegant 
                               transition-all duration-300 ${
                  activeSection === item.id ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 transition-colors duration-300 ${
              isScrolled ? 'text-white-soft' : 'text-white-soft'
            }`}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-dark-main/98 backdrop-blur-md border-t border-gold-elegant/20 mt-4"
          >
            <div className="px-6 py-8 space-y-4">
              {menuItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={(e) => smoothScrollTo(e, item.id)}
                  className={`block font-zen text-lg transition-colors duration-300 tracking-wide ${
                    activeSection === item.id 
                      ? 'text-gold-elegant' 
                      : 'text-white-soft hover:text-gold-elegant'
                  }`}
                >
                  {item.name}
                  {activeSection === item.id && (
                    <span className="inline-block ml-2 text-gold-elegant">•</span>
                  )}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
