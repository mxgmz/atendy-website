export const SITE_CONFIG = {
  name: 'Atendy',
  tagline: 'Tu recepcionista IA que nunca descansa',
  phone: '+52XXXXXXXXXX', // Reemplazar con tu número de WhatsApp
  email: 'contacto@atendy.com',
  url: 'https://atendy.vercel.app',
  social: {
    instagram: '@atendyai',
    linkedin: 'company/atendy',
    twitter: '@atendyai',
  },
};

export const HERO = {
  headline: 'Automatiza tu atención al cliente con IA',
  subheadline:
    'Responde WhatsApp 24/7, agenda citas automáticamente y recupera clientes inactivos. Todo mientras duermes.',
  cta1: 'Agenda una Demo Gratis',
  cta2: 'Ver Cómo Funciona',
};

export const SOCIAL_PROOF = [
  {
    icon: '🔒',
    text: 'Datos 100% seguros',
  },
  {
    icon: '⚡',
    text: 'Respuesta en < 30 segundos',
  },
  {
    icon: '✅',
    text: '+50 negocios atendidos',
  },
  {
    icon: '📊',
    text: '75% de ahorro en tiempo',
  },
];

export const PROBLEMS = {
  title: '¿Tu negocio está perdiendo dinero en estos problemas?',
  subtitle: 'Atendy automatiza todo esto con IA, para que tú te enfoques en atender a tus clientes',
  items: [
    {
      title: 'Mensajes sin responder',
      stat: '40%',
      description: 'de tus mensajes de WhatsApp no se contestan a tiempo',
      result: 'Clientes frustrados que buscan a tu competencia',
      icon: '💬',
    },
    {
      title: 'No-shows costosos',
      stat: '$80-150',
      description: 'USD te cuesta cada cita perdida',
      result: 'El 30% de tus citas terminan en no-show sin recordatorios',
      icon: '📉',
    },
    {
      title: 'Clientes que no regresan',
      stat: '70%',
      description: 'de tus clientes no agenda su cita de seguimiento',
      result: 'Pierdes $500-1000 USD/mes en oportunidades perdidas',
      icon: '👋',
    },
  ],
};

export const FEATURES = {
  title: 'Todo lo que necesitas en una sola plataforma',
  subtitle: 'Automatización inteligente diseñada específicamente para negocios de servicios',
  items: [
    {
      icon: '🤖',
      title: 'Chatbot IA Inteligente',
      description:
        'Responde preguntas frecuentes 24/7 con IA entrenada en tu negocio. Entiende contexto y da respuestas personalizadas.',
    },
    {
      icon: '📅',
      title: 'Agendamiento Automático',
      description:
        'Revisa tu calendario y agenda citas sin intervención humana. Sincroniza con Google Calendar y tu sistema actual.',
    },
    {
      icon: '🔔',
      title: 'Prevención de No-Shows',
      description:
        'Envía confirmaciones 2-3 horas antes de cada cita. Reduce no-shows en 50-70% automáticamente.',
    },
    {
      icon: '⭐',
      title: 'Solicitud de Reseñas',
      description:
        'Pide reseñas en Google Maps automáticamente después de cada cita. Ofrece incentivos para aumentar tasa de respuesta.',
    },
    {
      icon: '🔄',
      title: 'Recuperación de Clientes',
      description:
        'Detecta clientes inactivos y los contacta automáticamente. Personaliza mensajes con ofertas e incentivos.',
    },
    {
      icon: '📊',
      title: 'Dashboard en Tiempo Real',
      description:
        'Ve todas tus métricas en Looker Studio. Cuántas citas agendó el bot, no-shows evitados, clientes reactivados.',
    },
  ],
};

export const HOW_IT_WORKS = {
  title: 'Implementación en 3 simples pasos',
  subtitle: 'Tu recepcionista IA estará trabajando en menos de 2 horas',
  steps: [
    {
      number: '1',
      title: 'Onboarding',
      duration: '1 hora',
      description: [
        'Nos conectamos a tu WhatsApp Business',
        'Subimos la información de tu negocio (servicios, precios, horarios)',
        'Entrenamos la IA con tus preguntas frecuentes',
      ],
    },
    {
      number: '2',
      title: 'Configuración',
      duration: '30 minutos',
      description: [
        'Configuramos tu Google Sheets CRM',
        'Conectamos tu calendario',
        'Personalizamos mensajes automáticos',
      ],
    },
    {
      number: '3',
      title: '¡Listo!',
      duration: 'Activación inmediata',
      description: [
        'Tu recepcionista IA comienza a trabajar 24/7',
        'Monitoreo en dashboard en tiempo real',
        'Soporte continuo de nuestro equipo',
      ],
    },
  ],
};

