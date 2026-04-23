import { motion } from 'framer-motion';
import { Award, Users, Flame, Leaf, Sparkles, Heart } from 'lucide-react';

const timeline = [
  {
    year: '1990',
    title: 'Los Inicios',
    description: 'Fundado en Shanghai con una visión: traer la auténtica cocina china al mundo.',
    icon: '🏮',
  },
  {
    year: '1998',
    title: 'Expansión Internacional',
    description: 'Abrimos nuestro primer restaurante fuera de China, estableciendo nuestra reputación global.',
    icon: '🌍',
  },
  {
    year: '2005',
    title: 'Fusión Oriental',
    description: 'Introdujimos elementos de la cocina japonesa, creando una experiencia única asiático-fusión.',
    icon: '🍣',
  },
  {
    year: '2015',
    title: 'Innovación Sostenible',
    description: 'Compromiso con ingredientes orgánicos y prácticas sostenibles en todas nuestras cocinas.',
    icon: '🌱',
  },
  {
    year: '2024',
    title: 'Dragon Dorado Nace',
    description: 'Una nueva era de elegancia y tradición culinaria, llevando lo mejor de Asia a tu ciudad.',
    icon: '🐉',
  },
];

const values = [
  {
    icon: Heart,
    title: 'Pasión',
    titleZh: '热情',
    description: 'Cada plato se prepara con amor y dedicación, como si fuera para nuestra propia familia.',
  },
  {
    icon: Leaf,
    title: 'Tradición',
    titleZh: '传统',
    description: 'Recetas ancestrales preservadas por generaciones, manteniendo la autenticidad.',
  },
  {
    icon: Sparkles,
    title: 'Excelencia',
    titleZh: '卓越',
    description: 'Ingredientes de la más alta calidad y técnicas culinarias impeccables.',
  },
  {
    icon: Flame,
    title: 'Sabor',
    titleZh: '味道',
    description: 'El平衡 perfecto de sabores que define la auténtica gastronomía oriental.',
  },
];

const stats = [
  { value: '30+', label: 'Años de Experiencia', icon: Award },
  { value: '50+', label: 'Chefs Expertos', icon: Users },
  { value: '100K+', label: 'Clientes Felices', icon: Heart },
  { value: '200+', label: 'Platillos Únicos', icon: Flame },
];

export default function History() {
  return (
    <div className="min-h-screen pt-20">
      <div className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black z-10" />
        <img
          src="https://images.unsplash.com/photo-1552566626-52f8b828add9?w=1920&q=80"
          alt="History"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="mb-6"
            >
              <span className="text-8xl">🏯</span>
            </motion.div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-gold text-sm tracking-[0.5em]"
            >
              NUESTRA HISTORIA
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-7xl font-display font-bold mt-4 mb-4"
            >
              <span className="text-gradient-gold">历</span> Historia
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-cream/80 text-lg max-w-2xl mx-auto"
            >
              Tres décadas de pasión culinaria y tradición oriental
            </motion.p>
          </div>
        </div>
      </div>

      <section className="py-20 bg-gradient-to-b from-charcoal to-black">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Una Historia de <span className="text-gradient-gold">Sabor</span>
            </h2>
            <p className="text-cream/70 max-w-3xl mx-auto text-lg leading-relaxed">
              Desde nuestras raíces en Shanghai hasta llegar a tu ciudad, 
              hemos preservado los secretos culinarios de generaciones pasadas, 
              mientras innovamos para crear experiencias gastronómicas únicas.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 bg-black/30 rounded-2xl border border-gold/10"
              >
                <stat.icon className="text-gold mx-auto mb-3" size={32} />
                <div className="text-3xl md:text-4xl font-bold text-gradient-gold mb-1">{stat.value}</div>
                <div className="text-cream/60 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 pattern-overlay opacity-10" />
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-gold text-sm tracking-[0.3em]">NUESTRO VIAJE</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 mb-6">
              Cronología de <span className="text-gradient-gold">Éxitos</span>
            </h2>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-gold/30 to-transparent hidden md:block" />

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className={`flex items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="bg-charcoal/50 p-6 rounded-2xl border border-gold/10 hover:border-gold/30 transition-colors">
                      <div className="text-4xl mb-3">{item.icon}</div>
                      <div className="text-gold text-sm font-medium mb-1">{item.year}</div>
                      <h3 className="text-xl font-bold text-cream mb-2">{item.title}</h3>
                      <p className="text-cream/60 text-sm">{item.description}</p>
                    </div>
                  </div>
                  <div className="hidden md:flex items-center justify-center w-8 h-8 bg-gradient-to-r from-dragon-red to-gold rounded-full shadow-lg shadow-gold/30">
                    <div className="w-3 h-3 bg-white rounded-full" />
                  </div>
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-charcoal">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-gold text-sm tracking-[0.3em]">NUESTROS VALORES</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 mb-6">
              Los Pilares de <span className="text-gradient-gold">Dragon Dorado</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-black/40 p-8 rounded-2xl border border-gold/10 hover:border-gold/30 transition-all group"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-dragon-red/20 to-gold/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <value.icon className="text-gold" size={28} />
                </div>
                <h3 className="text-xl font-bold text-gold mb-1">{value.title}</h3>
                <p className="text-gold/60 text-2xl mb-4">{value.titleZh}</p>
                <p className="text-cream/70 text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1563245372-f21724e3856d?w=1920&q=80"
            alt="Chef"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
        </div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="text-gold text-sm tracking-[0.3em]">NUESTRA MISIÓN</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mt-6 mb-8 text-cream">
              "Bringing the essence of Eastern cuisine to the world, 
              one dish at a time"
            </h2>
            <p className="text-cream/70 text-lg">
              "Traer la esencia de la cocina oriental al mundo, 
              un plato a la vez"
            </p>
            <div className="mt-8 flex items-center justify-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-br from-dragon-red to-gold rounded-full flex items-center justify-center">
                <span className="text-3xl">🐉</span>
              </div>
              <div className="text-left">
                <div className="text-gold font-bold">Master Chef Wang</div>
                <div className="text-cream/60 text-sm">Fundador & Director Culinario</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
