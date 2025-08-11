'use client';
import { useEffect, useRef } from 'react';

type Props = {
  height?: number;          // alto en px del lienzo visible
  density?: number;         // nº base de puntos (se ajusta por ancho)
  speed?: number;           // velocidad base
  connectDistance?: number; // distancia máx para líneas
  className?: string;
};

type Dot = { x: number; y: number; vx: number; vy: number };

export default function ParticlesMesh({
  height = 280,
  density = 60,
  speed = 0.25,
  connectDistance = 140,
  className = ''
}: Props) {
  const ref = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = ref.current!;
    const ctx = canvas.getContext('2d')!;
    const dpr = Math.max(1, window.devicePixelRatio || 1);
    let rect = canvas.getBoundingClientRect();
    let W = Math.floor(rect.width * dpr);
    let H = Math.floor(height * dpr);

    canvas.width = W;
    canvas.height = H;
    canvas.style.width = '100%';
    canvas.style.height = `${height}px`;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let running = !reduceMotion && !document.hidden;

    // nº de puntos según ancho (mantiene densidad aprox)
    const n = Math.max(10, Math.round(density * (rect.width / 1200)));
    const dots: Dot[] = Array.from({ length: n }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * speed * dpr,
      vy: (Math.random() - 0.5) * speed * dpr
    }));

    // parallax sutil con el mouse
    let mx = 0, my = 0;
    const onMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      mx = x * 6 * dpr;
      my = y * 6 * dpr;
    };

    const draw = () => {
      ctx.clearRect(0, 0, W, H);

      // puntos
      ctx.fillStyle = 'rgba(255,255,255,0.7)';
      for (const d of dots) {
        if (running) { d.x += d.vx; d.y += d.vy; }
        if (d.x < 0 || d.x > W) d.vx *= -1;
        if (d.y < 0 || d.y > H) d.vy *= -1;

        ctx.beginPath();
        ctx.arc(d.x + mx * 0.05, d.y + my * 0.05, 1.6, 0, Math.PI * 2);
        ctx.fill();
      }

      // líneas
      const maxDist2 = (connectDistance * dpr) ** 2;
      for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
          const dx = dots[i].x - dots[j].x;
          const dy = dots[i].y - dots[j].y;
          const d2 = dx * dx + dy * dy;
          if (d2 < maxDist2) {
            const a = 1 - d2 / maxDist2; // alpha por proximidad
            ctx.strokeStyle = `rgba(255,255,255,${0.25 * a})`;
            ctx.beginPath();
            ctx.moveTo(dots[i].x + mx * 0.05, dots[i].y + my * 0.05);
            ctx.lineTo(dots[j].x + mx * 0.05, dots[j].y + my * 0.05);
            ctx.stroke();
          }
        }
      }
    };

    let raf = 0;
    const loop = () => { draw(); raf = requestAnimationFrame(loop); };
    loop();

    const onResize = () => {
      rect = canvas.getBoundingClientRect();
      W = Math.floor(rect.width * dpr);
      H = Math.floor(height * dpr);
      canvas.width = W; canvas.height = H;
    };
    const onVisibility = () => { running = !document.hidden && !reduceMotion; };

    window.addEventListener('mousemove', onMove);
    window.addEventListener('resize', onResize);
    document.addEventListener('visibilitychange', onVisibility);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('resize', onResize);
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, [height, density, speed, connectDistance]);

  return (
    <canvas
      ref={ref}
      className={`pointer-events-none select-none ${className}`}
      aria-hidden="true"
    />
  );
}