export const BENEFITS = {
  title: 'El ROI de Atendy en números reales',
  subtitle: 'Inversión de $49/mes que genera $960+ en valor cada mes',
  items: [
    {
      stat: '20+',
      unit: 'horas ahorradas/mes',
      description: 'Deja de contestar mensajes repetitivos y enfócate en atender clientes',
    },
    {
      stat: '$640',
      unit: 'USD recuperados/mes',
      description: 'En promedio 8 no-shows evitados (cita promedio $80)',
    },
    {
      stat: '+40%',
      unit: 'más citas agendadas',
      description: 'Clientes inactivos reactivados y seguimientos automáticos',
    },
    {
      stat: '5X',
      unit: 'más reseñas en Google',
      description: 'Mejor posicionamiento local (SEO) y más clientes nuevos orgánicos',
    },
  ],
  roi: {
    value: '1,860',
    description: 'ROI Total: $960 USD de valor generado vs $49 de inversión',
  },
};

export const PRICING = {
  title: 'Planes para cada etapa de tu negocio',
  subtitle: 'Sin contratos de permanencia. Cancela cuando quieras.',
  currency: 'USD',
  plans: [
    {
      name: 'Básico',
      price: 29,
      period: '/mes',
      description: 'Perfecto para empezar a automatizar',
      features: [
        { text: '1 número de WhatsApp', included: true },
        { text: 'Instagram', included: false },
        { text: 'Hasta 500 mensajes/mes', included: true },
        { text: 'Chatbot IA + RAG', included: true },
        { text: 'Agendamiento de citas', included: true },
        { text: 'Prevención de no-shows', included: true },
        { text: 'Solicitud de reseñas', included: false },
        { text: 'Recuperación de clientes', included: false },
        { text: 'Dashboard básico', included: true },
        { text: 'Soporte por email', included: true },
      ],
      cta: 'Comenzar ahora',
      popular: false,
    },
    {
      name: 'Profesional',
      price: 49,
      period: '/mes',
      description: 'El más popular. Funcionalidad completa.',
      features: [
        { text: '1 número de WhatsApp', included: true },
        { text: 'Instagram incluido', included: true },
        { text: 'Hasta 2,000 mensajes/mes', included: true },
        { text: 'Chatbot IA + RAG', included: true },
        { text: 'Agendamiento de citas', included: true },
        { text: 'Prevención de no-shows', included: true },
        { text: 'Solicitud de reseñas', included: true },
        { text: 'Recuperación de clientes', included: true },
        { text: 'Dashboard avanzado', included: true },
        { text: 'Soporte email + chat', included: true },
        { text: 'Setup incluido', included: true },
      ],
      cta: 'Agendar Demo',
      popular: true,
    },
    {
      name: 'Premium',
      price: 99,
      period: '/mes',
      description: 'Para negocios en crecimiento',
      features: [
        { text: '2 números de WhatsApp', included: true },
        { text: 'Instagram + Facebook', included: true },
        { text: 'Mensajes ilimitados', included: true },
        { text: 'Chatbot IA + RAG', included: true },
        { text: 'Agendamiento de citas', included: true },
        { text: 'Prevención de no-shows', included: true },
        { text: 'Solicitud de reseñas', included: true },
        { text: 'Recuperación de clientes', included: true },
        { text: 'Dashboard Premium + Predicciones', included: true },
        { text: 'Soporte prioritario + llamadas', included: true },
        { text: 'Setup + Personalización', included: true },
      ],
      cta: 'Comenzar ahora',
      popular: false,
    },
  ],
};

export const TESTIMONIALS = {
  title: 'Lo que dicen nuestros clientes',
  subtitle: 'Resultados reales de negocios que ya usan Atendy',
  items: [
    {
      name: 'Dr. Carlos Mendoza',
      business: 'Clínica Dental Sonría',
      image: '/images/testimonial-1.jpg',
      rating: 5,
      quote:
        'Atendy nos ahorró más de 15 horas semanales en contestar mensajes. Ahora el bot agenda el 70% de nuestras citas automáticamente y nuestros no-shows bajaron de 12 a 3 por semana. La inversión se pagó sola en el primer mes.',
    },
    {
      name: 'Laura Rodríguez',
      business: 'Centro de Estética Bella',
      image: '/images/testimonial-2.jpg',
      rating: 5,
      quote:
        'Lo mejor es la recuperación automática de clientes. El bot me reactivó 18 clientas inactivas en 2 meses, generando $4,800 pesos extra. Además, mis reseñas en Google subieron de 12 a 47 en 3 meses.',
    },
    {
      name: 'Lic. Ana Martínez',
      business: 'Psicóloga',
      image: '/images/testimonial-3.jpg',
      rating: 5,
      quote:
        'Como trabajo sola, no tenía tiempo de contestar WhatsApp durante sesiones. Atendy responde por mí 24/7, agenda citas y envía recordatorios. Mis pacientes están felices y yo más tranquila.',
    },
  ],
};

