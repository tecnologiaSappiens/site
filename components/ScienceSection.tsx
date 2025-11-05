import { Card } from "@/components/ui/card";
import { Brain, Calendar, Trophy } from "lucide-react";

// Static data (better for SEO and performance)
const features = [
  {
    icon: Brain,
    title: "Recordação Ativa",
    description: "Responda perguntas diretas e objetivas, estimulando a memória de forma eficiente",
    keywords: "recordação ativa, memória, aprendizado eficiente",
  },
  {
    icon: Calendar,
    title: "Repetição Espaçada",
    description: "Nosso algoritmo inteligente cria um plano de revisão personalizado, focando no que você mais precisa",
    keywords: "repetição espaçada, algoritmo, revisão personalizada",
  },
  {
    icon: Trophy,
    title: "Gamificação",
    description: "O que você erra, aparece mais; o que você já domina, aparece menos. Simples, eficiente e no seu ritmo!",
    keywords: "gamificação, aprendizado adaptativo, estudo personalizado",
  },
] as const;

const stats = [
  { 
    value: "90%", 
    label: "LEMBRE ATÉ 90% DO CONTEÚDO",
    description: "Taxa de retenção com flashcards e repetição espaçada"
  },
  { 
    value: "20x", 
    label: "MAIS EFICIENTE QUE MÉTODOS TRADICIONAIS",
    description: "Comparado com releitura e anotações passivas"
  },
] as const;

export const ScienceSection = () => {
  return (
    <section 
      id="ciencia" 
      className="py-24 relative overflow-hidden bg-muted/30"
      aria-labelledby="ciencia-heading"
      itemScope
      itemType="https://schema.org/EducationalOrganization"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-16 animate-fade-in">
          <h2 
            id="ciencia-heading"
            className="font-heading text-4xl sm:text-5xl lg:text-6xl mb-6"
            itemProp="name"
          >
            Aprendizagem rápida, <span className="primary-text">maior retenção</span>, menor esquecimento do conteúdo!
          </h2>
          <p 
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            itemProp="description"
          >
            Comprovado em mais de 30 anos de pesquisas científicas<br />
            sobre aprendizado eficiente
          </p>
        </header>

        {/* Features */}
        <div 
          className="grid md:grid-cols-3 gap-8 mb-20"
          role="list"
          aria-label="Metodologias de aprendizado"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <article
                key={feature.title}
                className="p-8 bg-card/50 backdrop-blur-sm border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105 animate-slide-up rounded-lg"
                style={{ animationDelay: `${index * 0.1}s` }}
                role="listitem"
                itemScope
                itemType="https://schema.org/Thing"
              >
                <div 
                  className="w-24 h-24 mx-auto mb-6 flex items-center justify-center"
                  aria-hidden="true"
                >
                  <Icon className="w-full h-full text-primary" strokeWidth={1.5} />
                </div>
                <h3 
                  className="font-heading text-2xl mb-4 text-center primary-text"
                  itemProp="name"
                >
                  {feature.title}
                </h3>
                <p 
                  className="text-muted-foreground text-center leading-relaxed"
                  itemProp="description"
                >
                  {feature.description}
                </p>
                
                {/* Hidden keywords for SEO */}
                <meta itemProp="keywords" content={feature.keywords} />
              </article>
            );
          })}
        </div>

        {/* Stats with Schema.org markup */}
        <div 
          className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          role="list"
          aria-label="Estatísticas de eficiência"
        >
          {stats.map((stat, index) => (
            <Card
              key={stat.label}
              className="p-12 text-center bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105 animate-scale-in"
              style={{ animationDelay: `${index * 0.2}s` }}
              role="listitem"
              itemScope
              itemType="https://schema.org/Claim"
            >
              <div 
                className="text-6xl sm:text-7xl font-heading primary-text mb-4 font-bold"
                itemProp="name"
                aria-label={`${stat.value} - ${stat.label}`}
              >
                {stat.value}
              </div>
              <p 
                className="text-lg text-foreground font-semibold tracking-wide"
                itemProp="text"
              >
                {stat.label}
              </p>
              
              {/* Hidden description for SEO and screen readers */}
              <span className="sr-only" itemProp="description">
                {stat.description}
              </span>
            </Card>
          ))}
        </div>

        {/* Hidden structured data for rich snippets */}
        <div className="sr-only">
          <div itemScope itemType="https://schema.org/Course">
            <meta itemProp="name" content="Método Sappie de Flashcards" />
            <meta itemProp="description" content="Sistema de aprendizado baseado em recordação ativa, repetição espaçada e gamificação" />
            <meta itemProp="educationalLevel" content="All levels" />
            <div itemProp="provider" itemScope itemType="https://schema.org/Organization">
              <meta itemProp="name" content="Sappie" />
            </div>
            <div itemProp="hasCourseInstance" itemScope itemType="https://schema.org/CourseInstance">
              <meta itemProp="courseMode" content="online" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
