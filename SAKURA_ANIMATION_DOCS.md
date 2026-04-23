# Documentación Técnica - Animaciones Sakura

## 🌸 Implementación de Flores de Cerezo Animadas con CSS Puro

Esta documentación explica en detalle cómo están implementadas las animaciones de sakura (flores de cerezo) utilizando únicamente CSS3, sin dependencias de JavaScript adicionales.

## Arquitectura del Sistema

### 1. Componente React (SakuraBackground.jsx)

El componente React genera dinámicamente los pétalos con propiedades aleatorias:

```javascript
- Posición horizontal aleatoria (0-100%)
- Delay de animación aleatorio (0-15s)
- Duración variable (12-20s)
- Tamaño aleatorio (0.5-1.2x)
- Rotación inicial aleatoria (0-360°)
- Opacidad variable (0.3-0.7)
```

**Cantidad adaptativa:**
- Desktop: 30 pétalos
- Mobile: 15 pétalos (optimización de rendimiento)

### 2. SVG del Pétalo

Cada pétalo es un SVG diseñado para parecer una flor de cerezo realista:

```svg
- 4 pétalos grandes (rosa claro #FFB7C5)
- 2 pétalos pequeños (rosa pálido #FFDAE3)
- Centro amarillo (#FFE4EA)
- Opacidades variables para profundidad
```

## Animaciones CSS

### Keyframe: sakuraFall

Controla el movimiento vertical y la rotación:

```css
0%: Inicio arriba de la pantalla, invisible
10%: Aparición gradual (fade in)
90%: Visible durante el recorrido
100%: Desaparición al llegar abajo + rotación completa
```

**Transformaciones:**
- `translateY`: -100vh → +100vh (caída completa)
- `translateX`: 0 → 50px (deriva horizontal)
- `rotate`: 0deg → 360deg (giro completo)

**Timing:**
- Duración base: 12-20 segundos
- Función: `linear` (caída constante)
- Loop: `infinite`

### Keyframe: sakuraSway

Añade balanceo horizontal suave:

```css
0%, 100%: Posición central
50%: Desplazamiento de 30px
```

**Características:**
- Duración: 4-6 segundos (independiente de la caída)
- Función: `ease-in-out` (movimiento orgánico)
- Loop: `infinite`

### Variaciones Naturales

Para evitar movimiento repetitivo, se aplican diferentes duraciones con selectores CSS:

```css
:nth-child(3n)   → 15s caída, 4s balanceo
:nth-child(3n+1) → 18s caída, 5s balanceo
:nth-child(3n+2) → 20s caída, 6s balanceo
```

## Efectos de Profundidad

### Blur y Opacidad

Simulan diferentes planos de profundidad:

```css
:nth-child(5n) → blur(0.5px), opacity 0.4 (plano medio)
:nth-child(7n) → blur(1px), opacity 0.3, scale(1.3) (plano lejano)
```

### Patrón Japonés de Fondo

**Patrón Seigaiha (olas):**
- Implementado con `radial-gradient`
- Opacidad muy baja (0.03)
- Tamaño: 80x40px
- Color: gris piedra (#9E9E9E)

## Gradiente Atmosférico

Añade profundidad visual:

```css
linear-gradient(
  180deg,
  transparent 0%,
  arena semi-transparente 50%,
  transparent 100%
)
```

## Optimizaciones de Rendimiento

### 1. Will-Change

```css
.sakura-petal {
  will-change: transform, opacity;
}
```

Indica al navegador que prepare estas propiedades para animación, mejorando el rendimiento.

### 2. Responsive Design

**Mobile (< 768px):**
- Reduce pétalos a 15
- Disminuye opacidad general
- Simplifica patrón de fondo
- Oculta pétalos adicionales con `:nth-child(n+16)`

### 3. Accesibilidad

**Prefers Reduced Motion:**
```css
@media (prefers-reduced-motion: reduce) {
  .sakura-petal {
    animation-duration: 30s;
    opacity: 0.3;
  }
}
```

Respeta las preferencias del sistema operativo del usuario.

## Integración con la Web

### Z-Index Hierarchy

```
- Sakura Container: z-index: 0 (fondo)
- Contenido principal: z-index: 10
- Navbar: z-index: 50
- Modal: z-index: 100
```

### Pointer Events

```css
.sakura-container {
  pointer-events: none;
}
```

Permite interacción con elementos debajo del fondo animado.

## Personalización

### Ajustar Velocidad

En `SakuraBackground.css`, modificar:

```css
animation-duration: 12s; /* Más rápido */
animation-duration: 25s; /* Más lento */
```

### Ajustar Cantidad

En `SakuraBackground.jsx`, cambiar:

```javascript
const petalCount = window.innerWidth < 768 ? 15 : 30;
// Aumentar el segundo número para más pétalos en desktop
```

### Cambiar Colores

Modificar los valores de `fill` en el SVG:

```javascript
fill="#FFB7C5" // Rosa claro
fill="#FFC0D3" // Rosa medio
fill="#FFDAE3" // Rosa pálido
```

## Consideraciones Técnicas

### Ventajas de CSS Puro

1. **Sin dependencias JavaScript**: Menor bundle size
2. **Rendimiento nativo**: Aceleración GPU del navegador
3. **Declarativo**: Más fácil de mantener
4. **Accesibilidad**: Respeta preferencias del sistema

### Limitaciones

1. No hay control dinámico post-render (usar JS si necesario)
2. Aleatoriedad limitada a valores iniciales
3. No hay física compleja (viento variable, etc.)

## Testing

### Verificar Rendimiento

1. Abrir DevTools → Performance
2. Grabar durante 10 segundos
3. Verificar FPS constante (60fps objetivo)
4. CPU debe estar < 30% en animaciones

### Verificar Responsive

1. DevTools → Device Mode
2. Probar diferentes tamaños
3. Verificar que móvil muestra menos pétalos
4. Confirmar que no hay scroll horizontal

## Futuras Mejoras

- [ ] Añadir dirección del viento (CSS variables con JS)
- [ ] Diferentes tipos de flores (plum blossoms)
- [ ] Estaciones del año (cambio de colores)
- [ ] Interacción al hover (pausa temporal)

---

**Desarrollado con atención al detalle y respeto por la estética japonesa** 🌸
