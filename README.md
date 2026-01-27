# 🚕 Servitaxi S.A. - Página Web Oficial

Sitio web corporativo de **Servitaxi S.A.**, empresa líder en servicios de transporte de pasajeros y encomiendas en Popayán, Colombia.

## ✨ Características

- 🏠 **Página de inicio** con carrusel de imágenes
- ℹ️ **¿Quiénes somos?** - Historia y misión de la empresa
- 🚖 **Servicios** - Transporte, encomiendas y serviteca
- 📰 **Noticias** - Sistema de gestión de noticias con filtros *(NUEVO)*
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
├── public/               # Archivos estáticos (imágenes, logos)
├── src/
│   ├── components/       # Componentes reutilizables
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── NewsCard.jsx     ← NUEVO
│   │   ├── NewsModal.jsx    ← NUEVO
│   │   └── ServiceCard.jsx  ← NUEVO
│   ├── data/            # Datos y constantes ← NUEVO
│   │   ├── constants.js
│   │   └── noticias.json
│   ├── pages/           # Páginas de la aplicación
│   │   ├── Home.jsx
│   │   ├── Noticias.jsx     ← NUEVO
│   │   ├── Quienessomos.jsx
│   │   ├── Servicios.jsx
│   │   └── Contactanos.jsx
│   ├── assets/          # Recursos (fuentes)
│   ├── App.jsx          # Componente principal
│   ├── main.jsx         # Punto de entrada
│   └── index.css        # Estilos globales
├── NOTICIAS_README.md   # Guía de gestión de noticias ← NUEVO
├── ANALISIS_MEJORAS.md  # Análisis de buenas prácticas ← NUEVO
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

El proyecto incluye un **sistema completo de gestión de noticias** fácil de usar.

### Cómo agregar una noticia

1. Abre el archivo `src/data/noticias.json`
2. Agrega un nuevo objeto siguiendo esta estructura:

```json
{
  "id": 4,
  "titulo": "Tu título aquí",
  "resumen": "Resumen breve",
  "contenido": "Contenido completo de la noticia...",
  "imagen": "/ruta-imagen.jpg",
  "fecha": "2025-01-27",
  "autor": "Servitaxi S.A.",
  "categoria": "Promociones",
  "destacada": false
}
```

3. Coloca las imágenes en la carpeta `public/`

Para más detalles, consulta [NOTICIAS_README.md](./NOTICIAS_README.md)

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

## 📊 Análisis y Mejoras

Para un análisis detallado de las buenas prácticas implementadas y mejoras realizadas, consulta:
- [ANALISIS_MEJORAS.md](./ANALISIS_MEJORAS.md)

## 🤝 Contribución

Este es un proyecto privado de Servitaxi S.A.

## 📄 Licencia

© 2025 Servitaxi S.A. Todos los derechos reservados.

## 👨‍💻 Desarrollador

Desarrollado por [@juancmartinezf](https://www.linkedin.com/in/juan-mart%C3%ADnez-b83a7b302/)

---

**Transportamos lo más valioso de la ciudad** 🚕💛

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
