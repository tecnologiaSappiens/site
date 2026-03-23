import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  MessageCircle,
  Target,
  Briefcase,
} from "lucide-react";

// SEO Metadata — targeting sales team training
export const metadata: Metadata = {
  title: "Treinamento de Equipes de Vendas com Flashcards | Sappie para Empresas",
  description:
    "Sua equipe de vendas esquece o treinamento em dias? A Sappie usa repetição espaçada para garantir que seus vendedores dominem o produto, fechem mais negócios e reduzam o tempo de onboarding.",
  keywords: [
    "treinamento equipe de vendas",
    "capacitação comercial",
    "onboarding vendedores",
    "treinamento de produto vendas",
    "microlearning comercial",
    "retenção de conhecimento vendas",
    "plataforma treinamento corporativo",
    "repetição espaçada empresas",
    "flashcards corporativos",
    "treinamento vendas online",
    "educação corporativa",
    "LMS vendas",
  ],
  authors: [{ name: "Sappie" }],
  openGraph: {
    title: "Sua equipe de vendas esquece o treinamento? | Sappie para Empresas",
    description:
      "Repetição espaçada científica para equipes comerciais. +40% conversão. Onboarding 3x mais rápido.",
    type: "website",
    locale: "pt_BR",
    siteName: "Sappie",
  },
  twitter: {
    card: "summary_large_image",
    title: "Treinamento de Vendas que Funciona | Sappie",
    description:
      "Flashcards inteligentes com repetição espaçada para equipes comerciais.",
  },
  alternates: { canonical: "/empresas" },
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
      name: "Treinamento de Equipes de Vendas com Flashcards Inteligentes",
      description:
        "Plataforma de flashcards com repetição espaçada para treinamento e capacitação de equipes de vendas",
      inLanguage: "pt-BR",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Quanto tempo leva para implementar?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A implementação completa leva de 5 a 7 dias úteis. No primeiro dia já fazemos o diagnóstico, e em menos de uma semana sua equipe está usando a plataforma.",
          },
        },
        {
          "@type": "Question",
          name: "Minha equipe vai realmente usar?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sim. As sessões levam apenas 5 minutos por dia e podem ser feitas pelo celular. O formato gamificado e a repetição espaçada criam um hábito natural. Nossos clientes reportam taxa de adesão acima de 85%.",
          },
        },
        {
          "@type": "Question",
          name: "Como é o modelo de preços?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Trabalhamos com planos por número de usuários, com valores acessíveis que cabem no orçamento de treinamento. Entre em contato pelo WhatsApp para receber uma proposta personalizada.",
          },
        },
        {
          "@type": "Question",
          name: "Vocês ajudam a criar o conteúdo dos flashcards?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sim! Nossa equipe especializada transforma seus materiais de treinamento, manuais de produto e scripts de vendas em flashcards otimizados.",
          },
        },
        {
          "@type": "Question",
          name: "Como acompanho o progresso da equipe?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Você tem acesso a um dashboard com métricas detalhadas: taxa de conclusão, desempenho por vendedor, lacunas de conhecimento por tema, e evolução ao longo do tempo.",
          },
        },
        {
          "@type": "Question",
          name: "Funciona para equipes remotas ou distribuídas?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Perfeitamente. A plataforma é 100% mobile e funciona de qualquer lugar. Ideal para equipes de campo, vendedores externos ou times distribuídos.",
          },
        },
      ],
    },
    {
      "@type": "Service",
      serviceType: "Sales Team Training Platform",
      provider: {
        "@type": "Organization",
        name: "Sappie",
      },
      areaServed: "BR",
      audience: {
        "@type": "BusinessAudience",
        audienceType: "Sales Directors, VP of Sales, CEO, HR Managers",
      },
    },
    {
      "@type": "Product",
      name: "Sappie - Treinamento de Equipes de Vendas",
      description:
        "Plataforma de treinamento de equipes de vendas com flashcards inteligentes e repetição espaçada",
      category: "Sales Training Platform",
      offers: {
        "@type": "Offer",
        availability: "https://schema.org/InStock",
        priceCurrency: "BRL",
      },
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Ricardo Mendes" },
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      reviewBody:
        "Em 3 meses, nossa equipe de 40 vendedores aumentou a taxa de conversão em 35%.",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Camila Ferreira" },
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      reviewBody:
        "O onboarding que levava 3 meses agora leva 4 semanas. Novos vendedores chegam ao campo muito mais preparados.",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Fernando Almeida" },
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      reviewBody:
        "Finalmente conseguimos medir o conhecimento do time de forma objetiva.",
    },
  ],
};

