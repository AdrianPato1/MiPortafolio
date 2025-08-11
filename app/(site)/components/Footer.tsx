
export default function Footer() {
  return (
    <footer className="mx-auto max-w-6xl px-4 py-10 opacity-70">
      <p className="text-sm">
        © {new Date().getFullYear()} Adrián Rodríguez. Hecho con Next.js, Tailwind y Framer Motion.
      </p>
    </footer>
  );
}
