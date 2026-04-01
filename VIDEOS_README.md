# 🎬 Sistema de Videos - Servitaxi

Los videos del Home se gestionan desde un archivo JSON. No es necesario tocar código de componentes para agregar, editar u ocultar videos.

## 📍 Archivos involucrados

| Archivo | Rol |
|---|---|
| `src/data/videos.json` | Datos de cada video |
| `src/components/VideoCard.jsx` | Componente que renderiza cada tarjeta |
| `src/pages/Home.jsx` | Importa el JSON y renderiza las tarjetas |
| `public/` | Carpeta donde deben colocarse los archivos `.mp4` |

---

## ✏️ Cómo agregar un video

1. Coloca el archivo `.mp4` en la carpeta `public/`.
2. Abre `src/data/videos.json`.
3. Agrega un nuevo objeto al array:

```json
{
  "id": 3,
  "titulo": "Nombre del video",
  "descripcion": "Descripción opcional (no se muestra actualmente en el Home)",
  "src": "/nombre-del-archivo.mp4",
  "poster": "/imagen-previa.jpg",
  "aspectRatio": "9/16"
}
```

4. Guarda el archivo. El video aparecerá automáticamente en la sección de videos del Home.

---

## 📝 Campos explicados

| Campo | Tipo | Obligatorio | Descripción |
|---|---|---|---|
| `id` | número | Sí | Identificador único e incremental |
| `titulo` | texto | No | Nombre visible debajo del video |
| `descripcion` | texto | No | Descripción interna (referencia) |
| `src` | texto | Sí | Ruta al archivo de video en `public/` |
| `poster` | texto o `null` | No | Imagen de previsualización mientras carga. `null` para ninguna |
| `aspectRatio` | texto | No | Proporción del contenedor. Por defecto `"9/16"` (vertical) |

### Valores de `aspectRatio`

| Valor | Uso recomendado |
|---|---|
| `"9/16"` | Videos verticales (reels, stories) |
| `"16/9"` | Videos horizontales (YouTube) |
| `"1/1"` | Videos cuadrados |

---

## 🗑️ Cómo eliminar o deshabilitar un video

- **Eliminar:** borra el objeto completo del array en `videos.json`.
- **Ocultar temporalmente:** renombra el campo `src` a `_src` para que el componente no lo encuentre, o simplemente quita el objeto y guárdalo aparte.

---

## 🖼️ Cómo agregar la imagen de previsualización (poster)

1. Coloca la imagen en `public/` (formatos recomendados: `.jpg`, `.webp`).
2. Referencia la imagen en el campo `poster`:

```json
"poster": "/preview-mi-video.jpg"
```

Si no necesitas poster, usa:

```json
"poster": null
```

---

## 📐 Comportamiento en el Home

- Los videos se muestran en una fila flexible que se adapta al ancho de la pantalla.
- En móvil se apilan verticalmente; en escritorio aparecen lado a lado.
- El ancho máximo de cada tarjeta es `max-w-sm` en móvil y `max-w-md` en tablets/escritorio.
- Si `videos.json` está vacío o no tiene entradas, la sección desaparece automáticamente.

---

## 💡 Ejemplo de `videos.json` completo

```json
[
  {
    "id": 1,
    "titulo": "Servitaxi en acción",
    "descripcion": "Video del servicio de transporte de pasajeros.",
    "src": "/video-llantas.mp4",
    "poster": null,
    "aspectRatio": "9/16"
  },
  {
    "id": 2,
    "titulo": "Publicidad Servitaxi",
    "descripcion": "Video promocional de la empresa.",
    "src": "/publicidadss.mp4",
    "poster": null,
    "aspectRatio": "9/16"
  }
]
```
