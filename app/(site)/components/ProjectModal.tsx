'use client';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import type { Project } from '@/lib/projects';

export default function ProjectModal({
  open,
  project,
  onClose
}: { open: boolean; project: Project | null; onClose: () => void }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    const prev = document.documentElement.style.overflow;
    document.documentElement.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.documentElement.style.overflow = prev;
    };
  }, [open, onClose]);

  if (!mounted) return null;
  return createPortal(
    <AnimatePresence>
      {open && project && (
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4"
          onClick={onClose}
          aria-modal="true" role="dialog"
        >
          <motion.div
            initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 20, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 240, damping: 22 }}
            className="card relative max-h-[85vh] w-full max-w-3xl overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
           <button
  type="button"
  onClick={onClose}
  className="button-focus absolute right-3 top-3 z-20 rounded-full border border-white/20 px-3 py-1 text-sm opacity-80 hover:opacity-100"
  aria-label="Cerrar"
>
  ✕
</button>

<div className="relative aspect-[16/9] z-0">
  <Image src={project.image} alt={`Imagen de ${project.title}`} fill className="object-cover pointer-events-none" />
</div>
            <div className="p-5">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="mt-1 text-sm opacity-80">
                {project.longDescription ?? project.description}
              </p>

              <ul className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((s) => (
                  <li key={s} className="text-[11px] rounded-full border border-white/20 px-2 py-1 opacity-80">
                    {s}
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.demo && (
                  <a
                    href={project.demo} target="_blank" rel="noreferrer"
                    className="button-focus rounded-xl border border-white/20 px-3 py-2 text-sm hover:bg-white/60 dark:hover:bg-white/10"
                  >
                    Demo
                  </a>
                )}
                {project.code && (
                  <a
                    href={project.code} target="_blank" rel="noreferrer"
                    className="button-focus rounded-xl border border-white/20 px-3 py-2 text-sm hover:bg-white/60 dark:hover:bg-white/10"
                  >
                    Código
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
