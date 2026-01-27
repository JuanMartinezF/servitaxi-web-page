# ✅ Lista de Verificación - Nuevas Funcionalidades

## 🧪 Cómo Probar el Sistema de Noticias

### 1️⃣ Iniciar el Proyecto

```bash
# Asegúrate de estar en la carpeta del proyecto
cd servitaxi-pagina-web

# Instala las dependencias (si no lo has hecho)
npm install

# Inicia el servidor de desarrollo
npm run dev
```

Abre tu navegador en: `http://localhost:5173`

---

### 2️⃣ Verificar la Navegación

#### Header
- [ ] Verifica que aparezca la opción "Noticias" en el menú
- [ ] Haz clic en "Noticias"
- [ ] Deberías ver la página de noticias

#### Menú Móvil
- [ ] Reduce el tamaño de la ventana (< 768px)
- [ ] Verifica que el menú hamburguesa funcione
- [ ] Verifica que "Noticias" aparezca en el menú móvil

---

### 3️⃣ Probar la Página de Noticias

#### Vista General
- [ ] Se muestran las 3 noticias de ejemplo
- [ ] Las tarjetas tienen hover effect (se elevan y agrandan)
- [ ] Las noticias destacadas tienen badge "⭐ Destacada"
- [ ] Se muestra la categoría con color
- [ ] Se muestra la fecha formateada en español

#### Filtros
- [ ] Haz clic en diferentes categorías
- [ ] Verifica que se filtren correctamente
- [ ] Haz clic en "Todas" para ver todas las noticias
- [ ] El contador de noticias se actualiza

#### Ordenamiento
- [ ] Prueba "Más recientes" - la más nueva arriba
- [ ] Prueba "Más antiguos" - la más vieja arriba
- [ ] Prueba "Destacadas primero" - destacadas arriba

---

### 4️⃣ Probar el Modal de Noticia

#### Abrir Modal
- [ ] Haz clic en "Leer más" en cualquier tarjeta
- [ ] El modal se abre con animación suave
- [ ] Se muestra la imagen grande
- [ ] Se muestra el contenido completo

#### Cerrar Modal
- [ ] Haz clic en la X (esquina superior derecha)
- [ ] El modal se cierra
- [ ] Abre de nuevo el modal
- [ ] Presiona la tecla `Escape`
- [ ] El modal se cierra
- [ ] Abre de nuevo el modal
- [ ] Haz clic fuera del modal (en el fondo oscuro)
- [ ] El modal se cierra

#### Funcionalidades del Modal
- [ ] El scroll del body está bloqueado cuando el modal está abierto
- [ ] La imagen se muestra correctamente
- [ ] El badge "Destacada" aparece si corresponde
- [ ] El botón "Cerrar" funciona

---

### 5️⃣ Verificar Responsividad

#### Desktop (> 1024px)
- [ ] Se muestran 3 columnas de tarjetas
- [ ] El menú está en horizontal
- [ ] El modal tiene buen tamaño

#### Tablet (768px - 1024px)
- [ ] Se muestran 2 columnas de tarjetas
- [ ] El menú está en horizontal
- [ ] El modal se adapta bien

#### Móvil (< 768px)
- [ ] Se muestra 1 columna de tarjetas
- [ ] El menú es tipo hamburguesa
- [ ] El modal ocupa toda la pantalla
- [ ] Los filtros se adaptan bien

---

### 6️⃣ Probar Agregar una Noticia

#### Paso 1: Preparar
- [ ] Copia cualquier imagen a `public/test-noticia.jpg`

#### Paso 2: Editar JSON
- [ ] Abre `src/data/noticias.json`
- [ ] Agrega este código antes del último `]`:

```json
,
{
  "id": 4,
  "titulo": "Noticia de Prueba",
  "resumen": "Esta es una noticia de prueba para verificar el sistema",
  "contenido": "Este es el contenido completo de la noticia de prueba. Aquí puedes escribir todo lo que necesites comunicar a los usuarios.",
  "imagen": "/test-noticia.jpg",
  "fecha": "2025-01-27",
  "autor": "Servitaxi S.A.",
  "categoria": "General",
  "destacada": false
}
```

- [ ] Guarda el archivo
- [ ] Recarga el navegador
- [ ] Verifica que aparezca la nueva noticia

