import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";
import { Check, BookOpen, Zap, Trophy, Users, Brain, ArrowRight, Search, GraduationCap } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

// Metadata for SEO
export const metadata: Metadata = {
  title: "Flashcards Inteligentes para Estudantes | Sappie - Aprenda com Repetição Espaçada",
  description: "Estude de forma eficiente com flashcards criados por especialistas. Algoritmo de repetição espaçada, gamificação e conteúdo curado para medicina, concursos, idiomas e mais.",
  keywords: [
    "flashcards",
    "repetição espaçada",
    "estudo eficiente",
    "medicina",
    "concursos",
    "idiomas",
    "ENEM",
    "vestibular",
    "aprendizado inteligente",
    "gamificação",
    "microlearning"
  ],
  authors: [{ name: "Sappie" }],
  openGraph: {
    title: "Flashcards Inteligentes para Estudantes | Sappie",
    description: "Domine seus estudos com flashcards criados por especialistas. Repetição espaçada, gamificação e muito mais.",
    type: "website",
    locale: "pt_BR",
    siteName: "Sappie",
  },
  twitter: {
    card: "summary_large_image",
    title: "Flashcards Inteligentes para Estudantes | Sappie",
    description: "Domine seus estudos com flashcards criados por especialistas.",
  },
  alternates: {
    canonical: "/alunos",
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
      "@id": "/alunos",
      "name": "Flashcards Inteligentes para Estudantes",
      "description": "Plataforma de flashcards com repetição espaçada e conteúdo criado por especialistas",
      "inLanguage": "pt-BR",
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Como funciona o algoritmo de repetição espaçada?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Nosso algoritmo baseado na ciência da aprendizagem mostra os flashcards no momento ideal para maximizar sua retenção. Quanto mais você acerta, maior o intervalo entre revisões. Quanto mais erra, mais frequente a revisão."
          }
        },
        {
          "@type": "Question",
          "name": "Posso estudar offline?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sim! Nosso app permite que você baixe seus flashcards e estude mesmo sem conexão com a internet. Todo seu progresso é sincronizado quando você voltar online."
          }
        },
        {
          "@type": "Question",
          "name": "Os flashcards são gratuitos?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Os flashcards são disponibilizados através de assinaturas. Cada criador define o preço e as condições comerciais."
          }
        },
        {
          "@type": "Question",
          "name": "Como funciona a gamificação?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "O sistema de gamificação funciona com streak, que registra seus dias consecutivos de estudo. Quanto mais você mantiver sua sequência ativa, maior será sua performance e motivação."
          }
        }
      ]
    },
    {
      "@type": "Service",
      "serviceType": "Educational Platform",
      "provider": {
        "@type": "Organization",
        "name": "Sappie"
      },
      "areaServed": "BR",
      "audience": {
        "@type": "EducationalAudience",
        "educationalRole": "student"
      }
    }
  ]
};

// Static data for better performance
const benefits = [
  {
    icon: BookOpen,
    title: "Conteúdo Curado",
    description: "Aprenda com os melhores criadores de cada área, selecionados por sua expertise"
  },
  {
    icon: Brain,
    title: "Repetição Espaçada",
    description: "Algoritmo científico que otimiza sua revisão e maximiza a retenção"
  },
  {
    icon: Zap,
    title: "Microlearning",
    description: "Aprenda em pequenas doses diárias, otimizando seu tempo e retenção"
  },
  {
    icon: Trophy,
    title: "Gamificação",
    description: "Estude de forma divertida com sistemas de pontos, níveis e conquistas"
  },
  {
    icon: Users,
    title: "Estude de Qualquer Lugar",
    description: "Acesse seus flashcards em qualquer dispositivo, quando e onde quiser"
  },
  {
    icon: Search,
    title: "Máximo Aprendizado",
    description: "Sistema inteligente que identifica e prioriza o que você mais precisa estudar"
  }
] as const;

const subjects = [
  {
    category: "Saúde",
    examples: ["Medicina", "Enfermagem", "Farmácia", "Fisioterapia", "Nutrição"]
  },
  {
    category: "Concursos",
    examples: ["Direito", "Administração Pública", "Língua Portuguesa", "Raciocínio Lógico", "Carreiras policiais"]
  },
  {
    category: "Idiomas",
    examples: ["Inglês", "Espanhol", "Francês", "Alemão", "Japonês"]
  },
  {
    category: "Qualidade",
    examples: ["ISO 9001", "Six Sigma", "Auditoria", "Lean Manufacturing", "Gestão de Processos"]
  },
  {
    category: "Vestibular & ENEM",
    examples: ["Biologia", "História", "Geografia", "Literatura", "Redação"]
  },
  {
    category: "Certificações",
    examples: ["TI", "Gestão de Projetos", "Marketing Digital", "Idiomas", "Profissionais"]
  }
] as const;

