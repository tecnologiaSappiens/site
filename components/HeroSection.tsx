import Image from "next/image";
import heroImage from "@/assets/hero-sappie.jpg";

export const HeroSection = () => {
  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-labelledby="hero-heading"
      itemScope
      itemType="https://schema.org/WebPageElement"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <Image
          src={heroImage}
          alt="Estudante usando flashcards inteligentes da Sappie para aprendizado eficiente"
          fill
          priority
          className="object-cover"
          quality={85}
          sizes="100vw"
          placeholder="blur"
        />
        {/* Optimized overlay using pseudo-element would be better, but keeping div for compatibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/60 via-secondary/70 to-secondary/80" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center min-h-screen">
        <header className="max-w-4xl mx-auto text-center animate-fade-in space-y-8">
          <h1 
            id="hero-heading"
            className="font-heading text-5xl sm:text-6xl lg:text-7xl leading-tight"
            itemProp="headline"
          >
            <span className="primary-text">FLASHCARDS INTELIGENTES:</span>
            <br />
            <span className="text-foreground">ESTUDE RÁPIDO, LEMBRE TUDO E DIVIRTA-SE!</span>
          </h1>
          
          <p 
            className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            itemProp="description"
          >
            Potencialize seu aprendizado e transforme conhecimento em valor com a plataforma de flashcards mais inovadora do mercado
          </p>

          {/* Hidden structured data for SEO */}
          <div itemScope itemType="https://schema.org/SoftwareApplication" className="sr-only">
            <meta itemProp="name" content="Sappie - Flashcards Inteligentes" />
            <meta itemProp="applicationCategory" content="EducationalApplication" />
            <meta itemProp="description" content="Plataforma de flashcards inteligentes para aprendizado eficiente, divertido e baseado em ciência" />
            <meta itemProp="operatingSystem" content="Web, iOS, Android" />
            <div itemProp="offers" itemScope itemType="https://schema.org/Offer">
              <meta itemProp="price" content="0" />
              <meta itemProp="priceCurrency" content="BRL" />
            </div>
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
