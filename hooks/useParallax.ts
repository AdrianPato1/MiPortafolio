'use client';
import { useEffect, useState } from 'react';

export function useParallax(multiplier = 0.05) {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setOffset({ x: x * multiplier, y: y * multiplier });
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, [multiplier]);
  return offset;
}