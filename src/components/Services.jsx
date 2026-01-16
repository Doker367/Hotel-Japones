import React from 'react';
import { motion } from 'framer-motion';

const Services = ({ onShowAll }) => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.3 },
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] }
  };

  const serviceCategories = [
    {
      title: 'Atención & Hospitalidad',
      subtitle: 'おもてなし',
      description: 'Recepción 24/7, concierge de lujo, servicio de mayordomo y atención personalizada que anticipa cada necesidad.',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800'
    },
    {
      title: 'Gastronomía de Alto Nivel',
      subtitle: '美食',
      description: 'Restaurantes gourmet, chef estrella, rooftop bar, room service 24/7 y experiencias gastronómicas únicas.',
      image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?q=80&w=800'
    },
    {
      title: 'Wellness & Spa',
      subtitle: '癒し',
      description: 'Spa de lujo, tratamientos ancestrales, circuito de hidroterapia, gimnasio premium y experiencias de bienestar.',
      image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=800'
    },
    {
      title: 'Albercas & Experiencias',
      subtitle: 'リゾート',
      description: 'Alberca infinity, swim-up bar, cabañas privadas, deportes acuáticos y experiencias eco-lujo exclusivas.',
      image: 'https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?q=80&w=800'
    }
  ];

  return (
    <section className="relative py-32 px-6 bg-dark-secondary overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div {...fadeInUp} className="text-center mb-20">
          <div className="text-6xl md:text-8xl text-gold-elegant/10 font-zen mb-4">禅</div>
          <h2 className="section-title text-white-soft">Servicios Premium</h2>
          <div className="w-24 h-px bg-gold-elegant mx-auto mb-6"></div>
          <p className="section-subtitle text-white-soft/70">
            Experiencias diseñadas para nutrir su bienestar. Cada servicio es una 
            invitación a la contemplación y el cuidado personal.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {serviceCategories.map((service, index) => (
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
              className="group relative h-96 overflow-hidden card-hover"
            >
              {/* Imagen de fondo oscurecida */}
              <img
                src={service.image}
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover transform 
                           group-hover:scale-105 transition-transform duration-1000 brightness-50"
              />
              
              {/* Overlay con gradiente oscuro */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/40"></div>
              
              {/* Marco dorado */}
              <div className="absolute inset-4 border border-gold-elegant/20 group-hover:border-gold-elegant/50 
                            transition-all duration-700 pointer-events-none"></div>

              {/* Contenido */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.15 + 0.3 }}
                >
                  <h3 className="font-zen text-3xl md:text-4xl text-white-soft mb-2 tracking-wide">
                    {service.title}
                  </h3>
                  <p className="font-zen text-sm text-gold-elegant mb-4 tracking-widest">
                    {service.subtitle}
                  </p>
                  <div className="w-16 h-px bg-gold-elegant/70 mb-4"></div>
                  <p className="font-modern text-base text-white-soft/90 leading-relaxed max-w-lg">
                    {service.description}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Servicio personalizado destacado */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 bg-graphite/50 backdrop-blur-sm p-12 border border-gold-elegant/30 relative"
        >
          {/* Esquinas decorativas */}
          <div className="absolute top-3 left-3 w-8 h-8 border-t-2 border-l-2 border-gold-elegant"></div>
          <div className="absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2 border-gold-elegant"></div>
          <div className="absolute bottom-3 left-3 w-8 h-8 border-b-2 border-l-2 border-gold-elegant"></div>
          <div className="absolute bottom-3 right-3 w-8 h-8 border-b-2 border-r-2 border-gold-elegant"></div>
          
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="font-zen text-3xl md:text-4xl text-white-soft mb-6 tracking-wide">
              Servicio Personalizado
            </h3>
            <div className="w-20 h-px bg-gold-elegant mx-auto mb-6"></div>
            <p className="font-modern text-lg text-white-soft/80 leading-relaxed mb-8">
              Descubre todos nuestros servicios premium. Desde atención personalizada hasta 
              experiencias gastronómicas y de bienestar diseñadas para tu máximo confort.
            </p>
            <button onClick={onShowAll} className="btn-secondary">
              Ver Todos los Servicios
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
