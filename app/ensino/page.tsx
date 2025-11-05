import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";
import { Check, BookOpen, Users, BarChart, Shield, Zap, GraduationCap, School, MessageCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Metadata for SEO
export const metadata: Metadata = {
  title: "Flashcards para Instituições de Ensino | Sappie - Transforme Materiais Didáticos",
  description: "Converta materiais didáticos em flashcards científicos. Aumente retenção de conhecimento, engajamento dos alunos e gere receita adicional. Solução para universidades, escolas e cursos.",
  keywords: [
    "flashcards instituições ensino",
    "material didático digital",
    "plataforma educacional",
    "LMS educacional",
    "tecnologia educacional",
    "engajamento alunos",
    "retenção conhecimento",
    "ensino superior",
    "educação digital",
    "transformação digital ensino",
    "monetização conteúdo educacional"
  ],
  authors: [{ name: "Sappie" }],
  openGraph: {
    title: "Flashcards para Instituições de Ensino | Sappie",
    description: "Transforme materiais didáticos em flashcards científicos. Aumente engajamento e gere receita adicional.",
    type: "website",
    locale: "pt_BR",
    siteName: "Sappie",
  },
  twitter: {
    card: "summary_large_image",
    title: "Flashcards para Instituições de Ensino | Sappie",
    description: "Transforme materiais didáticos em flashcards científicos. Aumente engajamento dos alunos.",
  },
  alternates: {
    canonical: "/ensino",
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
      "@id": "/ensino",
      "name": "Solução de Flashcards para Instituições de Ensino",
      "description": "Plataforma para conversão de materiais didáticos em flashcards científicos para instituições educacionais",
      "inLanguage": "pt-BR",
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Como funciona a conversão de materiais didáticos?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Nossa equipe pedagógica analisa seus materiais (apostilas, slides, livros) e identifica os conceitos-chave para criar flashcards otimizados. Você aprova o conteúdo antes da disponibilização aos alunos."
          }
        },
        {
          "@type": "Question",
          "name": "Quanto tempo leva para implementar?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "O processo completo, desde a consultoria até a disponibilização dos flashcards, leva em média de 4 a 8 semanas, dependendo do volume de conteúdo e complexidade da integração."
          }
        },
        {
          "@type": "Question",
          "name": "Como os alunos acessam o conteúdo?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Os alunos acessam a plataforma Sappie personalizada com a marca e identidade visual da sua instituição."
          }
        },
        {
          "@type": "Question",
          "name": "Quais relatórios são disponibilizados?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Fornecemos relatórios de engajamento por turma, progresso individual dos alunos, taxas de acerto por disciplina, e análises de desempenho que ajudam a identificar dificuldades de aprendizado."
          }
        },
        {
          "@type": "Question",
          "name": "Podemos criar nossos próprios flashcards?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sim! Além da conversão profissional, disponibilizamos ferramentas para que sua instituição crie e gerencie seus próprios flashcards."
          }
        },
        {
          "@type": "Question",
          "name": "Qual o investimento necessário?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Os valores variam de acordo com o número de alunos, volume de conteúdo e nível de customização desejado. Entre em contato para receber uma proposta personalizada para sua instituição."
          }
        }
      ]
    },
    {
      "@type": "Service",
      "serviceType": "Educational Technology Platform",
      "provider": {
        "@type": "Organization",
        "name": "Sappie"
      },
      "areaServed": "BR",
      "audience": {
        "@type": "EducationalOrganization",
        "audienceType": ["University", "School", "Professional Training Institution"]
      }
    },
    {
      "@type": "Product",
      "name": "Sappie Educational Platform",
      "description": "Plataforma de conversão de materiais didáticos em flashcards para instituições de ensino",
      "category": "Educational Technology",
      "audience": {
        "@type": "EducationalOrganization"
      }
    }
  ]
};

