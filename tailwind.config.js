/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-main': '#0B0B0B',
        'dark-secondary': '#111111',
        'graphite': '#1C1C1C',
        'white-soft': '#F5F5F5',
        'red-deep': '#8B1E1E',
        'gold-elegant': '#C9A24D',
        'gold-premium': '#D4AF37',
      },
      fontFamily: {
        'zen': ['Noto Serif JP', 'serif'],
        'modern': ['Inter', 'sans-serif'],
      },
      animation: {
        'sakura-fall': 'sakuraFall 15s linear infinite',
        'sakura-fall-slow': 'sakuraFall 20s linear infinite',
        'sakura-fall-fast': 'sakuraFall 12s linear infinite',
        'sakura-sway': 'sakuraSway 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'fade-in-up': 'fadeInUp 1s ease-out',
        'fade-in': 'fadeIn 1.5s ease-out',
        'kanji-float': 'kanjiFloat 60s linear infinite',
        'kanji-fade': 'kanjiFade 8s ease-in-out infinite alternate',
        'border-glow': 'borderGlow 3s ease-in-out infinite',
      },
      keyframes: {
        sakuraFall: {
          '0%': {
            transform: 'translateY(-100vh) translateX(0) rotate(0deg)',
            opacity: '0',
          },
          '10%': {
            opacity: '1',
          },
          '90%': {
            opacity: '1',
          },
          '100%': {
            transform: 'translateY(100vh) translateX(50px) rotate(360deg)',
            opacity: '0',
          },
        },
        sakuraSway: {
          '0%, 100%': {
            transform: 'translateX(0)',
          },
          '50%': {
            transform: 'translateX(20px)',
          },
        },
        float: {
          '0%, 100%': {
            transform: 'translateY(0)',
          },
          '50%': {
            transform: 'translateY(-20px)',
          },
        },
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        fadeIn: {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1',
          },
        },
        kanjiFloat: {
          '0%': {
            transform: 'translateY(0)',
          },
          '100%': {
            transform: 'translateY(-50vh)',
          },
        },
        kanjiFade: {
          '0%': {
            opacity: '0.03',
          },
          '100%': {
            opacity: '0.06',
          },
        },
        borderGlow: {
          '0%, 100%': {
            boxShadow: '0 0 5px rgba(201, 162, 77, 0.3)',
          },
          '50%': {
            boxShadow: '0 0 20px rgba(201, 162, 77, 0.5)',
          },
        },
      },
    },
  },
  plugins: [],
}
