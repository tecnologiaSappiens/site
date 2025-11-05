import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";
import { Check, Users, TrendingUp, Shield, Clock, BarChart3, Zap, MessageCircle, Briefcase } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Metadata for SEO
export const metadata: Metadata = {
  title: "Treinamento Corporativo com Flashcards | Sappie - Solução para Empresas",
  description: "Potencialize o treinamento da sua equipe com flashcards inteligentes. Alta retenção de conhecimento, métricas detalhadas e implementação rápida. Agende uma demonstração gratuita.",
  keywords: [
    "treinamento corporativo",
    "capacitação de equipes",
    "onboarding empresarial",
    "microlearning empresarial",
    "treinamento escalável",
    "compliance empresarial",
    "LMS corporativo",
    "educação corporativa",
    "aprendizado corporativo",
    "plataforma de treinamento",
    "capacitação profissional"
  ],
  authors: [{ name: "Sappie" }],
  openGraph: {
    title: "Treinamento Corporativo com Flashcards | Sappie",
    description: "Potencialize o treinamento da sua equipe com alta retenção de conhecimento e métricas detalhadas.",
    type: "website",
    locale: "pt_BR",
    siteName: "Sappie",
  },
  twitter: {
    card: "summary_large_image",
    title: "Treinamento Corporativo com Flashcards | Sappie",
    description: "Potencialize o treinamento da sua equipe com flashcards inteligentes.",
  },
  alternates: {
    canonical: "/empresas",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// Structured data for SEO
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "/empresas",
      "name": "Solução de Treinamento Corporativo",
      "description": "Plataforma de flashcards para treinamento e capacitação de equipes empresariais",
      "inLanguage": "pt-BR",
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Como funciona a integração com sistemas corporativos?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Nossa equipe técnica pode auxiliar no desenvolvimento da integração de acordo com as necessidades específicas da sua empresa."
          }
        },
        {
          "@type": "Question",
          "name": "Quanto tempo leva para implementar?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A implementação básica é muito rápida e pode ser feita em poucos dias. Para integrações customizadas, o prazo fica em algumas semanas, dependendo da complexidade."
          }
        },
        {
          "@type": "Question",
          "name": "Como os flashcards podem melhorar a produtividade da equipe?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Os flashcards permitem microlearning eficiente, com sessões curtas que não interrompem o trabalho. Colaboradores aprendem de forma rápida e retêm melhor as informações, reduzindo tempo gasto com retrabalho e dúvidas recorrentes."
          }
        },
        {
          "@type": "Question",
          "name": "Como é feito o controle de acesso?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Você pode criar grupos, definir permissões por equipe ou cargo, e controlar exatamente quem tem acesso a cada conjunto de flashcards através de um painel administrativo intuitivo."
          }
        },
        {
          "@type": "Question",
          "name": "Quais métricas posso acompanhar?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Taxa de conclusão, tempo de estudo, desempenho por colaborador, progresso por equipe, e muito mais. Todos os dados são apresentados em dashboards visuais e podem ser exportados."
          }
        },
        {
          "@type": "Question",
          "name": "Vocês oferecem suporte na criação do conteúdo?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sim! Oferecemos consultoria especializada para transformar seus materiais de treinamento em flashcards eficientes, seguindo as melhores práticas pedagógicas."
          }
        }
      ]
    },
    {
      "@type": "Service",
      "serviceType": "Corporate Training Platform",
      "provider": {
        "@type": "Organization",
        "name": "Sappie"
      },
      "areaServed": "BR",
      "audience": {
        "@type": "BusinessAudience",
        "audienceType": "Corporate Training Managers"
      }
    },
    {
      "@type": "Product",
      "name": "Sappie Corporate Training",
      "description": "Plataforma de treinamento corporativo com flashcards inteligentes",
      "category": "Corporate Learning Management System",
      "offers": {
        "@type": "Offer",
        "availability": "https://schema.org/InStock",
        "priceCurrency": "BRL"
      }
    }
  ]
};

