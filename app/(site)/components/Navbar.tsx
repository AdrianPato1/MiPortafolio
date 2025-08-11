'use client';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <header
      data-theme={mounted ? resolvedTheme : undefined}
      className="sticky top-0 z-50 backdrop-blur bg-transparent border-b border-white/10"
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="#" className="font-semibold tracking-tight text-lg">Adrián Rodríguez</Link>
        <div className="flex items-center gap-4">
          <Link href="#projects" className="text-sm opacity-80 hover:opacity-100">Proyectos</Link>
          <Link href="#about" className="text-sm opacity-80 hover:opacity-100">Sobre mí</Link>
          <Link href="#trajectory" className="text-sm opacity-80 hover:opacity-100">Trayectoria</Link>
          <Link href="#contact" className="text-sm opacity-80 hover:opacity-100">Contacto</Link>
          {mounted && <ThemeToggle />}
        </div>
      </nav>
    </header>
  );
}