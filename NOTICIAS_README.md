# 📰 Sistema de Noticias - Servitaxi

## Gestión de Noticias

El sistema de noticias está diseñado para ser fácil de mantener. Todas las noticias se gestionan desde un archivo JSON.

### 📍 Ubicación del archivo

```
src/data/noticias.json
```

### ✏️ Cómo agregar una noticia

1. Abre el archivo `src/data/noticias.json`
2. Agrega un nuevo objeto al array con la siguiente estructura:

```json
{
  "id": 4,
  "titulo": "Título de tu noticia",
  "resumen": "Un resumen breve de la noticia (máximo 200 caracteres)",
  "contenido": "Contenido completo de la noticia. Puede ser extenso.",
  "imagen": "/ruta-a-tu-imagen.jpg",
  "fecha": "2025-01-27",
  "autor": "Servitaxi S.A.",
  "categoria": "Promociones",
  "destacada": false
}
```

### 🗑️ Cómo eliminar una noticia

Simplemente elimina el objeto completo de la noticia del archivo JSON.

### 📝 Campos explicados

- **id**: Número único e incremental
- **titulo**: Título principal de la noticia
- **resumen**: Texto corto que aparece en la tarjeta
- **contenido**: Texto completo que se muestra al expandir la noticia
- **imagen**: Ruta de la imagen (coloca las imágenes en la carpeta `public/`)
- **fecha**: Formato YYYY-MM-DD
- **autor**: Nombre del autor
- **categoria**: Puede ser: "General", "Promociones", "Información", "Eventos", etc.
- **destacada**: `true` para noticias importantes, `false` para normales

### 🖼️ Cómo agregar imágenes

1. Coloca la imagen en la carpeta `public/` de tu proyecto
2. Referencia la imagen en el JSON como `/nombre-imagen.jpg`

Ejemplo:
- Imagen ubicada en: `public/mi-noticia.jpg`
- En JSON usar: `"imagen": "/mi-noticia.jpg"`

### 📁 Categorías disponibles

Puedes usar cualquier categoría, las más comunes son:
- General
- Promociones
- Información
- Eventos
- Servicios

El sistema creará automáticamente filtros para todas las categorías que uses.

### ⭐ Noticias destacadas

Marca una noticia como destacada usando `"destacada": true`. Estas noticias:
- Aparecen con una insignia especial
- Se pueden ordenar primero usando el filtro

### 🎨 Personalización

El diseño mantiene los colores de la marca Servitaxi:
- Amarillo (#FBBF24) para destacados
- Rojo (#DC2626) para botones de acción
- Gris para textos secundarios

## 🚀 Características del sistema

- ✅ Tarjetas responsivas
- ✅ Sistema de filtros por categoría
- ✅ Ordenamiento (recientes, antiguos, destacadas)
- ✅ Modal expandible para leer noticias completas
- ✅ Diseño adaptable a móviles y escritorio
- ✅ Animaciones suaves
- ✅ Lazy loading de imágenes
- ✅ Accesibilidad mejorada
