# Portafolio – Adrián Rodríguez

Portafolio profesional construido con Next.js (App Router), Tailwind CSS y Framer Motion.

## Scripts
- `pnpm dev` – entorno de desarrollo
- `pnpm build` – build de producción
- `pnpm start` – servir producción

## Variables/Assets
- Cambia URLs de **GitHub**, **LinkedIn**, **correo** y **Aularium** en los componentes `Hero` y `CallToAction`.
- Añade imágenes en `public/` (`avatar.jpg`, `aularium-cover.png`, `ecosafari-cover.png`). Usa `next/image` para optimización.

## Accesibilidad y rendimiento
- Alt descriptivo, `focus-visible` y contrastes.
- Imágenes optimizadas con `next/image` y tamaños responsivos.
- Animaciones con duración corta y viewport `once` para evitar re-ejecuciones.

## Deploy
1. Sube el repo a GitHub.
2. En **Vercel**, `New Project` → importa tu repo.
3. Framework: Next.js (auto-detectado).
4. Build Command: `next build` (por defecto). Output: `.next`.
5. Variables opcionales (si usas APIs).
6. Deploy.

> Para ruta de imágenes remotas, revisa `next.config.mjs` → `images.remotePatterns`.