import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-dark-main text-white-soft py-16 px-6 border-t border-gold-elegant/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Logo y descripción */}
          <div className="md:col-span-2">
            <div className="mb-6">
              <h3 className="font-zen text-3xl tracking-wider mb-2 text-gold-elegant">和の宿</h3>
              <p className="font-zen text-sm tracking-widest text-white-soft/70">WA NO YADO</p>
            </div>
            <p className="font-modern text-white-soft/80 leading-relaxed max-w-md">
              Un refugio donde la tradición japonesa se encuentra con el lujo contemporáneo. 
              Cada momento es una celebración del wabi-sabi y la belleza de lo imperfecto.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="w-10 h-10 rounded-full bg-graphite border border-gold-elegant/20 flex items-center justify-center hover:bg-gold-elegant hover:border-gold-elegant transition-all duration-300">
                <span className="text-white-soft text-xs">FB</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-graphite border border-gold-elegant/20 flex items-center justify-center hover:bg-gold-elegant hover:border-gold-elegant transition-all duration-300">
                <span className="text-white-soft text-xs">IG</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-graphite border border-gold-elegant/20 flex items-center justify-center hover:bg-gold-elegant hover:border-gold-elegant transition-all duration-300">
                <span className="text-white-soft text-xs">TW</span>
              </a>
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h4 className="font-zen text-lg tracking-wider mb-4 text-white-soft">Enlaces</h4>
            <div className="w-12 h-px bg-gold-elegant mb-4"></div>
            <ul className="space-y-2 font-modern text-white-soft/70">
              <li>
                <a href="#experience" className="hover:text-gold-elegant transition-colors duration-300">
                  Experiencia
                </a>
              </li>
              <li>
                <a href="#rooms" className="hover:text-gold-elegant transition-colors duration-300">
                  Habitaciones
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-gold-elegant transition-colors duration-300">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-gold-elegant transition-colors duration-300">
                  Galería
                </a>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="font-zen text-lg tracking-wider mb-4 text-white-soft">Contacto</h4>
            <div className="w-12 h-px bg-gold-elegant mb-4"></div>
            <ul className="space-y-2 font-modern text-white-soft/70 text-sm">
              <li>📍 Monte Fuji, Yamanashi</li>
              <li>📞 +81 (0)3 1234 5678</li>
              <li>✉️ info@hotelzen.jp</li>
            </ul>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="border-t border-gold-elegant/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-modern text-white-soft/50 text-sm">
              © {currentYear} Wa no Yado. Todos los derechos reservados.
            </p>
            <div className="flex gap-6 font-modern text-white-soft/60 text-sm">
              <a href="#" className="hover:text-gold-elegant transition-colors duration-300">
                Privacidad
              </a>
              <a href="#" className="hover:text-gold-elegant transition-colors duration-300">
                Términos
              </a>
              <a href="#" className="hover:text-gold-elegant transition-colors duration-300">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Patrón decorativo */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold-elegant to-transparent opacity-30"></div>
    </footer>
  );
};

export default Footer;