// ─── Static Data ────────────────────────────────────────────────────────────

const WHATSAPP_URL =
  "https://wa.me/5511935031749?text=Quero%20conhecer%20a%20solu%C3%A7%C3%A3o%20da%20Sappie%20para%20equipes%20de%20vendas";

const steps = [
  {
    number: "01",
    title: "Consultoria e Diagnóstico",
    description:
      "Analisamos as lacunas de conhecimento da sua equipe e definimos os conteúdos prioritários juntos.",
    duration: "1 dia",
  },
  {
    number: "02",
    title: "Criação dos Flashcards",
    description:
      "Nossa equipe transforma seus materiais de produto, processos e scripts em flashcards otimizados para retenção.",
    duration: "3-5 dias",
  },
  {
    number: "03",
    title: "Lançamento com a Equipe",
    description:
      "Distribuímos para sua equipe com onboarding guiado. Cada colaborador recebe seu programa personalizado no celular.",
    duration: "1 dia",
  },
  {
    number: "04",
    title: "Acompanhamento e Otimização",
    description:
      "Você monitora o progresso no dashboard. Nós ajustamos o conteúdo com base nos resultados e feedback.",
    duration: "Contínuo",
  },
] as const;

const faqs = [
  {
    question: "Quanto tempo leva para implementar?",
    answer:
      "A implementação completa leva de 5 a 7 dias úteis. No primeiro dia já fazemos o diagnóstico, e em menos de uma semana sua equipe está usando a plataforma. Sem necessidade de integração técnica complexa.",
  },
  {
    question: "Minha equipe vai realmente usar?",
    answer:
      "Sim. As sessões levam apenas 5 minutos por dia e podem ser feitas pelo celular, entre reuniões ou no transporte. O formato gamificado e a repetição espaçada criam um hábito natural. Nossos clientes reportam taxa de adesão acima de 85%.",
  },
  {
    question: "Como é o modelo de preços?",
    answer:
      "Trabalhamos com planos por número de usuários, com valores acessíveis que cabem no orçamento de treinamento. Entre em contato pelo WhatsApp para receber uma proposta personalizada para o tamanho da sua equipe.",
  },
  {
    question: "Vocês ajudam a criar o conteúdo dos flashcards?",
    answer:
      "Sim! Nossa equipe especializada transforma seus materiais de treinamento, manuais de produto e scripts de vendas em flashcards otimizados. Você não precisa criar nada do zero.",
  },
  {
    question: "Como acompanho o progresso da equipe?",
    answer:
      "Você tem acesso a um dashboard com métricas detalhadas: taxa de conclusão, desempenho por vendedor, lacunas de conhecimento por tema, e evolução ao longo do tempo. Todos os dados podem ser exportados.",
  },
  {
    question: "Funciona para equipes remotas ou distribuídas?",
    answer:
      "Perfeitamente. A plataforma é 100% mobile e funciona de qualquer lugar. Ideal para equipes de campo, vendedores externos ou times distribuídos em várias filiais.",
  },
] as const;

// ─── Page Component ─────────────────────────────────────────────────────────

