# 🚕 Servitaxi S.A. - Página Web Oficial

Sitio web corporativo de **Servitaxi S.A.**, empresa de transporte público individual (taxi) y servicios complementarios con sede en Popayán, Colombia.

## ✨ Características

- 🏠 **Página de inicio** con carrusel de imágenes/video
- ℹ️ **¿Quiénes somos?** - Historia y misión de la empresa
- 🚖 **Servicios** - Transporte, encomiendas y serviteca
- 📰 **Noticias** - Sistema de gestión de noticias con filtros
- 🎬 **Videos** - Galería de videos promocionales gestionada por JSON
- 📞 **Contacto** - Formulario y información de contacto
- 📱 **Diseño responsive** - Optimizado para móviles y escritorio
- ⚡ **Performance optimizada** - Lazy loading y animaciones fluidas

## 🛠️ Tecnologías

- **React 19** - Framework de JavaScript
- **React Router v7** - Navegación SPA
- **Tailwind CSS v4** - Framework de CSS
- **Vite** - Build tool y dev server
- **React Icons** - Iconografía
- **EmailJS** - Servicio de emails

## 📁 Estructura del Proyecto

```
servitaxi-pagina-web/
├── public/               # Archivos estáticos (imágenes, videos, logos)
├── src/
│   ├── components/       # Componentes reutilizables
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── MapSection.jsx
│   │   ├── ServiceCard.jsx
│   │   ├── VideoCard.jsx        # Tarjeta de video (ver VIDEOS_README.md)
│   │   ├── NewsCard.jsx
│   │   ├── NewsCardCarousel.jsx
│   │   ├── NewsModal.jsx
│   │   ├── NewsModalCarousel.jsx
│   │   └── NewsContent.jsx
│   ├── data/             # Contenido gestionado por JSON
│   │   ├── constants.js         # Datos estáticos (contacto, servicios, rutas)
│   │   ├── noticias.json        # Noticias y comunicados
│   │   └── videos.json          # Videos promocionales
│   ├── pages/            # Páginas de la aplicación
│   │   ├── Home.jsx
│   │   ├── Noticias.jsx
│   │   ├── Quienessomos.jsx
│   │   ├── Servicios.jsx
│   │   ├── Contactanos.jsx
│   │   ├── PoliticaDatos.jsx
│   │   ├── ProteccionDatos.jsx
│   │   ├── AvisodePrivacidad.jsx
│   │   ├── TyCPasajerosApp.jsx
│   │   ├── TyCTaxbox.jsx
│   │   └── scrolltop.jsx
│   ├── utils/
│   │   └── helpers.js
│   ├── App.jsx           # Componente principal y rutas
│   └── main.jsx          # Punto de entrada
├── NOTICIAS_README.md    # Guía de gestión de noticias
├── VIDEOS_README.md      # Guía de gestión de videos
└── README.md
```

## 🚀 Inicio Rápido

### Prerrequisitos

- Node.js (v18 o superior)
- npm o yarn

### Instalación

1. Clona el repositorio
```bash
git clone [url-del-repositorio]
cd servitaxi-pagina-web
```

2. Instala las dependencias
```bash
npm install
```

3. Inicia el servidor de desarrollo
```bash
npm run dev
```

4. Abre tu navegador en `http://localhost:5173`

## 📜 Scripts Disponibles

```bash
npm run dev      # Inicia el servidor de desarrollo
npm run build    # Construye para producción
npm run preview  # Previsualiza la build de producción
npm run lint     # Ejecuta el linter
```

## 📰 Sistema de Noticias

El proyecto incluye un sistema de noticias gestionado completamente desde `src/data/noticias.json`, sin tocar código de componentes. Para instrucciones detalladas consulta [NOTICIAS_README.md](./NOTICIAS_README.md).

## 🎬 Sistema de Videos

Los videos del Home se gestionan desde `src/data/videos.json`. Cada entrada se renderiza automáticamente como una tarjeta de video. Para instrucciones detalladas consulta [VIDEOS_README.md](./VIDEOS_README.md).

## 🎨 Personalización

### Colores de la Marca

Los colores principales están definidos en Tailwind CSS:
- **Amarillo**: `#FBBF24` (yellow-400)
- **Rojo**: `#DC2626` (red-600)
- **Negro**: `#000000`
- **Blanco**: `#FFFFFF`

### Fuentes

- **Instrument Sans** - Texto general
- **Lobster** - Títulos decorativos
- **Roboto** - Alternativa

## 📱 Características Responsivas

El sitio está optimizado para:
- 📱 Móviles (< 640px)
- 📱 Tablets (640px - 1024px)
- 💻 Escritorio (> 1024px)

## 🔗 Enlaces Importantes

- [Facebook](https://www.facebook.com/servitaxi.popayan)
- [Instagram](https://www.instagram.com/servitaxisa)
- [App Android](https://play.google.com/store/apps/details?id=co.gentedetaxi.servitaxi.pax)
- [App iOS](https://apps.apple.com/co/app/servitaxi-popayán/id1249544312)

## 📞 Contacto

- **Teléfonos**: (602) 8333333 - (602) 8233333
- **WhatsApp**: +57 302 835 9000
- **Dirección**: Calle 2 #11 - 41, Popayán, Colombia

## 🤝 Contribución

Este es un proyecto privado de Servitaxi S.A.

## 📄 Licencia

© 2026 Servitaxi S.A. Todos los derechos reservados.

## 👨‍💻 Desarrollador

Desarrollado por [@juancmartinezf](https://www.linkedin.com/in/juan-mart%C3%ADnez-b83a7b302/)

---

**Transportamos lo más valioso de la ciudad** 🚕💛
