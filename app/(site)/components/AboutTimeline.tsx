'use client';
import { motion } from 'framer-motion';

const timeline = [
  { year: '2025', title: 'Aularium', desc: 'Desarrollo de plataforma académica (Next.js + MySQL).', side: 'left' },
  { year: '2024', title: 'EcoSafari', desc: 'Sitio con storytelling, compra de tickets y DB.', side: 'right' },
  { year: '2023', title: 'Freelance', desc: 'Landing pages de alto rendimiento.', side: 'left' }
];

export default function AboutTimeline() {
  return (
    <section id="about" aria-label="Sobre mí" className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Sobre mí</h2>
      <p className="mt-2 max-w-prose opacity-80">
        Desarrollador orientado a producto con enfoque en rendimiento y experiencia de usuario.
      </p>

      <div className="relative mt-8">
        <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-white/20" />
        <ul className="space-y-8">
          {timeline.map((t, i) => (
            <motion.li
              key={t.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className={`relative grid items-start gap-4 md:grid-cols-2 ${t.side === 'left' ? '' : ''}`}
            >
              <div className={` ${t.side === 'left' ? 'md:pr-10 md:col-start-1' : 'md:col-start-2 md:pl-10'}`}>
                <div className="card p-5">
                  <div className="text-sm opacity-70">{t.year}</div>
                  <div className="text-lg font-semibold">{t.title}</div>
                  <p className="mt-1 text-sm opacity-80">{t.desc}</p>
                </div>
              </div>
              <div className={`hidden md:block ${t.side === 'left' ? 'md:col-start-2' : 'md:col-start-1'}`}></div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}