import { MethodStep } from '../types';

export const methodSteps: MethodStep[] = [
  {
    stepNumber: 1,
    title: 'Definición de la Idea',
    description: 'Análisis detallado de la problemática, identificación del público objetivo, especificación de alcances y estructuración del listado de requisitos funcionales del proyecto.'
  },
  {
    stepNumber: 2,
    title: 'Elección del Stack Tecnológico',
    description: 'Evaluación técnica para seleccionar las herramientas idóneas (como Next.js, TypeScript, Tailwind CSS y Supabase), primando rendimiento, escalabilidad y tiempos de desarrollo.'
  },
  {
    stepNumber: 3,
    title: 'Diseño de la Base de Datos',
    description: 'Modelado relacional estricto del esquema de base de datos en PostgreSQL, determinando tablas, claves primarias/foráneas, relaciones de cardinalidad y triggers necesarios.'
  },
  {
    stepNumber: 4,
    title: 'Componentización Atómica',
    description: 'Maquetación de la interfaz mediante componentes UI modulares, independientes y reutilizables, garantizando la consistencia visual y facilitando el mantenimiento.'
  },
  {
    stepNumber: 5,
    title: 'Lógica e Integración Backend',
    description: 'Desarrollo de Server Actions, comunicación asíncrona con la base de datos, estructuración de peticiones a APIs externas e implementación de la lógica del servidor.'
  },
  {
    stepNumber: 6,
    title: 'Seguridad y Permisos Rigurosos',
    description: 'Implementación de seguridad transversal: protección de rutas mediante middleware, validación estricta de formularios y activación de políticas RLS granulares.'
  },
  {
    stepNumber: 7,
    title: 'Verificación, Compilación y Deploy',
    description: 'Pruebas de comportamiento, corrección de lints y warnings, simulación de build local de producción y despliegue final continuo automatizado mediante Vercel.'
  },
  {
    stepNumber: 8,
    title: 'Documentación Profesional',
    description: 'Redacción exhaustiva del README técnico, explicación detallada de la arquitectura, instrucciones claras de ejecución local y planificación de mejoras a futuro.'
  }
];
