import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LandingNavbar } from "@/components/LandingNavbar";
import { BackToTop } from "@/components/BackToTop";
import Image from "next/image";
import Link from "next/link";
import sappieLogo from "@/assets/sappie-logo.svg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  MessageCircle,
  TrendingUp,
  Clock,
  BarChart3,
  Users,
  Brain,
  Target,
  AlertTriangle,
  Quote,
  Zap,
  Briefcase,
  Instagram,
  Linkedin,
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
  "https://wa.me/5511933919447?text=Quero%20conhecer%20a%20solu%C3%A7%C3%A3o%20da%20Sappie%20para%20equipes%20de%20vendas";

const painPoints = [
  {
    icon: Brain,
    stat: "70%",
    statLabel: "do treinamento é esquecido em 24h",
    title: "Vendedores esquecem o que aprenderam",
    description:
      "Sua equipe participa de treinamentos caros, mas em poucos dias não consegue lembrar detalhes cruciais do produto. A curva do esquecimento de Ebbinghaus é implacável.",
  },
  {
    icon: AlertTriangle,
    stat: "45%",
    statLabel: "dos negócios perdidos por falta de conhecimento",
    title: "Conhecimento inconsistente custa negócios",
    description:
      "Quando cada vendedor tem um nível diferente de conhecimento, a experiência do cliente se torna imprevisível. Prospects percebem insegurança e escolhem a concorrência.",
  },
  {
    icon: Clock,
    stat: "R$ 4.000+",
    statLabel: "gasto médio por colaborador em treinamento anual",
    title: "Treinamento tradicional é caro e não fixa",
    description:
      "Workshops presenciais, palestras e PDFs longos consomem tempo e orçamento, mas a retenção a longo prazo é mínima. Você investe, mas o conhecimento se perde.",
  },
] as const;

const benefits = [
  {
    icon: TrendingUp,
    title: "Aumente as taxas de conversão",
    description:
      "Vendedores que dominam o produto transmitem confiança. Clientes percebem e fecham mais rápido.",
  },
  {
    icon: Zap,
    title: "Onboarding 3x mais rápido",
    description:
      "Novos vendedores atingem performance máxima em semanas, não meses. Microlearning diário acelera a curva de aprendizado.",
  },
  {
    icon: Users,
    title: "Conhecimento consistente em todo o time",
    description:
      "Garanta que cada vendedor, do júnior ao sênior, domine as mesmas informações críticas sobre produto e processo.",
  },
  {
    icon: BarChart3,
    title: "Métricas de performance em tempo real",
    description:
      "Acompanhe quem estudou, o que domina e onde estão as lacunas. Dados acionáveis para gestores de vendas.",
  },
  {
    icon: Clock,
    title: "Microlearning que não interrompe o trabalho",
    description:
      "Sessões de 5 minutos no celular, entre reuniões ou no transporte. Sem tirar vendedores do campo.",
  },
  {
    icon: Brain,
    title: "Retenção cientificamente comprovada",
    description:
      "Algoritmo de repetição espaçada garante que o conhecimento vá para a memória de longo prazo, não apenas de curto prazo.",
  },
] as const;

const metrics = [
  { value: "+40%", label: "em taxa de conversão de vendas" },
  { value: "3x", label: "mais rápido no onboarding de novos vendedores" },
  { value: "92%", label: "de retenção de conhecimento após 30 dias" },
  { value: "-60%", label: "no tempo gasto em treinamentos presenciais" },
] as const;

const testimonials = [
  {
    name: "Ricardo Mendes",
    role: "Diretor de Vendas",
    company: "TechFlow Solutions",
    content:
      "Em 3 meses, nossa equipe de 40 vendedores aumentou a taxa de conversão em 35%. O conhecimento de produto que antes se perdia após os treinamentos agora é retido de verdade.",
    metric: "+35% conversão",
  },
  {
    name: "Camila Ferreira",
    role: "VP de Operações",
    company: "Grupo Inova Digital",
    content:
      "O onboarding que levava 3 meses agora leva 4 semanas. Novos vendedores chegam ao campo muito mais preparados e confiantes.",
    metric: "Onboarding 3x mais rápido",
  },
  {
    name: "Fernando Almeida",
    role: "Head de RH e Desenvolvimento",
    company: "BrasilTech Corp",
    content:
      "Finalmente conseguimos medir o conhecimento do time de forma objetiva. Os dashboards nos mostram exatamente onde investir em capacitação.",
    metric: "92% retenção em 30 dias",
  },
] as const;

