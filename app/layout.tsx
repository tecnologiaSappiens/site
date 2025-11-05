import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from 'next/font/google'
import "./globals.css";

const inter = Inter({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-inter',
  display: 'swap',
})

const plusJakarta = Plus_Jakarta_Sans({ 
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  variable: '--font-plus-jakarta',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Sappie - Flashcards Inteligentes para Aprendizado Exponencial',
  description: 'Potencialize seu aprendizado e transforme seu conhecimento em valor com a plataforma de flashcards mais inovadora do mercado. Aprenda 20x mais rápido com repetição espaçada e recordação ativa.',
  keywords: ['flashcards', 'aprendizado', 'educação', 'estudo', 'repetição espaçada', 'memorização', 'sappie'],
  authors: [{ name: 'Sappie' }],
  icons: {
    icon: 'https://storage.googleapis.com/gpt-engineer-file-uploads/JePuR2kIQNUfaAoOGM3ltroluTf1/uploads/1761316656195-Sappie-Logo(3).png',
  },
  openGraph: {
    type: 'website',
    title: 'Sappie - Flashcards Inteligentes para Aprendizado Exponencial',
    description: 'Potencialize seu aprendizado e transforme seu conhecimento em valor com a plataforma de flashcards mais inovadora do mercado. Aprenda 20x mais rápido com repetição espaçada e recordação ativa.',
    images: [
      {
        url: 'https://storage.googleapis.com/gpt-engineer-file-uploads/JePuR2kIQNUfaAoOGM3ltroluTf1/social-images/social-1761316783389-Sappie-Logo(4).png',
        alt: 'Sappie Logo',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@sappie',
    title: 'Sappie - Flashcards Inteligentes para Aprendizado Exponencial',
    description: 'Potencialize seu aprendizado e transforme seu conhecimento em valor com a plataforma de flashcards mais inovadora do mercado. Aprenda 20x mais rápido com repetição espaçada e recordação ativa.',
    images: ['https://storage.googleapis.com/gpt-engineer-file-uploads/JePuR2kIQNUfaAoOGM3ltroluTf1/social-images/social-1761316783389-Sappie-Logo(4).png'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className={`${inter.variable} ${plusJakarta.variable}`}>
      <body className="font-sans antialiased">
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Plus+Jakarta+Sans:wght@600;700;800&display=swap" rel="stylesheet" />
        {children}
      </body>
    </html>
  );
}
