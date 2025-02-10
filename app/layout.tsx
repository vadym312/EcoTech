import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'TechGear Pro | Premium Tech Products',
    template: '%s | TechGear Pro'
  },
  description: 'Discover premium tech products at TechGear Pro. From cutting-edge gadgets to essential accessories, find the perfect tech for your needs.',
  openGraph: {
    title: 'TechGear Pro | Premium Tech Products',
    description: 'Discover premium tech products at TechGear Pro. From cutting-edge gadgets to essential accessories, find the perfect tech for your needs.',
    url: 'https://techgearpro.com',
    siteName: 'TechGear Pro',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2020&auto=format&fit=crop',
        width: 1200,
        height: 630,
        alt: 'TechGear Pro Banner'
      }
    ],
    locale: 'en_US',
    type: 'website',
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
  twitter: {
    title: 'TechGear Pro | Premium Tech Products',
    card: 'summary_large_image',
    description: 'Discover premium tech products at TechGear Pro. From cutting-edge gadgets to essential accessories, find the perfect tech for your needs.',
    images: ['https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2020&auto=format&fit=crop'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}