import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Booking = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    guests: '2',
    room: 'modern-zen'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Reserva:', formData);
    alert('Gracias por su interés. Nos pondremos en contacto pronto.');
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.3 },
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] }
  };

  return (
    <section className="relative py-32 px-6 bg-dark-secondary overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <motion.div {...fadeInUp} className="text-center mb-20">
          <div className="text-6xl md:text-8xl text-gold-elegant/10 font-zen mb-4">予約</div>
          <h2 className="section-title text-white-soft">Reservaciones</h2>
          <div className="w-24 h-px bg-gold-elegant mx-auto mb-6"></div>
          <p className="section-subtitle text-white-soft/70">
            Su viaje hacia la tranquilidad comienza aquí. Complete el formulario 
            y nuestro equipo le atenderá personalmente.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="bg-graphite/50 backdrop-blur-sm p-10 md:p-14 border border-gold-elegant/30 relative"
        >
          {/* Esquinas decorativas doradas */}
          <div className="absolute top-3 left-3 w-10 h-10 border-t-2 border-l-2 border-gold-elegant"></div>
          <div className="absolute top-3 right-3 w-10 h-10 border-t-2 border-r-2 border-gold-elegant"></div>
          <div className="absolute bottom-3 left-3 w-10 h-10 border-b-2 border-l-2 border-gold-elegant"></div>
          <div className="absolute bottom-3 right-3 w-10 h-10 border-b-2 border-r-2 border-gold-elegant"></div>
          
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Datos personales */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="font-zen text-sm text-white-soft tracking-wider block mb-2">
                  Nombre Completo
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dark-main/80 border border-gold-elegant/30 
                           focus:border-gold-elegant focus:outline-none focus:ring-1 
                           focus:ring-gold-elegant transition-all duration-300 
                           font-modern text-base text-white-soft"
                  placeholder="Ingrese su nombre"
                />
              </div>

              <div>
                <label className="font-zen text-sm text-white-soft tracking-wider block mb-2">
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dark-main/80 border border-gold-elegant/30 
                           focus:border-gold-elegant focus:outline-none focus:ring-1 
                           focus:ring-gold-elegant transition-all duration-300 
                           font-modern text-base text-white-soft"
                  placeholder="correo@ejemplo.com"
                />
              </div>
            </div>

            <div>
              <label className="font-zen text-sm text-white-soft tracking-wider block mb-2">
                Teléfono
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-dark-main/80 border border-gold-elegant/30 
                         focus:border-gold-elegant focus:outline-none focus:ring-1 
                         focus:ring-gold-elegant transition-all duration-300 
                         font-modern text-base text-white-soft"
                placeholder="+52 123 456 7890"
              />
            </div>

            {/* Fechas y huéspedes */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="font-zen text-sm text-white-soft tracking-wider block mb-2">
                  Check-in
                </label>
                <input
                  type="date"
                  name="checkIn"
                  value={formData.checkIn}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dark-main/80 border border-gold-elegant/30 
                           focus:border-gold-elegant focus:outline-none focus:ring-1 
                           focus:ring-gold-elegant transition-all duration-300 
                           font-modern text-base text-white-soft"
                />
              </div>

              <div>
                <label className="font-zen text-sm text-white-soft tracking-wider block mb-2">
                  Check-out
                </label>
                <input
                  type="date"
                  name="checkOut"
                  value={formData.checkOut}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dark-main/80 border border-gold-elegant/30 
                           focus:border-gold-elegant focus:outline-none focus:ring-1 
                           focus:ring-gold-elegant transition-all duration-300 
                           font-modern text-base text-white-soft"
                />
              </div>

              <div>
                <label className="font-zen text-sm text-white-soft tracking-wider block mb-2">
                  Huéspedes
                </label>
                <select
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-dark-main/80 border border-gold-elegant/30 
                           focus:border-gold-elegant focus:outline-none focus:ring-1 
                           focus:ring-gold-elegant transition-all duration-300 
                           font-modern text-base text-white-soft"
                >
                  <option value="1">1 Persona</option>
                  <option value="2">2 Personas</option>
                  <option value="3">3 Personas</option>
                  <option value="4">4 Personas</option>
                </select>
              </div>
            </div>

            {/* Tipo de habitación */}
            <div>
              <label className="font-zen text-sm text-white-soft tracking-wider block mb-2">
                Tipo de Habitación
              </label>
              <select
                name="room"
                value={formData.room}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-dark-main/80 border border-gold-elegant/30 
                         focus:border-gold-elegant focus:outline-none focus:ring-1 
                         focus:ring-gold-elegant transition-all duration-300 
                         font-modern text-base text-white-soft"
              >
                <option value="modern-zen">Modern Zen Room - $280/noche</option>
                <option value="tatami">Tatami Suite - $350/noche</option>
                <option value="imperial">Imperial Suite - $650/noche</option>
              </select>
            </div>

            {/* Botón de envío */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full btn-secondary py-4 text-base"
            >
              Solicitar Reserva
            </motion.button>

            <p className="text-center font-modern text-sm text-white-soft/60 mt-6">
              Nuestro equipo se comunicará con usted en menos de 24 horas para confirmar su reserva.
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Booking;
