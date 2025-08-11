/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef6ff',
          100: '#d9eaff',
          200: '#b3d5ff',
          300: '#84b9ff',
          400: '#5396ff',
          500: '#2b72ff',
          600: '#1f59db',
          700: '#1947af',
          800: '#163d8d',
          900: '#132f6d'
        }
      },
      backgroundImage: {
        glow: 'radial-gradient(1000px 600px at var(--x,50%) var(--y,50%), rgba(43,114,255,0.25), transparent 60%)',
        grid: 'linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)'
      },
      boxShadow: { glow: '0 0 40px -10px rgba(43,114,255,0.8)' }
    }
  },
  plugins: []
};
