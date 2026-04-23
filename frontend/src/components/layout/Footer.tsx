import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal/90 pt-16 pb-8 relative overflow-hidden">
      <div className="absolute inset-0 pattern-overlay opacity-30" />
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="text-4xl">🐉</span>
              <div>
                <h3 className="text-2xl font-display font-bold text-gradient-gold">
                  龙金
                </h3>
                <p className="text-xs text-gold/70 tracking-widest">Dragon Dorado</p>
              </div>
            </div>
            <p className="text-cream/70 text-sm leading-relaxed">
              Auténtica cocina china con más de 30 años de tradición. 
              Donde cada plato cuenta una historia milenaria.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-gold font-medium mb-6">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              {['Inicio', 'Historia', 'Menú', 'Reseñas', 'Galería', 'Contacto'].map((item) => (
                <li key={item}>
                  <Link
                    to={item === 'Inicio' ? '/' : `/${item.toLowerCase()}`}
                    className="text-cream/70 hover:text-gold transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-gold font-medium mb-6">Contacto</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-cream/70 text-sm">
                <MapPin className="text-gold mt-0.5 flex-shrink-0" size={18} />
                <span>Calle de la Seda 123<br />Ciudad China, CP 12345</span>
              </li>
              <li className="flex items-center gap-3 text-cream/70 text-sm">
                <Phone className="text-gold flex-shrink-0" size={18} />
                <span>+1 234 567 890</span>
              </li>
              <li className="flex items-center gap-3 text-cream/70 text-sm">
                <Mail className="text-gold flex-shrink-0" size={18} />
                <span>info@dragondorado.com</span>
              </li>
              <li className="flex items-center gap-3 text-cream/70 text-sm">
                <Clock className="text-gold flex-shrink-0" size={18} />
                <span>Lun-Dom: 11:00 - 23:00</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="text-gold font-medium mb-6">Síguenos</h4>
            <p className="text-cream/70 text-sm mb-4">
              Mantente al día con nuestras promociones y eventos especiales.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold hover:bg-gold hover:text-black transition-colors"
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="border-t border-gold/20 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-cream/50 text-sm text-center md:text-left">
              © {currentYear} Dragon Dorado. Todos los derechos reservados.
            </p>
            <div className="flex items-center gap-2 text-gold/50 text-sm">
              <span>Hecho con</span>
              <span className="text-dragon-red">❤</span>
              <span>y tradición china</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
