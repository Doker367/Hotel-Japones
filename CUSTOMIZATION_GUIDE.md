# Guía de Uso y Personalización

## 🎨 Personalización de Colores

### Paleta Principal

Editar en [tailwind.config.js](tailwind.config.js):

```javascript
colors: {
  'ivory': '#FFFFF0',        // Fondo principal
  'sand': '#E8DCC4',         // Fondos alternativos
  'stone': '#9E9E9E',        // Textos secundarios
  'deep-black': '#1A1A1A',   // Texto principal
  'japanese-red': '#B91C1C', // Acentos (usar con moderación)
}
```

### Colores de Sakura

Editar en [src/components/SakuraBackground.jsx](src/components/SakuraBackground.jsx):

```javascript
// Buscar el SVG del pétalo
fill="#FFB7C5"  // Rosa principal
fill="#FFC0D3"  // Rosa secundario
fill="#FFDAE3"  // Rosa pálido
fill="#FFE4EA"  // Centro
```

## 🌸 Ajustar Animaciones de Sakura

### Velocidad de Caída

En [src/components/SakuraBackground.css](src/components/SakuraBackground.css):

```css
.sakura-petal {
  /* Cambiar estas duraciones */
  animation: sakuraFall 15s linear infinite;
}

/* Para caída más lenta */
animation-duration: 25s;

/* Para caída más rápida */
animation-duration: 10s;
```

### Cantidad de Pétalos

En [src/components/SakuraBackground.jsx](src/components/SakuraBackground.jsx):

```javascript
const petalCount = window.innerWidth < 768 ? 15 : 30;
//                                          móvil ↑   desktop ↑
// Aumentar números para más pétalos
const petalCount = window.innerWidth < 768 ? 25 : 50;
```

### Intensidad del Balanceo

En [src/components/SakuraBackground.css](src/components/SakuraBackground.css):

```css
@keyframes sakuraSway {
  0%, 100% { transform: translateX(0); }
  50% { transform: translateX(30px); }  /* ← Cambiar este valor */
}
```

## 🖼️ Cambiar Imágenes

### Hero Principal

En [src/components/Hero.jsx](src/components/Hero.jsx):

```javascript
<img
  src="TU_IMAGEN_AQUI"
  alt="Hotel Japonés Premium"
/>
```

### Habitaciones

En [src/components/Rooms.jsx](src/components/Rooms.jsx):

```javascript
const rooms = [
  {
    image: 'URL_DE_TU_IMAGEN',
    // ...
  }
];
```

### Servicios y Galería

Similar a habitaciones, buscar el array de objetos y cambiar las propiedades `image` o `url`.

## 🎭 Ajustar Efectos Parallax

### Intensidad del Parallax

En [src/components/Hero.jsx](src/components/Hero.jsx):

```javascript
// Valores actuales: [0, 500], [0, 100]
const yImage = useTransform(scrollY, [0, 500], [0, 100]);
//                                                    ↑ Cambiar para más/menos parallax

// Más intenso
const yImage = useTransform(scrollY, [0, 500], [0, 200]);

// Más sutil
const yImage = useTransform(scrollY, [0, 500], [0, 50]);
```

### Desactivar Parallax Completamente

```javascript
// Remover o comentar la prop style
<motion.div
  // style={{ y: yImage }}  ← Comentar esta línea
  className="absolute inset-0 z-0"
>
```

## 📱 Personalizar Navegación

### Agregar/Quitar Enlaces

En [src/components/Navbar.jsx](src/components/Navbar.jsx):

```javascript
const menuItems = [
  { name: 'Inicio', href: '#hero' },
  { name: 'Nuevo Enlace', href: '#nueva-seccion' },  // ← Agregar aquí
  // ...
];
```

### Cambiar Logo

```javascript
<span className="font-zen text-3xl tracking-wider">
  和の宿  {/* ← Cambiar texto aquí */}
</span>
<span className="font-zen text-xs tracking-widest">
  WA NO YADO  {/* ← Y aquí */}
</span>
```

## 🎨 Tipografía

### Cambiar Fuentes

En [src/index.css](src/index.css):

```css
/* Cambiar el import de Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=TU_FUENTE');
```

En [tailwind.config.js](tailwind.config.js):

```javascript
fontFamily: {
  'zen': ['Nueva Fuente Serif', 'serif'],
  'modern': ['Nueva Fuente Sans', 'sans-serif'],
}
```

