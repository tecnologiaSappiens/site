import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  DollarSign, 
  Zap, 
  Users, 
  TrendingUp,
  Rocket,
  Shield,
  BarChart,
  ArrowRight
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Metadata for SEO
export const metadata: Metadata = {
  title: "Monetize seu Conhecimento com Flashcards | Sappie - Plataforma para Criadores",
  description: "Crie, venda e monetize flashcards profissionais. Alcance milhares de alunos, construa renda recorrente e transforme seu conhecimento em negócio. Cadastro gratuito.",
  keywords: [
    "monetizar conhecimento",
    "vender flashcards",
    "renda passiva educação",
    "criar flashcards",
    "plataforma criadores",
    "conteúdo educacional",
    "infoprodutos",
    "ensino online",
    "monetização digital",
    "criar curso online",
    "renda recorrente"
  ],
  authors: [{ name: "Sappie" }],
  openGraph: {
    title: "Monetize seu Conhecimento com Flashcards | Sappie",
    description: "Transforme seu conhecimento em renda recorrente. Crie e venda flashcards profissionais para milhares de alunos.",
    type: "website",
    locale: "pt_BR",
    siteName: "Sappie",
  },
  twitter: {
    card: "summary_large_image",
    title: "Monetize seu Conhecimento com Flashcards | Sappie",
    description: "Transforme seu conhecimento em renda recorrente. Crie e venda flashcards profissionais.",
  },
  alternates: {
    canonical: "/criadores",
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
      "@id": "/criadores",
      "name": "Plataforma para Criadores de Flashcards",
      "description": "Monetize seu conhecimento criando e vendendo flashcards profissionais para milhares de alunos",
      "inLanguage": "pt-BR",
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Quanto custa para criar e vender na Sappie?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "O cadastro e criação de conteúdo são totalmente gratuitos. Cobramos apenas uma taxa sobre as vendas realizadas, garantindo que você só pague quando ganhar."
          }
        },
        {
          "@type": "Question",
          "name": "Como funciona o pagamento?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Os pagamentos são processados de forma segura e automática. Você recebe seus ganhos mensalmente diretamente na sua conta bancária."
          }
        },
        {
          "@type": "Question",
          "name": "Posso migrar meu conteúdo de outras plataformas?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sim! Oferecemos ferramentas e suporte para migrar seus flashcards de outras plataformas de forma simples e rápida."
          }
        },
        {
          "@type": "Question",
          "name": "Como é garantida a proteção do meu conteúdo?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Todo conteúdo é protegido por tecnologias anti-pirataria. Apenas usuários autorizados podem acessar seus flashcards."
          }
        },
        {
          "@type": "Question",
          "name": "Preciso de conhecimentos técnicos?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Não! Nossa plataforma foi desenvolvida para ser intuitiva. Se você sabe criar conteúdo, consegue usar a Sappie."
          }
        },
        {
          "@type": "Question",
          "name": "Posso definir meus próprios preços?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sim! Você tem total autonomia para definir os preços dos seus produtos e fazer promoções quando quiser."
          }
        }
      ]
    },
    {
      "@type": "Service",
      "serviceType": "Content Creation Platform",
      "provider": {
        "@type": "Organization",
        "name": "Sappie"
      },
      "areaServed": "BR",
      "audience": {
        "@type": "ProfessionalAudience",
        "audienceType": "Content Creator"
      },
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "BRL",
        "description": "Cadastro gratuito para criadores de conteúdo"
      }
    },
    {
      "@type": "HowTo",
      "name": "Como começar a vender flashcards na Sappie",
      "description": "Guia passo a passo para criar e vender flashcards",
      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": "Cadastre-se gratuitamente",
          "text": "Crie sua conta de criador em menos de 2 minutos. É grátis e sem compromisso."
        },
        {
          "@type": "HowToStep",
          "position": 2,
          "name": "Crie seus flashcards",
          "text": "Use nossas ferramentas intuitivas para criar flashcards profissionais sobre seu tema."
        },
        {
          "@type": "HowToStep",
          "position": 3,
          "name": "Configure preços e publique",
          "text": "Defina o valor do seu produto, adicione descrições e publique na plataforma."
        },
        {
          "@type": "HowToStep",
          "position": 4,
          "name": "Comece a vender",
          "text": "Receba pagamentos automaticamente e acompanhe suas vendas em tempo real."
        }
      ]
    }
  ]
};