// Static data for better performance
const benefits = [
  {
    icon: Users,
    title: "Treinamento Escalável",
    description: "Capacite toda sua equipe de forma eficiente e consistente, independente do tamanho"
  },
  {
    icon: TrendingUp,
    title: "Alta Retenção de Conhecimento",
    description: "Método cientificamente comprovado para garantir que o aprendizado seja duradouro"
  },
  {
    icon: Shield,
    title: "Segurança e Controle",
    description: "Gestão completa de permissões e controle sobre distribuição de conteúdo"
  },
  {
    icon: Clock,
    title: "Aprendizado Flexível",
    description: "Colaboradores aprendem no próprio ritmo, sem interromper a produtividade"
  },
  {
    icon: BarChart3,
    title: "Métricas Detalhadas",
    description: "Acompanhe o progresso e desempenho de cada colaborador em tempo real"
  },
  {
    icon: Zap,
    title: "Implementação Rápida",
    description: "Configure e distribua conteúdo em minutos, sem complexidade técnica"
  }
] as const;

const steps = [
  {
    number: "01",
    title: "Consultoria Inicial",
    description: "Analisamos suas necessidades de treinamento e desenhamos a melhor estratégia de implementação"
  },
  {
    number: "02",
    title: "Criação de Conteúdo",
    description: "Nossa equipe auxilia na transformação de seus materiais em flashcards profissionais"
  },
  {
    number: "03",
    title: "Distribuição Controlada",
    description: "Organize por equipes, departamentos ou cargos com permissões personalizadas"
  },
  {
    number: "04",
    title: "Acompanhamento e Otimização",
    description: "Monitore resultados através de dashboards e otimize continuamente o aprendizado"
  }
] as const;

const useCases = [
  {
    title: "Onboarding de Novos Colaboradores",
    items: [
      "Acelere a integração de novos funcionários",
      "Garanta que informações cruciais sejam retidas",
      "Reduza tempo e custo de treinamento inicial"
    ]
  },
  {
    title: "Compliance e Certificações",
    items: [
      "Mantenha equipe atualizada com normas e políticas",
      "Prepare colaboradores para certificações",
      "Comprove aprendizado com métricas detalhadas"
    ]
  },
  {
    title: "Treinamento de Produtos e Serviços",
    items: [
      "Capacite equipes de vendas e suporte",
      "Atualize conhecimento sobre novos produtos rapidamente",
      "Garanta consistência nas informações transmitidas"
    ]
  },
  {
    title: "Desenvolvimento de Habilidades",
    items: [
      "Programas de upskilling e reskilling",
      "Microlearning contínuo e eficaz",
      "Acompanhamento individual de evolução"
    ]
  }
] as const;

const faqs = [
  {
    question: "Como funciona a integração com sistemas corporativos?",
    answer: "Nossa equipe técnica pode auxiliar no desenvolvimento da integração de acordo com as necessidades específicas da sua empresa."
  },
  {
    question: "Quanto tempo leva para implementar?",
    answer: "A implementação básica é muito rápida e pode ser feita em poucos dias. Para integrações customizadas, o prazo fica em algumas semanas, dependendo da complexidade."
  },
  {
    question: "Como os flashcards podem melhorar a produtividade da equipe?",
    answer: "Os flashcards permitem microlearning eficiente, com sessões curtas que não interrompem o trabalho. Colaboradores aprendem de forma rápida e retêm melhor as informações, reduzindo tempo gasto com retrabalho e dúvidas recorrentes. O resultado é uma equipe mais capacitada e autônoma."
  },
  {
    question: "Como é feito o controle de acesso?",
    answer: "Você pode criar grupos, definir permissões por equipe ou cargo, e controlar exatamente quem tem acesso a cada conjunto de flashcards. Tudo através de um painel administrativo intuitivo."
  },
  {
    question: "Quais métricas posso acompanhar?",
    answer: "Taxa de conclusão, tempo de estudo, desempenho por colaborador, progresso por equipe, e muito mais. Todos os dados são apresentados em dashboards visuais e podem ser exportados."
  },
  {
    question: "Vocês oferecem suporte na criação do conteúdo?",
    answer: "Sim! Oferecemos consultoria especializada para transformar seus materiais de treinamento em flashcards eficientes, seguindo as melhores práticas pedagógicas."
  }
] as const;

