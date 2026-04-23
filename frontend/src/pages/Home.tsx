import { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Clock, Users, MapPin, Phone, Calendar, Award, ChefHat, BookOpen } from 'lucide-react';

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div>
      <HeroSection heroRef={heroRef} y={y} opacity={opacity} />
      <PhilosophySection />
      <FeaturedDishesSection />
      <HistoryPreviewSection />
      <StatsSection />
      <TestimonialsPreviewSection />
      <ReservationCTA />
      <FeaturesSection />
    </div>
  );
}

interface HeroProps {
  y: MotionValue<string>;
  opacity: MotionValue<number>;
  heroRef: React.RefObject<HTMLDivElement>;
}

const HeroSection = ({ y, opacity, heroRef }: HeroProps) => {
  return (
    <section
      ref={heroRef}
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      <motion.div
        style={{ y, opacity }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black z-10" />
        <img
          src="https://images.unsplash.com/photo-1552566626-52f8b828add9?w=1920&q=80"
          alt="Restaurant Interior"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <div className="absolute inset-0 pattern-overlay z-10 opacity-30" />

      <div className="container-custom relative z-20 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="mb-8"
        >
          <motion.div
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ duration: 3, repeat: Infinity }}
            className="inline-block text-[120px] md:text-[180px]"
          >
            🐉
          </motion.div>
        </motion.div>

        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="inline-block px-6 py-2 bg-gradient-to-r from-dragon-red/30 to-gold/30 border border-gold/30 rounded-full text-gold text-sm tracking-[0.3em] mb-6"
        >
          AUTÉNTICA COCINA CHINA • 传统中国菜
        </motion.span>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-4"
        >
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-bold mb-2">
            <span className="text-gradient-gold">龙金</span>
          </h1>
          <p className="text-3xl md:text-5xl font-display text-cream">
            Dragon Dorado
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="text-cream/80 text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed"
        >
          Experimenta la magia de más de 30 años de tradición culinaria. 
          Cada plato es una obra de arte milenaria que cuenta historias de generaciones.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link to="/menu">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(196, 30, 58, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary flex items-center gap-2 text-lg px-8 py-4"
            >
              <BookOpen size={20} />
              Ver Nuestro Menú
            </motion.button>
          </Link>
          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary text-lg px-8 py-4"
            >
              <Calendar size={20} className="inline mr-2" />
              Reservar Mesa
            </motion.button>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-gold/50"
          >
            <div className="w-8 h-14 border-2 border-gold/30 rounded-full flex justify-center pt-2">
              <motion.div
                animate={{ y: [0, 16, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="w-2 h-3 bg-gold rounded-full"
              />
            </div>
          </motion.div>
          <span className="text-gold/30 text-xs tracking-widest">DESCUBRE MÁS</span>
        </motion.div>
      </div>
    </section>
  );
};

const PhilosophySection = () => {
  const values = [
    { title: 'Tradición', titleZh: '传统', icon: '🏮', desc: 'Recetas heredadas por generaciones' },
    { title: 'Frescura', titleZh: '新鲜', icon: '🥬', desc: 'Ingredientes seleccionados daily' },
    { title: 'Arte', titleZh: '艺术', icon: '🎨', desc: 'Cada plato es una obra maestra' },
    { title: 'Pasión', titleZh: '热情', icon: '❤️', desc: 'Preparado con amor' },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-charcoal to-black relative overflow-hidden">
      <div className="absolute inset-0 pattern-overlay opacity-20" />
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-gold text-sm tracking-[0.3em]">FILOSOFÍA</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 mb-6">
            El Arte de la <span className="text-gradient-red">Cocina Oriental</span>
          </h2>
          <div className="divider-chinese"><span>和</span></div>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="card-chinese p-8 text-center group"
            >
              <motion.div
                whileHover={{ scale: 1.2, rotate: 10 }}
                className="text-5xl mb-6"
              >
                {item.icon}
              </motion.div>
              <h3 className="text-2xl font-display font-bold text-gold mb-1">{item.title}</h3>
              <p className="text-gold/60 text-3xl mb-3">{item.titleZh}</p>
              <p className="text-cream/70 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FeaturedDishesSection = () => {
  const dishes = [
    {
      name: 'Pato Pekinés',
      nameZh: '北京烤鸭',
      description: 'Nuestra especialidad insignia',
      image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?w=600&q=80',
      price: '$32.99',
      popular: true,
    },
    {
      name: 'Dim Sum Premium',
      nameZh: '精品点心',
      description: 'Selección de dumplings',
      image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=600&q=80',
      price: '$15.99',
      popular: true,
    },
    {
      name: 'Sashimi Variado',
      nameZh: '刺身拼盘',
      description: 'Peces frescos estilo japonés',
      image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=600&q=80',
      price: '$24.99',
      popular: true,
    },
    {
      name: 'Kung Pao Especial',
      nameZh: '宫保鸡丁',
      description: 'Pollo con nueces',
      image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=600&q=80',
      price: '$14.99',
      popular: true,
    },
  ];

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-dragon-red/5 to-black" />
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-gold text-sm tracking-[0.3em]">ESPECIALIDADES</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 mb-6">
            Platillos <span className="text-gradient-gold">Destacados</span>
          </h2>
          <div className="divider-chinese"><span>福</span></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {dishes.map((dish, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-2xl aspect-square mb-4">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                {dish.popular && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-dragon-red to-gold text-white text-xs px-3 py-1 rounded-full font-medium">
                    Popular
                  </div>
                )}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="text-gold text-2xl mb-1">{dish.nameZh}</p>
                  <h3 className="text-xl font-bold text-white mb-1">{dish.name}</h3>
                  <p className="text-cream/70 text-sm mb-2">{dish.description}</p>
                  <span className="text-gold font-bold text-xl">{dish.price}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link to="/menu">
            <button className="btn-secondary flex items-center gap-2 mx-auto">
              Ver Menú Completo
              <ArrowRight className="inline" />
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

const HistoryPreviewSection = () => {
  return (
    <section className="py-24 bg-gradient-to-r from-charcoal via-black to-charcoal relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1552566626-52f8b828add9?w=1920&q=80"
          alt="Garden"
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-gold text-sm tracking-[0.3em]">DESDE 1990</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 mb-6 text-cream">
              Más de <span className="text-gradient-gold">30 Años</span> de Tradición
            </h2>
            <p className="text-cream/70 text-lg mb-8 leading-relaxed">
              Fundado en Shanghai con la visión de acercar la auténtica cocina china al mundo. 
              A lo largo de las décadas, hemos preservado los secretos culinarios de generaciones 
              mientras innovateamos para crear experiencias únicas.
            </p>
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-dragon-red/20 rounded-full flex items-center justify-center">
                  <Award className="text-gold" />
                </div>
                <div>
                  <div className="font-bold text-cream">30+ Años</div>
                  <div className="text-cream/50 text-sm">de experiencia</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-dragon-red/20 rounded-full flex items-center justify-center">
                  <ChefHat className="text-gold" />
                </div>
                <div>
                  <div className="font-bold text-cream">50+ Chefs</div>
                  <div className="text-cream/50 text-sm">expertos</div>
                </div>
              </div>
            </div>
            <Link to="/history">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                Conocer Nuestra Historia
              </motion.button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <motion.img
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  src="https://images.unsplash.com/photo-1563245372-f21724e3856d?w=400&q=80"
                  alt="Food"
                  className="rounded-2xl w-full aspect-[4/5] object-cover"
                />
                <motion.img
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  src="https://images.unsplash.com/photo-1552566626-52f8b828add9?w=400&q=80"
                  alt="Restaurant"
                  className="rounded-2xl w-full aspect-square object-cover"
                />
              </div>
              <div className="space-y-4 pt-8">
                <motion.img
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&q=80"
                  alt="Interior"
                  className="rounded-2xl w-full aspect-square object-cover"
                />
                <motion.img
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  src="https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&q=80"
                  alt="Chef"
                  className="rounded-2xl w-full aspect-[4/5] object-cover"
                />
              </div>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-dragon-red to-gold p-6 rounded-2xl">
              <div className="text-3xl font-bold text-white">1990</div>
              <div className="text-white/80 text-sm">Fundación</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const StatsSection = () => {
  const stats = [
    { value: '4.9', label: 'Rating en Google', icon: Star, suffix: '/5' },
    { value: '50K+', label: 'Clientes Atendidos', icon: Users },
    { value: '26+', label: 'Platillos del Menú', icon: ChefHat },
    { value: '30+', label: 'Años de Experiencia', icon: Award },
  ];

  return (
    <section className="py-20 bg-charcoal">
      <div className="container-custom">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-8 bg-black/30 rounded-2xl border border-gold/10"
            >
              <stat.icon className="text-gold mx-auto mb-4" size={36} />
              <div className="text-4xl md:text-5xl font-bold text-gradient-gold mb-2">
                {stat.value}{stat.suffix && <span className="text-2xl">{stat.suffix}</span>}
              </div>
              <div className="text-cream/60 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TestimonialsPreviewSection = () => {
  const testimonials = [
    { name: 'María G.', text: '¡Mejor comida china! Los dim sum son auténticos.', rating: 5 },
    { name: 'Carlos R.', text: 'Ambiente increíble y servicio excelente.', rating: 5 },
    { name: 'Ana M.', text: 'Una experiencia culinaria única.', rating: 5 },
  ];

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 pattern-overlay opacity-10" />
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-gold text-sm tracking-[0.3em]">TESTIMONIOS</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 mb-6">
            Lo que dicen <span className="text-gradient-gold">Nuestros Clientes</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-charcoal/50 p-8 rounded-2xl border border-gold/10"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-gold fill-gold" size={18} />
                ))}
              </div>
              <p className="text-cream/80 mb-6 italic">"{testimonial.text}"</p>
              <div className="font-bold text-gold">{testimonial.name}</div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link to="/reviews">
            <button className="btn-secondary">
              Ver Todas las Reseñas
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

const ReservationCTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&q=80"
          alt="Restaurant"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/90" />
      </div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-gold text-sm tracking-[0.3em]">RESERVACIONES</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 mb-6 text-white">
              Vive la Experiencia <span className="text-gradient-gold">Dragon Dorado</span>
            </h2>
            <p className="text-cream/80 text-lg mb-10">
              Reserva tu mesa y disfruta de una velada inolvidable con los mejores 
              platos de la cocina oriental tradicional. ¡Te esperamos!
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary text-lg"
                >
                  <Calendar className="inline mr-2" />
                  Reservar Ahora
                </motion.button>
              </Link>
              <a href="tel:+1234567890">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-secondary text-lg"
                >
                  <Phone className="inline mr-2" />
                  Llamar: +1 234 567 890
                </motion.button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const FeaturesSection = () => {
  const features = [
    { icon: Star, title: 'Calidad Premium', description: 'Ingredientes de la más alta calidad' },
    { icon: Clock, title: 'Servicio Rápido', description: 'Atención eficiente y profesional' },
    { icon: Users, title: 'Ambiente Familiar', description: 'Perfecto para toda la familia' },
    { icon: MapPin, title: 'Ubicación Céntrica', description: 'Fácil acceso y estacionamiento' },
  ];

  return (
    <section className="py-16 bg-charcoal">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-4"
            >
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-dragon-red/20 to-gold/20 flex items-center justify-center flex-shrink-0">
                <feature.icon className="text-gold" size={24} />
              </div>
              <div>
                <h3 className="text-gold font-medium mb-1">{feature.title}</h3>
                <p className="text-cream/60 text-sm">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
