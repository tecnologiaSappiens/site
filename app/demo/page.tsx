import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";
import { Section } from "@/components/shared/Section";
import { DemoForm } from "./DemoForm";
import { CalendarCheck, MonitorPlay, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Agendar Demonstração | Sappie",
  description:
    "Agende uma demonstração da Sappie e veja como o microlearning gamificado com repetição espaçada aumenta a retenção de conhecimento na sua empresa ou instituição de ensino.",
  alternates: { canonical: "/demo" },
  openGraph: {
    title: "Agendar Demonstração | Sappie",
    description:
      "Veja a plataforma Sappie em ação: microlearning gamificado com repetição espaçada para empresas e instituições de ensino.",
  },
};

const expectations = [
  {
    icon: MonitorPlay,
    title: "Plataforma em ação",
    description:
      "Um tour guiado pelo app do aluno, estúdio de conteúdo, gamificação e relatórios de acompanhamento.",
  },
  {
    icon: Users,
    title: "Conversa sobre seu contexto",
    description:
      "Entendemos seu desafio de treinamento ou ensino e mostramos como a Sappie se aplica ao seu caso.",
  },
  {
    icon: CalendarCheck,
    title: "30 minutos, sem compromisso",
    description:
      "Demonstração online e objetiva, no horário que funcionar melhor para a sua agenda.",
  },
] as const;

export default function DemoPage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <Section className="pt-8 md:pt-12" ariaLabelledby="demo-heading">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className="animate-fade-in">
            <h1 id="demo-heading" className="font-heading text-4xl sm:text-5xl mb-6 leading-tight">
              Veja a Sappie <span className="primary-text">em ação</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
              Agende uma demonstração e descubra como empresas e instituições de ensino usam
              microlearning gamificado com repetição espaçada para fazer suas equipes e alunos
              lembrarem até 90% do conteúdo.
            </p>

            <ul className="space-y-6" aria-label="O que esperar da demonstração">
              {expectations.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.title} className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0" aria-hidden="true">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h2 className="font-heading text-lg mb-1">{item.title}</h2>
                      <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="animate-scale-in lg:sticky lg:top-28">
            <DemoForm />
          </div>
        </div>
      </Section>

      <Footer />
      <BackToTop />
    </div>
  );
}
