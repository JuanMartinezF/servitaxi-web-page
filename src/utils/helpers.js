/**
 * Utilidades generales para el proyecto Servitaxi
 */

/**
 * Formatea una fecha al formato español
 * @param {string} dateString - Fecha en formato ISO (YYYY-MM-DD)
 * @returns {string} Fecha formateada
 */
export const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('es-ES', options);
};

/**
 * Trunca un texto a una longitud específica
 * @param {string} text - Texto a truncar
 * @param {number} maxLength - Longitud máxima
 * @returns {string} Texto truncado con "..."
 */
export const truncateText = (text, maxLength = 100) => {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength).trim() + '...';
};

/**
 * Valida un email
 * @param {string} email - Email a validar
 * @returns {boolean} True si es válido
 */
export const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

/**
 * Formatea un número de teléfono colombiano
 * @param {string} phone - Número de teléfono
 * @returns {string} Teléfono formateado
 */
export const formatPhone = (phone) => {
  // Elimina espacios y guiones
  const cleaned = phone.replace(/[\s-]/g, '');
  
  // Formato: (602) 8333333 o +57 302 835 9000
  if (cleaned.startsWith('+57')) {
    return `+57 ${cleaned.substring(3, 6)} ${cleaned.substring(6, 9)} ${cleaned.substring(9)}`;
  }
  
  if (cleaned.startsWith('602')) {
    return `(${cleaned.substring(0, 3)}) ${cleaned.substring(3)}`;
  }
  
  return phone;
};

/**
 * Obtiene la categoría con un color específico
 * @param {string} categoria - Nombre de la categoría
 * @returns {object} Objeto con estilos de color
 */
export const getCategoryColor = (categoria) => {
  const colors = {
    'General': { bg: 'bg-blue-100', text: 'text-blue-800' },
    'Promociones': { bg: 'bg-yellow-100', text: 'text-yellow-800' },
    'Información': { bg: 'bg-green-100', text: 'text-green-800' },
    'Eventos': { bg: 'bg-purple-100', text: 'text-purple-800' },
    'Servicios': { bg: 'bg-red-100', text: 'text-red-800' }
  };
  
  return colors[categoria] || { bg: 'bg-gray-100', text: 'text-gray-800' };
};

/**
 * Crea un slug a partir de un texto
 * @param {string} text - Texto a convertir
 * @returns {string} Slug
 */
export const createSlug = (text) => {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Elimina acentos
    .replace(/[^\w\s-]/g, '') // Elimina caracteres especiales
    .replace(/\s+/g, '-') // Espacios a guiones
    .replace(/-+/g, '-') // Guiones múltiples a uno solo
    .trim();
};

/**
 * Scroll suave a un elemento
 * @param {string} elementId - ID del elemento
 */
export const scrollToElement = (elementId) => {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

/**
 * Comprueba si un elemento está visible en el viewport
 * @param {HTMLElement} element - Elemento a comprobar
 * @returns {boolean} True si está visible
 */
export const isInViewport = (element) => {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

/**
 * Debounce para optimizar eventos frecuentes
 * @param {Function} func - Función a ejecutar
 * @param {number} wait - Tiempo de espera en ms
 * @returns {Function} Función con debounce
 */
export const debounce = (func, wait = 300) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

/**
 * Obtiene la diferencia de días entre dos fechas
 * @param {string} dateString - Fecha en formato ISO
 * @returns {number} Días de diferencia con hoy
 */
export const getDaysAgo = (dateString) => {
  const date = new Date(dateString);
  const today = new Date();
  const diffTime = Math.abs(today - date);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
};

/**
 * Formatea un tiempo relativo (hace X días)
 * @param {string} dateString - Fecha en formato ISO
 * @returns {string} Tiempo relativo
 */
export const getRelativeTime = (dateString) => {
  const days = getDaysAgo(dateString);
  
  if (days === 0) return 'Hoy';
  if (days === 1) return 'Ayer';
  if (days < 7) return `Hace ${days} días`;
  if (days < 30) return `Hace ${Math.floor(days / 7)} semanas`;
  if (days < 365) return `Hace ${Math.floor(days / 30)} meses`;
  
  return `Hace ${Math.floor(days / 365)} años`;
};

/**
 * Copia texto al portapapeles
 * @param {string} text - Texto a copiar
 * @returns {Promise<boolean>} True si se copió exitosamente
 */
export const copyToClipboard = async (text) => {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (err) {
    console.error('Error al copiar:', err);
    return false;
  }
};

/**
 * Comparte contenido usando la API nativa de compartir
 * @param {object} data - Datos a compartir { title, text, url }
 * @returns {Promise<boolean>} True si se compartió exitosamente
 */
export const shareContent = async (data) => {
  if (navigator.share) {
    try {
      await navigator.share(data);
      return true;
    } catch (err) {
      console.error('Error al compartir:', err);
      return false;
    }
  } else {
    // Fallback: copiar al portapapeles
    return await copyToClipboard(data.url || data.text);
  }
};