// Static data for better performance
const benefits = [
  {
    icon: DollarSign,
    title: "Monetização simplificada",
    description: "Configure preços e comece a vender rapidamente. Receba pagamentos de forma segura e automatizada."
  },
  {
    icon: Shield,
    title: "Proteção do seu conteúdo",
    description: "Seus flashcards ficam protegidos contra cópias não autorizadas. Controle total sobre quem acessa."
  },
  {
    icon: Zap,
    title: "Ferramentas profissionais",
    description: "Interface intuitiva para criar flashcards de qualidade rapidamente, sem conhecimento técnico."
  },
  {
    icon: BarChart,
    title: "Métricas detalhadas",
    description: "Acompanhe vendas, engajamento dos alunos e desempenho dos seus produtos em tempo real."
  },
  {
    icon: Users,
    title: "Alcance milhares de alunos",
    description: "Nossa plataforma conecta você a estudantes que buscam conteúdo de qualidade."
  },
  {
    icon: TrendingUp,
    title: "Escale seu conhecimento",
    description: "Crie uma vez, venda infinitamente. Transforme seu tempo em renda passiva."
  }
] as const;

const steps = [
  {
    number: "01",
    title: "Cadastre-se gratuitamente",
    description: "Crie sua conta de criador em menos de 2 minutos. É grátis e sem compromisso."
  },
  {
    number: "02",
    title: "Crie seus flashcards",
    description: "Use nossas ferramentas intuitivas para criar flashcards profissionais sobre seu tema."
  },
  {
    number: "03",
    title: "Configure preços e publique",
    description: "Defina o valor do seu produto, adicione descrições e publique na plataforma."
  },
  {
    number: "04",
    title: "Comece a vender",
    description: "Receba pagamentos automaticamente e acompanhe suas vendas em tempo real."
  }
] as const;

const stats = [
  {
    icon: Users,
    number: "+1.000.000",
    label: "flashcards produzidos"
  },
  {
    icon: Rocket,
    number: "Dezenas",
    label: "de criadores"
  },
  {
    icon: TrendingUp,
    number: "Milhares",
    label: "de alunos"
  }
] as const;

const faqs = [
  {
    question: "Quanto custa para criar e vender na Sappie?",
    answer: "O cadastro e criação de conteúdo são totalmente gratuitos. Cobramos apenas uma taxa sobre as vendas realizadas, garantindo que você só pague quando ganhar."
  },
  {
    question: "Como funciona o pagamento?",
    answer: "Os pagamentos são processados de forma segura e automática. Você recebe seus ganhos mensalmente diretamente na sua conta bancária."
  },
  {
    question: "Posso migrar meu conteúdo de outras plataformas?",
    answer: "Sim! Oferecemos ferramentas e suporte para migrar seus flashcards de outras plataformas de forma simples e rápida."
  },
  {
    question: "Como é garantida a proteção do meu conteúdo?",
    answer: "Todo conteúdo é protegido por tecnologias anti-pirataria. Apenas usuários autorizados podem acessar seus flashcards."
  },
  {
    question: "Preciso de conhecimentos técnicos?",
    answer: "Não! Nossa plataforma foi desenvolvida para ser intuitiva. Se você sabe criar conteúdo, consegue usar a Sappie."
  },
  {
    question: "Posso definir meus próprios preços?",
    answer: "Sim! Você tem total autonomia para definir os preços dos seus produtos e fazer promoções quando quiser."
  }
] as const;

