"use client";

import Image from "next/image";
import heroImage from "@/assets/hero-sappie.jpg";

export const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImage}
          alt="Hero background"
          fill
          priority
          className="object-cover"
          quality={90}
        />
        <div className="absolute inset-0 bg-secondary/70"></div>
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center min-h-screen">
        <div className="max-w-4xl mx-auto text-center animate-fade-in space-y-8">
          <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl leading-tight">
            <span className="primary-text">FLASHCARDS INTELIGENTES:</span>
            <br />
            <span className="text-foreground">ESTUDE RÁPIDO, LEMBRE TUDO E SE DIVIRTA!</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Potencialize seu aprendizado e transforme conhecimento em valor com a plataforma de flashcards mais inovadora do mercado
          </p>
        </div>
      </div>
    </section>
  );
};