const Empresas = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="min-h-screen bg-background">
        <Navbar />

        {/* ── Hero Section ─────────────────────────────────────────────── */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center animate-fade-in">
              <Badge className="mb-6 bg-primary/10 text-primary border-0 px-4 py-2">
                <Briefcase className="w-4 h-4 mr-2" aria-hidden="true" />
                Solução para Treinamentos
              </Badge>

              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl mb-6">
                Transforme conhecimento em  {" "}
                <span className="primary-text">resultados</span> com os cards da Sappie
              </h1>

              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                A
                Sappie usa ciência da aprendizagem para garantir que seus
                colaboradores saibam o que realmente importa.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Button
                  size="lg"
                  className="text-lg px-8 py-6 bg-primary hover:bg-primary/90"
                  asChild
                >
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    FALE COM UM SÓCIO
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* ── Solution Bridge ──────────────────────────────────────────── */}
        <section className="py-20 bg-secondary/30" aria-labelledby="solution-heading">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2
                id="solution-heading"
                className="font-heading text-3xl lg:text-4xl mb-8"
              >
                A ciência a favor da sua{" "}
                <span className="primary-text">empresa</span>
              </h2>

              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                A Sappie aplica{" "}
                <strong className="text-foreground">repetição espaçada</strong>{" "}
                — a técnica de memorização mais eficaz comprovada pela
                neurociência — ao treinamento comercial. Em vez de treinamentos
                longos que sua equipe esquece, entregamos microlearning diário
                que fixa o conhecimento na memória de longo prazo.
              </p>

              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Flashcards inteligentes que se adaptam ao nível de cada
                colaborador, reforçando exatamente o que cada um precisa revisar, no
                momento certo.
              </p>

              <Badge className="mb-8 bg-primary/10 text-primary border-0 px-4 py-2">
                <Target className="w-4 h-4 mr-2" aria-hidden="true" />
                Baseado em +30 anos de pesquisa em ciência cognitiva
              </Badge>

              <div className="mt-6">
                <Button
                  variant="outline"
                  size="lg"
                  className="text-lg px-8 py-6"
                  asChild
                >
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Saiba como funciona na prática
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* ── Results ───────────────────────────────────────── */}
        <section className="py-20" aria-labelledby="efficiency-heading">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-6 max-w-5xl mx-auto items-start">

              {/* Headings row */}
              <h2
                id="efficiency-heading"
                className="font-heading text-3xl lg:text-4xl"
              >
                Treinamentos mais <span className="primary-text">eficientes</span>...
              </h2>
              <h2 className="font-heading text-3xl lg:text-4xl">
                ... com mais <span className="primary-text">resultados</span>
              </h2>

              {/* First cards row */}
              <Card className="p-8 bg-card/50 backdrop-blur-sm text-center">
                <div className="text-4xl sm:text-5xl font-heading primary-text mb-4">R$200+</div>
                <p className="text-lg text-muted-foreground">economia por colaborador por mês</p>
              </Card>
              <Card className="p-8 bg-card/50 backdrop-blur-sm text-center">
                <div className="text-4xl sm:text-5xl font-heading primary-text mb-4">&gt;90%</div>
                <p className="text-lg text-muted-foreground">de retenção de conhecimento em 30 dias</p>
              </Card>

              {/* Second cards row */}
              <Card className="p-8 bg-card/50 backdrop-blur-sm text-center">
                <div className="text-4xl sm:text-5xl font-heading primary-text mb-4">-90%</div>
                <p className="text-lg text-muted-foreground">em horas de treinamento presencial</p>
              </Card>
              <Card className="p-8 bg-card/50 backdrop-blur-sm text-center">
                <div className="text-4xl sm:text-5xl font-heading primary-text mb-4">-70%</div>
                <p className="text-lg text-muted-foreground">de reclamações em case comercial</p>
              </Card>

            </div>
          </div>
        </section>

        {/* ── How It Works ─────────────────────────────────────────────── */}
        <section
          className="py-20 bg-secondary/30"
          aria-labelledby="how-it-works-heading"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              id="how-it-works-heading"
              className="font-heading text-3xl lg:text-4xl text-center mb-16"
            >
              Implementação <span className="primary-text">rápida</span> e sem
              complicação
            </h2>
            <div className="max-w-4xl mx-auto space-y-8">
              {steps.map((step, index) => (
                <Card
                  key={step.number}
                  className="p-8 hover:shadow-lg transition-all duration-300 animate-slide-up bg-card/50 backdrop-blur-sm"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex gap-6 items-start">
                    <div
                      className="text-5xl font-bold text-primary/60"
                      aria-hidden="true"
                    >
                      {step.number}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <h3 className="font-heading text-2xl">{step.title}</h3>
                        <Badge
                          variant="outline"
                          className="text-xs text-primary border-primary/30"
                        >
                          {step.duration}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground text-lg">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ──────────────────────────────────────────────────────── */}
        <section className="py-20" aria-labelledby="faq-heading">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              id="faq-heading"
              className="font-heading text-3xl lg:text-4xl text-center mb-16"
            >
              Dúvidas <span className="primary-text">frequentes</span>
            </h2>
            <Accordion
              type="single"
              collapsible
              className="max-w-3xl mx-auto"
            >
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

        {/* ── Final CTA ────────────────────────────────────────────────── */}
        <section
          className="py-24 bg-primary/10"
          aria-labelledby="final-cta-heading"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2
                id="final-cta-heading"
                className="font-heading text-4xl sm:text-5xl mb-6"
              >
                Pronto para transformar o conhecimento do seu time em{" "}
                <span className="primary-text">resultados</span>?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Converse com um sócio e descubra como a Sappie pode
                aumentar a performance da sua equipe de vendas em semanas, não
                meses.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="text-lg px-8 py-6 bg-primary hover:bg-primary/90"
                  asChild
                >
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    FALE COM UM SÓCIO AGORA
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
