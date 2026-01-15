import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const AllServices = () => {
  const services = [
    {
      category: "Atención & Hospitalidad",
      icon: "心",
      iconLabel: "Kokoro - Corazón/Hospitalidad",
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

              {/* Icon kanji con estilo japonés */}
              <div className="relative mb-6">
                <div className="font-zen text-6xl text-gold-elegant group-hover:text-gold-premium 
                              transition-all duration-500 group-hover:scale-110">
                  {category.icon}
                </div>
                <div className="absolute -bottom-2 left-0 w-full h-px bg-gold-elegant/30"></div>
              </div>

              {/* Category title */}
              <div className="mb-6">
                <h3 className="font-zen text-xl text-white-soft mb-1 group-hover:text-gold-elegant 
                             transition-colors duration-300">
                  {category.category}
                </h3>
                <p className="font-zen text-xs text-gold-elegant/60 tracking-wide">{category.iconLabel}</p>
              </div>

              <div className="w-12 h-px bg-gold-elegant/50 mb-6"></div>

              {/* Services list */}
              <ul className="space-y-3">
                {category.services.map((service, idx) => (
                  <li key={idx} className="flex items-start gap-3 font-modern text-sm text-white-soft/80">
                    <span className="text-gold-elegant mt-1 text-xs">✦</span>
                    <span className="leading-relaxed">{service}</span>
                  </li>
                ))}
              </ul>
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
            <Link
              to="/"
              className="px-10 py-4 bg-gold-elegant text-dark-main font-zen tracking-widest 
                       hover:bg-gold-premium transition-all duration-300 shadow-lg hover:shadow-gold-elegant/50"
            >
              Reservar Ahora
            </Link>
            <Link
              to="/"
              className="px-10 py-4 bg-transparent border border-gold-elegant/40 text-white-soft 
                       hover:bg-gold-elegant hover:text-dark-main transition-all duration-300 font-zen tracking-widest"
            >
              Volver al Inicio
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AllServices;
