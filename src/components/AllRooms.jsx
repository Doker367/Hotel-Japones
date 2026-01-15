import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';

const AllRooms = () => {
  const { scrollYProgress } = useScroll();
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, -100]);

  const rooms = [
    {
      category: "Habitaciones Premium",
      icon: "室",
      iconLabel: "Shitsu - Habitación",
      items: [
        {
          name: "Deluxe Premium Room",
          description: "Primer nivel de lujo con vistas privilegiadas",
          features: [
            "Más grande que una estándar",
            "Vistas privilegiadas (mar, ciudad, montaña)",
            "Cama king con ropa de algodón egipcio",
            "Smart TV, minibar gourmet, cafetera premium",
            "Baño de mármol con ducha tipo lluvia"
          ],
          highlight: "Ideal como primer nivel de lujo",
          image: "https://images.unsplash.com/photo-1591088398332-8a7791972843?q=80&w=2074"
        },
        {
          name: "Executive Room",
          description: "Perfecta para viajes de negocios premium",
          features: [
            "Acceso a Executive Lounge",
            "Check-in/check-out privado",
            "Desayuno premium incluido",
            "Área de trabajo de lujo",
            "Servicios personalizados"
          ],
          highlight: "Muy común en hoteles de negocios de alto nivel",
          image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070"
        },
        {
          name: "Junior Suite",
          description: "Espacios abiertos para mayor confort",
          features: [
            "Espacios abiertos: cama + sala",
            "Sofá, mesa de centro, iluminación ambiental",
            "Baño amplio con tina independiente",
            "Decoración de diseñador"
          ],
          highlight: "Perfecta para parejas premium",
          image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=2074"
        }
      ]
    },
    {
      category: "Luxury Suites",
      icon: "雅",
      iconLabel: "Miyabi - Elegancia",
      items: [
        {
          name: "Luxury Suite",
          description: "Suite de lujo con espacios separados",
          features: [
            "Dormitorio separado + sala",
            "Comedor pequeño o bar privado",
            "Vistas panorámicas",
            "Baño con tina profunda + ducha efecto lluvia",
            "Servicio a la habitación prioritario"
          ],
          image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=2070"
        },
        {
          name: "Panoramic Suite",
          description: "Vistas espectaculares de piso a techo",
          features: [
            "Ventanales de piso a techo",
            "Terraza privada",
            "Vista icónica (mar, skyline, montaña)",
            "Sistema domótico (luces, cortinas, clima)"
          ],
          image: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?q=80&w=2070"
        },
        {
          name: "Wellness Suite",
          description: "Enfoque total en bienestar y salud",
          features: [
            "Enfoque en bienestar",
            "Colchón terapéutico",
            "Purificador de aire",
            "Ducha de aromaterapia",
            "Equipo fitness privado o sauna"
          ],
          highlight: "Tendencia en hoteles de lujo moderno",
          image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=2070"
        }
      ]
    },
    {
      category: "Suites Exclusivas",
      icon: "華",
      iconLabel: "Hana - Flor/Lujo",
      items: [
        {
          name: "Honeymoon Suite",
          description: "Romance y privacidad absoluta",
          features: [
            "Diseño romántico",
            "Jacuzzi privado",
            "Iluminación cálida",
            "Cama con dosel",
            "Detalles personalizados (champagne, pétalos)"
          ],
          image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=2074"
        },
        {
          name: "Swim-Up Suite",
          description: "Acceso directo desde tu habitación",
          features: [
            "Acceso directo a alberca desde la habitación",
            "Terraza con camastros",
            "Muy popular en resorts de playa"
          ],
          image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2080"
        },
        {
          name: "Presidential Suite",
          description: "La suite más icónica",
          features: [
            "La más icónica",
            "Múltiples habitaciones",
            "Comedor formal",
            "Oficina privada",
            "Baño de lujo extremo",
            "Servicio de mayordomo"
          ],
          highlight: "Reservada para celebridades y jefes de estado",
          image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=2070"
        },
        {
          name: "Royal Suite",
          description: "El máximo nivel de exclusividad",
          features: [
            "Nivel superior a presidencial",
            "Decoración artesanal o histórica",
            "Obras de arte originales",
            "Jacuzzi panorámico",
            "Seguridad y privacidad extrema"
          ],
          image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=2025"
        }
      ]
    },
    {
      category: "Ultra Lujo",
      icon: "極",
      iconLabel: "Kiwami - Supremo",
      items: [
        {
          name: "Penthouse Suite",
          description: "Último piso con todas las comodidades",
          features: [
            "Último piso",
            "Terraza gigante",
            "Piscina privada o jacuzzi exterior",
            "Bar, cine privado",
            "Domótica total"
          ],
          image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=2070"
        },
        {
          name: "Villa Privada",
          description: "Casa independiente con servicios de hotel",
          features: [
            "Casa independiente dentro del hotel",
            "Piscina privada",
            "Jardín propio",
            "Cocina equipada",
            "Personal exclusivo"
          ],
          highlight: "El máximo lujo en resorts",
          image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071"
        },
        {
          name: "Signature / Designer Suite",
          description: "Diseñada por arquitectos de renombre",
          features: [
            "Diseñada por arquitectos o marcas de lujo",
            "Estilo único (Ferrari, Versace, Armani, etc.)",
            "Cada habitación es irrepetible"
          ],
          image: "https://images.unsplash.com/photo-1631049552057-403cdb8f0658?q=80&w=2070"
        }
      ]
    }
  ];

  return (
    <section id="all-rooms" className="relative py-32 px-6 bg-dark-main overflow-hidden">
      {/* Kanji decorativo de fondo */}
      <div className="absolute top-20 left-1/2 transform -translate-x-1/2 text-[25rem] font-zen text-gold-elegant/5 pointer-events-none select-none">
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
            <span className="font-zen text-gold-elegant text-sm tracking-[0.3em] uppercase">全室覧</span>
          </div>
          <h2 className="font-zen text-5xl md:text-6xl text-white-soft mb-6 tracking-wide">
            Todas Nuestras Habitaciones
          </h2>
          <div className="w-24 h-px bg-gold-elegant mx-auto mb-8"></div>
          <p className="font-modern text-white-soft/70 text-lg max-w-3xl mx-auto leading-relaxed">
            Desde habitaciones premium hasta villas privadas, cada espacio está diseñado para ofrecer
            la máxima experiencia de lujo japonés contemporáneo.
          </p>
        </motion.div>

        {/* Categorías de habitaciones */}
        {rooms.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-32">
            {/* Category Header */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="mb-12"
            >
              <div className="flex items-center gap-6 mb-4">
                <div className="relative">
                  <span className="font-zen text-6xl text-gold-elegant">{category.icon}</span>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-px bg-gold-elegant/50"></div>
                </div>
                <div>
                  <h3 className="font-zen text-3xl md:text-4xl text-white-soft tracking-wide mb-1">
                    {category.category}
                  </h3>
                  <p className="font-zen text-xs text-gold-elegant/70 tracking-wider">{category.iconLabel}</p>
                </div>
              </div>
              <div className="w-32 h-px bg-gold-elegant/50"></div>
            </motion.div>

            {/* Room Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {category.items.map((room, roomIndex) => (
                <motion.div
                  key={roomIndex}
                  initial={{ opacity: 0, y: 80 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ 
                    duration: 0.8, 
                    delay: roomIndex * 0.15,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  className="group relative backdrop-blur-xl bg-gradient-to-br from-graphite/40 via-dark-secondary/60 to-graphite/30
                           border border-gold-elegant/20 hover:border-gold-elegant/40 
                           transition-all duration-700 overflow-hidden
                           shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] hover:shadow-[0_8px_32px_0_rgba(201,162,77,0.2)]"
                >
                  {/* Decorative corners */}
                  <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-gold-elegant/50 
                                opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-gold-elegant/50 
                                opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-gold-elegant/50 
                                opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-gold-elegant/50 
                                opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Image with parallax */}
                  <motion.div 
                    className="relative h-64 overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6 }}
                  >
                    <img
                      src={room.image}
                      alt={room.name}
                      className="w-full h-full object-cover brightness-75 group-hover:brightness-90 
                               transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-main/95 via-dark-main/40 to-transparent 
                                  opacity-90"></div>
                    {/* Efecto de brillo dorado sutil */}
                    <div className="absolute inset-0 bg-gradient-to-br from-gold-elegant/5 via-transparent to-gold-elegant/5 
                                  opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  </motion.div>

                  {/* Content */}
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="font-zen text-2xl text-white-soft group-hover:text-gold-elegant 
                                   transition-colors duration-300">
                        {room.name}
                      </h4>
                      <span className="font-zen text-3xl text-gold-elegant/30 group-hover:text-gold-elegant/60 transition-colors duration-300">宿</span>
                    </div>
                    
                    <div className="w-16 h-px bg-gold-elegant/50 mb-4"></div>
                    
                    <p className="font-modern text-white-soft/70 mb-6 leading-relaxed">
                      {room.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-3 mb-6">
                      {room.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3 font-modern text-sm text-white-soft/80">
                          <span className="text-gold-elegant mt-1">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Highlight badge */}
                    {room.highlight && (
                      <div className="inline-block px-4 py-2 bg-gold-elegant/10 border border-gold-elegant/30 
                                    rounded-sm">
                        <span className="font-modern text-xs text-gold-elegant tracking-wide">
                          👉 {room.highlight}
                        </span>
                      </div>
                    )}

                    {/* Reservation button */}
                    <button className="mt-6 w-full py-3 backdrop-blur-md bg-gradient-to-r from-dark-secondary/80 to-graphite/80
                                     border border-gold-elegant/50 text-white-soft 
                                     hover:bg-gradient-to-r hover:from-gold-elegant hover:to-gold-premium hover:text-dark-main 
                                     transition-all duration-500 font-zen tracking-wider text-sm
                                     shadow-lg hover:shadow-gold-elegant/30">
                      Reservar Ahora
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}

        {/* Back to top button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <Link
            to="/"
            className="inline-block px-12 py-4 bg-gold-elegant text-dark-main font-zen tracking-widest 
                     hover:bg-gold-premium transition-all duration-300 shadow-lg hover:shadow-gold-elegant/50"
          >
            Volver al Inicio
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default AllRooms;
