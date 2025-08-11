// lib/trajectory.ts
export type Metric = { value: number; label: string; suffix?: string };
export type Step = {
  date: string; title: string; org?: string; desc: string; side?: 'left'|'right';
};

export const metrics: Metric[] = [
  { value: 7, label: 'Proyectos innovadores' },
  { value: 60, label: 'Horas de código semanales' },
  { value: 3000, label: 'Líneas de código escritas' },
  { value: 8, label: 'Tecnologías dominadas' }
];

export const trajectory: Step[] = [
  { date: 'NOV 2023', title: 'Desarrollador Web', org: 'Freelance', desc: 'Sitios dinámicos y responsivos.', side: 'left' },
  { date: 'ENE 2024', title: 'Experiencias Web', org: 'Proyectos Académicos', desc: 'Interfaces y funcionalidades enfocadas en UX.', side: 'right' },
  { date: '2025', title: 'Aularium', org: 'Proyecto destacado', desc: 'Plataforma académica (auth, paneles, CMS).', side: 'left' }
];
