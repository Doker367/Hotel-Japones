import React from 'react';
import { motion } from 'framer-motion';

const AllServices = ({ onBackToHome }) => {
  const services = [
    {
      category: "Atención & Hospitalidad",
      icon: "心",
      iconLabel: "Kokoro - Corazón/Hospitalidad",
      image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=800",
      services: [
        "Recepción 24/7 multilingüe",
        "Check-in / check-out express",
        "Check-in privado en habitación o lounge",
        "Concierge de lujo",
        "Servicio de mayordomo (suites premium)",
        "Atención personalizada vía app o WhatsApp",
        "Gestión de experiencias y reservas externas"
      ]
    },
    {
      category: "Albercas & Relax",
      icon: "泉",
      iconLabel: "Izumi - Manantial",
      image: "https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?q=80&w=800",
      services: [
        "Alberca principal tipo infinity",
        "Alberca climatizada",
        "Alberca solo para adultos",
        "Swim-up bar",
        "Camastros premium y cabañas privadas",
        "Servicio de bebidas en alberca y playa"
      ]
    },
    {
      category: "Playa & Naturaleza",
      icon: "浜",
      iconLabel: "Hama - Playa",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=800",
      services: [
        "Playa privada o zona exclusiva",
        "Camastros y sombrillas premium",
        "Servicio de bebidas y alimentos en playa",
        "Deportes acuáticos no motorizados",
        "Tours marítimos privados",
        "Experiencias eco-lujo"
      ]
    },
    {
      category: "Restaurantes & Bares",
      icon: "味",
      iconLabel: "Aji - Sabor",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=800",
      services: [
        "Restaurante gourmet internacional",
        "Restaurante de autor / chef estrella",
        "Cocina local premium",
        "Restaurante vegano / saludable",
        "Rooftop bar",
        "Wine bar & cava privada",
        "Pool bar & beach bar"
      ]
    },
    {
      category: "Experiencias Gastronómicas",
      icon: "膳",
      iconLabel: "Zen - Banquete",
      image: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=800",
      services: [
        "Room service 24/7",
        "Desayuno premium a la carta",
        "Cenas privadas en playa o terraza",
        "Degustaciones de vino y mezcal",
        "Clases de cocina con chef",
        "Menús personalizados (dietas especiales)"
      ]
    },
    {
      category: "Spa & Relajación",
      icon: "癒",
      iconLabel: "Iyashi - Sanación",
      image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=800",
      services: [
        "Spa de lujo",
        "Cabinas de masaje privadas",
        "Circuito de hidroterapia",
        "Sauna, vapor y jacuzzi",
        "Masajes de autor",
        "Ritualidades ancestrales (temazcal, etc.)"
      ]
    },
    {
      category: "Fitness & Bienestar",
      icon: "健",
      iconLabel: "Ken - Salud",
      image: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=800",
      services: [
        "Gimnasio de última generación",
        "Entrenador personal",
        "Yoga, pilates, meditación",
        "Wellness suites",
        "Nutrición personalizada"
      ]
    },
    {
      category: "Entretenimiento",
      icon: "楽",
      iconLabel: "Raku - Disfrute",
      image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?q=80&w=800",
      services: [
        "Música en vivo",
        "Shows nocturnos exclusivos",
        "Cine al aire libre",
        "Experiencias culturales locales",
        "Talleres artesanales",
        "Catas & eventos privados"
      ]
    },
    {
      category: "Experiencias Premium",
      icon: "旅",
      iconLabel: "Tabi - Viaje",
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=800",
      services: [
        "Tours privados",
        "Experiencias VIP personalizadas",
        "Helicóptero / yate privado",
        "Rutas gastronómicas",
        "Experiencias románticas"
      ]
    },
    {
      category: "Familias & Kids",
      icon: "家",
      iconLabel: "Ie - Familia",
      image: "https://images.unsplash.com/photo-1476234251651-f353703a034d?q=80&w=800",
      services: [
        "Kids Club premium",
        "Guardería certificada",
        "Actividades supervisadas",
        "Alberca infantil",
        "Menú kids gourmet",
        "Servicio de niñera"
      ]
    },
    {
      category: "Servicios en Habitaciones",
      icon: "館",
      iconLabel: "Kan - Edificio de lujo",
      image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=800",
      services: [
        "Limpieza diaria premium",
        "Servicio de cortesía nocturna (turndown service)",
        "Menú de almohadas",
        "Amenidades de lujo",
        "Minibar gourmet",
        "Lavandería y tintorería express",
        "Servicio a la habitación 24/7"
      ]
    },
    {
      category: "Negocios & Eventos",
      icon: "宴",
      iconLabel: "En - Banquete/Evento",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=800",
      services: [
        "Salones de eventos",
        "Salas de juntas",
        "Centro de negocios",
        "Internet de alta velocidad",
        "Equipos audiovisuales",
        "Eventos corporativos premium",
        "Wedding planner & eventos sociales"
      ]
    },
    {
      category: "Transporte & Accesos",
      icon: "道",
      iconLabel: "Dō - Camino",
      image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=800",
      services: [
        "Valet parking",
        "Estacionamiento privado",
        "Traslados aeropuerto – hotel",
        "Autos de lujo",
        "Renta de vehículos",
        "Helipuerto (hoteles top tier)"
      ]
    },
    {
      category: "Seguridad & Tecnología",
      icon: "守",
      iconLabel: "Mamoru - Protección",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=800",
      services: [
        "Seguridad 24/7",
        "Accesos controlados",
        "CCTV",
        "Cajas fuertes en habitación",
        "Wi-Fi premium en todo el hotel",
        "Domótica en habitaciones",
        "App del hotel (reservas, servicios, chat)"
      ]
    },
    {
      category: "Sustentabilidad & Lujo Responsable",
      icon: "緑",
      iconLabel: "Midori - Verde/Naturaleza",
      image: "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?q=80&w=800",
      services: [
        "Programas ecológicos",
        "Uso de energías renovables",
        "Amenidades biodegradables",
        "Gestión responsable del agua",
        "Experiencias eco-friendly"
      ]
    },
    {
      category: "Servicios Diferenciadores",
      icon: "誉",
      iconLabel: "Homare - Honor/Gloria",
      image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=800",
      services: [
        "Atención personalizada desde pre-llegada",
        "Perfilado de huéspedes (preferencias)",
        "Servicio invisible (staff anticipa necesidades)",
        "Experiencias únicas e irrepetibles",
        "Lujo silencioso (sin saturación visual)"
      ]
    }
  ];

  return (
    <section id="all-services" className="relative py-32 px-6 bg-dark-main overflow-hidden">
      {/* Kanji decorativo de fondo */}
      <div className="absolute top-20 left-1/2 transform -translate-x-1/2 text-[25rem] font-zen text-gold-elegant/5 pointer-events-none select-none">
        禅
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
            <span className="font-zen text-gold-elegant text-sm tracking-[0.3em] uppercase">全サービス</span>
          </div>
          <h2 className="font-zen text-5xl md:text-6xl text-white-soft mb-6 tracking-wide">
            Todos Nuestros Servicios
          </h2>
          <div className="w-24 h-px bg-gold-elegant mx-auto mb-8"></div>
          <p className="font-modern text-white-soft/70 text-lg max-w-3xl mx-auto leading-relaxed">
            Una experiencia integral de lujo japonés donde cada detalle está pensado para 
            superar tus expectativas. Hospitalidad de nivel mundial.
          </p>
        </motion.div>

        {/* Grid de servicios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.7, 
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1]
              }}
              className="group relative backdrop-blur-xl bg-gradient-to-br from-graphite/50 via-dark-secondary/70 to-dark-main/40
                       border border-gold-elegant/20 hover:border-gold-elegant/50 
                       transition-all duration-700 overflow-hidden
                       shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] hover:shadow-[0_8px_32px_0_rgba(201,162,77,0.25)]
                       hover:scale-[1.02]"
            >
              {/* Efecto de brillo dorado interno */}
              <div className="absolute inset-0 bg-gradient-to-br from-gold-elegant/5 via-transparent to-transparent 
                            opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
              
              {/* Decorative corners */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-gold-elegant/50 
                            opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-gold-elegant/50 
                            opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-gold-elegant/50 
                            opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-gold-elegant/50 
                            opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>

              {/* Image con overlay */}
              <div className="relative h-40 -mx-0 -mt-0 mb-6 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.category}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000 brightness-75"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-8 right-8 flex items-center gap-4">
                  <div className="font-zen text-4xl text-gold-elegant">
                    {category.icon}
                  </div>
                  <div>
                    <h3 className="font-zen text-xl text-white-soft mb-1 group-hover:text-gold-elegant 
                                 transition-colors duration-300">
                      {category.category}
                    </h3>
                    <p className="font-zen text-xs text-gold-elegant/60 tracking-wide">{category.iconLabel}</p>
                  </div>
                </div>
              </div>

              <div className="px-8 pb-8">
                {/* Services list */}
                <ul className="space-y-3">
                  {category.services.map((service, idx) => (
                    <li key={idx} className="flex items-start gap-3 font-modern text-sm text-white-soft/80">
                      <span className="text-gold-elegant mt-1 text-xs">✦</span>
                      <span className="leading-relaxed">{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center bg-gradient-to-r from-dark-secondary via-graphite to-dark-secondary 
                   border border-gold-elegant/20 p-12 rounded-sm"
        >
          <h3 className="font-zen text-3xl text-gold-elegant mb-4 tracking-wide">
            ¿Listo para Experimentar el Lujo?
          </h3>
          <p className="font-modern text-white-soft/70 mb-8 max-w-2xl mx-auto">
            Cada servicio está diseñado para crear momentos inolvidables. 
            Reserva ahora y descubre la hospitalidad japonesa de nivel mundial.
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

export default AllServices;
