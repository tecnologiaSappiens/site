import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/shared/Section";
import { FeatureBlock } from "@/components/shared/FeatureBlock";
import { ArrowRight, Wand2, Trophy, BarChart3 } from "lucide-react";

const appStoreLinks = [
  {
    platform: "iOS",
    name: "App Store",
    url: "https://apps.apple.com/br/app/sappie-flashcards-digitais/id6737522389",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
      </svg>
    ),
  },
  {
    platform: "Android",
    name: "Google Play",
    url: "https://play.google.com/store/apps/details?id=com.sappiens",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
      </svg>
    ),
  },
] as const;

const StoreBadges = () => (
  <nav className="flex flex-wrap gap-4" aria-label="Links para download do aplicativo">
    {appStoreLinks.map((store) => (
      <a
        key={store.platform}
        href={store.url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg hover:opacity-80 transition-opacity min-w-[140px]"
        aria-label={`Baixar aplicativo Sappie na ${store.name} para ${store.platform}`}
      >
        {store.icon}
        <div className="text-left">
          <div className="text-[10px] leading-tight">
            {store.platform === "iOS" ? "Baixe na" : "Disponível no"}
          </div>
          <div className="text-base font-semibold leading-tight">{store.name}</div>
        </div>
      </a>
    ))}
  </nav>
);

export const AppShowcaseSection = () => {
  return (
    <Section
      id="app"
      className="py-24 bg-gradient-to-b from-muted/30 to-background"
      ariaLabelledby="app-heading"
    >
      <header className="text-center mb-20 animate-fade-in">
        <h2 id="app-heading" className="font-heading text-4xl sm:text-5xl lg:text-6xl mb-6">
          Uma plataforma completa, <span className="primary-text">do conteúdo ao resultado</span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Do material bruto ao acompanhamento da retenção: veja como a Sappie funciona na prática.
        </p>
      </header>

      <div className="max-w-6xl mx-auto space-y-24">
        <FeatureBlock
          eyebrow="App do Aluno"
          title="Aprendizado direto no celular, em minutos por dia"
          description="Sessões curtas de flashcards com feedback imediato. O algoritmo de repetição espaçada prioriza o que cada pessoa mais precisa revisar."
          bullets={[
            "Perguntas diretas e objetivas, sem enrolação",
            "O que você erra aparece mais; o que domina, menos",
            "Disponível para iOS e Android",
          ]}
          media={{
            type: "video",
            src: "/videos/sappie-video-app.webm",
            alt: "Demonstração do aplicativo Sappie em ação",
          }}
          cta={<StoreBadges />}
        />

        <FeatureBlock
          eyebrow="Estúdio de Conteúdo"
          title="Transforme seus materiais em flashcards científicos"
          description="Apostilas, manuais, treinamentos e aulas viram trilhas de microlearning — com apoio da nossa consultoria de conteúdo."
          bullets={[
            "Criação e organização de decks por tema, equipe ou turma",
            "Distribuição controlada para os grupos certos",
            "Atualização de conteúdo sem retrabalho",
          ]}
          media={{ type: "placeholder", alt: "Tela do estúdio de conteúdo da Sappie", icon: Wand2 }}
          reverse
        />

        <FeatureBlock
          eyebrow="Gamificação"
          title="Engajamento que não depende de cobrança"
          description="Rankings, conquistas e sequências de estudo transformam a revisão diária em hábito — sem precisar perseguir ninguém."
          bullets={[
            "Rankings por equipe ou turma",
            "Conquistas e metas de estudo",
            "Notificações inteligentes de revisão",
          ]}
          media={{ type: "placeholder", alt: "Tela de gamificação da Sappie", icon: Trophy }}
        />

        <FeatureBlock
          eyebrow="Acompanhamento"
          title="Dados de progresso e retenção em tempo real"
          description="Saiba quem estudou, o que ficou retido e onde estão as lacunas de conhecimento — por pessoa, equipe ou turma."
          bullets={[
            "Painéis de progresso e taxa de retenção",
            "Identificação de lacunas de conhecimento",
            "Relatórios para gestores e coordenadores",
          ]}
          media={{ type: "placeholder", alt: "Painel de acompanhamento da Sappie", icon: BarChart3 }}
          reverse
        />
      </div>

      <div className="text-center mt-16">
        <Button size="lg" variant="outline" className="group" asChild>
          <Link href="/plataforma">
            Conheça a plataforma completa
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
          </Link>
        </Button>
      </div>
    </Section>
  );
};
