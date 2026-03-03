import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ShoppingBag, ChefHat, Calendar } from 'lucide-react';

const navLinks = [
  { name: 'Inicio', path: '/' },
  { name: 'Historia', path: '/history' },
  { name: 'Menú', path: '/menu' },
  { name: 'Reseñas', path: '/reviews' },
  { name: 'Galería', path: '/gallery' },
  { name: 'Contacto', path: '/contact' },
];

const chineseChars: Record<string, string> = {
  'Inicio': '首页',
  'Historia': '历史',
  'Menú': '菜单',
  'Reseñas': '评价',
  'Galería': '画廊',
  'Contacto': '联系',
};

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isReservationOpen, setIsReservationOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-black/95 backdrop-blur-xl shadow-2xl shadow-dragon-red/20 py-2'
            : 'bg-transparent py-4'
        }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3 group">
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-dragon-red to-gold rounded-full blur-lg opacity-0 group-hover:opacity-50 transition-opacity" />
                <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-dragon-red/20 to-gold/20 rounded-full border border-gold/30">
                  <span className="text-2xl">🐉</span>
                </div>
              </motion.div>
              <div className="hidden sm:block">
                <motion.h1
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="text-xl font-display font-bold text-gradient-gold"
                >
                  龙金
                </motion.h1>
                <p className="text-[10px] text-gold/70 tracking-[0.3em]">DRAGON DORADO</p>
              </div>
            </Link>

            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link, index) => (
                <Link key={link.path} to={link.path}>
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="relative px-4 py-2"
                  >
                    <motion.span
                      whileHover={{ y: -2 }}
                      className={`relative text-sm font-medium tracking-wide transition-colors flex items-center gap-2 ${
                        location.pathname === link.path
                          ? 'text-gold'
                          : 'text-cream/80 hover:text-gold'
                      }`}
                    >
                      {link.name}
                      <span className="text-[10px] text-gold/40">{chineseChars[link.name]}</span>
                      {location.pathname === link.path && (
                        <motion.div
                          layoutId="navbar-indicator"
                          className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-dragon-red to-gold rounded-full"
                        />
                      )}
                    </motion.span>
                  </motion.div>
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsReservationOpen(true)}
                className="hidden md:flex items-center gap-2 bg-gradient-to-r from-dragon-red to-dragon-red-dark px-5 py-2.5 rounded-full text-white text-sm font-medium shadow-lg shadow-dragon-red/30 hover:shadow-xl transition-shadow"
              >
                <Calendar size={16} />
                Reservar
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 flex items-center justify-center bg-white/5 hover:bg-white/10 rounded-full border border-gold/20 transition-colors"
              >
                <ShoppingBag size={18} className="text-gold" />
              </motion.button>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden w-10 h-10 flex items-center justify-center"
              >
                <motion.div
                  animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
                >
                  {isMobileMenuOpen ? (
                    <X className="text-cream" size={24} />
                  ) : (
                    <Menu className="text-cream" size={24} />
                  )}
                </motion.div>
              </button>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-black/98 backdrop-blur-xl border-t border-gold/10"
            >
              <div className="container-custom py-6 space-y-2">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      to={link.path}
                      className={`block py-3 px-4 rounded-lg text-lg font-medium transition-colors ${
                        location.pathname === link.path
                          ? 'bg-gradient-to-r from-dragon-red/20 to-transparent text-gold border-l-2 border-gold'
                          : 'text-cream/70 hover:bg-white/5 hover:text-cream'
                      }`}
                    >
                      {link.name}
                      <span className="ml-2 text-gold/50 text-sm">{chineseChars[link.name]}</span>
                    </Link>
                  </motion.div>
                ))}
                <motion.button
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  onClick={() => setIsReservationOpen(true)}
                  className="w-full mt-4 bg-gradient-to-r from-dragon-red to-dragon-red-dark py-3 rounded-lg text-white font-medium flex items-center justify-center gap-2"
                >
                  <Calendar size={18} />
                  Reservar Ahora
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      <AnimatePresence>
        {isReservationOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setIsReservationOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-charcoal rounded-2xl p-8 max-w-md w-full border border-gold/20"
            >
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-dragon-red to-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <ChefHat className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gold">Reservación</h3>
                <p className="text-cream/60 text-sm mt-2">Reserva tu mesa en Dragon Dorado</p>
              </div>
              <Link
                to="/contact"
                onClick={() => setIsReservationOpen(false)}
                className="block w-full bg-gradient-to-r from-dragon-red to-dragon-red-dark py-3 rounded-lg text-white font-medium text-center"
              >
                Ir a Reservar
              </Link>
              <button
                onClick={() => setIsReservationOpen(false)}
                className="w-full mt-3 py-2 text-cream/60 text-sm hover:text-cream transition-colors"
              >
                Cancelar
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
