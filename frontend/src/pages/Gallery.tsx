import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

interface GalleryImage {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
}

const categories = [
  { id: 'all', name: 'Todos' },
  { id: 'ambiente', name: 'Ambiente' },
  { id: 'cocina', name: 'Cocina' },
  { id: 'comida', name: 'Comida' },
];

const galleryImages = [
  { id: '1', title: 'Sala Principal', description: 'Ambiente tradicional chino', image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800&q=80', category: 'ambiente' },
  { id: '2', title: 'Chef Preparando Dim Sum', description: 'Maestría culinaria', image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?w=800&q=80', category: 'cocina' },
  { id: '3', title: 'Pato Pekinés', description: 'Nuestra especialidad', image: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=800&q=80', category: 'comida' },
  { id: '4', title: 'Jardín Interior', description: 'Zen oriental', image: 'https://images.unsplash.com/photo-1545562083-c583d0894def?w=800&q=80', category: 'ambiente' },
  { id: '5', title: 'Bowl de Fideos', description: 'Arte culinario', image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&q=80', category: 'comida' },
  { id: '6', title: 'Bar y Lounge', description: 'Área de entretenimiento', image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800&q=80', category: 'ambiente' },
  { id: '7', title: 'Té de Jasmine', description: 'Tradición milenaria', image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=800&q=80', category: 'comida' },
  { id: '8', title: 'Sala VIP', description: 'Exclusividad', image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80', category: 'ambiente' },
  { id: '9', title: 'Kung Pao', description: 'Pollo picante', image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=800&q=80', category: 'comida' },
  { id: '10', title: 'Tempura', description: 'Estilo japonés', image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?w=800&q=80', category: 'cocina' },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredImages = activeCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  const openLightbox = (image: GalleryImage) => {
    setSelectedImage(image);
    setCurrentIndex(filteredImages.findIndex(img => img.id === image.id));
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (direction === 'prev') {
      setCurrentIndex(prev => prev === 0 ? filteredImages.length - 1 : prev - 1);
    } else {
      setCurrentIndex(prev => prev === filteredImages.length - 1 ? 0 : prev + 1);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedImage) return;
      if (e.key === 'ArrowLeft') navigateImage('prev');
      if (e.key === 'ArrowRight') navigateImage('next');
      if (e.key === 'Escape') closeLightbox();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage]);

  return (
    <div className="min-h-screen pt-20">
      <div className="relative h-[50vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black z-10" />
        <img
          src="https://images.unsplash.com/photo-1545562083-c583d0894def?w=1920&q=80"
          alt="Gallery"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <div className="text-center">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-gold text-sm tracking-widest"
            >
              NUESTRA GALERÍA
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-display font-bold mt-4 mb-4"
            >
              <span className="text-gradient-gold">画</span> Galería
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-cream/80 text-lg"
            >
              Momentos perfectos, sabores immortalizados
            </motion.p>
          </div>
        </div>
      </div>

      <section className="py-16 bg-black">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <motion.button
                key={cat.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  activeCategory === cat.id
                    ? 'bg-dragon-red text-white'
                    : 'bg-charcoal text-cream/70 hover:bg-gold/20 hover:text-gold'
                }`}
              >
                {cat.name}
              </motion.button>
            ))}
          </div>

          <motion.div
            layout
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            <AnimatePresence mode="popLayout">
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.02 }}
                  onClick={() => openLightbox(image)}
                  className="relative overflow-hidden rounded-xl aspect-square cursor-pointer group"
                >
                  <img
                    src={image.image}
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-white font-bold text-sm">{image.title}</h3>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-white text-4xl hover:text-gold transition-colors z-10"
            >
              <X />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                navigateImage('prev');
              }}
              className="absolute left-4 md:left-8 text-white text-4xl hover:text-gold transition-colors z-10"
            >
              <ChevronLeft />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                navigateImage('next');
              }}
              className="absolute right-4 md:right-8 text-white text-4xl hover:text-gold transition-colors z-10"
            >
              <ChevronRight />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-5xl max-h-[90vh] mx-4"
            >
              <img
                src={filteredImages[currentIndex]?.image}
                alt={filteredImages[currentIndex]?.title}
                className="w-full h-full object-contain rounded-lg"
              />
              <div className="mt-4 text-center">
                <h3 className="text-2xl font-bold text-gold">{filteredImages[currentIndex]?.title}</h3>
                <p className="text-cream/70 mt-2">{filteredImages[currentIndex]?.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