const Empresas = () => {
  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="min-h-screen bg-background">
        <Navbar />
        
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center animate-fade-in">
              <Badge className="mb-6 bg-primary/10 text-primary border-0 px-4 py-2">
                <Briefcase className="w-4 h-4 mr-2" aria-hidden="true" />
                Para Empresas
              </Badge>
              
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl mb-6">
                Potencialize o <span className="primary-text">treinamento</span> da sua equipe
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                Garanta alta retenção de conhecimento e um aprendizado eficiente para seus colaboradores com a plataforma de flashcards corporativos
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="text-lg px-8 py-6 bg-primary hover:bg-primary/90" asChild>
                  <a href="https://wa.me/5511933919447?text=Quero%20conhecer%20a%20solu%C3%A7%C3%A3o%20da%20Sappie%20para%20empresas" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    FALE COM ESPECIALISTA AGORA
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="py-20 bg-secondary/30" aria-labelledby="benefits-heading">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 id="benefits-heading" className="font-heading text-3xl lg:text-4xl text-center mb-16">
              Por que escolher a <span className="primary-text">Sappie</span> para sua empresa?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <Card 
                    key={benefit.title}
                    className="p-6 hover:shadow-lg transition-all duration-300 animate-fade-in bg-card/50 backdrop-blur-sm"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-primary" aria-hidden="true" />
                    </div>
                    <h3 className="font-heading text-xl mb-3">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20" aria-labelledby="how-it-works-heading">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 id="how-it-works-heading" className="font-heading text-3xl lg:text-4xl text-center mb-16">
              Como <span className="primary-text">implementamos</span> na sua empresa
            </h2>
            <div className="max-w-4xl mx-auto space-y-8">
              {steps.map((step, index) => (
                <Card 
                  key={step.number}
                  className="p-8 hover:shadow-lg transition-all duration-300 animate-slide-up bg-card/50 backdrop-blur-sm"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex gap-6 items-start">
                    <div className="text-5xl font-bold text-primary/60" aria-hidden="true">{step.number}</div>
                    <div className="flex-1">
                      <h3 className="font-heading text-2xl mb-3">{step.title}</h3>
                      <p className="text-muted-foreground text-lg">{step.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-20 bg-secondary/30" aria-labelledby="use-cases-heading">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 id="use-cases-heading" className="font-heading text-3xl lg:text-4xl text-center mb-16">
              Casos de <span className="primary-text">uso</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {useCases.map((useCase) => (
                <Card key={useCase.title} className="p-8 bg-card/50 backdrop-blur-sm">
                  <h3 className="font-heading text-2xl mb-4 primary-text">{useCase.title}</h3>
                  <ul className="space-y-3">
                    {useCase.items.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20" aria-labelledby="faq-heading">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 id="faq-heading" className="font-heading text-3xl lg:text-4xl text-center mb-16">
              Perguntas <span className="primary-text">frequentes</span>
            </h2>
            <Accordion type="single" collapsible className="max-w-3xl mx-auto">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-lg">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 bg-primary/10" aria-labelledby="cta-heading">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 id="cta-heading" className="font-heading text-4xl sm:text-5xl mb-6">
                Pronto para <span className="primary-text">revolucionar</span> o treinamento da sua equipe?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Agende uma demonstração gratuita e veja como a Sappie pode transformar o aprendizado corporativo
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="text-lg px-8 py-6 bg-primary hover:bg-primary/90" asChild>
                  <a href="https://wa.me/5511933919447?text=Quero%20conhecer%20a%20solu%C3%A7%C3%A3o%20da%20Sappie%20para%20empresas" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    FALE COM ESPECIALISTA AGORA
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <Footer />
        <BackToTop />
      </div>
    </>
  );
};

export default Empresas;