// Static data for better performance
const benefits = [
  {
    icon: BookOpen,
    title: "Conversão de Materiais",
    description: "Transforme seus materiais didáticos em flashcards de alta qualidade"
  },
  {
    icon: Users,
    title: "Distribuição Controlada",
    description: "Organize por turmas, disciplinas e períodos letivos"
  },
  {
    icon: BarChart,
    title: "Acompanhamento Detalhado",
    description: "Relatórios completos de progresso e engajamento dos estudantes"
  },
  {
    icon: Shield,
    title: "Segurança e Controle",
    description: "Gestão segura de acessos e proteção de conteúdo institucional"
  },
  {
    icon: Zap,
    title: "Aprendizado Eficiente",
    description: "Metodologia científica comprovada para maximizar a retenção"
  },
  {
    icon: GraduationCap,
    title: "Novas linhas de receitas",
    description: "Gere receita adicional oferecendo flashcards oficiais aos alunos"
  }
] as const;

const institutionTypes = [
  {
    category: "Ensino Superior",
    description: "Universidades e faculdades que buscam apoiar seus alunos com material de revisão de qualidade",
    icon: GraduationCap
  },
  {
    category: "Escolas e Cursinhos",
    description: "Instituições de ensino médio e preparatórios que querem potencializar o aprendizado",
    icon: School
  },
  {
    category: "Cursos Profissionalizantes",
    description: "Escolas técnicas e profissionalizantes focadas em certificações e qualificação",
    icon: BookOpen
  }
] as const;

const howItWorks = [
  {
    number: "01",
    title: "Consultoria Personalizada",
    description: "Nossa equipe analisa seus materiais didáticos e identifica as melhores oportunidades para criar flashcards"
  },
  {
    number: "02",
    title: "Criação Profissional",
    description: "Convertemos seus conteúdos em flashcards de alta qualidade, mantendo a identidade visual da instituição"
  },
  {
    number: "03",
    title: "Implementação e Treinamento",
    description: "Configuramos a plataforma para sua instituição e treinamos sua equipe e alunos"
  },
  {
    number: "04",
    title: "Suporte Contínuo",
    description: "Acompanhamos os resultados, fornecemos relatórios e oferecemos suporte técnico e pedagógico"
  }
] as const;

const revenueFeatures = [
  {
    icon: BarChart,
    title: "Monetização Inteligente",
    description: "Venda flashcards oficiais como material de estudo complementar"
  },
  {
    icon: Shield,
    title: "Controle Total",
    description: "Você define preços, promoções e condições de acesso"
  },
  {
    icon: Zap,
    title: "Valor Agregado",
    description: "Fortaleça sua marca oferecendo material de estudo de alta qualidade"
  }
] as const;

const studentBenefits = [
  {
    icon: Users,
    title: "Alto Engajamento",
    description: "Alunos estudam mais e de forma consistente com flashcards"
  },
  {
    icon: BarChart,
    title: "Melhor Retenção",
    description: "Aprendizado duradouro através da repetição espaçada"
  },
  {
    icon: Zap,
    title: "Autonomia no Estudo",
    description: "Estudantes controlam seu próprio ritmo de aprendizado"
  }
] as const;

const faqs = [
  {
    question: "Como funciona a conversão de materiais didáticos?",
    answer: "Nossa equipe pedagógica analisa seus materiais (apostilas, slides, livros) e identifica os conceitos-chave para criar flashcards otimizados. Você aprova o conteúdo antes da disponibilização aos alunos."
  },
  {
    question: "Quanto tempo leva para implementar?",
    answer: "O processo completo, desde a consultoria até a disponibilização dos flashcards, leva em média de 4 a 8 semanas, dependendo do volume de conteúdo e complexidade da integração."
  },
  {
    question: "Como os alunos acessam o conteúdo?",
    answer: "Os alunos acessam a plataforma Sappie personalizada com a marca e identidade visual da sua instituição."
  },
  {
    question: "Quais relatórios são disponibilizados?",
    answer: "Fornecemos relatórios de engajamento por turma, progresso individual dos alunos, taxas de acerto por disciplina, e análises de desempenho que ajudam a identificar dificuldades de aprendizado."
  },
  {
    question: "Podemos criar nossos próprios flashcards?",
    answer: "Sim! Além da conversão profissional, disponibilizamos ferramentas para que sua instituição crie e gerencie seus próprios flashcards."
  },
  {
    question: "Qual o investimento necessário?",
    answer: "Os valores variam de acordo com o número de alunos, volume de conteúdo e nível de customização desejado. Entre em contato para receber uma proposta personalizada para sua instituição."
  }
] as const;

