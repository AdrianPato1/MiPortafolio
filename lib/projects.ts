export type Project = {
  slug: string;                 // ← nuevo
  title: string;
  description: string;
  longDescription?: string;     // ← nuevo
  stack: string[];
  image: string;
  images?: string[];            // opcional galería
  demo?: string;
  code?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: 'aularium',
    title: 'Aularium',
    description: 'Plataforma académica con auth, paneles y CMS.',
    longDescription:
      'Aularium es una plataforma académica end-to-end: autenticación con roles, paneles para docentes/estudiantes, gestión de cursos y contenidos; foco en rendimiento (ISR) y accesibilidad.',
    stack: ['Next.js', 'TypeScript', 'Tailwind', 'MySQL'],
    image: '/aularium.png',
    demo: 'https://aularium.tu-dominio.vercel.app',
    code: 'https://github.com/tu-usuario/aularium',
    featured: true
  },
    {
      slug: 'ecosafari',
      longDescription:
        'Sitio del zoológico EcoSafari con storytelling, compra de tickets y base de datos de animales.',
      title: 'EcoSafari',
      description:
        'Sitio del zoológico EcoSafari con storytelling, compra de tickets y base de datos de animales.',
      stack: ['Next.js', 'Tailwind', 'Supabase'],
      image: '/EcoSafari.png',
      demo: '',
      code: 'https://github.com/tu-usuario/ecosafari'
    },
    {
      title: 'TaskMate',  
      slug: 'taskmate',
      longDescription:  
        'Sistema de adminstracion de Proyectos de un equipo de trabajo. Permite crear, editar y eliminar proyectos, tareas y usuarios.',

      description:
        'Sistema de adminstracion de Proyectos de un equipo de trabajo. Permite crear, editar y eliminar proyectos, tareas y usuarios.',
      stack: ['Next.js', 'Tailwind'],
      image: '/TaskMate.png',
      demo: 'https://ecosafari.example.com',
      code: 'https://github.com/tu-usuario/ecosafari'
    }
  ];
