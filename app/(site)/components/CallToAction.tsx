'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

// Microinteracción reutilizable para cada item de contacto
const hoverItem = {
  initial: { y: 0, scale: 1 },
  whileHover: { y: -2, scale: 1.03 },
  whileTap: { scale: 0.98 },
  transition: { type: 'spring', stiffness: 300, damping: 18 }
};

export default function CallToAction() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-16">
      <div className="relative overflow-hidden rounded-3xl border border-white/20 p-8 text-center">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(800px_200px_at_50%_-20%,rgba(43,114,255,0.25),transparent)]" />

        <motion.h3
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-semibold"
        >
          ¿Te gustó lo que viste?
        </motion.h3>

        <p className="mt-2 opacity-80">Hablemos de cómo puedo aportar a tu equipo o proyecto.</p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          {/* Email */}
          <motion.div {...hoverItem}>
            <Link
              href="mailto:adrian@email.com"
              className="group relative inline-flex items-center justify-center rounded-2xl px-6 py-3 font-medium text-white button-focus"
            >
              {/* Glow dinámico al hacer hover */}
              <span
                aria-hidden
                className="absolute inset-0 rounded-2xl bg-gradient-to-r from-brand-500 to-purple-600 opacity-70 blur-md transition-opacity group-hover:opacity-90"
              />
              <span className="relative">Escríbeme</span>
            </Link>
          </motion.div>

          {/* LinkedIn */}
          <motion.div {...hoverItem}>
            <Link
              href="https://www.linkedin.com/in/tu-linkedin"
              target="_blank"
              className="group relative inline-flex items-center justify-center rounded-2xl border border-white/20 px-5 py-3 button-focus overflow-hidden"
            >
              {/* Borde con brillo sutil */}
              <span
                aria-hidden
                className="absolute bottom-1 left-3 right-3 h-px origin-left scale-x-0 bg-gradient-to-r from-brand-500 to-purple-500 transition-transform duration-300 group-hover:scale-x-100"
              />
              <span className="relative">LinkedIn</span>
            </Link>
          </motion.div>

          {/* GitHub */}
          <motion.div {...hoverItem}>
            <Link
              href="https://github.com/tu-usuario"
              target="_blank"
              className="group relative inline-flex items-center justify-center rounded-2xl border border-white/20 px-5 py-3 button-focus overflow-hidden"
            >
              {/* Subrayado animado */}
              <span
                aria-hidden
                className="absolute bottom-1 left-3 right-3 h-px origin-left scale-x-0 bg-gradient-to-r from-brand-500 to-purple-500 transition-transform duration-300 group-hover:scale-x-100"
              />
              <span className="relative">GitHub</span>
            </Link>
          </motion.div>

          {/* Aularium destacado */}
          <motion.div {...hoverItem}>
            <Link
              href="https://aularium.example.com"
              target="_blank"
              className="group relative inline-flex items-center justify-center rounded-2xl border border-white/20 px-5 py-3 button-focus overflow-hidden"
            >
              {/* Ring/Glow al hover */}
              <span
                aria-hidden
                className="absolute bottom-1 left-3 right-3 h-px origin-left scale-x-0 bg-gradient-to-r from-brand-500 to-purple-500 transition-transform duration-300 group-hover:scale-x-100"
              />
              <span className="relative flex items-center gap-1">
                Aularium
                <motion.span
                  initial={{ x: 0 }}
                  whileHover={{ x: 4 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                  aria-hidden
                >
                  →
                </motion.span>
              </span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}