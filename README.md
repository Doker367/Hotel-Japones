# Hotel Japonés Premium - Web Elegante con Sakura Animado

Una página web de hotel japonés premium con estética zen auténtica, animaciones CSS de flores de cerezo (sakura) y efectos parallax sutiles.

## 🌸 Características

- **Animaciones CSS Puras de Sakura**: Flores de cerezo cayendo suavemente, animadas solo con CSS
- **Fondo Japonés Multicapa**: Patrones tradicionales japoneses (Seigaiha) con gradientes atmosféricos
- **Efectos Parallax Sutiles**: Movimiento zen y armónico en Hero y secciones principales
- **Diseño Responsive**: Mobile-first, optimizado para todos los dispositivos
- **Animaciones Framer Motion**: Transiciones suaves y elegantes
- **Estética Wabi-Sabi**: Colores naturales, minimalismo japonés

## 🛠️ Tecnologías

- React 18
- Vite
- Tailwind CSS
- Framer Motion
- CSS3 Animations

## 📦 Instalación

Las dependencias ya están instaladas. Si necesitas reinstalar:

```bash
npm install
```

## 🚀 Desarrollo

Para iniciar el servidor de desarrollo:

```bash
npm run dev
```

La aplicación estará disponible en [http://localhost:5173](http://localhost:5173)

## 🏗️ Estructura del Proyecto

```
src/
├── components/
│   ├── SakuraBackground.jsx    # Fondo animado con sakura
│   ├── SakuraBackground.css    # Animaciones CSS puras
│   ├── Navbar.jsx              # Navegación adaptativa
│   ├── Hero.jsx                # Hero con parallax
│   ├── Experience.jsx          # Experiencia japonesa
│   ├── Rooms.jsx               # Habitaciones y suites
│   ├── Services.jsx            # Servicios premium
│   ├── Gallery.jsx             # Galería de imágenes
│   ├── Booking.jsx             # Formulario de reservas
│   ├── Contact.jsx             # Contacto y ubicación
│   └── Footer.jsx              # Pie de página
├── App.jsx                     # Componente principal
├── index.css                   # Estilos globales
└── main.jsx                    # Punto de entrada
```

## 🎨 Paleta de Colores

- **Ivory (Marfil)**: #FFFFF0
- **Sand (Arena)**: #E8DCC4
- **Stone (Piedra)**: #9E9E9E
- **Deep Black**: #1A1A1A
- **Japanese Red**: #B91C1C (acentos sutiles)

## 🌸 Animaciones de Sakura

Las flores de cerezo están implementadas con:
- **CSS Keyframes puras** (sin librerías JavaScript)
- Movimiento orgánico y lento (12-20 segundos)
- Balanceo horizontal suave
- Opacidad variable para profundidad
- Optimizado para móviles (menos pétalos)
- Respeta preferencias de movimiento reducido

## 📱 Responsive Design

- **Mobile**: Animaciones reducidas, navegación adaptada
- **Tablet**: Layout optimizado
- **Desktop**: Experiencia completa con parallax

## 🎭 Filosofía de Diseño

Inspirado en:
- **Wabi-sabi**: Belleza de lo imperfecto
- **Zen**: Simplicidad y calma
- **Omotenashi**: Hospitalidad japonesa
- **Ryokan moderno**: Tradición + contemporáneo

## 🏛️ Secciones

1. **Hero**: Imagen impactante con parallax y sakura
2. **Experiencia**: Omotenashi, jardín zen, ceremonia del té
3. **Habitaciones**: Tatami Suite, Modern Zen, Imperial Suite
4. **Servicios**: Onsen, spa, restaurante kaiseki, jardín
5. **Galería**: Fotografías premium con modal
6. **Reservaciones**: Formulario elegante y funcional
7. **Contacto**: Información y ubicación

## 🚀 Build para Producción

```bash
npm run build
```

## 📝 Notas

- Las imágenes son placeholders de Unsplash
- El mapa es un placeholder (integrar Google Maps en producción)
- El formulario de reservas muestra un alert (conectar con backend)
- Fuentes: Noto Serif JP (zen) + Inter (moderna)

## 🌐 Características UX

- Scroll suave entre secciones
- Micro-interacciones en botones
- Hover states elegantes
- Loading optimizado
- Accesibilidad considerada
## Pendiente
- chatbot
- menu
- servicios
- acciones en cartas del menu 
- reservas 

## 💫 Performance

- Lazy loading en imágenes
- Animaciones con will-change
- Componentes optimizados
- CSS puro para sakura (sin JS adicional)

---

Desarrollado con 和の心 (Wa no Kokoro - El espíritu de la armonía)

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
