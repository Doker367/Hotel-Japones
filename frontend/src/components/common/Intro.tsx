import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Intro() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 3500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {showIntro && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="fixed inset-0 z-[100] bg-black flex items-center justify-center overflow-hidden"
        >
          <div className="absolute inset-0">
            <motion.div
              initial={{ scaleY: 1 }}
              animate={{ scaleY: 0 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 2.8 }}
              className="absolute inset-0 bg-gradient-to-b from-gold/10 via-transparent to-black origin-bottom"
            />
            <motion.div
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 0 }}
              transition={{ duration: 1.5, delay: 1.5, ease: 'easeInOut' }}
              className="absolute inset-0 bg-gradient-to-t from-dragon-red/5 via-transparent to-transparent origin-top"
            />
          </div>

          <div className="relative z-10 flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="mb-8"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="w-24 h-24 relative"
              >
                <motion.div
                  animate={{ 
                    rotate: [0, 360],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    rotate: { duration: 20, repeat: Infinity, ease: 'linear' },
                    scale: { duration: 3, repeat: Infinity, ease: 'easeInOut' }
                  }}
                  className="absolute inset-0 border-2 border-gold/20 rounded-full"
                />
                <motion.div
                  animate={{ 
                    rotate: [0, -360],
                    scale: [1, 1.05, 1]
                  }}
                  transition={{ 
                    rotate: { duration: 15, repeat: Infinity, ease: 'linear' },
                    scale: { duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }
                  }}
                  className="absolute inset-4 border border-gold/30 rounded-full"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-3 h-3 bg-gold rounded-full shadow-[0_0_20px_rgba(255,215,0,0.5)]" />
                </div>
              </motion.div>
            </motion.div>

            <div className="overflow-hidden mb-3">
              <motion.h1
                initial={{ y: 60, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="text-5xl md:text-7xl font-display font-bold tracking-wider"
              >
                <span className="text-gradient-gold">龙金</span>
              </motion.h1>
            </div>

            <div className="overflow-hidden mb-1">
              <motion.p
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 1, ease: [0.22, 1, 0.36, 1] }}
                className="text-xl md:text-2xl font-display text-cream/80 tracking-widest"
              >
                DRAGON DORADO
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3, duration: 0.5 }}
              className="mt-10"
            >
              <div className="flex items-center gap-2">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0.3, scale: 0.8 }}
                    animate={{ 
                      opacity: [0.3, 1, 0.3], 
                      scale: [0.8, 1, 0.8]
                    }}
                    transition={{ 
                      duration: 1.2, 
                      repeat: Infinity, 
                      delay: i * 0.2 
                    }}
                    className="w-1.5 h-1.5 bg-gold rounded-full"
                  />
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: [0, 0.5, 0], y: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
              className="absolute bottom-12 text-gold/40 text-xs tracking-[0.3em]"
            >
              TRADITION SINCE 1990
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="absolute top-8 left-8 text-gold/10 text-xs font-display tracking-widest hidden md:block"
          >
            传统
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="absolute top-8 right-8 text-gold/10 text-xs font-display tracking-widest hidden md:block"
          >
            美食
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="absolute bottom-8 left-8 text-gold/10 text-xs font-display tracking-widest hidden md:block"
          >
            热情
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
            className="absolute bottom-8 right-8 text-gold/10 text-xs font-display tracking-widest hidden md:block"
          >
            卓越
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