const howItWorks = [
  {
    number: "01",
    title: "Encontre Flashcards",
    description: "Busque flashcards prontos na nossa biblioteca criados por especialistas em cada área"
  },
  {
    number: "02",
    title: "Assine pelo período desejado",
    description: "Escolha o plano que melhor se adapta às suas necessidades e comece a estudar"
  },
  {
    number: "03",
    title: "Estude no seu Ritmo",
    description: "Escolha quando e onde estudar. Acesse de qualquer dispositivo"
  },
  {
    number: "04",
    title: "Algoritmo Inteligente",
    description: "O sistema identifica suas dificuldades e ajusta automaticamente o que você precisa revisar"
  },
  {
    number: "05",
    title: "Acompanhe seu Progresso",
    description: "Visualize sua evolução com estatísticas detalhadas e conquiste seus objetivos"
  }
] as const;

const faqs = [
  {
    question: "Como funciona o algoritmo de repetição espaçada?",
    answer: "Nosso algoritmo baseado na ciência da aprendizagem mostra os flashcards no momento ideal para maximizar sua retenção. Quanto mais você acerta, maior o intervalo entre revisões. Quanto mais erra, mais frequente a revisão."
  },
  {
    question: "Posso estudar offline?",
    answer: "Sim! Nosso app permite que você baixe seus flashcards e estude mesmo sem conexão com a internet. Todo seu progresso é sincronizado quando você voltar online."
  },
  {
    question: "Como criar meus próprios flashcards?",
    answer: "Por enquanto você não pode criar seus flashcards, nosso foco é preservar seu tempo de criação, e focar nos estudos. Com isso trouxemos os melhores criadores para produzir flashcards para você"
  },
  {
    question: "Os flashcards são gratuitos?",
    answer: "Os flashcards são disponibilizados através de assinaturas. Cada criador define o preço e as condições comerciais"
  },
  {
    question: "Posso compartilhar meus flashcards?",
    answer: "Não é possível compartilhar flashcards, pois se trata de uma assinatura pessoal"
  },
  {
    question: "Como funciona a gamificação?",
    answer: "O sistema de gamificação funciona com streak, que registra seus dias consecutivos de estudo. Quanto mais você mantiver sua sequência ativa, maior será sua performance e motivação. Isso transforma o hábito de estudar em um desafio diário recompensador, ajudando você a criar consistência e alcançar melhores resultados"
  }
] as const;

const Alunos = () => {
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
                <GraduationCap className="w-4 h-4 mr-2" />
                Para Alunos
              </Badge>
              
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl mb-6">
                Domine seus estudos com <span className="primary-text">flashcards inteligentes</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                Encontre os melhores flashcards, feitos por quem conhece e entende do assunto
              </p>
              <div className="flex justify-center">
                <Button size="lg" className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 group" asChild>
                  <Link href="/produtos">
                    <Search className="mr-2 h-5 w-5" />
                    EXPLORAR FLASHCARDS
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="py-20 bg-secondary/30" aria-labelledby="benefits-heading">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 id="benefits-heading" className="font-heading text-3xl lg:text-4xl text-center mb-16">
              Por que estudar com <span className="primary-text">flashcards</span>?
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

        {/* Subjects */}
        <section className="py-20" aria-labelledby="subjects-heading">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 id="subjects-heading" className="font-heading text-3xl lg:text-4xl text-center mb-4">
              Flashcards para <span className="primary-text">diversas áreas</span>
            </h2>
            <p className="text-xl text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
              Encontre conteúdo de qualidade para o que você precisa estudar
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {subjects.map((subject, index) => (
                <Card
                  key={subject.category}
                  className="p-6 hover:shadow-lg transition-all duration-300 bg-card/50 backdrop-blur-sm animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <h3 className="font-heading text-xl mb-4 primary-text">{subject.category}</h3>
                  <ul className="space-y-2">
                    {subject.examples.map((example) => (
                      <li key={example} className="flex items-center gap-2 text-muted-foreground">
                        <Check className="w-4 h-4 text-primary flex-shrink-0" aria-hidden="true" />
                        <span>{example}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 bg-secondary/30" aria-labelledby="how-it-works-heading">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 id="how-it-works-heading" className="font-heading text-3xl lg:text-4xl text-center mb-16">
              Como <span className="primary-text">funciona</span>
            </h2>
            <div className="max-w-4xl mx-auto space-y-8">
              {howItWorks.map((step, index) => (
                <Card
                  key={step.number}
                  className="p-8 hover:shadow-lg transition-all duration-300 animate-slide-up bg-card/50 backdrop-blur-sm"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex gap-6 items-start">
                    <div className="text-5xl font-bold text-primary/60" aria-hidden="true">
                      {step.number}
                    </div>
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
                Pronto para <span className="primary-text">transformar</span> seus estudos?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Junte-se a milhares de estudantes que já estão aprendendo de forma mais eficiente
              </p>
              <Button size="lg" className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 group" asChild>
                <Link href="/produtos">
                  ENCONTRAR FLASHCARDS
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
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

export default Alunos;
