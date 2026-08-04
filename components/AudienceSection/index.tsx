import Link from "next/link";
import { Briefcase, School, GraduationCap, Users, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/shared/Section";

// Primary B2B segments get full cards; students and creators keep a discreet link row
const segments = [
  {
    id: "solucoes-empresas",
    icon: Briefcase,
    label: "Para Empresas",
    title: "Educação corporativa que gera resultados",
    description:
      "Onboarding, treinamento de produto, compliance e capacitação contínua com alta retenção de conhecimento — sem parar a operação.",
    benefits: [
      "Consultoria para transformar seus materiais em microlearning",
      "Distribuição controlada por equipe e área",
      "Métricas de progresso e retenção por colaborador",
      "Aprendizado assíncrono, direto no celular",
    ],
    cta: "Soluções para empresas",
    href: "/empresas",
  },
  {
    id: "solucoes-instituicoes",
    icon: School,
    label: "Para Instituições de Ensino",
    title: "Engajamento e retenção para seus alunos",
    description:
      "Converta materiais didáticos em flashcards oficiais da sua instituição e acompanhe o desempenho de cada turma.",
    benefits: [
      "Conversão de materiais didáticos em flashcards científicos",
      "Acesso organizado por turma e disciplina",
      "Relatórios de progresso dos alunos",
      "Suporte técnico e pedagógico dedicado",
    ],
    cta: "Soluções para ensino",
    href: "/ensino",
  },
] as const;

const secondaryAudiences = [
  { icon: GraduationCap, label: "Sou aluno", href: "/alunos" },
  { icon: Users, label: "Sou criador de conteúdo", href: "/criadores" },
] as const;

export const AudienceSection = () => {
  return (
    <Section id="solucoes" className="py-24 bg-background" ariaLabelledby="solucoes-heading">
      <header className="text-center mb-16 animate-fade-in">
        <h2 id="solucoes-heading" className="font-heading text-4xl sm:text-5xl lg:text-6xl mb-6">
          Soluções <span className="primary-text">para sua organização</span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Da educação corporativa ao ensino superior: conhecimento que fica.
        </p>
      </header>

      <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto" role="list">
        {segments.map((segment, index) => {
          const Icon = segment.icon;
          return (
            <article
              key={segment.id}
              id={segment.id}
              className="flex flex-col p-8 lg:p-10 bg-card/50 backdrop-blur-sm border border-primary/20 hover:border-primary/40 transition-all duration-300 rounded-lg animate-slide-up scroll-mt-24"
              style={{ animationDelay: `${index * 0.1}s` }}
              role="listitem"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6" aria-hidden="true">
                <Icon className="w-7 h-7 text-primary" />
              </div>
              <p className="text-sm font-semibold tracking-widest uppercase text-primary mb-3">
                {segment.label}
              </p>
              <h3 className="font-heading text-2xl sm:text-3xl mb-4">{segment.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">{segment.description}</p>
              <ul className="space-y-3 mb-8">
                {segment.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" aria-hidden="true" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
              <Button size="lg" className="mt-auto group w-full sm:w-auto" asChild>
                <Link href={segment.href}>
                  {segment.cta}
                  <ArrowRight
                    className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform"
                    aria-hidden="true"
                  />
                </Link>
              </Button>
            </article>
          );
        })}
      </div>

      <nav
        className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12 text-center"
        aria-label="Soluções para alunos e criadores"
      >
        <span className="text-muted-foreground">A Sappie também é para você:</span>
        {secondaryAudiences.map((audience) => {
          const Icon = audience.icon;
          return (
            <Link
              key={audience.href}
              href={audience.href}
              className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
            >
              <Icon className="w-4 h-4" aria-hidden="true" />
              {audience.label}
            </Link>
          );
        })}
      </nav>
    </Section>
  );
};
