import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.3 },
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] }
  };

  const contactInfo = [
    {
      icon: '📍',
      title: 'Ubicación',
      info: 'Monte Fuji, Prefectura de Yamanashi',
      detail: 'A 2 horas de Tokio'
    },
    {
      icon: '📧',
      title: 'Correo',
      info: 'info@hotelzen.jp',
      detail: 'Respuesta en 24 horas'
    },
    {
      icon: '📞',
      title: 'Teléfono',
      info: '+81 (0)3 1234 5678',
      detail: 'Lun - Dom, 8:00 - 22:00'
    }
  ];

  return (
    <section className="relative py-32 px-6 bg-dark-main overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div {...fadeInUp} className="text-center mb-20">
          <div className="text-6xl md:text-8xl text-gold-elegant/10 font-zen mb-4">道</div>
          <h2 className="section-title text-white-soft">Contacto y Ubicación</h2>
          <div className="w-24 h-px bg-gold-elegant mx-auto mb-6"></div>
          <p className="section-subtitle text-white-soft/70">
            Estamos aquí para atenderle. Contáctenos y descubra cómo podemos 
            hacer de su estancia una experiencia inolvidable.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Información de contacto */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-8"
          >
            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: index * 0.1 }}
                className="bg-graphite/50 backdrop-blur-sm p-8 border border-gold-elegant/20 
                         hover:border-gold-elegant/40 transition-all duration-700 relative"
              >
                {/* Esquinas decorativas */}
                <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-gold-elegant/50"></div>
                <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-gold-elegant/50"></div>
                
                <div className="flex items-start gap-6">
                  <div className="text-4xl filter drop-shadow-[0_0_10px_rgba(201,162,77,0.4)]">{item.icon}</div>
                  <div>
                    <h3 className="font-zen text-2xl text-white-soft mb-2 tracking-wide">
                      {item.title}
                    </h3>
                    <div className="w-12 h-px bg-gold-elegant/50 mb-3"></div>
                    <p className="font-modern text-lg text-white-soft/90 mb-1">
                      {item.info}
                    </p>
                    <p className="font-modern text-sm text-white-soft/60">
                      {item.detail}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Redes sociales */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.3 }}
              className="bg-graphite/50 backdrop-blur-sm p-8 border border-gold-elegant/20"
            >
              <h3 className="font-zen text-2xl text-white-soft mb-6 tracking-wide">
                Síguenos
              </h3>
              <div className="flex gap-6 font-modern text-white-soft/70 text-base">
                {['Instagram', 'Facebook', 'Twitter'].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="hover:text-gold-elegant transition-colors duration-300"
                  >
                    {social}
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Mapa */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative h-[600px] bg-graphite/30 overflow-hidden border border-gold-elegant/30"
          >
            {/* Placeholder para mapa */}
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <div className="text-center">
                <div className="text-6xl mb-4 filter drop-shadow-[0_0_15px_rgba(201,162,77,0.5)]">🗻</div>
                <p className="font-zen text-2xl text-white-soft mb-2">
                  Monte Fuji
                </p>
                <div className="w-16 h-px bg-gold-elegant mx-auto mb-4"></div>
                <p className="font-modern text-white-soft/70">
                  Ubicación estratégica cerca del símbolo de Japón
                </p>
              </div>
            </div>
            
            {/* Overlay de imagen de fondo */}
            <img
              src="https://images.unsplash.com/photo-1528360983277-13d401cdc186?q=80&w=1200"
              alt="Ubicación"
              className="w-full h-full object-cover opacity-20 brightness-50"
            />
          </motion.div>
        </div>

        {/* Llamada a la acción final */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mt-20 text-center"
        >
          <p className="font-zen text-2xl md:text-3xl text-white-soft mb-4 tracking-wide">
            ¿Listo para experimentar el verdadero Japón?
          </p>
          <div className="w-32 h-px bg-gold-elegant mx-auto mb-8"></div>
          <button className="btn-secondary">
            Reservar Ahora
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
