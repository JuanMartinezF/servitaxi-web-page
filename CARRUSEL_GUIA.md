# 🎠 Guía del Carrusel Responsive - Home

## 📱 Sistema de Imágenes Dobles (Desktop + Mobile)

El carrusel ahora soporta **imágenes diferentes para desktop y móvil**, optimizando la experiencia en cada dispositivo.

---

## 📐 Especificaciones de Imágenes

### Desktop (Pantallas > 768px)
- **Formato recomendado**: Horizontal (landscape)
- **Dimensiones EXACTAS**: **1920x600 px**
- **Relación de aspecto**: 3.2:1 (muy horizontal)
- **Peso máximo**: 500KB
- **Formatos**: JPG, PNG, SVG, WebP

### Mobile (Pantallas < 768px)
- **Formato recomendado**: Casi cuadrado
- **Dimensiones EXACTAS**: **768x800 px**
- **Relación de aspecto**: 0.96:1 (casi cuadrado)
- **Peso máximo**: 300KB
- **Formatos**: JPG, PNG, SVG, WebP

⚠️ **IMPORTANTE**: Las imágenes deben tener estas dimensiones exactas para que se vean perfectamente sin distorsión. El carrusel usa `object-cover` para llenar el espacio manteniendo las proporciones.

---

## 📂 Estructura de Archivos

### Ubicación de Imágenes
Coloca tus imágenes en la carpeta `public/`:

```
public/
├── slide1-desktop.jpg    ← Imagen para escritorio
├── slide1-mobile.jpg     ← Imagen para móvil
├── slide2-desktop.jpg
├── slide2-mobile.jpg
└── ...
```

### Nomenclatura Recomendada
- Desktop: `nombre-descriptivo-desktop.jpg`
- Mobile: `nombre-descriptivo-mobile.jpg`

**Ejemplo:**
- `promo-navidad-desktop.jpg`
- `promo-navidad-mobile.jpg`

---

## ✏️ Cómo Agregar un Slide al Carrusel

### Paso 1: Preparar las Imágenes
1. Diseña/edita tu imagen para **desktop** (horizontal)
2. Diseña/edita tu imagen para **mobile** (vertical o cuadrada)
3. Guárdalas en la carpeta `public/`

### Paso 2: Editar el Código
Abre el archivo: `src/pages/Home.jsx`

Busca la sección `slides` (línea ~11) y agrega tu nuevo slide:

```jsx
const slides = [
    // ... slides existentes ...
    {
        id: 3,                                    // ← Incrementa el ID
        imageDesktop: "/tu-imagen-desktop.jpg",  // ← Ruta imagen desktop
        imageMobile: "/tu-imagen-mobile.jpg",    // ← Ruta imagen mobile
        title: "Tu título aquí",                 // ← Título (o null)
        subtitle: "Tu subtítulo aquí",           // ← Subtítulo (o null)
        buttonText: "Texto del botón"            // ← Botón (o null)
    }
];
```

### Paso 3: Guardar y Verificar
1. Guarda el archivo
2. El carrusel se actualizará automáticamente
3. Verifica en desktop y mobile

---

## 🎨 Opciones de Configuración

### Con Textos Superpuestos
```jsx
{
    id: 1,
    imageDesktop: "/promo-desktop.jpg",
    imageMobile: "/promo-mobile.jpg",
    title: "¡Gran Promoción!",
    subtitle: "50% de descuento en tu primer viaje",
    buttonText: "Descarga la App"
}
```

### Solo Imagen (Sin Textos)
```jsx
{
    id: 2,
    imageDesktop: "/banner-desktop.jpg",
    imageMobile: "/banner-mobile.jpg",
    title: null,
    subtitle: null,
    buttonText: null
}
```

### Con Título pero Sin Botón
```jsx
{
    id: 3,
    imageDesktop: "/info-desktop.jpg",
    imageMobile: "/info-mobile.jpg",
    title: "Horarios de Atención",
    subtitle: "Lunes a Sábado - 24 horas",
    buttonText: null
}
```

---

## ⚙️ Configuraciones del Carrusel

### Velocidad de Auto-avance
Por defecto: **8 segundos**

Para cambiar, modifica esta línea (aprox. línea 35):

```jsx
// Cambia 8000 por los milisegundos deseados
// 5000 = 5 segundos, 10000 = 10 segundos
}, 8000);
```

### Altura del Carrusel
Por defecto: 
- Mobile: 40% del viewport
- Desktop: 50% del viewport (menos header)

Para cambiar, busca esta línea (aprox. línea 58):

```jsx
// Modifica h-[40vh] para mobile y md:h-[calc((100vh-80px)*0.5)] para desktop
<section className="... h-[40vh] md:h-[calc((100vh-80px)*0.5)]">
```

