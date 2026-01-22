import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Rooms = ({ onShowAll }) => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.3 },
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] }
  };

  const roomCategories = [
    {
      name: 'Habitaciones Premium & Suites de Lujo',
      subtitle: '贅沢な客室',
      description: 'Desde Deluxe Premium hasta Wellness Suite. 6 tipos de habitaciones diseñadas para máximo confort.',
      image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=800',
      count: '6 tipos de habitaciones'
    },
    {
      name: 'Suites Exclusivas & Experiencias Premium',
      subtitle: '特別スイート',
      description: 'Honeymoon, Swim-Up, Presidential y Royal Suite. Experiencias únicas y memorables.',
      image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=800',
      count: '4 suites exclusivas'
    },
    {
      name: 'Ultra Lujo / Ediciones Especiales',
      subtitle: '最高級',
      description: 'Penthouse, Villas Privadas y Signature Suites. El máximo nivel de exclusividad.',
      image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=800',
      count: '3 opciones ultra premium'
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {roomCategories.map((category, index) => (
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
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000
                             brightness-75"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                  <div className="absolute inset-0 border-2 border-gold-elegant/0 group-hover:border-gold-elegant/30 transition-all duration-700"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="font-zen text-xs text-gold-elegant/80 tracking-widest mb-2">
                      {category.subtitle}
                    </p>
                    <h3 className="font-zen text-xl text-white-soft mb-2 tracking-wide leading-tight">
                      {category.name}
                    </h3>
                    <div className="w-12 h-px bg-gold-elegant/50"></div>
                  </div>
                </div>

                {/* Contenido */}
                <div className="p-6 flex-grow flex flex-col bg-graphite/80">
                  <p className="font-modern text-white-soft/70 text-base leading-relaxed mb-4 flex-grow">
                    {category.description}
                  </p>
                  <div className="flex items-center justify-between border-t border-gold-elegant/20 pt-4">
                    <span className="font-zen text-sm text-gold-elegant/80 tracking-wide">
                      {category.count}
                    </span>
                    <button onClick={onShowAll} className="font-zen text-sm text-gold-elegant hover:text-white-soft 
                                     transition-colors duration-300 tracking-wider group">
                      Explorar <span className="inline-block group-hover:translate-x-1 transition-transform">→</span>
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
