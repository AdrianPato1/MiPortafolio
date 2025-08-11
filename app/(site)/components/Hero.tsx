'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useParallax } from '@/hooks/useParallax';
import Link from 'next/link';

export default function Hero() {
  const { x, y } = useParallax(0.04);

  return (
    <section className="relative mx-auto max-w-6xl px-4 pt-16 pb-20 sm:pt-24" aria-label="Presentación">
      {/* Glow interactivo */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-glow" />


      <div className="grid items-center gap-10 md:grid-cols-2">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-semibold tracking-tight sm:text-5xl"
          >
            Construyo productos web
            <br />
            <span className="bg-gradient-to-r from-brand-500 to-purple-500 bg-clip-text text-transparent">
              limpios, rapidos y necesarios.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="mt-4 text-base opacity-80 max-w-prose"
          >
            Soy Adrián Ingeniero en Software y Desarrollador Web. Me enfoco en Next.js, TypeScript y UX para crear experiencias de alto impacto.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-6 flex flex-wrap gap-3"
          >
            <Link href="#contact" className="button-focus inline-flex items-center rounded-2xl bg-brand-500 px-5 py-3 text-white shadow-glow hover:shadow-lg">
              Contáctame
            </Link>
            <Link href="#projects" className="button-focus inline-flex items-center rounded-2xl border border-white/20 px-5 py-3 hover:bg-white/60 dark:hover:bg-white/10">
              Ver proyectos
            </Link>
            <Link href="https://github.com/AdrianPato1" className="button-focus inline-flex items-center rounded-2xl border border-white/20 px-4 py-3" target="_blank" rel="noreferrer">
              GitHub
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="relative mx-auto h-60 w-60 sm:h-72 sm:w-72 md:h-80 md:w-80"
          style={{ transform: `translate3d(${x * 8}px, ${y * 8}px, 0)` }}
        >
          <div className="absolute -inset-3 rounded-full bg-gradient-to-tr from-brand-500/30 to-purple-500/30 blur-2xl" />
          <Image
            src="/avatar.jpg"
            alt="Foto de Adrián"
            fill
            priority
            sizes="(max-width: 768px) 16rem, 20rem"
            className="rounded-full object-cover border border-white/20"
          />
        </motion.div>
      </div>
    </section>
  );
}