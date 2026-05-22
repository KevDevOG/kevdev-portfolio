import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'garage-studios',
    title: 'Garage Studios Web',
    slug: 'garage-studios',
    description: 'Plataforma web full-stack y profesional para un estudio de producción musical, con sistema automatizado de reservas, panel administrativo completo, gestión financiera y auditoría de seguridad.',
    longDescription: 'Garage Studios es una solución web a medida y lista para producción diseñada para digitalizar la actividad de un estudio de grabación musical. Cuenta con un frontend público moderno y un robusto panel de control administrativo protegido que facilita la gestión completa del negocio: servicios, reservas de clientes, facturación y mantenimiento técnico del sistema.',
    status: 'completed',
    featured: true,
    technologies: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Supabase',
      'PostgreSQL',
      'Supabase Auth',
      'Resend',
      'Cloudflare Turnstile',
      'Vercel'
    ],
    features: [
      'Páginas públicas completamente interactivas: Inicio, Servicios, Galería, Contacto, Reservas y Garage Visuals.',
      'Panel de administración privado con analíticas visuales de ingresos y ocupación de salas.',
      'Sistema automatizado de reservas en tiempo real integrado con correos electrónicos automáticos mediante Resend.',
      'Módulo de finanzas para registrar e inspeccionar cobros, gastos e ingresos netos de forma mensual.',
      'Control de auditoría y base de datos con visualización de logs de actividad administrativa.',
      'Generador y restaurador de copias de seguridad de datos directas desde el panel admin.',
      'Protección avanzada contra bots y spam usando Cloudflare Turnstile.',
      'Políticas de Row-Level Security (RLS) estrictas y permisos granulares en PostgreSQL/Supabase.',
      'Sincronización y descarga de archivos de calendario .ics para reservas de clientes.',
      'Middleware personalizado de Next.js para la protección de rutas administrativas.'
    ],
    learnings: [
      'Diseño y despliegue de arquitecturas web full-stack profesionales.',
      'Protección avanzada de rutas mediante middleware en Next.js.',
      'Control fino de permisos de base de datos a nivel de fila (RLS) en Supabase.',
      'Modelado de bases de datos relacionales robustas y seguras con PostgreSQL.',
      'Integración y optimización de flujos transaccionales y de notificaciones por email.',
      'Despliegue robusto orientado a producción en Vercel con validaciones estrictas pre-build.'
    ],
    demoUrl: 'https://garagestudios.es',
    githubUrl: 'https://github.com/KevDevOG/garage-studios',
    image: '/images/projects/garage-studios.webp'
  },
  {
    id: 'portfolio-web',
    title: 'Portfolio Dev Dashboard',
    slug: 'portfolio-web',
    description: 'Este mismo portfolio web personal estructurado como un dashboard de desarrollador profesional, optimizado para destacar metodología de trabajo y evolución técnica.',
    longDescription: 'Diseñado bajo la estética de un panel de control técnico de alto rendimiento. Este portfolio no solo enseña el resultado de mis desarrollos, sino que expone mis metodologías sistemáticas de trabajo, mi stack de tecnologías categorizado y mi evolución educativa como alumno de 2º de DAW.',
    status: 'completed',
    featured: false,
    technologies: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Lucide React',
      'Vercel'
    ],
    features: [
      'Estética original tipo Dev Dashboard inspirada en paneles de control profesionales.',
      'Sección interactiva de estado y métricas de desarrollador.',
      'Visualización clara del stack tecnológico por categorías y niveles.',
      'Timeline detallado de la trayectoria formativa.',
      'Desglose paso a paso de la metodología de desarrollo sistemática.'
    ],
    learnings: [
      'Componentización avanzada para interfaces con alta densidad de información.',
      'Separación limpia y centralizada de la lógica de datos y de la representación visual.',
      'Adaptabilidad al sistema de diseño creado mediante Stitch.',
      'Optimización de rendimiento y SEO básico en Next.js App Router.'
    ],
    demoUrl: '#',
    githubUrl: 'https://github.com/KevDevOG/portfolio',
    image: '/images/projects/portfolio-dashboard.webp'
  }
];
