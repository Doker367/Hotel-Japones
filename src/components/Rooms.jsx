import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Rooms = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.3 },
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] }
  };

  const rooms = [
    {
      name: 'Tatami Suite',
      subtitle: '畳の間',
      description: 'Habitación tradicional con tatami auténtico, futones premium y vista al jardín zen.',
      image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=800',
      price: 'Desde $350/noche'
    },
    {
      name: 'Modern Zen Room',
      subtitle: '現代禅',
      description: 'Fusión perfecta entre diseño contemporáneo y esencia japonesa. Minimalismo en su máxima expresión.',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800',
      price: 'Desde $280/noche'
    },
    {
      name: 'Imperial Suite',
      subtitle: '帝国スイート',
      description: 'Nuestro refugio más exclusivo. Onsen privado, ceremonia del té y servicio personalizado.',
      image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=800',
      price: 'Desde $650/noche'
    }
  ];

  return (
    <section className="relative py-32 px-6 bg-dark-main overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div {...fadeInUp} className="text-center mb-20">
          <div className="text-6xl md:text-8xl text-red-deep/20 font-zen mb-4">室</div>
          <h2 className="section-title text-white-soft">Habitaciones y Suites</h2>
          <div className="w-24 h-px bg-gold-elegant mx-auto mb-6"></div>
          <p className="section-subtitle text-white-soft/70">
            Cada habitación es un santuario de calma. Diseñadas para honrar la tradición 
            mientras abrazan el confort contemporáneo.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ 
                duration: 1.2, 
                delay: index * 0.15,
                ease: [0.22, 1, 0.36, 1] 
              }}
              className="group card-hover"
            >
              <div className="bg-graphite border border-gold-elegant/20 overflow-hidden h-full flex flex-col
                            hover:border-gold-elegant/50 transition-all duration-700">
                {/* Imagen con overlay oscuro */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={room.image}
                    alt={room.name}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000
                             brightness-75"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute inset-0 border-2 border-gold-elegant/0 group-hover:border-gold-elegant/30 transition-all duration-700"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="font-zen text-2xl text-white-soft mb-1 tracking-wide">
                      {room.name}
                    </h3>
                    <p className="font-zen text-sm text-gold-elegant tracking-widest">
                      {room.subtitle}
                    </p>
                  </div>
                </div>

                {/* Contenido */}
                <div className="p-6 flex-grow flex flex-col bg-graphite/80">
                  <p className="font-modern text-white-soft/70 text-base leading-relaxed mb-6 flex-grow">
                    {room.description}
                  </p>
                  <div className="flex items-center justify-between border-t border-gold-elegant/20 pt-4">
                    <span className="font-zen text-lg text-white-soft tracking-wide">
                      {room.price}
                    </span>
                    <button className="font-zen text-sm text-gold-elegant hover:text-white-soft 
                                     transition-colors duration-300 tracking-wider group">
                      Ver más <span className="inline-block group-hover:translate-x-1 transition-transform">→</span>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mt-16"
        >
          <Link to="/habitaciones" className="btn-secondary inline-block">
            Ver todas las habitaciones
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Rooms;