const Criadores = () => {
  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="min-h-screen">
        <Navbar />
        
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 bg-gradient-to-br from-primary/10 via-background to-background overflow-hidden">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
          </div>

          <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center animate-fade-in">
              <Badge className="mb-6 bg-primary/10 text-primary border-0 px-4 py-2">
                <Rocket className="w-4 h-4 mr-2" aria-hidden="true" />
                Para Criadores de Conteúdo
              </Badge>
              
              <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl mb-6 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
                Transforme seu conhecimento em <span className="primary-text">renda recorrente</span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
                Crie, venda e monetize flashcards profissionais. Alcance milhares de alunos e construa uma fonte de renda passiva com seu conhecimento.
              </p>
              
              <div className="flex justify-center">
                <Button size="lg" className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 transition-all duration-300 group" asChild>
                  <a href="https://creator.sappie.com.br" target="_blank" rel="noopener noreferrer">
                    PLATAFORMA DO CRIADOR
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-24 bg-muted/30" aria-labelledby="benefits-heading">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-fade-in">
              <h2 id="benefits-heading" className="font-heading text-4xl sm:text-5xl mb-6">
                Por que criar na <span className="primary-text">Sappie</span>?
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Tudo o que você precisa para monetizar seu conhecimento em um só lugar
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <Card 
                    key={benefit.title}
                    className="p-6 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105 animate-slide-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-primary" aria-hidden="true" />
                    </div>
                    <h3 className="font-heading text-xl mb-2 font-semibold">{benefit.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-24 bg-background" aria-labelledby="how-it-works-heading">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-fade-in">
              <h2 id="how-it-works-heading" className="font-heading text-4xl sm:text-5xl mb-6">
                Como <span className="primary-text">começar</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Em 4 passos simples, você estará vendendo seus flashcards
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {steps.map((step, index) => (
                <div 
                  key={step.number}
                  className="relative animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary font-bold text-2xl mb-4">
                      {step.number}
                    </div>
                    <h3 className="font-heading text-xl mb-3 font-semibold">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                  {index < steps.length - 1 && (
                    <div 
                      className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-primary/20" 
                      style={{ width: "calc(100% - 4rem)" }}
                      aria-hidden="true"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-24 bg-muted/30" aria-labelledby="stats-heading">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-fade-in">
              <h2 id="stats-heading" className="font-heading text-4xl sm:text-5xl mb-6">
                A Sappie em <span className="primary-text">números</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Resultados que comprovam nosso impacto na educação
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <Card 
                    key={stat.label}
                    className="p-8 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 animate-slide-up text-center"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 mx-auto">
                      <Icon className="w-8 h-8 text-primary" aria-hidden="true" />
                    </div>
                    
                    <div className="text-5xl font-bold text-primary mb-2">
                      {stat.number}
                    </div>
                    
                    <p className="text-lg text-muted-foreground">
                      {stat.label}
                    </p>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 bg-background" aria-labelledby="faq-heading">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-fade-in">
              <h2 id="faq-heading" className="font-heading text-4xl sm:text-5xl mb-6">
                Perguntas <span className="primary-text">frequentes</span>
              </h2>
            </div>

            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left text-lg font-semibold">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 relative overflow-hidden bg-gradient-to-br from-primary/10 to-background" aria-labelledby="cta-heading">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center animate-fade-in">
              <h2 id="cta-heading" className="font-heading text-4xl sm:text-5xl lg:text-6xl mb-6">
                Pronto para <span className="primary-text">monetizar</span> seu conhecimento?
              </h2>
              
              <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
                Junte-se a criadores que já estão transformando conhecimento em renda
              </p>

              <Button 
                size="lg" 
                className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 transition-all duration-300 group"
                asChild
              >
                <a href="https://creator.sappie.com.br" target="_blank" rel="noopener noreferrer">
                  Começar gratuitamente agora
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>

              <p className="mt-6 text-sm text-muted-foreground">
                Sem taxas de entrada • Sem compromisso • Suporte dedicado
              </p>
            </div>
          </div>
        </section>

        <Footer />
        <BackToTop />
      </div>
    </>
  );
};

export default Criadores;
