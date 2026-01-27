# 📰 Carrusel de Noticias - Guía Rápida

## 🎯 ¿Qué es el Carrusel de Noticias?

El carrusel de noticias en el Home muestra **solo las noticias marcadas como "destacadas"**. Es perfecto para mostrar las noticias más importantes y recientes.

---

## ✨ Características

- ✅ Muestra solo noticias destacadas
- ✅ Tarjetas compactas con imagen y resumen
- ✅ Modal expandible con contenido completo
- ✅ Botón para ver archivos adjuntos (PDF o imágenes)
- ✅ Scroll horizontal en desktop
- ✅ Enlace directo a la página de todas las noticias

---

## 📝 Cómo Agregar una Noticia al Carrusel

### Paso 1: Edita el archivo JSON
Abre: `src/data/noticias.json`

### Paso 2: Agrega tu noticia
```json
{
  "id": 4,
  "titulo": "Tu título aquí",
  "resumen": "Resumen breve (2-3 líneas)",
  "contenido": "Contenido completo más detallado...",
  "imagen": "/tu-imagen.jpg",
  "fecha": "2025-01-27",
  "autor": "Servitaxi S.A.",
  "categoria": "Promociones",
  "destacada": true,  // ← IMPORTANTE: true para aparecer en el carrusel
  "archivoAdjunto": "/archivo.pdf"  // ← OPCIONAL: PDF o imagen
}
```

### Paso 3: Campos importantes

#### `destacada` (OBLIGATORIO para el carrusel)
- `true` → Aparece en el carrusel del Home
- `false` → Solo aparece en la página de Noticias

#### `archivoAdjunto` (OPCIONAL)
- Puede ser un PDF: `"/documento.pdf"`
- Puede ser una imagen: `"/imagen.jpg"`
- Puede ser `null` si no hay archivo

---

## 📂 Archivos Adjuntos

### Tipos soportados:
- **PDF**: `.pdf`
- **Imágenes**: `.jpg`, `.jpeg`, `.png`, `.svg`, `.webp`

### Cómo agregar un archivo adjunto:

1. **Coloca el archivo** en la carpeta `public/`
   ```
   public/
   ├── mi-documento.pdf
   ├── mi-imagen.jpg
   ```

2. **Referencia en JSON**
   ```json
   "archivoAdjunto": "/mi-documento.pdf"
   ```

3. **En el modal** aparecerá un botón:
   - PDF: "📄 Ver PDF completo"
   - Imagen: "🖼️ Ver imagen completa"

---

## 🎨 Mejores Prácticas

### Imágenes
- **Tamaño**: 800x600px o similar
- **Peso**: Máximo 300KB
- **Formato**: JPG preferiblemente

### Textos
- **Título**: Máximo 60 caracteres
- **Resumen**: 2-3 líneas (150-200 caracteres)
- **Contenido**: Sin límite, pero conciso

### Cuántas noticias destacar
- Recomendado: **2-4 noticias destacadas**
- Máximo visible: Las que quepan en pantalla
- Se puede hacer scroll para ver más

---

## 🔄 Diferencia con la Página de Noticias

| Característica | Carrusel (Home) | Página Noticias |
|----------------|----------------|-----------------|
| Ubicación | Página principal | /noticias |
| Noticias mostradas | Solo destacadas | Todas |
| Diseño | Carrusel horizontal | Grid de tarjetas |
| Filtros | No | Sí (categoría, orden) |
| Propósito | Destacar importantes | Repositorio completo |

---

## 📋 Ejemplos

### Noticia con PDF
```json
{
  "id": 5,
  "titulo": "Tarifas 2025",
  "resumen": "Conoce nuestras nuevas tarifas para el año 2025",
  "contenido": "Hemos actualizado nuestras tarifas para ofrecerte el mejor servicio. Descarga el documento completo para ver todos los detalles.",
  "imagen": "/tarifas-2025.jpg",
  "fecha": "2025-01-20",
  "autor": "Servitaxi S.A.",
  "categoria": "Información",
  "destacada": true,
  "archivoAdjunto": "/tarifas-2025.pdf"
}
```

### Noticia con Imagen
```json
{
  "id": 6,
  "titulo": "Nuevo Horario de Atención",
  "resumen": "Revisa nuestro horario actualizado",
  "contenido": "A partir del próximo mes tendremos nuevos horarios. Ve la imagen completa con todos los detalles.",
  "imagen": "/horarios-preview.jpg",
  "fecha": "2025-01-25",
  "autor": "Servitaxi S.A.",
  "categoria": "Información",
  "destacada": true,
  "archivoAdjunto": "/horarios-completo.jpg"
}
```

### Noticia sin Archivo
```json
{
  "id": 7,
  "titulo": "Feliz Año Nuevo",
  "resumen": "Te deseamos un próspero 2025",
  "contenido": "Todo el equipo de Servitaxi te desea un feliz y próspero año nuevo. Gracias por preferirnos.",
  "imagen": "/ano-nuevo.jpg",
  "fecha": "2025-01-01",
  "autor": "Servitaxi S.A.",
  "categoria": "General",
  "destacada": true,
  "archivoAdjunto": null
}
```

---

## 🚫 Ocultar Campaña Especial

La sección "¡Tenemos algo para ti!" está **comentada** en el código.

### Para mostrarla de nuevo:

1. Abre `src/pages/Home.jsx`
2. Busca esta sección (línea ~253):
```jsx
{/* Sección de Campañas Especiales - TEMPORALMENTE OCULTA */}
{/* 
<h2 className="text-3xl py-6...">
    ¡Tenemos algo para ti!
</h2>
...
*/}
```

3. Elimina los `{/*` y `*/}` para descomentar

---

## ✅ Checklist Rápido

Antes de publicar una noticia destacada:

- [ ] La imagen está en `public/` y es de buena calidad
- [ ] `destacada: true` para que aparezca en el carrusel
- [ ] El título es claro y conciso (< 60 caracteres)
- [ ] El resumen es atractivo (2-3 líneas)
- [ ] Si hay archivo adjunto, está en `public/`
- [ ] La ruta del archivo empieza con `/`
- [ ] Probado en desktop y mobile

---

## 🎯 Tips

1. **No satures el carrusel**: Mantén 2-4 noticias destacadas
2. **Actualiza regularmente**: Desmarca `destacada` en noticias antiguas
3. **Imágenes consistentes**: Usa imágenes del mismo estilo
4. **Archivos ligeros**: PDFs < 2MB, Imágenes < 500KB
5. **Prueba el modal**: Verifica que el botón de archivo funcione

---

**¡El carrusel está listo para mostrar tus noticias más importantes!** 🎉

*Transportamos lo más valioso de la ciudad* 🚕💛
