import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";
import { Section } from "@/components/shared/Section";
import { FeatureBlock } from "@/components/shared/FeatureBlock";
import { CTABand } from "@/components/shared/CTABand";
import { DemoCTA } from "@/components/shared/DemoCTA";
import { Button } from "@/components/ui/button";
import { MessageCircle, Wand2, Trophy, BarChart3 } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5511935031749?text=Quero%20conhecer%20a%20plataforma%20Sappie";

export const metadata: Metadata = {
  title: "Plataforma Sappie | Microlearning Gamificado do Conteúdo ao Resultado",
  description:
    "Conheça os módulos da plataforma Sappie: app do aluno com repetição espaçada, estúdio de conteúdo, gamificação e painéis de acompanhamento para empresas e instituições de ensino.",
  alternates: { canonical: "/plataforma" },
  openGraph: {
    title: "Plataforma Sappie | Microlearning Gamificado",
    description:
      "App do aluno, estúdio de conteúdo, gamificação e analytics: a plataforma completa de microlearning para empresas e instituições de ensino.",
    type: "website",
    locale: "pt_BR",
    siteName: "Sappie",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Sappie",
  applicationCategory: "EducationalApplication",
  operatingSystem: "Web, iOS, Android",
  description:
    "Plataforma de microlearning gamificado com repetição espaçada para educação corporativa e instituições de ensino",
  inLanguage: "pt-BR",
  provider: { "@type": "Organization", name: "Sappie", url: "https://sappie.com.br" },
};

export default function PlataformaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="min-h-screen">
        <Navbar />

        <Section className="pt-8 md:pt-12 pb-0" ariaLabelledby="plataforma-heading">
          <header className="max-w-4xl mx-auto text-center animate-fade-in mb-8">
            <h1 id="plataforma-heading" className="font-heading text-4xl sm:text-5xl lg:text-6xl mb-6 leading-tight">
              Uma plataforma completa, <span className="primary-text">do conteúdo ao resultado</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Quatro módulos integrados levam seu material do formato bruto até a retenção medida:
              estúdio de conteúdo, app do aluno, gamificação e acompanhamento.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <DemoCTA size="lg" showArrow className="text-lg px-8 py-6" />
            </div>
          </header>
        </Section>

        <Section ariaLabelledby="modulos-heading">
          <h2 id="modulos-heading" className="sr-only">
            Módulos da plataforma
          </h2>
          <div className="max-w-6xl mx-auto space-y-24">
            <FeatureBlock
              id="app"
              eyebrow="App do Aluno"
              title="Microlearning no celular, em minutos por dia"
              description="Sessões curtas de flashcards com feedback imediato. O algoritmo de repetição espaçada calcula o melhor momento de revisar cada conteúdo, priorizando o que cada pessoa mais precisa."
              bullets={[
                "Perguntas diretas e objetivas, com correção na hora",
                "Plano de revisão personalizado por colaborador ou aluno",
                "Aplicativo para iOS e Android, com sincronização automática",
                "Funciona de forma assíncrona: cada um estuda no seu ritmo",
              ]}
              media={{
                type: "video",
                src: "/videos/sappie-video-app.webm",
                alt: "Demonstração do aplicativo Sappie em ação",
              }}
            />

            <FeatureBlock
              id="criador"
              eyebrow="Estúdio de Conteúdo"
              title="Do material bruto ao flashcard científico"
              description="Apostilas, manuais, slides e treinamentos viram trilhas de microlearning. Nossa consultoria apoia a conversão inicial, e sua equipe mantém tudo atualizado de forma autônoma."
              bullets={[
                "Criação e edição de decks sem conhecimento técnico",
                "Organização por equipe, turma ou disciplina",
                "Distribuição controlada para os grupos certos",
                "Consultoria pedagógica para a conversão dos materiais",
              ]}
              media={{ type: "placeholder", alt: "Tela do estúdio de conteúdo da Sappie", icon: Wand2 }}
              reverse
            />

            <FeatureBlock
              id="gamificacao"
              eyebrow="Gamificação"
              title="Engajamento que vira hábito"
              description="Rankings, conquistas e sequências de estudo transformam a revisão diária em rotina — sem depender de cobrança de gestores ou professores."
              bullets={[
                "Rankings por equipe ou turma",
                "Conquistas e metas de estudo",
                "Notificações inteligentes no momento certo de revisar",
              ]}
              media={{ type: "placeholder", alt: "Tela de gamificação da Sappie", icon: Trophy }}
            />

            <FeatureBlock
              id="analytics"
              eyebrow="Acompanhamento"
              title="Retenção medida, não estimada"
              description="Painéis mostram quem estudou, o que ficou retido e onde estão as lacunas — por pessoa, equipe ou turma. Dados exportáveis para os seus relatórios."
              bullets={[
                "Taxa de retenção e progresso em tempo real",
                "Lacunas de conhecimento por tema",
                "Relatórios para gestores, professores e coordenadores",
              ]}
              media={{ type: "placeholder", alt: "Painel de acompanhamento da Sappie", icon: BarChart3 }}
              reverse
            />
          </div>
        </Section>

        <CTABand
          id="cta"
          title={
            <>
              Veja os quatro módulos <span className="primary-text">funcionando juntos</span>
            </>
          }
          subtitle="Agende uma demonstração guiada de 30 minutos com nosso time."
        >
          <DemoCTA size="lg" showArrow className="text-lg px-8 py-6 glow-effect w-full sm:w-auto" />
          <Button size="lg" variant="outline" className="text-lg px-8 py-6 w-full sm:w-auto" asChild>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-5 w-5" aria-hidden="true" />
              Falar no WhatsApp
            </a>
          </Button>
        </CTABand>

        <Footer />
        <BackToTop />
      </div>
    </>
  );
}
