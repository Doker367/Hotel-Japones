import React, { useEffect, useState } from 'react';
import './SakuraBackground.css';

const SakuraBackground = () => {
  const [petals, setPetals] = useState([]);
  const [kanjis, setKanjis] = useState([]);

  useEffect(() => {
    // Generar pétalos de sakura - reducidos para tema oscuro
    const generatePetals = () => {
      const petalCount = window.innerWidth < 768 ? 8 : 15; // Menos pétalos
      const newPetals = [];

      for (let i = 0; i < petalCount; i++) {
        newPetals.push({
          id: i,
          left: Math.random() * 100,
          animationDelay: Math.random() * 20,
          animationDuration: 15 + Math.random() * 10, // Más lentos
          size: 0.4 + Math.random() * 0.5,
          rotation: Math.random() * 360,
          opacity: 0.15 + Math.random() * 0.15, // Más sutiles
        });
      }

      setPetals(newPetals);
    };

    // Generar kanji para fondo editorial
    const generateKanjis = () => {
      const kanjiChars = ['和', '禅', '宿', '旅', '心', '静', '寂', '美'];
      const kanjiCount = window.innerWidth < 768 ? 3 : 6;
      const newKanjis = [];

      for (let i = 0; i < kanjiCount; i++) {
        newKanjis.push({
          id: i,
          char: kanjiChars[Math.floor(Math.random() * kanjiChars.length)],
          left: 10 + Math.random() * 80,
          top: Math.random() * 100,
          size: 120 + Math.random() * 180,
          animationDelay: Math.random() * 10,
        });
      }

      setKanjis(newKanjis);
    };

    generatePetals();
    generateKanjis();

    const handleResize = () => {
      generatePetals();
      generateKanjis();
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="sakura-container">
      {/* Kanji de fondo editorial */}
      <div className="kanji-background">
        {kanjis.map((kanji) => (
          <div
            key={kanji.id}
            className="kanji-character"
            style={{
              left: `${kanji.left}%`,
              top: `${kanji.top}%`,
              fontSize: `${kanji.size}px`,
              animationDelay: `${kanji.animationDelay}s`,
            }}
          >
            {kanji.char}
          </div>
        ))}
      </div>

      {/* Patrón japonés sutil */}
      <div className="japanese-pattern-dark"></div>
      
      {/* Pétalos de sakura reducidos */}
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="sakura-petal-dark"
          style={{
            left: `${petal.left}%`,
            animationDelay: `${petal.animationDelay}s`,
            animationDuration: `${petal.animationDuration}s`,
            transform: `scale(${petal.size}) rotate(${petal.rotation}deg)`,
            opacity: petal.opacity,
          }}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10 2C10 2 8 6 10 10C12 6 10 2 10 2Z" fill="#C9A24D" opacity="0.4"/>
            <path d="M18 10C18 10 14 8 10 10C14 12 18 10 18 10Z" fill="#D4AF37" opacity="0.3"/>
            <path d="M10 18C10 18 12 14 10 10C8 14 10 18 10 18Z" fill="#C9A24D" opacity="0.4"/>
            <path d="M2 10C2 10 6 12 10 10C6 8 2 10 2 10Z" fill="#D4AF37" opacity="0.3"/>
            <circle cx="10" cy="10" r="1.5" fill="#8B1E1E" opacity="0.5"/>
          </svg>
        </div>
      ))}

      {/* Gradiente oscuro atmosférico */}
      <div className="atmospheric-gradient-dark"></div>
    </div>
  );
};

export default SakuraBackground;
