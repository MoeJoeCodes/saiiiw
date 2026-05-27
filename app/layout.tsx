import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://www.saiiiw.co.za'),
  title: {
    default: 'SAIIIW | South African Institute of Islamically Integrated Wellness',
    template: '%s | SAIIIW'
  },
  description: 'Cultivating tranquility through clinical excellence and spiritual wisdom.',
  keywords: ['Islamic counselling', 'wellness', 'therapy', 'South Africa', 'mental health', 'Islamic psychology', 'SAIIIW'],
  openGraph: {
    type: 'website',
    locale: 'en_ZA',
    url: '/',
    title: 'SAIIIW | South African Institute of Islamically Integrated Wellness',
    description: 'Cultivating tranquility through clinical excellence and spiritual wisdom.',
    siteName: 'SAIIIW',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SAIIIW | South African Institute of Islamically Integrated Wellness',
    description: 'Cultivating tranquility through clinical excellence and spiritual wisdom.',
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
  icons: {
    icon: '/favicon.png',
    apple: '/apple-icon.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`} suppressHydrationWarning>
      <body className="bg-background text-on-background font-sans antialiased min-h-screen flex flex-col selection:bg-primary-container selection:text-white transition-colors duration-300" suppressHydrationWarning>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