---

## 📋 Ejemplo Completo

```jsx
const slides = [
    // Slide 1: Promoción con textos y botón
    {
        id: 1,
        imageDesktop: "/promo-verano-desktop.jpg",
        imageMobile: "/promo-verano-mobile.jpg",
        title: "Verano Servitaxi 2025",
        subtitle: "Viaja cómodo y seguro todo el verano",
        buttonText: "Consigue nuestra App"
    },
    
    // Slide 2: Banner informativo sin textos
    {
        id: 2,
        imageDesktop: "/pico-placa-desktop.jpg",
        imageMobile: "/pico-placa-mobile.jpg",
        title: null,
        subtitle: null,
        buttonText: null
    },
    
    // Slide 3: Anuncio con título pero sin botón
    {
        id: 3,
        imageDesktop: "/horarios-desktop.jpg",
        imageMobile: "/horarios-mobile.jpg",
        title: "Nuevos Horarios",
        subtitle: "Estamos disponibles 24/7 para servirte",
        buttonText: null
    }
];
```

---

## 🎯 Tips de Diseño

### Para Imágenes Desktop (1920x600px)
- Diseña en formato horizontal muy amplio
- Relación 3.2:1 (muy panorámica)
- El texto superpuesto se ve mejor centrado
- Deja espacio en el centro para títulos
- Usa colores contrastantes con el texto blanco
- Los elementos importantes deben estar en el centro horizontal

### Para Imágenes Mobile (768x800px)
- Diseña en formato casi cuadrado (ligeramente vertical)
- Relación 0.96:1
- El texto aparecerá centrado
- Asegúrate que los elementos importantes estén en el centro
- Evita texto pequeño en la imagen
- Aprovecha todo el espacio vertical

### Overlay Oscuro
Las imágenes tienen un filtro oscuro (`brightness-50`) para que el texto blanco sea legible. Si quieres ajustarlo:

```jsx
// Cambia brightness-50 por:
// brightness-25 (más oscuro)
// brightness-75 (más claro)
className="... brightness-50 ..."
```

---

## 🔍 Cómo Funciona

### Detección de Pantalla
El sistema usa clases de Tailwind CSS:
- `md:hidden` → Oculta en desktop, muestra en mobile
- `hidden md:block` → Oculta en mobile, muestra en desktop

### Breakpoint
- **Mobile**: < 768px (muestra `imageMobile`)
- **Desktop**: ≥ 768px (muestra `imageDesktop`)

### Carga de Imágenes
Ambas imágenes se cargan, pero solo una se muestra según el tamaño de pantalla. Esto asegura que al redimensionar la ventana, la imagen correcta aparezca inmediatamente.

---

## ❓ Preguntas Frecuentes

**P: ¿Puedo usar la misma imagen para mobile y desktop?**  
R: Sí, pero no es recomendado. Mejor optimiza cada versión.

**P: ¿Qué pasa si no tengo imagen mobile?**  
R: Usa la misma ruta en ambos campos temporalmente, pero diseña una versión mobile pronto.

**P: ¿Cuántos slides puedo tener?**  
R: Los que quieras, pero 3-5 es ideal para no abrumar al usuario.

**P: ¿Puedo deshabilitar el auto-avance?**  
R: Sí, comenta o elimina el `useEffect` del auto-avance (líneas 33-39).

**P: ¿Puedo cambiar el color del fondo?**  
R: Sí, busca `bg-[#102d46]` y cámbialo al color hexadecimal que prefieras.

---

## 🚀 Checklist Rápido

Antes de agregar un nuevo slide:

- [ ] Tengo imagen optimizada para desktop (horizontal)
- [ ] Tengo imagen optimizada para mobile (vertical/cuadrada)
- [ ] Las imágenes están en la carpeta `public/`
- [ ] He incrementado el `id` correctamente
- [ ] Las rutas empiezan con `/` (ejemplo: `/mi-imagen.jpg`)
- [ ] He probado en desktop y mobile
- [ ] Los textos superpuestos se leen bien

---

## 💡 Ejemplo Práctico

### Antes (una sola imagen)
```jsx
{
    id: 1,
    image: "/promo.jpg",  // ❌ Se ve mal en mobile
    title: "Promoción"
}
```

### Después (imágenes optimizadas)
```jsx
{
    id: 1,
    imageDesktop: "/promo-desktop.jpg",  // ✅ Optimizada para horizontal
    imageMobile: "/promo-mobile.jpg",    // ✅ Optimizada para vertical
    title: "Promoción"
}
```

---

**¡Ahora tu carrusel se verá perfecto en todos los dispositivos!** 🎉

*Transportamos lo más valioso de la ciudad* 🚕💛
