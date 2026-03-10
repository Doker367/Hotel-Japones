import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Flame } from 'lucide-react';

interface MenuItem {
  id: string;
  name: string;
  nameZh: string;
  description: string;
  price: number;
  category: string;
  image: string;
  spicy: boolean;
  popular: boolean;
}

const categories = [
  { id: 'appetizers', name: 'Entrantes', nameZh: '开胃菜' },
  { id: 'mains', name: 'Platos Fuertes', nameZh: '主菜' },
  { id: 'desserts', name: 'Postres', nameZh: '甜点' },
  { id: 'beverages', name: 'Bebidas', nameZh: '饮料' },
];

export default function Menu() {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [activeCategory, setActiveCategory] = useState('appetizers');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMenu();
  }, [activeCategory]);

  const fetchMenu = async () => {
    setLoading(true);
    try {
      const response = await fetch(`/res-chino/api/menu?category=${activeCategory}`);
      const data = await response.json();
      setMenuItems(data);
    } catch (error) {
      console.error('Error fetching menu:', error);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen pt-20 bg-black overflow-x-hidden">
      <div className="relative h-[40vh] md:h-[50vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black z-10" />
        <img
          src="https://images.unsplash.com/photo-1563245372-f21724e3856d?w=1920&q=80"
          alt="Menu"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <div className="text-center px-4">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-gold text-sm tracking-widest"
            >
              菜单 MENÚ
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mt-4 mb-4"
            >
              <span className="text-gradient-gold">菜</span> Nuestra Carta
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-cream/80 text-base md:text-lg"
            >
              Sabores auténticos de Asia
            </motion.p>
          </div>
        </div>
      </div>

      <section className="py-6 md:py-12 bg-charcoal/50">
        <div className="container-custom">
          <div className="flex gap-2 overflow-x-auto pb-3 scrollbar-hide justify-start md:justify-center">
            {categories.map((cat) => (
              <motion.button
                key={cat.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3 py-2 md:px-6 md:py-3 rounded-lg font-medium transition-all whitespace-nowrap text-xs md:text-base ${
                  activeCategory === cat.id
                    ? 'bg-dragon-red text-white'
                    : 'bg-black/50 text-cream/70 hover:bg-gold/20 hover:text-gold border border-gold/20'
                }`}
              >
                {cat.name}
                <span className="ml-1 hidden md:inline-block text-xs opacity-60">{cat.nameZh}</span>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-8 md:py-16 bg-black overflow-x-hidden">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-gradient-to-br from-charcoal via-charcoal/80 to-black rounded-2xl md:rounded-3xl p-4 md:p-8 lg:p-12 border border-gold/10 shadow-2xl"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23FFD700' fill-opacity='0.03' fill-rule='evenodd'/%3E%3C/svg%3E")`,
            }}
          >
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-2">
                <span className="text-gradient-gold">{categories.find(c => c.id === activeCategory)?.name}</span>
              </h2>
              <p className="text-gold/60 text-xl md:text-2xl">{categories.find(c => c.id === activeCategory)?.nameZh}</p>
              <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-4" />
            </div>

            {loading ? (
              <div className="flex items-center justify-center py-20">
                <div className="w-12 h-12 border-4 border-gold/20 border-t-gold rounded-full animate-spin" />
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                <AnimatePresence mode="popLayout">
                  {menuItems.map((item, index) => (
                    <motion.div
                      key={item.id}
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ delay: index * 0.05 }}
                      className="group bg-black/40 rounded-xl p-3 md:p-4 hover:bg-black/60 transition-all border border-gold/5 hover:border-gold/20 overflow-hidden"
                    >
                      <div className="flex gap-3 md:gap-4">
                        <div className="w-20 h-20 md:w-24 md:h-24 rounded-lg overflow-hidden flex-shrink-0">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            onError={(e) => {
                              (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1563245372-f21724e3856d?w=400';
                            }}
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-2">
                            <h3 className="text-base md:text-lg font-bold text-cream truncate">{item.name}</h3>
                            <div className="flex items-center gap-1 md:gap-2 flex-shrink-0">
                              {item.spicy && (
                                <Flame className="text-dragon-red" size={14} />
                              )}
                              {item.popular && (
                                <span className="bg-gold/20 text-gold text-xs px-1.5 md:px-2 py-0.5 rounded">Popular</span>
                              )}
                            </div>
                          </div>
                          <p className="text-gold/60 text-xs md:text-sm mt-0.5">{item.nameZh}</p>
                          <p className="text-cream/50 text-xs md:text-sm mt-1 line-clamp-2">{item.description}</p>
                          <p className="text-gold font-bold text-base md:text-xl mt-2">${item.price.toFixed(2)}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
