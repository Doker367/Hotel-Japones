import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, Check } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    specialRequests: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/reservations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          date: '',
          time: '',
          guests: '2',
          specialRequests: '',
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    }

    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen pt-20">
      <div className="relative h-[50vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black z-10" />
        <img
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&q=80"
          alt="Contact"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <div className="text-center">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-gold text-sm tracking-widest"
            >
              CONTACTO Y RESERVACIONES
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-display font-bold mt-4 mb-4"
            >
              <span className="text-gradient-gold">联</span> Contacto
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-cream/80 text-lg"
            >
              Estamos aquí para servirte
            </motion.p>
          </div>
        </div>
      </div>

      <section className="py-16 bg-black">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-display font-bold mb-8">
                Haz tu <span className="text-gradient-gold">Reservación</span>
              </h2>

              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-jade/20 border border-jade text-jade px-6 py-4 rounded-lg mb-6 flex items-center gap-3"
                >
                  <Check className="text-xl" />
                  <span>¡Reservación enviada exitosamente! Te contactaremos pronto.</span>
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-dragon-red/20 border border-dragon-red text-dragon-red px-6 py-4 rounded-lg mb-6"
                >
                  Hubo un error al enviar la reservación. Por favor intenta de nuevo.
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gold text-sm mb-2">Nombre Completo</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-charcoal border border-gold/20 rounded-lg py-3 px-4 text-cream focus:border-gold focus:outline-none transition-colors"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div>
                    <label className="block text-gold text-sm mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-charcoal border border-gold/20 rounded-lg py-3 px-4 text-cream focus:border-gold focus:outline-none transition-colors"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gold text-sm mb-2">Teléfono</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full bg-charcoal border border-gold/20 rounded-lg py-3 px-4 text-cream focus:border-gold focus:outline-none transition-colors"
                      placeholder="+1 234 567 890"
                    />
                  </div>
                  <div>
                    <label className="block text-gold text-sm mb-2">Número de Comensales</label>
                    <select
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      className="w-full bg-charcoal border border-gold/20 rounded-lg py-3 px-4 text-cream focus:border-gold focus:outline-none transition-colors"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                        <option key={num} value={num}>
                          {num} {num === 1 ? 'persona' : 'personas'}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gold text-sm mb-2">Fecha</label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full bg-charcoal border border-gold/20 rounded-lg py-3 px-4 text-cream focus:border-gold focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-gold text-sm mb-2">Hora</label>
                    <select
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      required
                      className="w-full bg-charcoal border border-gold/20 rounded-lg py-3 px-4 text-cream focus:border-gold focus:outline-none transition-colors"
                    >
                      <option value="">Seleccionar hora</option>
                      {Array.from({ length: 12 }, (_, i) => {
                        const hour = 11 + Math.floor(i / 2);
                        const minute = i % 2 === 0 ? '00' : '30';
                        const time = `${hour}:${minute}`;
                        return (
                          <option key={time} value={time}>
                            {time}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-gold text-sm mb-2">Solicitudes Especiales (Opcional)</label>
                  <textarea
                    name="specialRequests"
                    value={formData.specialRequests}
                    onChange={handleChange}
                    rows={4}
                    className="w-full bg-charcoal border border-gold/20 rounded-lg py-3 px-4 text-cream focus:border-gold focus:outline-none transition-colors resize-none"
                    placeholder="Alergias, preferencias, ocasiones especiales..."
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary flex items-center justify-center gap-2 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send />
                      Reservar Ahora
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-8"
            >
              <div className="card-chinese p-8">
                <h3 className="text-2xl font-display font-bold text-gold mb-6">
                  Información de Contacto
                </h3>
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-dragon-red/20 flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-gold text-xl" />
                    </div>
                    <div>
                      <h4 className="text-gold font-medium mb-1">Dirección</h4>
                      <p className="text-cream/70">
                        Calle de la Seda 123<br />
                        Ciudad China, CP 12345
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-dragon-red/20 flex items-center justify-center flex-shrink-0">
                      <Phone className="text-gold text-xl" />
                    </div>
                    <div>
                      <h4 className="text-gold font-medium mb-1">Teléfono</h4>
                      <p className="text-cream/70">+1 234 567 890</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-dragon-red/20 flex items-center justify-center flex-shrink-0">
                      <Mail className="text-gold text-xl" />
                    </div>
                    <div>
                      <h4 className="text-gold font-medium mb-1">Email</h4>
                      <p className="text-cream/70">info@dragondorado.com</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-dragon-red/20 flex items-center justify-center flex-shrink-0">
                      <Clock className="text-gold text-xl" />
                    </div>
                    <div>
                      <h4 className="text-gold font-medium mb-1">Horario</h4>
                      <p className="text-cream/70">
                        Lunes - Domingo: 11:00 - 23:00<br />
                        (Última orden: 22:30)
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="card-chinese p-8">
                <h3 className="text-2xl font-display font-bold text-gold mb-6">
                  Ubicación
                </h3>
                <div className="aspect-video bg-charcoal rounded-lg overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=600&q=80"
                    alt="Map"
                    className="w-full h-full object-cover opacity-50"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-cream/70">Ver en Google Maps</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
