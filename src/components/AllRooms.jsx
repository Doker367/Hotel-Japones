import React from 'react';
import { motion } from 'framer-motion';

const AllRooms = ({ onBackToHome }) => {
  const rooms = [
    {
      category: "Habitaciones Premium & Suites de Lujo",
      rooms: [
        {
          name: "Deluxe Premium Room",
          image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=800",
          features: [
            "Más grande que una estándar",
            "Vistas privilegiadas (mar, ciudad, montaña)",
            "Cama king con ropa de algodón egipcio",
            "Smart TV, minibar gourmet, cafetera premium",
            "Baño de mármol con ducha tipo lluvia"
          ],
          note: "Ideal como primer nivel de lujo",
          price: "Desde $350/noche"
        },
        {
          name: "Executive Room",
          image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=800",
          features: [
            "Acceso a Executive Lounge",
            "Check-in/check-out privado",
            "Desayuno premium incluido",
            "Área de trabajo de lujo",
            "Servicios personalizados"
          ],
          note: "Muy común en hoteles de negocios de alto nivel",
          price: "Desde $420/noche"
        },
        {
          name: "Junior Suite",
          image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=800",
          features: [
            "Espacios abiertos: cama + sala",
            "Sofá, mesa de centro, iluminación ambiental",
            "Baño amplio con tina independiente",
            "Decoración de diseñador"
          ],
          note: "Perfecta para parejas premium",
          price: "Desde $500/noche"
        },
        {
          name: "Luxury Suite",
          image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=800",
          features: [
            "Dormitorio separado + sala",
            "Comedor pequeño o bar privado",
            "Vistas panorámicas",
            "Baño con tina profunda + ducha efecto lluvia",
            "Servicio a la habitación prioritario"
          ],
          price: "Desde $650/noche"
        },
        {
          name: "Panoramic Suite",
          image: "https://images.unsplash.com/photo-1591088398332-8a7791972843?q=80&w=800",
          features: [
            "Ventanales de piso a techo",
            "Terraza privada",
            "Vista icónica (mar, skyline, montaña)",
            "Sistema domótico (luces, cortinas, clima)"
          ],
          price: "Desde $780/noche"
        },
        {
          name: "Wellness Suite",
          image: "https://images.unsplash.com/photo-1602002418082-a4443e081dd1?q=80&w=800",
          features: [
            "Enfoque en bienestar",
            "Colchón terapéutico",
            "Purificador de aire",
            "Ducha de aromaterapia",
            "Equipo fitness privado o sauna"
          ],
          note: "Tendencia en hoteles de lujo moderno",
          price: "Desde $820/noche"
        }
      ]
    },
    {
      category: "Suites Exclusivas & Experiencias Premium",
      rooms: [
        {
          name: "Honeymoon Suite",
          image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=800",
          features: [
            "Diseño romántico",
            "Jacuzzi privado",
            "Iluminación cálida",
            "Cama con dosel",
            "Detalles personalizados (champagne, pétalos)"
          ],
          price: "Desde $900/noche"
        },
        {
          name: "Swim-Up Suite",
          image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=800",
          features: [
            "Acceso directo a alberca desde la habitación",
            "Terraza con camastros",
            "Muy popular en resorts de playa"
          ],
          price: "Desde $1,100/noche"
        },
        {
          name: "Presidential Suite",
          image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=800",
          features: [
            "La más icónica",
            "Múltiples habitaciones",
            "Comedor formal",
            "Oficina privada",
            "Baño de lujo extremo",
            "Servicio de mayordomo"
          ],
          note: "Reservada para celebridades y jefes de estado",
          price: "Desde $2,500/noche"
        },
        {
          name: "Royal Suite",
          image: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=800",
          features: [
            "Nivel superior a presidencial",
            "Decoración artesanal o histórica",
            "Obras de arte originales",
            "Jacuzzi panorámico",
            "Seguridad y privacidad extrema"
          ],
          price: "Desde $3,200/noche"
        }
      ]
    },
    {
      category: "Ultra Lujo / Ediciones Especiales",
      rooms: [
        {
          name: "Penthouse Suite",
          image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=800",
          features: [
            "Último piso",
            "Terraza gigante",
            "Piscina privada o jacuzzi exterior",
            "Bar, cine privado",
            "Domótica total"
          ],
          price: "Desde $4,000/noche"
        },
        {
          name: "Villa Privada",
          image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=800",
          features: [
            "Casa independiente dentro del hotel",
            "Piscina privada",
            "Jardín propio",
            "Cocina equipada",
            "Personal exclusivo"
          ],
          note: "El máximo lujo en resorts",
          price: "Desde $5,500/noche"
        },
        {
          name: "Signature / Designer Suite",
          image: "https://images.unsplash.com/photo-1595576508898-0ad5c879a061?q=80&w=800",
          features: [
            "Diseñada por arquitectos o marcas de lujo",
            "Estilo único (Ferrari, Versace, Armani, etc.)",
            "Cada habitación es irrepetible"
          ],
          price: "Consultar disponibilidad"
        }
      ]
    }
  ];

  return (
    <section id="all-rooms" className="relative py-32 px-6 bg-dark-secondary overflow-hidden">
      {/* Kanji decorativo de fondo */}
      <div className="absolute top-20 right-10 text-[20rem] font-zen text-gold-elegant/5 pointer-events-none select-none">
        宿
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-block mb-6">
            <span className="font-zen text-gold-elegant text-sm tracking-[0.3em] uppercase">全客室</span>
          </div>
          <h2 className="font-zen text-5xl md:text-6xl text-white-soft mb-6 tracking-wide">
            Todas Nuestras Habitaciones
          </h2>
          <div className="w-24 h-px bg-gold-elegant mx-auto mb-8"></div>
          <p className="font-modern text-white-soft/70 text-lg max-w-3xl mx-auto leading-relaxed">
            Desde habitaciones premium hasta villas privadas. Cada espacio está diseñado 
            para ofrecer una experiencia única de confort y exclusividad.
          </p>
        </motion.div>

        {/* Categorías de habitaciones */}
        {rooms.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-20">
            {/* Título de categoría */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h3 className="font-zen text-3xl md:text-4xl text-gold-elegant mb-4 tracking-wide">
                {category.category}
              </h3>
              <div className="w-32 h-px bg-gold-elegant/50"></div>
            </motion.div>

            {/* Grid de habitaciones */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.rooms.map((room, roomIndex) => (
                <motion.div
                  key={roomIndex}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ 
                    duration: 0.7, 
                    delay: roomIndex * 0.08,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  className="group relative backdrop-blur-xl bg-gradient-to-br from-graphite/60 via-dark-main/70 to-dark-secondary/40
                           border border-gold-elegant/20 hover:border-gold-elegant/50 
                           transition-all duration-700 p-8
                           shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] hover:shadow-[0_8px_32px_0_rgba(201,162,77,0.25)]
                           hover:scale-[1.02]"
                >
                  {/* Efecto de brillo dorado interno */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gold-elegant/5 via-transparent to-transparent 
                                opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                  
                  {/* Decorative corners */}
                  <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-gold-elegant/50 
                                opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-gold-elegant/50 
                                opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-gold-elegant/50 
                                opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-gold-elegant/50 
                                opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Image */}
                  <div className="relative h-48 -mx-8 -mt-8 mb-6 overflow-hidden">
                    <img
                      src={room.image}
                      alt={room.name}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000 brightness-75"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                    <div className="absolute bottom-4 left-8 right-8">
                      <h4 className="font-zen text-2xl text-white-soft group-hover:text-gold-elegant 
                                   transition-colors duration-300 tracking-wide">
                        {room.name}
                      </h4>
                    </div>
                  </div>

                  {/* Features list */}
                  <ul className="space-y-3 mb-6">
                    {room.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 font-modern text-sm text-white-soft/80">
                        <span className="text-gold-elegant mt-1 text-xs">✦</span>
                        <span className="leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Note */}
                  {room.note && (
                    <div className="bg-gold-elegant/10 border-l-2 border-gold-elegant/50 px-4 py-3 mb-6">
                      <p className="font-modern text-xs text-gold-elegant/90 italic">
                        👉 {room.note}
                      </p>
                    </div>
                  )}

                  {/* Price and CTA */}
                  <div className="flex items-center justify-between pt-4 border-t border-gold-elegant/20">
                    <span className="font-zen text-lg text-white-soft tracking-wide">
                      {room.price}
                    </span>
                    <a 
                      href="#booking"
                      className="font-zen text-sm text-gold-elegant hover:text-white-soft 
                               transition-colors duration-300 tracking-wider group"
                    >
                      Reservar <span className="inline-block group-hover:translate-x-1 transition-transform">→</span>
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center bg-gradient-to-r from-dark-main via-graphite to-dark-main 
                   border border-gold-elegant/20 p-12 rounded-sm"
        >
          <h3 className="font-zen text-3xl text-gold-elegant mb-4 tracking-wide">
            ¿Necesitas ayuda para elegir?
          </h3>
          <p className="font-modern text-white-soft/70 mb-8 max-w-2xl mx-auto">
            Nuestro equipo de concierge está disponible para ayudarte a encontrar 
            la habitación perfecta según tus necesidades y preferencias.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={onBackToHome}
              className="px-10 py-4 bg-gold-elegant text-dark-main font-zen tracking-widest 
                       hover:bg-gold-premium transition-all duration-300 shadow-lg hover:shadow-gold-elegant/50"
            >
              Regresar al Inicio
            </button>
            <button
              onClick={onBackToHome}
              className="px-10 py-4 bg-transparent border border-gold-elegant/40 text-white-soft 
                       hover:bg-gold-elegant hover:text-dark-main transition-all duration-300 font-zen tracking-widest"
            >
              Contáctanos
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AllRooms;
