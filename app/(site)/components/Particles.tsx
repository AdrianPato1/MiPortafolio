'use client';
import { useEffect, useRef } from 'react';

export default function Particles() {
  const ref = useRef<HTMLCanvasElement | null>(null);
  useEffect(() => {
    const canvas = ref.current!;
    const ctx = canvas.getContext('2d')!;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = 300);
    const dots = Array.from({ length: 60 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3
    }));

    let raf: number;
    const loop = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = 'rgba(255,255,255,0.5)';
      dots.forEach((d) => {
        d.x += d.vx; d.y += d.vy;
        if (d.x < 0 || d.x > width) d.vx *= -1;
        if (d.y < 0 || d.y > height) d.vy *= -1;
        ctx.beginPath(); ctx.arc(d.x, d.y, 1.2, 0, Math.PI * 2); ctx.fill();
      });
      raf = requestAnimationFrame(loop);
    };
    loop();
    const onResize = () => { width = canvas.width = window.innerWidth; };
    window.addEventListener('resize', onResize);
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', onResize); };
  }, []);

  return <canvas ref={ref} className="absolute inset-x-0 top-0 -z-10 h-[300px] w-full" aria-hidden />;
}