#### Paso 3: Verificar
- [ ] La noticia aparece en la lista
- [ ] Se puede filtrar
- [ ] Se puede abrir en el modal
- [ ] La imagen se muestra correctamente

---

### 7️⃣ Probar Eliminar una Noticia

- [ ] Abre `src/data/noticias.json`
- [ ] Elimina el bloque completo de la noticia de prueba (id: 4)
- [ ] Guarda el archivo
- [ ] Recarga el navegador
- [ ] Verifica que la noticia ya no aparezca

---

### 8️⃣ Verificar Otras Páginas

#### Home
- [ ] Los servicios se muestran con las nuevas tarjetas
- [ ] El carrusel funciona correctamente
- [ ] El modal de descarga de apps funciona

#### Otras Páginas
- [ ] Quiénes somos funciona
- [ ] Servicios funciona
- [ ] Contacto funciona
- [ ] Todas las políticas funcionan

---

### 9️⃣ Verificar la Integración

#### URLs
- [ ] `/` - Home
- [ ] `/quienessomos` - Quiénes somos
- [ ] `/servicios` - Servicios
- [ ] `/noticias` - Noticias ✨ NUEVO
- [ ] `/contactanos` - Contacto
- [ ] Todas las rutas de políticas

#### Navegación
- [ ] Todas las rutas en minúsculas funcionan
- [ ] Los links del header funcionan
- [ ] Los links del footer funcionan
- [ ] El scroll to top funciona al cambiar de página

---

### 🔟 Pruebas de Errores

#### Imagen no encontrada
- [ ] En `noticias.json`, cambia una imagen a una que no existe
- [ ] Verifica que se muestre el emoji 📰 como fallback
- [ ] No debería haber errores en consola

#### JSON mal formado
- [ ] Introduce un error de sintaxis en `noticias.json` (quita una coma)
- [ ] Verifica que la consola muestre el error
- [ ] Corrige el error
- [ ] Verifica que todo vuelva a funcionar

---

## ✨ Funcionalidades Bonus para Probar

### Animaciones
- [ ] Las tarjetas tienen animación al hacer hover
- [ ] El modal tiene animación de entrada
- [ ] Los filtros tienen animación al seleccionar

### Detalles Visuales
- [ ] Los badges de destacado son llamativos
- [ ] Los colores de categoría son diferentes
- [ ] Las fechas están en español
- [ ] El diseño es consistente con la marca

### Accesibilidad
- [ ] Los botones tienen tooltips descriptivos
- [ ] Las imágenes tienen alt text
- [ ] Se puede navegar con Tab
- [ ] Escape cierra los modales

---

## 📋 Checklist Rápido

```
✅ Sistema de noticias funciona
✅ Filtros funcionan
✅ Ordenamiento funciona
✅ Modal funciona
✅ Responsive funciona
✅ Agregar noticia funciona
✅ Eliminar noticia funciona
✅ Navegación funciona
✅ Todas las páginas funcionan
✅ Sin errores en consola
```

---

## 🐛 Si Encuentras Problemas

### La página no carga
```bash
# Detén el servidor (Ctrl+C)
# Borra node_modules y reinstala
rm -rf node_modules
npm install
npm run dev
```

### Las noticias no aparecen
- Verifica que `noticias.json` esté bien formado
- Abre la consola del navegador (F12) y busca errores
- Verifica que el archivo esté en `src/data/noticias.json`

### Las imágenes no se ven
- Verifica que las imágenes estén en `public/`
- Verifica que la ruta en JSON empiece con `/`
- Ejemplo: `/imagen.jpg` NO `imagen.jpg`

### Errores de sintaxis
- Usa un validador JSON online: https://jsonlint.com/
- Verifica que todas las comillas estén cerradas
- Verifica que todas las comas estén bien puestas

---

## 📞 Ayuda Adicional

Si todo lo anterior falla:

1. Revisa la documentación:
   - [INICIO_RAPIDO.md](./INICIO_RAPIDO.md)
   - [NOTICIAS_README.md](./NOTICIAS_README.md)
   - [ANALISIS_MEJORAS.md](./ANALISIS_MEJORAS.md)

2. Verifica la consola del navegador (F12 → Console)

3. Verifica que todo esté guardado

4. Reinicia el servidor de desarrollo

---

**¡Listo! Si todos los checks están ✅, el sistema está funcionando perfectamente** 🎉

*Transportamos lo más valioso de la ciudad* 🚕💛