export const INDUSTRIES = {
  title: 'Diseñado para profesionales como tú',
  subtitle: 'Soluciones específicas para cada industria',
  items: [
    {
      icon: '🦷',
      title: 'Dentistas',
      description: 'Reduce no-shows y aumenta citas de limpieza semestral',
    },
    {
      icon: '💆',
      title: 'Centros de Estética',
      description: 'Reactiva clientas inactivas con ofertas personalizadas',
    },
    {
      icon: '🧠',
      title: 'Psicólogos',
      description: 'Automatiza recordatorios de sesiones semanales',
    },
    {
      icon: '💪',
      title: 'Fisioterapeutas',
      description: 'Seguimiento automático de tratamientos largos',
    },
    {
      icon: '🏥',
      title: 'Dermatólogos',
      description: 'Agendamiento 24/7 para consultas urgentes',
    },
    {
      icon: '🏠',
      title: 'Agentes Inmobiliarios',
      description: 'Responde leads al instante, nunca pierdas un prospecto',
    },
  ],
};

export const FAQ = {
  title: 'Preguntas frecuentes',
  subtitle: 'Todo lo que necesitas saber sobre Atendy',
  items: [
    {
      question: '¿Cuánto tarda la implementación?',
      answer:
        'El setup completo toma 1-2 horas. En el mismo día ya estás operando con tu recepcionista IA.',
    },
    {
      question: '¿Necesito conocimientos técnicos?',
      answer:
        'No. Nosotros hacemos toda la configuración. Tú solo nos das acceso a tu WhatsApp Business y listo.',
    },
    {
      question: '¿Mis clientes notarán que es un bot?',
      answer:
        'El bot es muy natural gracias a IA avanzada (GPT-4). Si detecta una pregunta compleja, transfiere al humano automáticamente.',
    },
    {
      question: '¿Qué pasa si tengo una pregunta que el bot no sabe responder?',
      answer:
        'Puedes entrenar al bot en cualquier momento. Además, te notificamos cuando hay preguntas sin respuesta para mejorar.',
    },
    {
      question: '¿Es seguro? ¿Qué pasa con mis datos?',
      answer:
        '100% seguro. Usamos Google Sheets encriptado y nunca compartimos datos. Cumplimos con GDPR y regulaciones de privacidad.',
    },
    {
      question: '¿Puedo cancelar en cualquier momento?',
      answer:
        'Sí, sin compromiso de permanencia. Cancelas cuando quieras sin penalización.',
    },
    {
      question: '¿Funciona con mi sistema actual de citas?',
      answer:
        'Sí, nos integramos con Google Calendar, Calendly y la mayoría de sistemas. Si usas algo específico, consúltanos.',
    },
    {
      question: '¿Ofrecen garantía?',
      answer:
        'Sí. Si en los primeros 30 días no ves resultados, te devolvemos el 100% de tu dinero.',
    },
  ],
};

export const CONTACT = {
  title: 'Comienza a automatizar tu negocio hoy',
  subtitle: 'Agenda una demo de 15 minutos y ve Atendy en acción con ejemplos reales de tu industria',
  guarantees: [
    'Demo personalizada para tu industria',
    'Sin compromiso ni tarjeta de crédito',
    'Respuesta en menos de 24 horas',
    '30 días de garantía de satisfacción',
  ],
  form: {
    namePlaceholder: 'Nombre completo',
    emailPlaceholder: 'Email',
    whatsappPlaceholder: 'WhatsApp (con código de país)',
    businessTypes: [
      { value: 'dentista', label: 'Dentista' },
      { value: 'estetica', label: 'Centro de Estética' },
      { value: 'psicologo', label: 'Psicólogo(a)' },
      { value: 'fisioterapeuta', label: 'Fisioterapeuta' },
      { value: 'dermatologo', label: 'Dermatólogo(a)' },
      { value: 'agente_inmobiliario', label: 'Agente Inmobiliario' },
      { value: 'otro', label: 'Otro' },
    ],
    appointmentRanges: [
      { value: '20-50', label: '20-50 citas/mes' },
      { value: '50-100', label: '50-100 citas/mes' },
      { value: '100-200', label: '100-200 citas/mes' },
      { value: '200+', label: '200+ citas/mes' },
    ],
    messagePlaceholder: 'Cuéntanos sobre tu negocio (opcional)',
    submitText: 'Agendar Demo Gratis',
  },
};

export const FOOTER = {
  description:
    'Automatiza tu atención al cliente con IA. Responde WhatsApp 24/7, agenda citas automáticamente y recupera clientes inactivos.',
  links: {
    product: [
      { text: 'Características', href: '#features' },
      { text: 'Precios', href: '#pricing' },
      { text: 'Para quién es', href: '#industries' },
    ],
    company: [
      { text: 'Blog', href: '#' },
      { text: 'Casos de éxito', href: '#testimonials' },
      { text: 'Contacto', href: '#contact' },
    ],
    legal: [
      { text: 'Términos y condiciones', href: '#' },
      { text: 'Política de privacidad', href: '#' },
    ],
  },
  copyright: `© ${new Date().getFullYear()} Atendy. Todos los derechos reservados.`,
};
