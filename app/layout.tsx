import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from 'next/font/google'
import { Toaster } from "@/components/ui/toaster";
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
  metadataBase: new URL('https://sappie.com.br'),
  title: 'Sappie - Educação Corporativa e Ensino com Microlearning Gamificado',
  description: 'Plataforma de microlearning gamificado com repetição espaçada para empresas e instituições de ensino. Treinamentos e conteúdos que sua equipe e seus alunos realmente lembram: 90% de retenção, aprendizado 20x mais rápido.',
  keywords: ['educação corporativa', 'treinamento corporativo', 'microlearning', 'instituições de ensino', 'flashcards', 'repetição espaçada', 'gamificação', 'L&D', 'sappie'],
  authors: [{ name: 'Sappie' }],
  icons: {
    icon: 'https://storage.googleapis.com/gpt-engineer-file-uploads/JePuR2kIQNUfaAoOGM3ltroluTf1/uploads/1761316656195-Sappie-Logo(3).png',
  },
  openGraph: {
    type: 'website',
    title: 'Sappie - Educação Corporativa e Ensino com Microlearning Gamificado',
    description: 'Plataforma de microlearning gamificado com repetição espaçada para empresas e instituições de ensino. 90% de retenção, aprendizado 20x mais rápido.',
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
    title: 'Sappie - Educação Corporativa e Ensino com Microlearning Gamificado',
    description: 'Plataforma de microlearning gamificado com repetição espaçada para empresas e instituições de ensino. 90% de retenção, aprendizado 20x mais rápido.',
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
        {children}
        <Toaster />
      </body>
    </html>
  );
}
