import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    {
      url: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=1200',
      title: 'Entrada Principal',
      category: 'Arquitectura'
    },
    {
      url: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200',
      title: 'Habitación Zen',
      category: 'Habitaciones'
    },
    {
      url: 'https://images.unsplash.com/photo-1583417267826-aebc4d1542e1?q=80&w=1200',
      title: 'Onsen al Atardecer',
      category: 'Spa'
    },
    {
      url: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?q=80&w=1200',
      title: 'Jardín Zen',
      category: 'Jardines'
    },
    {
      url: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?q=80&w=1200',
      title: 'Kaiseki',
      category: 'Gastronomía'
    },
    {
      url: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1200',
      title: 'Suite Imperial',
      category: 'Habitaciones'
    }
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.3 },
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] }
  };

  return (
    <section className="relative py-32 px-6 bg-dark-main overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div {...fadeInUp} className="text-center mb-20">
          <div className="text-6xl md:text-8xl text-red-deep/20 font-zen mb-4">美</div>
          <h2 className="section-title text-white-soft">Galería</h2>
          <div className="w-24 h-px bg-gold-elegant mx-auto mb-6"></div>
          <p className="section-subtitle text-white-soft/70">
            Momentos capturados en el tiempo. Cada imagen cuenta una historia 
            de belleza, tradición y serenidad.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ 
                duration: 0.9, 
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1] 
              }}
              className="group relative h-80 overflow-hidden cursor-pointer"
              onClick={() => setSelectedImage(img)}
            >
              <img
                src={img.url}
                alt={img.title}
                className="w-full h-full object-cover transform group-hover:scale-110 
                           transition-transform duration-1000 brightness-75"
              />
              
              {/* Overlay con información */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 
                            to-transparent opacity-0 group-hover:opacity-100 
                            transition-opacity duration-500">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="font-zen text-xs text-gold-elegant tracking-widest uppercase block mb-2">
                    {img.category}
                  </span>
                  <div className="w-12 h-px bg-gold-elegant/70 mb-2"></div>
                  <h3 className="font-zen text-2xl text-white-soft tracking-wide">
                    {img.title}
                  </h3>
                </div>
              </div>

              {/* Marco dorado */}
              <div className="absolute inset-0 border-2 border-gold-elegant/0 group-hover:border-gold-elegant/40 
                            transition-all duration-500 pointer-events-none"></div>
              
              {/* Esquinas decorativas */}
              <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-gold-elegant/0 
                            group-hover:border-gold-elegant transition-all duration-500"></div>
              <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-gold-elegant/0 
                            group-hover:border-gold-elegant transition-all duration-500"></div>
              <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-gold-elegant/0 
                            group-hover:border-gold-elegant transition-all duration-500"></div>
              <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-gold-elegant/0 
                            group-hover:border-gold-elegant transition-all duration-500"></div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal de imagen ampliada */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/97 z-50 flex items-center justify-center p-6"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative max-w-5xl w-full border border-gold-elegant/30"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.url}
              alt={selectedImage.title}
              className="w-full h-auto max-h-[85vh] object-contain"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-8">
              <span className="font-zen text-xs text-gold-elegant tracking-widest uppercase block mb-2">
                {selectedImage.category}
              </span>
              <h3 className="font-zen text-3xl text-white-soft tracking-wide">
                {selectedImage.title}
              </h3>
            </div>
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white-soft hover:text-gold-elegant 
                       transition-colors duration-300 text-4xl font-light"
            >
              ×
            </button>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default Gallery;
