'use client';
import { motion } from 'framer-motion';
import { metrics, trajectory } from '@/lib/trajectory';
import { useCountUp } from '@/hooks/useCountUp';
import ParticlesMesh from './ParticlesMesh';



function MetricItem({ value, label, suffix }: { value: number; label: string; suffix?: string }) {
  const v = useCountUp(value);
  return (
    <div className="card flex flex-col items-center justify-center p-6 text-center">
      <div className="text-3xl font-bold text-brand-500">+{v}{suffix}</div>
      <div className="mt-1 text-xs tracking-wide opacity-80 uppercase">{label}</div>
    </div>
  );
}

export default function Trajectory() {
  return (
    <section id="trajectory" aria-label="Trayectoria académica" className="relative mx-auto max-w-6xl px-4 py-16">
        <div className="absolute inset-x-0 top-0 -z-10 hidden sm:block">
        <ParticlesMesh height={280} density={60} connectDistance={140} />
      </div>
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-2xl font-semibold tracking-tight sm:text-3xl"
      >
        Trayectoria académica
      </motion.h2>

      {/* Métricas */}
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {metrics.map((m) => (
          <MetricItem key={m.label} value={m.value} label={m.label} suffix={m.suffix} />
        ))}
      </div>

      {/* Timeline */}
      <div className="relative mt-12">
        <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-white/20" />
        <ul className="space-y-8">
          {trajectory.map((t, i) => (
            <motion.li
              key={t.title + t.date}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className={`relative grid items-start gap-4 md:grid-cols-2`}
            >
              <div className={`${t.side === 'left' ? 'md:pr-10 md:col-start-1' : 'md:col-start-2 md:pl-10'}`}>
                <div className="card p-5">
                  <span className="inline-block rounded-full bg-brand-500/15 px-3 py-1 text-xs font-medium text-brand-600 dark:text-brand-300">{t.date}</span>
                  <div className="mt-2 text-lg font-semibold">{t.title}</div>
                  {t.org && <div className="text-sm opacity-70">{t.org}</div>}
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