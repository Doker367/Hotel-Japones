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
    room: 'modern-zen',
    specialRequests: ''
  });
  
  const [step, setStep] = useState(1);
  const [errors, setErrors] = useState({});

  const roomTypes = [
    {
      id: 'modern-zen',
      name: 'Modern Zen Room',
      price: 280,
      description: 'Elegancia minimalista con vistas al jardín',
      amenities: ['50m²', 'Vista jardín', 'Onsen privado', 'King bed'],
      image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=800'
    },
    {
      id: 'tatami',
      name: 'Tatami Suite',
      price: 350,
      description: 'Suite tradicional japonesa con terraza privada',
      amenities: ['80m²', 'Terraza privada', 'Tatami room', 'Futon luxury'],
      image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=800'
    },
    {
      id: 'imperial',
      name: 'Imperial Suite',
      price: 650,
      description: 'Máximo lujo con servicio de mayordomo 24/7',
      amenities: ['150m²', 'Vista panorámica', 'Onsen & Spa', 'Mayordomo'],
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=800'
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateStep()) {
      console.log('Reserva:', formData);
      alert('¡Reserva enviada! Nos pondremos en contacto pronto.');
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        checkIn: '',
        checkOut: '',
        guests: '2',
        room: 'modern-zen',
        specialRequests: ''
      });
      setStep(1);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Clear error when user types
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };
  
  const validateStep = () => {
    const newErrors = {};
    
    if (step === 1) {
      if (!formData.checkIn) newErrors.checkIn = 'Seleccione fecha de llegada';
      if (!formData.checkOut) newErrors.checkOut = 'Seleccione fecha de salida';
      if (formData.checkIn && formData.checkOut && formData.checkIn >= formData.checkOut) {
        newErrors.checkOut = 'La fecha de salida debe ser posterior';
      }
    } else if (step === 2) {
      if (!formData.room) newErrors.room = 'Seleccione una habitación';
    } else if (step === 3) {
      if (!formData.name) newErrors.name = 'Ingrese su nombre';
      if (!formData.email) newErrors.email = 'Ingrese su correo';
      if (!formData.phone) newErrors.phone = 'Ingrese su teléfono';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const nextStep = () => {
    if (validateStep()) {
      setStep(step + 1);
    }
  };
  
  const prevStep = () => {
    setStep(step - 1);
  };
  
  const selectedRoom = roomTypes.find(r => r.id === formData.room);
  const nights = formData.checkIn && formData.checkOut 
    ? Math.ceil((new Date(formData.checkOut) - new Date(formData.checkIn)) / (1000 * 60 * 60 * 24))
    : 0;
  const totalPrice = nights > 0 && selectedRoom ? nights * selectedRoom.price : 0;

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.3 },
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] }
  };

  return (
    <section className="relative py-32 px-6 bg-dark-secondary overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div {...fadeInUp} className="text-center mb-20">
          <div className="text-6xl md:text-8xl text-gold-elegant/10 font-zen mb-4">予約</div>
          <h2 className="section-title text-white-soft">Reservaciones</h2>
          <div className="w-24 h-px bg-gold-elegant mx-auto mb-6"></div>
          <p className="section-subtitle text-white-soft/70">
            Su viaje hacia la tranquilidad comienza aquí
          </p>
        </motion.div>

        {/* Progress Steps */}
        <div className="flex justify-center items-center mb-12 gap-4">
          {[1, 2, 3].map((s) => (
            <React.Fragment key={s}>
              <div className="flex flex-col items-center">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center font-zen text-lg
                  transition-all duration-300 ${
                    s === step 
                      ? 'bg-gold-elegant text-dark-main scale-110' 
                      : s < step
                      ? 'bg-gold-elegant/50 text-white-soft'
                      : 'bg-graphite/50 text-white-soft/50 border border-gold-elegant/20'
                  }`}>
                  {s}
                </div>
                <span className={`mt-2 text-xs font-zen tracking-wide ${
                  s === step ? 'text-gold-elegant' : 'text-white-soft/50'
                }`}>
                  {s === 1 ? 'Fechas' : s === 2 ? 'Habitación' : 'Datos'}
                </span>
              </div>
              {s < 3 && (
                <div className={`w-16 h-px transition-all duration-300 ${
                  s < step ? 'bg-gold-elegant' : 'bg-gold-elegant/20'
                }`}></div>
              )}
            </React.Fragment>
          ))}
        </div>

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
            {/* Step 1: Fechas y huéspedes */}
            {step === 1 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                <h3 className="font-zen text-2xl text-white-soft mb-6 text-center tracking-wide">
                  Seleccione sus fechas
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="font-zen text-sm text-white-soft tracking-wider block mb-2">
                      Check-in
                    </label>
                    <input
                      type="date"
                      name="checkIn"
                      value={formData.checkIn}
                      onChange={handleChange}
                      min={new Date().toISOString().split('T')[0]}
                      className={`w-full px-4 py-3 bg-dark-main/80 border ${
                        errors.checkIn ? 'border-red-500' : 'border-gold-elegant/30'
                      } focus:border-gold-elegant focus:outline-none focus:ring-1 
                      focus:ring-gold-elegant transition-all duration-300 
                      font-modern text-base text-white-soft`}
                    />
                    {errors.checkIn && <p className="text-red-500 text-sm mt-1">{errors.checkIn}</p>}
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
                      min={formData.checkIn || new Date().toISOString().split('T')[0]}
                      className={`w-full px-4 py-3 bg-dark-main/80 border ${
                        errors.checkOut ? 'border-red-500' : 'border-gold-elegant/30'
                      } focus:border-gold-elegant focus:outline-none focus:ring-1 
                      focus:ring-gold-elegant transition-all duration-300 
                      font-modern text-base text-white-soft`}
                    />
                    {errors.checkOut && <p className="text-red-500 text-sm mt-1">{errors.checkOut}</p>}
                  </div>
                </div>

                <div>
                  <label className="font-zen text-sm text-white-soft tracking-wider block mb-2">
                    Número de Huéspedes
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
                    <option value="1">1 Huésped</option>
                    <option value="2">2 Huéspedes</option>
                    <option value="3">3 Huéspedes</option>
                    <option value="4">4 Huéspedes</option>
                    <option value="5">5+ Huéspedes</option>
                  </select>
                </div>
              </motion.div>
            )}

            {/* Step 2: Selección de habitación */}
            {step === 2 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                <h3 className="font-zen text-2xl text-white-soft mb-6 text-center tracking-wide">
                  Seleccione su habitación
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {roomTypes.map((room) => (
                    <div
                      key={room.id}
                      onClick={() => handleChange({ target: { name: 'room', value: room.id } })}
                      className={`cursor-pointer border-2 transition-all duration-300 overflow-hidden
                        ${formData.room === room.id 
                          ? 'border-gold-elegant shadow-lg shadow-gold-elegant/20' 
                          : 'border-gold-elegant/20 hover:border-gold-elegant/50'}`}
                    >
                      <div className="relative h-40 overflow-hidden">
                        <img 
                          src={room.image} 
                          alt={room.name}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                        <div className="absolute bottom-2 right-2 bg-gold-elegant text-dark-main px-3 py-1 font-zen text-sm">
                          ${room.price}/noche
                        </div>
                      </div>
                      <div className="p-4 bg-dark-main/60">
                        <h4 className="font-zen text-lg text-white-soft mb-2">{room.name}</h4>
                        <p className="font-modern text-sm text-white-soft/70 mb-3">{room.description}</p>
                        <div className="grid grid-cols-2 gap-2">
                          {room.amenities.map((amenity, idx) => (
                            <div key={idx} className="flex items-center gap-1">
                              <div className="w-1 h-1 bg-gold-elegant"></div>
                              <span className="font-modern text-xs text-white-soft/80">{amenity}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Step 3: Datos personales */}
            {step === 3 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                <h3 className="font-zen text-2xl text-white-soft mb-6 text-center tracking-wide">
                  Información de contacto
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="font-zen text-sm text-white-soft tracking-wider block mb-2">
                      Nombre Completo *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-dark-main/80 border ${
                        errors.name ? 'border-red-500' : 'border-gold-elegant/30'
                      } focus:border-gold-elegant focus:outline-none focus:ring-1 
                      focus:ring-gold-elegant transition-all duration-300 
                      font-modern text-base text-white-soft`}
                      placeholder="Ingrese su nombre"
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="font-zen text-sm text-white-soft tracking-wider block mb-2">
                      Correo Electrónico *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-dark-main/80 border ${
                        errors.email ? 'border-red-500' : 'border-gold-elegant/30'
                      } focus:border-gold-elegant focus:outline-none focus:ring-1 
                      focus:ring-gold-elegant transition-all duration-300 
                      font-modern text-base text-white-soft`}
                      placeholder="correo@ejemplo.com"
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                  </div>
                </div>

                <div>
                  <label className="font-zen text-sm text-white-soft tracking-wider block mb-2">
                    Teléfono *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-dark-main/80 border ${
                      errors.phone ? 'border-red-500' : 'border-gold-elegant/30'
                    } focus:border-gold-elegant focus:outline-none focus:ring-1 
                    focus:ring-gold-elegant transition-all duration-300 
                    font-modern text-base text-white-soft`}
                    placeholder="+52 123 456 7890"
                  />
                  {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                </div>

                <div>
                  <label className="font-zen text-sm text-white-soft tracking-wider block mb-2">
                    Solicitudes Especiales (Opcional)
                  </label>
                  <textarea
                    name="specialRequests"
                    value={formData.specialRequests}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-4 py-3 bg-dark-main/80 border border-gold-elegant/30 
                             focus:border-gold-elegant focus:outline-none focus:ring-1 
                             focus:ring-gold-elegant transition-all duration-300 
                             font-modern text-base text-white-soft resize-none"
                    placeholder="Ocasión especial, preferencias dietéticas, solicitudes específicas..."
                  ></textarea>
                </div>

                {/* Resumen de reserva */}
                {totalPrice > 0 && (
                  <div className="bg-dark-main/60 border border-gold-elegant/30 p-6 mt-8">
                    <h4 className="font-zen text-lg text-white-soft mb-4">Resumen de Reserva</h4>
                    <div className="space-y-2 font-modern text-white-soft/80">
                      <div className="flex justify-between">
                        <span>Habitación:</span>
                        <span className="text-white-soft">{selectedRoom.name}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Noches:</span>
                        <span className="text-white-soft">{nights}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Huéspedes:</span>
                        <span className="text-white-soft">{formData.guests}</span>
                      </div>
                      <div className="w-full h-px bg-gold-elegant/30 my-3"></div>
                      <div className="flex justify-between text-lg font-zen">
                        <span className="text-gold-elegant">Total:</span>
                        <span className="text-gold-elegant">${totalPrice} USD</span>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            )}

            {/* Navigation Buttons */}
            <div className="flex gap-4 pt-6">
              {step > 1 && (
                <motion.button
                  type="button"
                  onClick={prevStep}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 px-6 py-3 border border-gold-elegant/30 text-white-soft 
                           hover:border-gold-elegant hover:bg-gold-elegant/10 
                           transition-all duration-300 font-zen tracking-wide"
                >
                  Anterior
                </motion.button>
              )}
              
              {step < 3 ? (
                <motion.button
                  type="button"
                  onClick={nextStep}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 btn-secondary py-3"
                >
                  Siguiente
                </motion.button>
              ) : (
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 btn-secondary py-3"
                >
                  Confirmar Reserva
                </motion.button>
              )}
            </div>

            {step === 3 && (
              <p className="text-center font-modern text-sm text-white-soft/60 mt-4">
                Nuestro equipo se comunicará en menos de 24 horas para confirmar su reserva
              </p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Booking;
