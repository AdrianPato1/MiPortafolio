'use client';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const current = theme === 'system' ? systemTheme : theme;

  return (
    <button
      aria-label="Cambiar tema"
      onClick={() => setTheme(current === 'dark' ? 'light' : 'dark')}
      className="button-focus rounded-xl px-3 py-2 text-sm border border-white/20 dark:border-white/10 hover:bg-white/60 dark:hover:bg-white/10"
    >
      {current === 'dark' ? '🌙' : '☀️'}
    </button>
  );
}