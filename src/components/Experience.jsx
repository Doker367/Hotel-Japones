import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.3 },
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] }
  };

  const experiences = [
    {
      title: 'Omotenashi',
      subtitle: '心のこもった おもてなし',
      description: 'La hospitalidad japonesa llevada a su máxima expresión. Cada gesto, cada detalle, pensado para su bienestar.',
      icon: '🏮'
    },
    {
      title: 'Jardín Zen',
      subtitle: '禅の庭',
      description: 'Contemple la belleza de nuestro jardín tradicional. Un espacio para la meditación y la conexión con la naturaleza.',
      icon: '🌿'
    },
    {
      title: 'Ceremonia del Té',
      subtitle: '茶道',
      description: 'Experimente la milenaria tradición del té japonés. Una ceremonia que conecta el cuerpo y el espíritu.',
      icon: '🍵'
    }
  ];

  return (
    <section className="relative py-32 px-6 bg-dark-secondary overflow-hidden">
      {/* Separador dorado superior */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-64 h-px bg-gradient-to-r from-transparent via-gold-elegant to-transparent"></div>
      
      <div className="max-w-7xl mx-auto">
        <motion.div {...fadeInUp} className="text-center mb-20">
          {/* Decoración kanji */}
          <div className="text-6xl md:text-8xl text-gold-elegant/10 font-zen mb-4">心</div>
          <h2 className="section-title text-white-soft">Experiencia Japonesa</h2>
          <div className="w-24 h-px bg-gold-elegant mx-auto mb-6"></div>
          <p className="section-subtitle text-white-soft/70">
            Sumérjase en la autenticidad de la cultura japonesa. 
            Cada momento está diseñado para honrar las tradiciones ancestrales.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ 
                duration: 1.2, 
                delay: index * 0.2,
                ease: [0.22, 1, 0.36, 1] 
              }}
              className="group"
            >
              <div className="bg-graphite/50 backdrop-blur-sm p-10 border border-gold-elegant/20 
                            card-hover h-full flex flex-col items-center text-center relative
                            hover:border-gold-elegant/40 transition-all duration-700">
                {/* Esquinas doradas decorativas */}
                <div className="absolute top-2 left-2 w-6 h-6 border-t-2 border-l-2 border-gold-elegant/50"></div>
                <div className="absolute top-2 right-2 w-6 h-6 border-t-2 border-r-2 border-gold-elegant/50"></div>
                <div className="absolute bottom-2 left-2 w-6 h-6 border-b-2 border-l-2 border-gold-elegant/50"></div>
                <div className="absolute bottom-2 right-2 w-6 h-6 border-b-2 border-r-2 border-gold-elegant/50"></div>
                
                <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-700
                              filter drop-shadow-[0_0_10px_rgba(201,162,77,0.3)]">
                  {exp.icon}
                </div>
                <h3 className="font-zen text-2xl md:text-3xl text-white-soft mb-2 tracking-wide">
                  {exp.title}
                </h3>
                <p className="font-zen text-sm text-gold-elegant mb-4 tracking-widest">
                  {exp.subtitle}
                </p>
                <div className="w-12 h-px bg-gold-elegant/50 mb-4"></div>
                <p className="font-modern text-base text-white-soft/70 leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Separador dorado inferior */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-64 h-px bg-gradient-to-r from-transparent via-gold-elegant to-transparent"></div>
    </section>
  );
};

export default Experience;
