"use client";

import { Card } from "@/components/ui/card";
import { CheckCircle, Brain, Zap, Target } from "lucide-react";

export const AppShowcaseSection = () => {
  const basePath = process.env.NODE_ENV === 'production' ? '/site' : '';

  const features = [
    {
      icon: CheckCircle,
      title: "Responda perguntas diretas e objetivas",
      description: "Sem enrolação, direto ao ponto para estimular sua memória de forma eficiente.",
      position: "top-left"
    },
    {
      icon: Zap,
      title: "Feedback imediato",
      description: "Veja imediatamente a resposta e marque se acertou ou errou.",
      position: "top-right"
    },
    {
      icon: Brain,
      title: "Algoritmo inteligente",
      description: "Nosso sistema cria um plano de revisão personalizado, focando no que você mais precisa.",
      position: "bottom-left"
    },
    {
      icon: Target,
      title: "Foco no que importa",
      description: "O que você erra, aparece mais; o que você já domina, aparece menos. Simples, eficiente e no seu ritmo!",
      position: "bottom-right"
    }
  ];

  return (
    <section id="app" className="py-24 relative overflow-hidden bg-gradient-to-b from-muted/30 to-background">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Title */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl mb-6">
            Com os flashcards <span className="primary-text">da Sappie</span>,<br />
            você aprende mais rápido e nunca esquece o que estudou!
          </h2>
        </div>

        {/* App Showcase Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            
            {/* Left Features */}
            <div className="space-y-8">
              {features.slice(0, 2).map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <Card 
                    key={index}
                    className="p-6 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105 animate-slide-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-heading text-xl mb-2 text-foreground font-semibold">
                          {feature.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>

            {/* Center - Video and App Store Badges */}
            <div className="flex flex-col items-center justify-center lg:px-8 space-y-8">
              <div className="relative animate-fade-in max-w-sm w-full" style={{ animationDelay: "0.2s" }}>
                <video
                  className="w-full h-auto rounded-2xl shadow-2xl"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src={`${basePath}/videos/sappie-video-app.webm`} type="video/webm" />
                </video>
                
                {/* Glow effect */}
                <div className="absolute inset-0 bg-primary/10 rounded-2xl blur-2xl -z-10" />
              </div>

              {/* App Store Badges */}
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
                <a 
                  href="https://apps.apple.com/br/app/sappie-flashcards-digitais/id6737522389" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg hover:opacity-80 transition-opacity min-w-[140px]"
                >
                  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                  </svg>
                  <div className="text-left">
                    <div className="text-[10px] leading-tight">Baixe na</div>
                    <div className="text-base font-semibold leading-tight">App Store</div>
                  </div>
                </a>

                <a 
                  href="https://play.google.com/store/apps/details?id=com.sappiens" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg hover:opacity-80 transition-opacity min-w-[140px]"
                >
                  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                  </svg>
                  <div className="text-left">
                    <div className="text-[10px] leading-tight">Disponível no</div>
                    <div className="text-base font-semibold leading-tight">Google Play</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Right Features */}
            <div className="space-y-8">
              {features.slice(2, 4).map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <Card 
                    key={index}
                    className="p-6 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105 animate-slide-up"
                    style={{ animationDelay: `${(index + 2) * 0.1}s` }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-heading text-xl mb-2 text-foreground font-semibold">
                          {feature.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
