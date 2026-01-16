import React, { useState } from 'react';
import { motion } from 'framer-motion';

const BookingSystem = () => {
  const [step, setStep] = useState(1); // 1: Selección de habitación, 2: Detalles, 3: Pago
  const [bookingData, setBookingData] = useState({
    selectedRoom: null,
    numberOfRooms: 1,
    adults: 2,
    children: 0,
    checkIn: '',
    checkOut: '',
    specialRequests: '',
    // Datos de contacto
    name: '',
    email: '',
    phone: '',
    // Datos de pago
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: ''
  });

  const rooms = [
    {
      id: 'deluxe',
      name: 'Deluxe Premium Room',
      price: 350,
      image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=800',
      capacity: 2,
      description: 'Habitación premium con vistas privilegiadas'
    },
    {
      id: 'executive',
      name: 'Executive Room',
      price: 420,
      image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=800',
      capacity: 2,
      description: 'Acceso a Executive Lounge y servicios premium'
    },
    {
      id: 'junior-suite',
      name: 'Junior Suite',
      price: 500,
      image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=800',
      capacity: 3,
      description: 'Suite con espacios abiertos y sala de estar'
    },
    {
      id: 'luxury-suite',
      name: 'Luxury Suite',
      price: 650,
      image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=800',
      capacity: 3,
      description: 'Suite de lujo con dormitorio separado'
    },
    {
      id: 'honeymoon',
      name: 'Honeymoon Suite',
      price: 900,
      image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=800',
      capacity: 2,
      description: 'Suite romántica con jacuzzi privado'
    },
    {
      id: 'presidential',
      name: 'Presidential Suite',
      price: 2500,
      image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=800',
      capacity: 4,
      description: 'La suite más exclusiva del hotel'
    }
  ];

  const handleRoomSelect = (room) => {
    setBookingData({ ...bookingData, selectedRoom: room });
    setStep(2);
  };

  const calculateTotal = () => {
    if (!bookingData.selectedRoom || !bookingData.checkIn || !bookingData.checkOut) return 0;
    const checkIn = new Date(bookingData.checkIn);
    const checkOut = new Date(bookingData.checkOut);
    const nights = Math.ceil((checkOut - checkIn) / (1000 * 60 * 60 * 24));
    return bookingData.selectedRoom.price * bookingData.numberOfRooms * nights;
  };

  const calculateNights = () => {
    if (!bookingData.checkIn || !bookingData.checkOut) return 0;
    const checkIn = new Date(bookingData.checkIn);
    const checkOut = new Date(bookingData.checkOut);
    return Math.ceil((checkOut - checkIn) / (1000 * 60 * 60 * 24));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Reserva completa:', bookingData);
    alert('¡Reserva procesada exitosamente!Recibirá un correo de confirmación.');
    // Aquí integrarías con tu backend/pasarela de pago
  };

  return (
    <section className="relative py-32 px-6 bg-dark-main overflow-hidden">
      {/* Efectos parallax de fondo */}
      <motion.div 
        className="absolute top-20 right-10 text-[15rem] font-zen text-gold-elegant/5 pointer-events-none select-none"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
      >
        予約
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-zen text-5xl md:text-6xl text-white-soft mb-6 tracking-wide">
            Reserva Tu Estancia
          </h2>
          <div className="w-24 h-px bg-gold-elegant mx-auto mb-8"></div>
        </motion.div>

        {/* Progress Steps */}
        <div className="flex justify-center mb-12">
          <div className="flex items-center space-x-4">
            {[1, 2, 3].map((s) => (
              <React.Fragment key={s}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-zen transition-all duration-300 ${
                  step >= s ? 'bg-gold-elegant text-dark-main' : 'bg-graphite text-white-soft/50'
                }`}>
                  {s}
                </div>
                {s < 3 && <div className={`w-16 h-px ${step > s ? 'bg-gold-elegant' : 'bg-graphite'}`}></div>}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Step 1: Selección de Habitación */}
        {step === 1 && (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="font-zen text-3xl text-gold-elegant text-center mb-12">
              Selecciona Tu Habitación
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {rooms.map((room, index) => (
                <motion.div
                  key={room.id}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  onClick={() => handleRoomSelect(room)}
                  className="group relative bg-graphite border border-gold-elegant/20 hover:border-gold-elegant/50 
                           transition-all duration-500 overflow-hidden cursor-pointer hover:scale-105"
                >
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={room.image}
                      alt={room.name}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000 brightness-75"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h4 className="font-zen text-xl text-white-soft mb-2">{room.name}</h4>
                      <p className="font-modern text-sm text-white-soft/70">{room.description}</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-4">
                      <span className="font-zen text-2xl text-gold-elegant">${room.price}</span>
                      <span className="font-modern text-sm text-white-soft/60">por noche</span>
                    </div>
                    <div className="text-sm text-white-soft/70 mb-4">
                      Capacidad: {room.capacity} personas
                    </div>
                    <button className="w-full py-3 bg-gold-elegant text-dark-main font-zen tracking-wider
                                     hover:bg-gold-premium transition-all duration-300">
                      Seleccionar
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Step 2: Detalles de Reserva */}
        {step === 2 && bookingData.selectedRoom && (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-graphite/50 border border-gold-elegant/20 p-8 mb-8">
              <div className="flex items-center gap-6 mb-6">
                <img 
                  src={bookingData.selectedRoom.image} 
                  alt={bookingData.selectedRoom.name}
                  className="w-32 h-32 object-cover"
                />
                <div>
                  <h3 className="font-zen text-2xl text-gold-elegant mb-2">
                    {bookingData.selectedRoom.name}
                  </h3>
                  <p className="text-white-soft/70">${bookingData.selectedRoom.price} por noche</p>
                  <button 
                    onClick={() => setStep(1)}
                    className="text-gold-elegant text-sm mt-2 hover:text-white-soft transition-colors"
                  >
                    Cambiar habitación
                  </button>
                </div>
              </div>
            </div>

            <form onSubmit={(e) => { e.preventDefault(); setStep(3); }} className="space-y-8">
              {/* Fechas */}
              <div className="bg-graphite/50 border border-gold-elegant/20 p-8">
                <h4 className="font-zen text-xl text-white-soft mb-6">Fechas de Estancia</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white-soft/70 mb-2 font-modern">Check-in</label>
                    <input
                      type="date"
                      required
                      value={bookingData.checkIn}
                      onChange={(e) => setBookingData({...bookingData, checkIn: e.target.value})}
                      className="w-full bg-dark-main border border-gold-elegant/30 px-4 py-3 text-white-soft
                               focus:border-gold-elegant outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-white-soft/70 mb-2 font-modern">Check-out</label>
                    <input
                      type="date"
                      required
                      value={bookingData.checkOut}
                      onChange={(e) => setBookingData({...bookingData, checkOut: e.target.value})}
                      className="w-full bg-dark-main border border-gold-elegant/30 px-4 py-3 text-white-soft
                               focus:border-gold-elegant outline-none transition-colors"
                    />
                  </div>
                </div>
                {calculateNights() > 0 && (
                  <p className="text-gold-elegant mt-4 font-zen">
                    {calculateNights()} noche{calculateNights() > 1 ? 's' : ''}
                  </p>
                )}
              </div>

              {/* Huéspedes y Habitaciones */}
              <div className="bg-graphite/50 border border-gold-elegant/20 p-8">
                <h4 className="font-zen text-xl text-white-soft mb-6">Huéspedes</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-white-soft/70 mb-2 font-modern">Número de Habitaciones</label>
                    <input
                      type="number"
                      min="1"
                      max="10"
                      required
                      value={bookingData.numberOfRooms}
                      onChange={(e) => setBookingData({...bookingData, numberOfRooms: parseInt(e.target.value)})}
                      className="w-full bg-dark-main border border-gold-elegant/30 px-4 py-3 text-white-soft
                               focus:border-gold-elegant outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-white-soft/70 mb-2 font-modern">Adultos</label>
                    <input
                      type="number"
                      min="1"
                      max="10"
                      required
                      value={bookingData.adults}
                      onChange={(e) => setBookingData({...bookingData, adults: parseInt(e.target.value)})}
                      className="w-full bg-dark-main border border-gold-elegant/30 px-4 py-3 text-white-soft
                               focus:border-gold-elegant outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-white-soft/70 mb-2 font-modern">Niños</label>
                    <input
                      type="number"
                      min="0"
                      max="10"
                      value={bookingData.children}
                      onChange={(e) => setBookingData({...bookingData, children: parseInt(e.target.value)})}
                      className="w-full bg-dark-main border border-gold-elegant/30 px-4 py-3 text-white-soft
                               focus:border-gold-elegant outline-none transition-colors"
                    />
                  </div>
                </div>
              </div>

              {/* Datos de Contacto */}
              <div className="bg-graphite/50 border border-gold-elegant/20 p-8">
                <h4 className="font-zen text-xl text-white-soft mb-6">Información de Contacto</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="md:col-span-2">
                    <label className="block text-white-soft/70 mb-2 font-modern">Nombre Completo</label>
                    <input
                      type="text"
                      required
                      value={bookingData.name}
                      onChange={(e) => setBookingData({...bookingData, name: e.target.value})}
                      className="w-full bg-dark-main border border-gold-elegant/30 px-4 py-3 text-white-soft
                               focus:border-gold-elegant outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-white-soft/70 mb-2 font-modern">Email</label>
                    <input
                      type="email"
                      required
                      value={bookingData.email}
                      onChange={(e) => setBookingData({...bookingData, email: e.target.value})}
                      className="w-full bg-dark-main border border-gold-elegant/30 px-4 py-3 text-white-soft
                               focus:border-gold-elegant outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-white-soft/70 mb-2 font-modern">Teléfono</label>
                    <input
                      type="tel"
                      required
                      value={bookingData.phone}
                      onChange={(e) => setBookingData({...bookingData, phone: e.target.value})}
                      className="w-full bg-dark-main border border-gold-elegant/30 px-4 py-3 text-white-soft
                               focus:border-gold-elegant outline-none transition-colors"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-white-soft/70 mb-2 font-modern">Solicitudes Especiales (Opcional)</label>
                    <textarea
                      rows="3"
                      value={bookingData.specialRequests}
                      onChange={(e) => setBookingData({...bookingData, specialRequests: e.target.value})}
                      className="w-full bg-dark-main border border-gold-elegant/30 px-4 py-3 text-white-soft
                               focus:border-gold-elegant outline-none transition-colors resize-none"
                    ></textarea>
                  </div>
                </div>
              </div>

              {/* Resumen */}
              {calculateTotal() > 0 && (
                <div className="bg-gradient-to-r from-gold-elegant/10 to-gold-elegant/5 border border-gold-elegant/30 p-8">
                  <h4 className="font-zen text-2xl text-gold-elegant mb-4">Resumen de Reserva</h4>
                  <div className="space-y-2 text-white-soft/80 mb-4">
                    <div className="flex justify-between">
                      <span>{bookingData.selectedRoom.name}</span>
                      <span>${bookingData.selectedRoom.price}/noche</span>
                    </div>
                    <div className="flex justify-between">
                      <span>{calculateNights()} noches × {bookingData.numberOfRooms} habitación(es)</span>
                      <span>${bookingData.selectedRoom.price * calculateNights() * bookingData.numberOfRooms}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Huéspedes</span>
                      <span>{bookingData.adults + bookingData.children} persona(s)</span>
                    </div>
                  </div>
                  <div className="border-t border-gold-elegant/30 pt-4 flex justify-between items-center">
                    <span className="font-zen text-2xl text-white-soft">Total</span>
                    <span className="font-zen text-3xl text-gold-elegant">${calculateTotal()}</span>
                  </div>
                </div>
              )}

              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="flex-1 py-4 bg-transparent border border-gold-elegant/40 text-white-soft font-zen
                           tracking-wider hover:bg-gold-elegant/10 transition-all duration-300"
                >
                  Volver
                </button>
                <button
                  type="submit"
                  disabled={!bookingData.checkIn || !bookingData.checkOut}
                  className="flex-1 py-4 bg-gold-elegant text-dark-main font-zen tracking-wider
                           hover:bg-gold-premium transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Continuar al Pago
                </button>
              </div>
            </form>
          </motion.div>
        )}

        {/* Step 3: Pago */}
        {step === 3 && (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="bg-graphite/50 border border-gold-elegant/20 p-8">
                <h4 className="font-zen text-xl text-white-soft mb-6">Información de Pago</h4>
                <div className="space-y-6">
                  <div>
                    <label className="block text-white-soft/70 mb-2 font-modern">Número de Tarjeta</label>
                    <input
                      type="text"
                      required
                      placeholder="1234 5678 9012 3456"
                      maxLength="19"
                      value={bookingData.cardNumber}
                      onChange={(e) => setBookingData({...bookingData, cardNumber: e.target.value})}
                      className="w-full bg-dark-main border border-gold-elegant/30 px-4 py-3 text-white-soft
                               focus:border-gold-elegant outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-white-soft/70 mb-2 font-modern">Nombre en la Tarjeta</label>
                    <input
                      type="text"
                      required
                      value={bookingData.cardName}
                      onChange={(e) => setBookingData({...bookingData, cardName: e.target.value})}
                      className="w-full bg-dark-main border border-gold-elegant/30 px-4 py-3 text-white-soft
                               focus:border-gold-elegant outline-none transition-colors"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white-soft/70 mb-2 font-modern">Fecha de Expiración</label>
                      <input
                        type="text"
                        required
                        placeholder="MM/AA"
                        maxLength="5"
                        value={bookingData.expiryDate}
                        onChange={(e) => setBookingData({...bookingData, expiryDate: e.target.value})}
                        className="w-full bg-dark-main border border-gold-elegant/30 px-4 py-3 text-white-soft
                                 focus:border-gold-elegant outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-white-soft/70 mb-2 font-modern">CVV</label>
                      <input
                        type="text"
                        required
                        placeholder="123"
                        maxLength="4"
                        value={bookingData.cvv}
                        onChange={(e) => setBookingData({...bookingData, cvv: e.target.value})}
                        className="w-full bg-dark-main border border-gold-elegant/30 px-4 py-3 text-white-soft
                                 focus:border-gold-elegant outline-none transition-colors"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Resumen Final */}
              <div className="bg-gradient-to-r from-gold-elegant/10 to-gold-elegant/5 border border-gold-elegant/30 p-8">
                <h4 className="font-zen text-2xl text-gold-elegant mb-4">Total a Pagar</h4>
                <div className="text-white-soft/80 space-y-2 mb-4">
                  <p>{bookingData.selectedRoom.name}</p>
                  <p>{calculateNights()} noches × {bookingData.numberOfRooms} habitación(es)</p>
                  <p>Del {bookingData.checkIn} al {bookingData.checkOut}</p>
                </div>
                <div className="text-4xl font-zen text-gold-elegant">
                  ${calculateTotal()}
                </div>
              </div>

              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="flex-1 py-4 bg-transparent border border-gold-elegant/40 text-white-soft font-zen
                           tracking-wider hover:bg-gold-elegant/10 transition-all duration-300"
                >
                  Volver
                </button>
                <button
                  type="submit"
                  className="flex-1 py-4 bg-gold-elegant text-dark-main font-zen tracking-wider
                           hover:bg-gold-premium transition-all duration-300"
                >
                  Confirmar y Pagar
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default BookingSystem;
