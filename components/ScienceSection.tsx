import { Card } from "@/components/ui/card";
import { Brain, Calendar, Trophy } from "lucide-react";

export const ScienceSection = () => {
  const features = [
    {
      icon: Brain,
      title: "Recordação Ativa",
      description: "Responda perguntas diretas e objetivas, estimulando a memória de forma eficiente",
    },
    {
      icon: Calendar,
      title: "Repetição Espaçada",
      description: "Nosso algoritmo inteligente cria um plano de revisão personalizado, focando no que você mais precisa",
    },
    {
      icon: Trophy,
      title: "Gamificação",
      description: "O que você erra, aparece mais; o que você já domina, aparece menos. Simples, eficiente e no seu ritmo!",
    },
  ];

  const stats = [
    { value: "90%", label: "LEMBRE ATÉ 90% DO CONTEÚDO" },
    { value: "20x", label: "MAIS EFICIENTE QUE MÉTODOS TRADICIONAIS" },
  ];

  return (
    <section id="ciencia" className="py-24 relative overflow-hidden bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl mb-6">
            Aprendizagem rápida, <span className="primary-text">maior retenção</span>, menor esquecimento do conteúdo!
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprovado em mais de 30 anos de pesquisas científicas<br />sobre aprendizado eficiente
          </p>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="p-8 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                <feature.icon className="w-full h-full text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="font-heading text-2xl mb-4 text-center primary-text">{feature.title}</h3>
              <p className="text-muted-foreground text-center leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <Card 
              key={index}
              className="p-12 text-center bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105 animate-scale-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-6xl sm:text-7xl font-heading primary-text mb-4 font-bold">
                {stat.value}
              </div>
              <p className="text-lg text-foreground font-semibold tracking-wide">{stat.label}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
