# 🚀 Guía de Despliegue

Este documento explica cómo desplegar tu sitio web de Hotel Japonés en diferentes plataformas.

## 📦 Preparación para Producción

### 1. Build del Proyecto

```bash
npm run build
```

Esto genera una carpeta `dist/` con los archivos optimizados para producción.

### 2. Vista Previa Local del Build

```bash
npm run preview
```

Prueba el build localmente antes de desplegar.

## 🌐 Opciones de Despliegue

### Vercel (Recomendado - Más Fácil)

#### Opción A: CLI

```bash
# Instalar Vercel CLI
npm install -g vercel

# Desplegar
cd c:\Users\blcdo\Downloads\LARCAD\Hotel-Japones
vercel
```

#### Opción B: GitHub + Vercel

1. Crea un repositorio en GitHub
2. Push tu código:
```bash
git init
git add .
git commit -m "Initial commit - Hotel Japonés"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/hotel-japones.git
git push -u origin main
```
3. Ve a [vercel.com](https://vercel.com)
4. Click en "New Project"
5. Importa tu repositorio de GitHub
6. Vercel detectará automáticamente Vite
7. Click en "Deploy"

**Configuración automática detectada por Vercel:**
- Framework: Vite
- Build Command: `npm run build`
- Output Directory: `dist`

---

### Netlify

#### Opción A: Drag & Drop

1. Ejecuta `npm run build`
2. Ve a [app.netlify.com/drop](https://app.netlify.com/drop)
3. Arrastra la carpeta `dist/`
4. ¡Listo!

#### Opción B: CLI

```bash
# Instalar Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Desplegar
npm run build
netlify deploy --prod
```

#### Opción C: GitHub + Netlify

1. Push tu código a GitHub (ver pasos arriba)
2. Ve a [netlify.com](https://netlify.com)
3. Click en "Add new site" → "Import an existing project"
4. Conecta GitHub y selecciona tu repo
5. Configuración:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click en "Deploy site"

---

### GitHub Pages

#### Configuración

1. Instala gh-pages:
```bash
npm install -D gh-pages
```

2. Modifica [package.json](package.json):
```json
{
  "homepage": "https://TU_USUARIO.github.io/hotel-japones",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

3. Modifica [vite.config.js](vite.config.js):
```javascript
export default defineConfig({
  plugins: [react()],
  base: '/hotel-japones/'  // ← Agregar esta línea
})
```

4. Despliega:
```bash
npm run deploy
```

5. Configura GitHub Pages:
   - Ve a tu repositorio en GitHub
   - Settings → Pages
   - Source: gh-pages branch
   - Click en Save

---

### Render

1. Ve a [render.com](https://render.com)
2. Click en "New" → "Static Site"
3. Conecta tu repositorio de GitHub
4. Configuración:
   - Build Command: `npm run build`
   - Publish Directory: `dist`
5. Click en "Create Static Site"

---

### Firebase Hosting

```bash
# Instalar Firebase CLI
npm install -g firebase-tools

# Login
firebase login

# Inicializar
firebase init hosting

# Configuración:
# - Public directory: dist
# - Single-page app: Yes
# - GitHub auto deploy: No (opcional)

# Build y deploy
npm run build
firebase deploy
```

---

## 🔧 Optimizaciones Pre-Despliegue

### 1. Optimizar Imágenes

Considera usar servicios de CDN para imágenes:
- [Cloudinary](https://cloudinary.com)
- [Imgix](https://imgix.com)
- [Unsplash Source](https://source.unsplash.com)

### 2. Variables de Entorno

Crea `.env.production`:

```env
VITE_API_URL=https://tu-api.com
VITE_CONTACT_EMAIL=info@hotelzen.jp
```

Usar en el código:
```javascript
const apiUrl = import.meta.env.VITE_API_URL;
```

### 3. Compresión

Los servicios modernos (Vercel, Netlify) ya incluyen:
- Compresión Gzip/Brotli
- HTTP/2
- Caching automático
- CDN global

### 4. Analytics

#### Google Analytics

Agrega en [index.html](index.html):

```html
<head>
  <!-- Google Analytics -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'GA_MEASUREMENT_ID');
  </script>
</head>
```

---

## 🌍 Dominio Personalizado

### Vercel

1. Ve a tu proyecto en Vercel
2. Settings → Domains
3. Agrega tu dominio
4. Configura DNS según las instrucciones

### Netlify

1. Ve a tu sitio en Netlify
2. Domain Settings → Add custom domain
3. Sigue las instrucciones de configuración DNS

### Cloudflare (Opcional)

Para mejor rendimiento y seguridad:

1. Agrega tu sitio a Cloudflare
2. Apunta los DNS a Vercel/Netlify
3. Activa:
   - SSL/TLS
   - Auto Minify (HTML, CSS, JS)
   - Brotli compression
   - Caching

---

## 📊 Post-Despliegue

### Checklist de Verificación

- [ ] Todas las secciones cargan correctamente
- [ ] Animaciones de sakura funcionan
- [ ] Navegación responsive funciona
- [ ] Formulario de contacto funciona
- [ ] Imágenes cargan (sin errores 404)
- [ ] Links sociales apuntan a URLs correctas
- [ ] Performance score > 90 (Lighthouse)
- [ ] Mobile responsiveness verificada
- [ ] SEO básico configurado

### Herramientas de Testing

1. **Lighthouse** (Chrome DevTools)
   - Performance
   - Accessibility
   - Best Practices
   - SEO

2. **Google PageSpeed Insights**
   ```
   https://pagespeed.web.dev/
   ```

3. **GTmetrix**
   ```
   https://gtmetrix.com/
   ```

4. **WebPageTest**
   ```
   https://www.webpagetest.org/
   ```

---

## 🔄 CI/CD Automático

### GitHub Actions (Auto-deploy)

Crea `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Vercel

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm install
      - run: npm run build
      - uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
```

---

## 🐛 Troubleshooting

### Error: Rutas no funcionan después del deploy

**Solución**: Configura redirects

**Netlify** - Crea `public/_redirects`:
```
/*    /index.html   200
```

**Vercel** - Crea `vercel.json`:
```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

### Error: Imágenes no cargan

- Verifica que las URLs sean HTTPS
- Considera usar placeholders locales en `/public`
- Usa servicios de CDN confiables

### Error: Animaciones lentas

- Verifica que la compresión esté activa
- Usa `will-change` CSS (ya implementado)
- Considera lazy loading para imágenes pesadas

---

## 📈 Mejoras Continuas

1. **Monitoreo**
   - Vercel Analytics
   - Google Analytics
   - Sentry (errores)

2. **Performance**
   - Lazy load images
   - Code splitting
   - Preload critical assets

3. **SEO**
   - Sitemap.xml
   - Robots.txt
   - Meta tags personalizados

---

## 🎉 ¡Listo!

Tu sitio web de Hotel Japonés está ahora desplegado y accesible mundialmente.

**URLs típicas después del despliegue:**
- Vercel: `https://hotel-japones.vercel.app`
- Netlify: `https://hotel-japones.netlify.app`
- GitHub Pages: `https://tuusuario.github.io/hotel-japones`

---

**Soporte**: Si encuentras problemas, consulta la documentación oficial:
- [Vite Deploy Guide](https://vitejs.dev/guide/static-deploy.html)
- [Vercel Docs](https://vercel.com/docs)
- [Netlify Docs](https://docs.netlify.com)