const Ensino = () => {
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
                <School className="w-4 h-4 mr-2" aria-hidden="true" />
                Para Instituições de Ensino
              </Badge>
              
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl mb-6">
                Transforme o aprendizado na sua <span className="primary-text">instituição</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                Converta seus materiais didáticos em flashcards científicos e potencialize o sucesso acadêmico dos seus alunos.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="text-lg px-8 py-6 bg-primary hover:bg-primary/90" asChild>
                  <a href="https://wa.me/5511933919447?text=Quero%20conhecer%20a%20solu%C3%A7%C3%A3o%20da%20Sappie%20para%20Institui%C3%A7%C3%B5es%20de%20Ensino" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    FALAR COM ESPECIALISTA
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
              Benefícios para sua <span className="primary-text">instituição</span>
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

        {/* Institution Types */}
        <section className="py-20" aria-labelledby="institution-types-heading">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 id="institution-types-heading" className="font-heading text-3xl lg:text-4xl text-center mb-4">
              Atendemos <span className="primary-text">todos os tipos</span> de instituições
            </h2>
            <p className="text-xl text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
              Soluções personalizadas para cada contexto educacional
            </p>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {institutionTypes.map((type, index) => {
                const Icon = type.icon;
                return (
                  <Card 
                    key={type.category}
                    className="p-6 hover:shadow-lg transition-all duration-300 bg-card/50 backdrop-blur-sm animate-fade-in text-center"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                      <Icon className="w-8 h-8 text-primary" aria-hidden="true" />
                    </div>
                    <h3 className="font-heading text-xl mb-3 primary-text">{type.category}</h3>
                    <p className="text-muted-foreground">{type.description}</p>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 bg-secondary/30" aria-labelledby="how-it-works-heading">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 id="how-it-works-heading" className="font-heading text-3xl lg:text-4xl text-center mb-16">
              Como <span className="primary-text">implementamos</span>
            </h2>
            <div className="max-w-4xl mx-auto space-y-8">
              {howItWorks.map((step, index) => (
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

        {/* Revenue Section */}
        <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-primary/10" aria-labelledby="revenue-heading">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <Badge className="mb-6 bg-primary/10 text-primary border-0 px-4 py-2">
                  Receita Adicional
                </Badge>
                <h2 id="revenue-heading" className="font-heading text-3xl lg:text-4xl mb-4">
                  Transforme conteúdo em <span className="primary-text">receita</span>
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Ofereça flashcards oficiais como produto premium e gere receita adicional para sua instituição
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                {revenueFeatures.map((feature) => {
                  const Icon = feature.icon;
                  return (
                    <Card key={feature.title} className="p-6 bg-card/80 backdrop-blur-sm hover:shadow-lg transition-all">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-primary" aria-hidden="true" />
                      </div>
                      <h3 className="font-heading text-lg mb-2 primary-text">{feature.title}</h3>
                      <p className="text-muted-foreground text-sm">{feature.description}</p>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="py-20" aria-labelledby="student-benefits-heading">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 id="student-benefits-heading" className="font-heading text-3xl lg:text-4xl text-center mb-4">
              Alunos <span className="primary-text">amam</span> flashcards
            </h2>
            <p className="text-xl text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
              Veja o impacto real no aprendizado e engajamento dos estudantes
            </p>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {studentBenefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <Card 
                    key={benefit.title}
                    className="p-8 bg-card/50 backdrop-blur-sm animate-fade-in hover:shadow-lg transition-all"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-primary" aria-hidden="true" />
                    </div>
                    <h3 className="font-heading text-xl mb-3 primary-text">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-secondary/30" aria-labelledby="faq-heading">
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
                Pronto para <span className="primary-text">inovar</span> no ensino?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Agende uma demonstração e descubra como podemos apoiar o sucesso dos seus alunos
              </p>
              <Button size="lg" className="text-lg px-8 py-6 bg-primary hover:bg-primary/90" asChild>
                <a href="https://wa.me/5511933919447?text=Quero%20conhecer%20a%20solu%C3%A7%C3%A3o%20da%20Sappie%20para%20Institui%C3%A7%C3%B5es%20de%20Ensino" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  FALAR COM ESPECIALISTA
                </a>
              </Button>
            </div>
          </div>
        </section>

        <Footer />
        <BackToTop />
      </div>
    </>
  );
};

export default Ensino;
