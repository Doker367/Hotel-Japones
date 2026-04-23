import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';

const reviews = [
  {
    id: 1,
    name: 'María González',
    rating: 5,
    date: 'Enero 2026',
    text: '¡Mejor comida china de la ciudad! Los dim sum son auténticos y el servicio es excelente. El ambiente es muy acogedor con esa decoración tradicional china. ¡Totalmente recomendado!',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
  },
  {
    id: 2,
    name: 'Carlos Rodríguez',
    rating: 5,
    date: 'Diciembre 2025',
    text: 'Sabores auténticos y ambiente increíble. El pato Pekinés estaba perfecto, muy crujiente. Los horarios son amplios y el personal muy amable. Volveremos pronto.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
  },
  {
    id: 3,
    name: 'Ana Martínez',
    rating: 5,
    date: 'Noviembre 2025',
    text: 'Una experiencia culinaria única. El menú tiene opciones para todos los gustos, incluyendo platos japoneses. El bubble tea es fenomenal. ¡Gracias por tanto!',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
  },
  {
    id: 4,
    name: 'Javier López',
    rating: 4,
    date: 'Octubre 2025',
    text: 'Muy buena comida china. Probé el Kung Pao y estaba delicioso. El único detalle es que había mucha gente y tardaron un poco en atender, pero la comida vale la pena.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
  },
  {
    id: 5,
    name: 'Sofia Chen',
    rating: 5,
    date: 'Septiembre 2025',
    text: 'Como china, puedo decir que la comida es muy auténtica. Los sabores me recordaron a mi tierra. El té de jasmine es perfecto. ¡Gracias por traer un pedacito de China!',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop',
  },
  {
    id: 6,
    name: 'Miguel Torres',
    rating: 5,
    date: 'Agosto 2025',
    text: 'Celebramos nuestro aniversario aquí y fue perfecto. La decoración es hermosa, especialmente las linternas. El personal nos trataba como familia. ¡Excelente experiencia!',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
  },
];

const stats = [
  { value: '4.9', label: 'Rating Promedio' },
  { value: '2,500+', label: 'Clientes Felices' },
  { value: '30+', label: 'Años de Experiencia' },
  { value: '50+', label: 'Platillos Únicos' },
];

export default function Reviews() {
  return (
    <div className="min-h-screen pt-20">
      <div className="relative h-[50vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black z-10" />
        <img
          src="https://images.unsplash.com/photo-1552566626-52f8b828add9?w=1920&q=80"
          alt="Reviews"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <div className="text-center">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-gold text-sm tracking-widest"
            >
              TESTIMONIOS
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-display font-bold mt-4 mb-4"
            >
              <span className="text-gradient-gold">评</span> Reseñas
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-cream/80 text-lg"
            >
              Lo que dicen nuestros clientes
            </motion.p>
          </div>
        </div>
      </div>

      <section className="py-16 bg-charcoal">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-gradient-gold mb-2">{stat.value}</div>
                <div className="text-cream/60 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-black">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-charcoal/50 rounded-2xl p-6 border border-gold/10 hover:border-gold/30 transition-all"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className={i < review.rating ? 'text-gold fill-gold' : 'text-gold/30'}
                    />
                  ))}
                </div>

                <Quote className="text-gold/20 mb-4" size={32} />

                <p className="text-cream/80 mb-6 italic">"{review.text}"</p>

                <div className="flex items-center gap-4">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="text-gold font-medium">{review.name}</h4>
                    <p className="text-cream/50 text-sm">{review.date}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-charcoal">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              ¿Ya nos visitaste?
            </h2>
            <p className="text-cream/70 mb-8 max-w-xl mx-auto">
              Tu opinión nos importa. Comparte tu experiencia con nosotros y ayúdanos a mejorar continuamente.
            </p>
            <Link
              to="/contact"
              className="inline-block btn-primary"
            >
              Deja tu Reseña
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