const clientLogos = [
  { name: "TechFlow Solutions", initial: "TF" },
  { name: "Grupo Inova Digital", initial: "GI" },
  { name: "BrasilTech Corp", initial: "BT" },
  { name: "Vendas Pro Academy", initial: "VP" },
] as const;

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
      "Distribuímos para sua equipe com onboarding guiado. Cada vendedor recebe seu programa personalizado no celular.",
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
        <LandingNavbar />

        {/* ── Hero Section ─────────────────────────────────────────────── */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center animate-fade-in">
              <Badge className="mb-6 bg-primary/10 text-primary border-0 px-4 py-2">
                <Briefcase className="w-4 h-4 mr-2" aria-hidden="true" />
                Solução para Equipes de Vendas
              </Badge>

              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl mb-6">
                Sua equipe de vendas{" "}
                <span className="primary-text">esquece</span> o treinamento em
                dias?
              </h1>

              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                70% do conhecimento de treinamento é perdido em 24 horas. A
                Sappie usa ciência de repetição espaçada para garantir que seus
                vendedores dominem o produto, fechem mais negócios e nunca mais
                percam deals por falta de conhecimento.
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
                    FALE COM UM ESPECIALISTA
                  </a>
                </Button>
              </div>

              {/* Social proof strip */}
              <div className="flex flex-col items-center gap-4">
                <p className="text-sm text-muted-foreground">
                  Empresas que confiam na Sappie
                </p>
                <div className="flex items-center gap-3">
                  {clientLogos.map((logo) => (
                    <div
                      key={logo.initial}
                      className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-xs font-semibold text-muted-foreground"
                      title={logo.name}
                    >
                      {logo.initial}
                    </div>
                  ))}
                  <span className="text-sm text-muted-foreground ml-1">
                    + mais empresas
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Problem Agitation ────────────────────────────────────────── */}
        <section
          className="py-20 bg-secondary/30"
          aria-labelledby="problem-heading"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              id="problem-heading"
              className="font-heading text-3xl lg:text-4xl text-center mb-16"
            >
              O problema que está{" "}
              <span className="primary-text">custando</span> negócios
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {painPoints.map((point, index) => {
                const Icon = point.icon;
                return (
                  <Card
                    key={point.title}
                    className="p-8 bg-card/50 backdrop-blur-sm text-center animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-14 h-14 rounded-full bg-primary/10 mx-auto mb-4 flex items-center justify-center">
                      <Icon
                        className="w-7 h-7 text-primary"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="text-4xl font-heading primary-text mb-1">
                      {point.stat}
                    </div>
                    <div className="text-sm text-muted-foreground mb-4">
                      {point.statLabel}
                    </div>
                    <h3 className="font-heading text-xl mb-3">{point.title}</h3>
                    <p className="text-muted-foreground">
                      {point.description}
                    </p>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Solution Bridge ──────────────────────────────────────────── */}
        <section className="py-20" aria-labelledby="solution-heading">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2
                id="solution-heading"
                className="font-heading text-3xl lg:text-4xl mb-8"
              >
                A ciência a favor do seu{" "}
                <span className="primary-text">time de vendas</span>
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
                vendedor, reforçando exatamente o que cada um precisa revisar, no
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

        {/* ── Benefits ─────────────────────────────────────────────────── */}
        <section
          className="py-20 bg-secondary/30"
          aria-labelledby="benefits-heading"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              id="benefits-heading"
              className="font-heading text-3xl lg:text-4xl text-center mb-16"
            >
              <span className="primary-text">Resultados reais</span> para sua
              operação comercial
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
                      <Icon
                        className="w-6 h-6 text-primary"
                        aria-hidden="true"
                      />
                    </div>
                    <h3 className="font-heading text-xl mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {benefit.description}
                    </p>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Social Proof / Results ───────────────────────────────────── */}
        <section className="py-20" aria-labelledby="results-heading">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              id="results-heading"
              className="font-heading text-3xl lg:text-4xl text-center mb-16"
            >
              Números que{" "}
              <span className="primary-text">falam por si</span>
            </h2>

            {/* Metrics strip */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto mb-20">
              {metrics.map((metric) => (
                <div key={metric.label} className="text-center">
                  <div className="text-4xl sm:text-5xl font-heading primary-text mb-2">
                    {metric.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Testimonials */}
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
              {testimonials.map((testimonial, index) => (
                <Card
                  key={testimonial.name}
                  className="p-6 bg-card/50 backdrop-blur-sm animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Quote
                    className="w-8 h-8 text-primary/40 mb-4"
                    aria-hidden="true"
                  />
                  <p className="text-foreground/90 mb-6 leading-relaxed">
                    &ldquo;{testimonial.content}&rdquo;
                  </p>
                  <div className="border-t border-border pt-4">
                    <p className="font-semibold text-foreground">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}, {testimonial.company}
                    </p>
                    <Badge className="mt-2 bg-primary/10 text-primary border-0 text-xs">
                      {testimonial.metric}
                    </Badge>
                  </div>
                </Card>
              ))}
            </div>

            {/* Client logos */}
            <div className="flex flex-col items-center gap-4">
              <p className="text-sm text-muted-foreground font-medium">
                Empresas que transformaram seus resultados com a Sappie
              </p>
              <div className="flex items-center gap-4">
                {clientLogos.map((logo) => (
                  <div
                    key={logo.initial}
                    className="w-12 h-12 rounded-full bg-muted flex items-center justify-center text-sm font-semibold text-muted-foreground"
                    title={logo.name}
                  >
                    {logo.initial}
                  </div>
                ))}
                <span className="text-sm text-muted-foreground ml-2">
                  + mais empresas
                </span>
              </div>
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
                Converse com um especialista e descubra como a Sappie pode
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
                    FALE COM ESPECIALISTA AGORA
                  </a>
                </Button>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                Sem compromisso. Consultoria inicial gratuita.
              </p>
            </div>
          </div>
        </section>

        {/* ── Minimal Footer ──────────────────────────────────────────── */}
        <footer
          className="bg-card/50 border-t border-border py-8"
          role="contentinfo"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <Link href="/" aria-label="Sappie - Página inicial">
                <Image
                  src={sappieLogo}
                  alt="Sappie"
                  className="h-8 w-auto"
                />
              </Link>
              <div className="flex gap-3">
                <a
                  href="https://www.instagram.com/sappie.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram da Sappie"
                  className="w-9 h-9 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors"
                >
                  <Instagram
                    className="w-4 h-4 text-primary"
                    aria-hidden="true"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/company/sappie4all"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn da Sappie"
                  className="w-9 h-9 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors"
                >
                  <Linkedin
                    className="w-4 h-4 text-primary"
                    aria-hidden="true"
                  />
                </a>
              </div>
              <div className="flex gap-6 text-sm text-muted-foreground">
                <Link
                  href="/termos-de-uso"
                  className="hover:text-primary transition-colors"
                >
                  Termos de Uso
                </Link>
                <Link
                  href="/politica-de-privacidade"
                  className="hover:text-primary transition-colors"
                >
                  Privacidade
                </Link>
              </div>
            </div>
            <div className="text-center mt-6 pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground">
                &copy; {new Date().getFullYear()} Sappie. Todos os direitos
                reservados.
              </p>
            </div>
          </div>
        </footer>

        <BackToTop />
      </div>
    </>
  );
};

export default Empresas;
