// Información de contacto de la empresa
export const CONTACT_INFO = {
  phones: {
    radio: [
      '(602) 8333333',
      '(602) 8373260',
      '(602) 8233333'
    ],
    whatsapp: '+573028359000',
    administrative: '(602) 8333333'
  },
  address: 'Calle 2 #11 - 41. Popayán, Colombia',
  email: 'contacto@servitaxi.com',
  hours: {
    weekdays: 'Lun - Vie: 8:00 am a 12:00 pm y 2:00 pm a 6:00 pm',
    saturday: 'Sábados de 8:00 am a 1:00 pm',
    service: '24 horas - 7 días a la semana'
  }
};

// Enlaces a redes sociales
export const SOCIAL_LINKS = {
  facebook: 'https://www.facebook.com/servitaxi.popayan',
  instagram: 'https://www.instagram.com/servitaxisa?igsh=aHdsOTB6ZTlmaHhr',
  whatsapp: 'https://wa.me/+573028359000',
  linkedIn: 'https://www.linkedin.com/in/juan-mart%C3%ADnez-b83a7b302/'
};

// Enlaces a las aplicaciones móviles
export const APP_LINKS = {
  android: 'https://play.google.com/store/apps/details?id=co.gentedetaxi.servitaxi.pax&pcampaignid=web_share',
  ios: 'https://apps.apple.com/co/app/servitaxi-popay%C3%A1n/id1249544312?l=en-GB'
};

// Rutas de navegación
export const ROUTES = {
  home: '/',
  about: '/quienessomos',
  services: '/servicios',
  news: '/noticias',
  contact: '/contactanos',
  privacyPolicy: '/politica-datos',
  dataProtection: '/proteccion-datos',
  termsPassengers: '/terminos-y-condiciones',
  privacyNotice: '/aviso-de-privacidad',
  termsTaxbot: '/terminos-y-condiciones-taxbot'
};

// Datos de servicios
export const SERVICES = [
  {
    id: 1,
    title: 'Transporte de pasajeros',
    description: 'Para nosotros cada viaje contigo es transportar lo más valioso de la ciudad, por eso en Servitaxi tenemos varios canales desde donde podrás solicitar nuestros servicio de recogida, no importa en que parte del área urbana de Popayán te encuentres.',
    image: '/transportep.png',
    alt: 'Servicio de transporte de pasajeros Servitaxi'
  },
  {
    id: 2,
    title: 'Servicio de encomiendas',
    description: 'Creemos que la confianza es fundamental, por eso en Servitaxi contamos con envío de encomiendas dentro de la ciudad de Popayán con la garantía de que tus envíos serán protegidos y entregados sin contratiempos.',
    image: '/encomiendasia.png',
    alt: 'Servicio de encomiendas Servitaxi'
  },
  {
    id: 3,
    title: 'Serviteca',
    description: 'En Servitaxi contamos con un excelente servicio para tu vehículo, en nuestras instalaciones puedes realizar cambio de aceite, realizado por nuestro personal altamente calificado y experimentado o si prefieres hacerlo tu mismo también contamos con la venta de aceite para tu motor, refrigerante y llantas.',
    image: '/cambioaceite.jpg',
    alt: 'Servicio de serviteca y cambio de aceite'
  }
];

// Mensajes del sistema
export const MESSAGES = {
  loading: 'Cargando...',
  error: 'Ha ocurrido un error. Por favor, intenta nuevamente.',
  success: 'Operación exitosa',
  noResults: 'No se encontraron resultados',
  contactSuccess: '✅ Mensaje enviado correctamente. Te responderemos pronto.',
  contactSending: '⏳ Enviando mensaje...'
};

// Información de la empresa
export const COMPANY_INFO = {
  name: 'Servitaxi S.A.',
  tagline: 'Transportamos lo más valioso de la ciudad',
  city: 'Popayán, Colombia',
  year: new Date().getFullYear(),
  developer: '@juancmartinezf',
  developerLink: 'https://www.linkedin.com/in/juan-mart%C3%ADnez-b83a7b302/'
};
