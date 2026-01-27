# 🚀 Guía de Inicio Rápido - Sistema de Noticias Servitaxi

## ¿Qué se implementó?

Se ha agregado un **sistema completo de gestión de noticias** a tu página web de Servitaxi. Ahora puedes:

✅ Publicar noticias, promociones y actualizaciones  
✅ Agregar/eliminar noticias fácilmente desde un archivo JSON  
✅ Filtrar noticias por categoría  
✅ Ordenar por fecha o destacados  
✅ Ver noticias en tarjetas expandibles  

## 🎯 Acceso Rápido

La página de noticias está disponible en:
- **Ruta**: `/noticias`
- **Navegación**: Desde el menú principal → "Noticias"

## 📝 Agregar tu primera noticia (3 pasos)

### Paso 1: Prepara tu imagen
1. Guarda la imagen de tu noticia en la carpeta `public/`
   - Ejemplo: `public/mi-noticia.jpg`
2. Asegúrate que la imagen sea de buena calidad pero no muy pesada (máx. 500KB)

### Paso 2: Edita el archivo de noticias
1. Abre: `src/data/noticias.json`
2. Agrega este código al final (antes del `]`):

```json
,
{
  "id": 4,
  "titulo": "Gran promoción de febrero",
  "resumen": "Aprovecha nuestras tarifas especiales durante todo el mes",
  "contenido": "Durante todo febrero, Servitaxi ofrece tarifas especiales en servicios de transporte. ¡No te lo pierdas! Más información en nuestras oficinas o llamando al (602) 8333333.",
  "imagen": "/mi-noticia.jpg",
  "fecha": "2025-02-01",
  "autor": "Servitaxi S.A.",
  "categoria": "Promociones",
  "destacada": true
}
```

### Paso 3: Guarda y prueba
1. Guarda el archivo `noticias.json`
2. Recarga tu navegador
3. ¡Tu noticia aparecerá automáticamente!

## 📋 Campos del JSON explicados

```json
{
  "id": 4,                    // ← Número único (incrementa el último)
  "titulo": "...",            // ← Título de la noticia
  "resumen": "...",           // ← Resumen corto (150-200 caracteres)
  "contenido": "...",         // ← Contenido completo
  "imagen": "/imagen.jpg",    // ← Ruta de la imagen (en /public)
  "fecha": "2025-02-01",      // ← Fecha YYYY-MM-DD
  "autor": "Servitaxi S.A.",  // ← Autor
  "categoria": "Promociones", // ← Ver categorías abajo
  "destacada": true           // ← true o false
}
```

## 🏷️ Categorías disponibles

Puedes usar cualquiera de estas (o crear nuevas):
- `"General"` - Noticias generales
- `"Promociones"` - Ofertas y promociones
- `"Información"` - Información importante
- `"Eventos"` - Eventos especiales
- `"Servicios"` - Actualizaciones de servicios

## ⭐ ¿Cuándo usar "destacada"?

Marca `"destacada": true` cuando:
- Es una promoción importante
- Es información urgente
- Quieres que aparezca con una insignia especial

## 🗑️ Eliminar una noticia

1. Abre `src/data/noticias.json`
2. Busca la noticia por su `id` o `titulo`
3. Elimina todo el bloque `{ ... }` de esa noticia
4. ⚠️ **Cuidado con las comas**: asegúrate de no dejar comas sueltas

## 💡 Ejemplos prácticos

### Ejemplo 1: Noticia de promoción
```json
{
  "id": 5,
  "titulo": "¡2x1 en servicios de encomiendas!",
  "resumen": "Por tiempo limitado, envía dos encomiendas por el precio de una",
  "contenido": "Aprovecha nuestra promoción especial de 2x1 en servicios de encomiendas dentro de Popayán. Válido hasta fin de mes. Aplican términos y condiciones.",
  "imagen": "/promo-encomiendas.jpg",
  "fecha": "2025-02-05",
  "autor": "Servitaxi S.A.",
  "categoria": "Promociones",
  "destacada": true
}
```

### Ejemplo 2: Noticia informativa
```json
{
  "id": 6,
  "titulo": "Nuevos horarios de atención",
  "resumen": "A partir del lunes cambiarán los horarios de atención administrativa",
  "contenido": "Les informamos que a partir del próximo lunes 10 de febrero, nuestros horarios administrativos serán: Lunes a Viernes de 7:00 am a 5:00 pm y Sábados de 8:00 am a 2:00 pm.",
  "imagen": "/horarios.jpg",
  "fecha": "2025-02-03",
  "autor": "Servitaxi S.A.",
  "categoria": "Información",
  "destacada": false
}
```

## 🎨 Tips de diseño

### Imágenes
- **Tamaño recomendado**: 1200x630 píxeles
- **Formato**: JPG o PNG
- **Peso máximo**: 500KB
- **Proporciones**: 16:9 funciona mejor

### Títulos
- Máximo 60 caracteres
- Claros y llamativos
- Evita mayúsculas sostenidas

### Resumen
- Entre 100-200 caracteres
- Resume lo más importante
- Motiva a leer más

### Contenido
- Puede ser tan largo como necesites
- Usa párrafos cortos
- Información clara y concisa

## ❓ Preguntas frecuentes

**P: ¿Puedo usar imágenes de internet?**  
R: Sí, pero asegúrate de tener los derechos. Es mejor usar imágenes propias.

**P: ¿Cuántas noticias puedo tener?**  
R: Las que quieras, pero mantén solo las relevantes (10-15 activas).

**P: ¿Cómo ordeno las noticias?**  
R: Se ordenan automáticamente por fecha. La más reciente aparece primero.

**P: ¿Puedo cambiar los colores?**  
R: Sí, pero es mejor mantener los colores de la marca Servitaxi (amarillo, negro, rojo).

**P: ¿Qué pasa si me equivoco en el JSON?**  
R: La página mostrará un error. Revisa que:
- Las comas estén bien puestas
- Las comillas estén cerradas
- Los corchetes y llaves estén balanceados

## 🆘 Si algo sale mal

1. **Copia de seguridad**: Siempre haz backup de `noticias.json` antes de editar
2. **Verifica el JSON**: Usa un validador JSON online
3. **Revisa la consola**: Presiona F12 en el navegador para ver errores
4. **Prueba poco a poco**: Agrega una noticia a la vez

## 📞 Contacto del desarrollador

Si necesitas ayuda adicional:
- LinkedIn: [@juancmartinezf](https://www.linkedin.com/in/juan-mart%C3%ADnez-b83a7b302/)

## 📚 Documentación adicional

- [README.md](./README.md) - Información general del proyecto
- [NOTICIAS_README.md](./NOTICIAS_README.md) - Documentación detallada de noticias
- [ANALISIS_MEJORAS.md](./ANALISIS_MEJORAS.md) - Análisis técnico completo

---

**¡Listo! Ahora puedes gestionar las noticias de Servitaxi fácilmente** 🎉

*Transportamos lo más valioso de la ciudad* 🚕💛
