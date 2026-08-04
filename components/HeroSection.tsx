import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DemoCTA } from "@/components/shared/DemoCTA";
import heroImage from "@/assets/hero-sappie.jpg";

const WHATSAPP_URL = "https://wa.me/5511935031749?text=Quero%20conhecer%20a%20Sappie";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-[85vh] flex items-center justify-center overflow-hidden"
      aria-labelledby="hero-heading"
      itemScope
      itemType="https://schema.org/WebPageElement"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <Image
          src={heroImage}
          alt="Equipe aprendendo com microlearning gamificado da Sappie"
          fill
          priority
          className="object-cover"
          quality={85}
          sizes="100vw"
          placeholder="blur"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/60 via-secondary/70 to-secondary/80" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center min-h-[85vh] py-24">
        <header className="max-w-4xl mx-auto text-center animate-fade-in space-y-8">
          <h1
            id="hero-heading"
            className="font-heading text-4xl sm:text-5xl lg:text-6xl leading-tight"
            itemProp="headline"
          >
            <span className="text-foreground">Treinamentos e conteúdos que</span>
            <br />
            <span className="primary-text">sua equipe realmente lembra</span>
          </h1>

          <p
            className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            itemProp="description"
          >
            Microlearning gamificado com repetição espaçada para empresas e instituições de ensino.
            Retenção de até 90% do conteúdo, com aprendizado 20x mais rápido.
          </p>

          <nav
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            aria-label="Ações principais"
          >
            <DemoCTA size="lg" showArrow className="text-lg px-8 py-6 glow-effect" />
            <Button size="lg" variant="outline" className="text-lg px-8 py-6" asChild>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Falar com a Sappie pelo WhatsApp"
              >
                <MessageCircle className="mr-2 h-5 w-5" aria-hidden="true" />
                Falar no WhatsApp
              </a>
            </Button>
          </nav>

          {/* Hidden structured data for SEO */}
          <div itemScope itemType="https://schema.org/SoftwareApplication" className="sr-only">
            <meta itemProp="name" content="Sappie - Plataforma de Microlearning Gamificado" />
            <meta itemProp="applicationCategory" content="EducationalApplication" />
            <meta
              itemProp="description"
              content="Plataforma de microlearning gamificado com repetição espaçada para educação corporativa e instituições de ensino"
            />
            <meta itemProp="operatingSystem" content="Web, iOS, Android" />
          </div>
        </header>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce"
        aria-hidden="true"
      >
        <svg
          className="w-6 h-6 text-primary"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
};
