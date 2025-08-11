'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { projects, type Project } from '@/lib/projects';
import Link from 'next/link';
import { useMemo, useState } from 'react';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const items = useMemo(() => projects, []);
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="projects" aria-label="Proyectos" className="mx-auto max-w-6xl px-4 py-16">
      <div className="mb-8 flex items-end justify-between">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Proyectos destacados</h2>
        <Link href="https://github.com/tu-usuario" target="_blank" className="link-underline text-sm">
          Ver todo en GitHub →
        </Link>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((p) => (
          <motion.article
            key={p.slug}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="card group overflow-hidden cursor-pointer"
            onClick={() => setSelected(p)}
            onKeyDown={(e) => (e.key === 'Enter' ? setSelected(p) : null)}
            tabIndex={0}
            aria-label={`Abrir detalles de ${p.title}`}
          >
            <div className="relative aspect-[16/10]">
              <Image src={p.image} alt={`Cover ${p.title}`} fill className="object-cover" sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" />
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-t from-black/40 to-transparent" />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                {p.title}
                {p.featured && <span className="text-xs rounded-full bg-brand-500/15 text-brand-600 dark:text-brand-300 px-2 py-0.5">Destacado</span>}
              </h3>
              <p className="mt-1 text-sm opacity-80 line-clamp-2">{p.description}</p>

              <ul className="mt-3 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <li key={s} className="text-[11px] rounded-full border border-white/20 px-2 py-1 opacity-80">{s}</li>
                ))}
              </ul>

              <div className="mt-4 flex gap-2">
                {p.demo && (
                  <Link
                    href={p.demo} target="_blank"
                    className="button-focus rounded-xl border border-white/20 px-3 py-2 text-sm hover:bg-white/60 dark:hover:bg-white/10"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Demo
                  </Link>
                )}
                {p.code && (
                  <Link
                    href={p.code} target="_blank"
                    className="button-focus rounded-xl border border-white/20 px-3 py-2 text-sm hover:bg-white/60 dark:hover:bg-white/10"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Código
                  </Link>
                )}
                <button
                  className="button-focus rounded-xl border border-white/20 px-3 py-2 text-sm hover:bg-white/60 dark:hover:bg-white/10"
                  onClick={(e) => { e.stopPropagation(); setSelected(p); }}
                >
                  Más info
                </button>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      <ProjectModal open={!!selected} project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
