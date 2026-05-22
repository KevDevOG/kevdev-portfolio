import { StackItem } from '../types';

export const stack: StackItem[] = [
  // Frontend
  { name: 'HTML5', category: 'frontend', level: 'comfortable', description: 'Semántica web y accesibilidad' },
  { name: 'CSS3', category: 'frontend', level: 'comfortable', description: 'Layouts modernos (Flexbox/Grid), animaciones y custom properties' },
  { name: 'JavaScript', category: 'frontend', level: 'comfortable', description: 'Manipulación del DOM, programación asíncrona y ES6+' },
  { name: 'TypeScript', category: 'frontend', level: 'practicing', description: 'Tipado estricto, interfaces, genéricos y seguridad en desarrollo' },
  { name: 'React', category: 'frontend', level: 'practicing', description: 'Estructuración por componentes, hooks, estado y efectos' },
  { name: 'Next.js', category: 'frontend', level: 'practicing', description: 'App Router, Server Actions, optimización de renderizado e ISR' },
  { name: 'Tailwind CSS', category: 'frontend', level: 'comfortable', description: 'Diseño ultra-rápido, responsivo y adaptativo' },

  // Backend & Database
  { name: 'Supabase', category: 'backend', level: 'practicing', description: 'Backend-as-a-Service, autenticación, RLS y servicios en la nube' },
  { name: 'PostgreSQL', category: 'backend', level: 'practicing', description: 'Diseño de esquemas relacionales, triggers y políticas de seguridad' },
  { name: 'Server Actions', category: 'backend', level: 'practicing', description: 'Mutaciones seguras de datos directamente desde el servidor en Next.js' },
  { name: 'APIs RESTful', category: 'backend', level: 'comfortable', description: 'Integración, diseño de endpoints e intercambio de datos estructurados' },

  // Tools
  { name: 'Git', category: 'tools', level: 'comfortable', description: 'Control de versiones e historial ordenado de commits' },
  { name: 'GitHub', category: 'tools', level: 'comfortable', description: 'Repositorios remotos, colaboración y flujos de trabajo' },
  { name: 'Vercel', category: 'tools', level: 'comfortable', description: 'Plataforma líder para despliegue continuo de aplicaciones frontend' },
  { name: 'Visual Studio Code', category: 'tools', level: 'comfortable', description: 'Entorno de desarrollo integrado y optimización de productividad' },
  { name: 'Antigravity', category: 'tools', level: 'comfortable', description: 'Asistente de desarrollo avanzado y programador par' },
  { name: 'NotebookLM', category: 'tools', level: 'comfortable', description: 'Asistente de investigación y gestión de bases de conocimiento' },
  { name: 'Stitch', category: 'tools', level: 'comfortable', description: 'Generación y aplicación de sistemas de diseño coherentes y premium' },

  // Methodology
  { name: 'Planificación Sistemática', category: 'methodology', level: 'comfortable', description: 'Definición de alcance, metas y roadmap inicial por fases' },
  { name: 'Modelado de Datos', category: 'methodology', level: 'comfortable', description: 'Diseño riguroso de esquemas de bases de datos antes del desarrollo' },
  { name: 'Componentización Limpia', category: 'methodology', level: 'comfortable', description: 'Creación de componentes UI modulares, reutilizables y atómicos' },
  { name: 'Auditoría y Seguridad', category: 'methodology', level: 'comfortable', description: 'Configuración estricta de políticas RLS y protección de rutas admin' },
  { name: 'Despliegue Continuo', category: 'methodology', level: 'comfortable', description: 'Integración continua y verificación estricta pre-compilación' },
  { name: 'Documentación Exhaustiva', category: 'methodology', level: 'comfortable', description: 'Redacción de READMEs profesionales, guías técnicas y defensas académicas' }
];