### Tamaños de Título

En [src/index.css](src/index.css):

```css
.section-title {
  @apply font-zen text-4xl md:text-5xl lg:text-6xl;
  /*                      ↑     ↑           ↑    */
  /*                   móvil tablet     desktop  */
}
```

## 🔧 Animaciones de Framer Motion

### Velocidad de Aparición

En cualquier componente que use Framer Motion:

```javascript
transition={{ 
  duration: 1,  // ← Cambiar duración (segundos)
  delay: 0.2,   // ← Cambiar delay
  ease: [0.22, 1, 0.36, 1]  // ← Curva de aceleración
}}
```

### Desactivar Animaciones

```javascript
// Cambiar de:
initial={{ opacity: 0, y: 60 }}
animate={{ opacity: 1, y: 0 }}

// A:
initial={{ opacity: 1, y: 0 }}
animate={{ opacity: 1, y: 0 }}
```

## 📝 Formulario de Reservas

### Conectar con Backend

En [src/components/Booking.jsx](src/components/Booking.jsx):

```javascript
const handleSubmit = async (e) => {
  e.preventDefault();
  
  // Reemplazar alert con llamada API
  try {
    const response = await fetch('TU_API_URL', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });
    const data = await response.json();
    // Manejar respuesta
  } catch (error) {
    console.error('Error:', error);
  }
};
```

### Agregar Campos

```javascript
// En formData state
const [formData, setFormData] = useState({
  // ... campos existentes
  nuevoCampo: '',  // ← Agregar aquí
});

// En el JSX
<input
  type="text"
  name="nuevocampo"
  value={formData.nuevocampo}
  onChange={handleChange}
/>
```

## 🗺️ Integrar Google Maps

En [src/components/Contact.jsx](src/components/Contact.jsx):

```javascript
// Reemplazar el div del mapa con:
<iframe
  src="https://www.google.com/maps/embed?pb=TU_EMBED_URL"
  width="100%"
  height="600"
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
/>
```

## 🌐 SEO y Metadata

En [index.html](index.html):

```html
<head>
  <title>Hotel Japonés Premium - Wa no Yado</title>
  <meta name="description" content="Tu descripción aquí" />
  <meta property="og:title" content="Hotel Japonés Premium" />
  <meta property="og:image" content="URL_IMAGEN_PREVIEW" />
</head>
```

## 🚀 Despliegue

### Build para Producción

```bash
npm run build
```

Esto genera una carpeta `dist/` lista para desplegar.

### Desplegar en Vercel

```bash
npm install -g vercel
vercel
```

### Desplegar en Netlify

```bash
npm install -g netlify-cli
netlify deploy --prod
```

## 📊 Optimización de Imágenes

### Usar WebP

Reemplaza JPG/PNG por WebP para mejor rendimiento:

```jsx
<picture>
  <source srcSet="imagen.webp" type="image/webp" />
  <img src="imagen.jpg" alt="..." />
</picture>
```

### Lazy Loading

Ya implementado por defecto en navegadores modernos, pero puedes forzarlo:

```jsx
<img loading="lazy" src="..." alt="..." />
```

## 🎯 Consejos de Diseño

### Mantener Estética Zen

- **Menos es más**: No sobrecargues de elementos
- **Espacios en blanco**: Son parte del diseño
- **Colores sutiles**: Evita colores brillantes
- **Animaciones lentas**: Tranquilidad antes que impacto
- **Tipografía clara**: Legibilidad ante todo

### Agregar Nuevas Secciones

1. Crear componente en `src/components/`
2. Importar en `App.jsx`
3. Agregar dentro de `<main>` con ID único
4. Agregar enlace en `Navbar.jsx`

## 🐛 Troubleshooting

### Las animaciones no funcionan

- Verificar que PostCSS esté configurado
- Limpiar caché: `npm run dev -- --force`

### Tailwind no aplica estilos

- Verificar [tailwind.config.js](tailwind.config.js)
- Asegurarse que `@tailwind` esté en [index.css](src/index.css)

### Imágenes no cargan

- Verificar URLs
- Usar HTTPS para imágenes externas
- Considerar usar imágenes locales en `/public`

---

**¿Dudas o sugerencias?** Consulta el [README.md](README.md) o la [documentación de Sakura](SAKURA_ANIMATION_DOCS.md)
