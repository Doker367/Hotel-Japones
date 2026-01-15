import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Inicio', href: '#hero' },
    { name: 'Experiencia', href: '#experience' },
    { name: 'Habitaciones', href: '#rooms' },
    { name: 'Servicios', href: '#services' },
    { name: 'Galería', href: '#gallery' },
    { name: 'Reservar', href: '#booking' },
    { name: 'Contacto', href: '#contact' }
  ];

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
          <a href="#hero" className="flex flex-col items-start group">
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
                className={`font-zen text-sm tracking-wider transition-all duration-300 
                          hover:text-gold-elegant relative group ${
                  isScrolled ? 'text-white-soft' : 'text-white-soft'
                }`}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold-elegant 
                               transition-all duration-300 group-hover:w-full"></span>
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
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block font-zen text-lg text-white-soft hover:text-gold-elegant 
                           transition-colors duration-300 tracking-wide"
                >
                  {item.name}
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
