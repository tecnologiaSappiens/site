import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GraduationCap, Users, Briefcase, School, Check } from "lucide-react";
import { useState, useEffect } from "react";

export const AudienceSection = () => {
  const [activeTab, setActiveTab] = useState("alunos");

  useEffect(() => {
    const hash = window.location.hash;
    if (hash.startsWith("#solucoes-")) {
      const tab = hash.replace("#solucoes-", "");
      setActiveTab(tab);
    }
  }, []);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith("#solucoes-")) {
        const tab = hash.replace("#solucoes-", "");
        setActiveTab(tab);
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);
  const audiences = [
    {
      id: "alunos",
      label: "Para Alunos",
      icon: GraduationCap,
      title: "Domine seus estudos e alcance seus objetivos",
      description: "Encontre ou crie os melhores flashcards para um aprendizado eficiente e divertido.",
      benefits: [
        "Acesso a milhares de flashcards prontos",
        "Criação fácil e rápida de flashcards",
        "Revisão personalizada pelo algoritmo",
        "Estudo gamificado e divertido",
        "Disponível em qualquer dispositivo",
      ],
      cta: "COMO AJUDAMOS ALUNOS →",
    },
    {
      id: "criadores",
      label: "Para Criadores",
      icon: Users,
      title: "Monetize seu conhecimento e impacte milhares",
      description: "Transforme sua expertise em flashcards, com total controle sobre seu conteúdo e ganhos.",
      benefits: [
        "Monetização simplificada do seu conteúdo",
        "Proteção da propriedade intelectual",
        "Ferramentas de criação profissionais",
        "Checkout seguro integrado",
        "Migração fácil de outras plataformas",
      ],
      cta: "COMO AJUDAMOS CRIADORES →",
    },
    {
      id: "empresas",
      label: "Para Empresas",
      icon: Briefcase,
      title: "Potencialize o treinamento de colaboradores",
      description: "Garanta alta retenção de conhecimento e um aprendizado eficiente para sua equipe.",
      benefits: [
        "Consultoria para criação de conteúdo",
        "Distribuição controlada por equipe",
        "Métricas de desempenho detalhadas",
        "Aprendizado flexível e assíncrono",
        "Integração com sistemas corporativos",
      ],
      cta: "COMO AJUDAMOS EMPRESAS →",
    },
    {
      id: "instituicoes",
      label: "Para Ensino",
      icon: School,
      title: "Inove no apoio acadêmico e potencialize o aprendizado",
      description: "Crie flashcards oficiais de seus materiais didáticos para apoiar o sucesso dos estudantes.",
      benefits: [
        "Conversão de materiais didáticos",
        "Plataforma completa de distribuição",
        "Acesso organizado por turma/disciplina",
        "Relatórios de progresso dos alunos",
        "Suporte técnico e pedagógico dedicado",
      ],
      cta: "COMO AJUDAMOS ENSINO →",
    },
  ];

  return (
    <section id="solucoes" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl mb-6">
            Soluções <span className="primary-text">para cada público</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Descubra como a Sappie pode transformar seu aprendizado ou seu negócio
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full max-w-6xl mx-auto">
          <TabsList className="grid grid-cols-2 lg:grid-cols-4 mb-12 h-auto gap-2 bg-card/50 p-2">
            {audiences.map((audience) => {
              const Icon = audience.icon;
              return (
                <TabsTrigger 
                  key={audience.id} 
                  value={audience.id}
                  className="py-4 data-[state=active]:bg-primary"
                >
                  <Icon className="w-5 h-5 mr-2" />
                  <span className="hidden sm:inline">{audience.label}</span>
                  <span className="sm:hidden">{audience.label.replace("Para ", "")}</span>
                </TabsTrigger>
              );
            })}
          </TabsList>

          {audiences.map((audience) => (
            <TabsContent key={audience.id} value={audience.id} className="animate-fade-in">
              <Card className="p-8 md:p-12 bg-card/50 backdrop-blur-sm border-primary/20">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="font-heading text-3xl lg:text-4xl mb-4 primary-text">
                      {audience.title}
                    </h3>
                    <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                      {audience.description}
                    </p>
                    
                    <Button 
                      size="lg"
                      className="bg-primary hover:bg-primary/90 transition-all duration-300"
                      onClick={() => {
                        if (audience.id === "alunos") {
                          window.location.href = "/alunos";
                        } else if (audience.id === "criadores") {
                          window.location.href = "/criadores";
                        } else if (audience.id === "empresas") {
                          window.location.href = "/empresas";
                        } else if (audience.id === "instituicoes") {
                          window.location.href = "/ensino";
                        }
                      }}
                    >
                      {audience.cta}
                    </Button>
                  </div>

                  <div className="space-y-4">
                    {audience.benefits.map((benefit, index) => (
                      <div 
                        key={index} 
                        className="flex items-start gap-3 animate-slide-up"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center mt-0.5">
                          <Check className="w-4 h-4 text-white" />
                        </div>
                        <p className="text-foreground">{benefit}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};
