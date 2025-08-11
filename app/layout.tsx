import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from 'next-themes';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'),
  title: 'Adrián Rodríguez – Portafolio',
  description: 'Portafolio profesional de Adrián Rodríguez.',
  openGraph: {
    title: 'Adrián Rodríguez – Portafolio',
    description: 'Next.js + Tailwind + Framer Motion',
    url: 'https://tu-dominio.com',
    siteName: 'Portafolio Adrián',
    images: [{ url: '/og.png', width: 1200, height: 630 }],
    locale: 'es_MX',
    type: 'website'
  },
  twitter: { card: 'summary_large_image' }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}