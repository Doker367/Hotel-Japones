import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero = () => {
  const { scrollY } = useScroll();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Parallax muy sutil - solo en desktop
  const yImage = useTransform(scrollY, [0, 500], [0, isMobile ? 0 : 80]);
  const yText = useTransform(scrollY, [0, 500], [0, isMobile ? 0 : 120]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Imagen de fondo oscura con parallax */}
      <motion.div
        style={{ y: yImage }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80 z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=2094"
          alt="Hotel Japonés Premium"
          className="w-full h-full object-cover brightness-50"
        />
      </motion.div>

      {/* Marco dorado decorativo */}
      <div className="absolute inset-8 md:inset-16 border border-gold-elegant/20 pointer-events-none z-20">
        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-gold-elegant"></div>
        <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-gold-elegant"></div>
        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-gold-elegant"></div>
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-gold-elegant"></div>
      </div>

      {/* Contenido del Hero */}
      <motion.div
        style={{ y: yText, opacity }}
        className="relative z-30 h-full flex flex-col items-center justify-center text-center px-6"
      >
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Kanji grande de fondo */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                        text-[20rem] md:text-[30rem] font-zen text-gold-elegant/5 pointer-events-none select-none z-0">
            和
          </div>

          <div className="relative z-10">
            <h1 className="font-zen text-5xl md:text-7xl lg:text-8xl text-white-soft mb-6 tracking-[0.3em]">
              和の宿
            </h1>
            <div className="w-32 h-px bg-gold-elegant mx-auto mb-6"></div>
            <p className="font-zen text-xl md:text-2xl text-gold-elegant mb-4 tracking-[0.5em] uppercase">
              Wa no Yado
            </p>
            <p className="font-modern text-base md:text-lg text-white-soft/80 mb-12 max-w-2xl mx-auto leading-relaxed">
              La esencia del lujo japonés en la quietud de la noche
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row gap-6 relative z-10"
        >
          <button className="btn-secondary group relative overflow-hidden">
            <span className="relative z-10">Reservar Estancia</span>
          </button>
          <button className="btn-secondary group border-white-soft/30 hover:border-gold-elegant">
            <span className="relative z-10">Explorar Experiencias</span>
          </button>
        </motion.div>

        {/* Indicador de scroll dorado */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1.5, repeat: Infinity, repeatType: 'reverse' }}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex flex-col items-center">
            <span className="font-zen text-gold-elegant/70 text-xs mb-3 tracking-[0.3em]">SCROLL</span>
            <div className="w-px h-12 bg-gradient-to-b from-gold-elegant to-transparent"></div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
