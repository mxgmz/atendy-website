import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { SITE_CONFIG } from '@/lib/constants';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Atendy - Recepcionista IA para tu Negocio | Automatiza WhatsApp',
  description:
    'Automatiza tu atención al cliente con IA. Responde WhatsApp 24/7, agenda citas automáticamente y recupera clientes inactivos. Ahorra 20+ horas/mes.',
  keywords:
    'recepcionista virtual, chatbot whatsapp, automatización clientes, CRM pymes, agenda citas automatica, bot whatsapp, asistente virtual, automatización negocios',
  authors: [{ name: 'Atendy' }],
  creator: 'Atendy',
  publisher: 'Atendy',
  metadataBase: new URL(SITE_CONFIG.url),
  openGraph: {
    type: 'website',
    locale: 'es_MX',
    url: SITE_CONFIG.url,
    title: 'Atendy - Tu Recepcionista IA 24/7',
    description: 'Automatiza WhatsApp, previene no-shows y recupera clientes. $49/mes con ROI de 1,860%',
    siteName: SITE_CONFIG.name,
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Atendy - Recepcionista IA',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Atendy - Tu Recepcionista IA 24/7',
    description: 'Automatiza WhatsApp, previene no-shows y recupera clientes. $49/mes con ROI de 1,860%',
    images: ['/og-image.png'],
    creator: SITE_CONFIG.social.twitter,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
