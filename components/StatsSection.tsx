import { Section } from "@/components/shared/Section";
import { StatsBand } from "@/components/shared/StatsBand";

const stats = [
  {
    value: "90%",
    label: "de retenção do conteúdo",
    description: "Com flashcards e repetição espaçada",
  },
  {
    value: "20x",
    label: "mais eficiente",
    description: "Que releitura e métodos passivos de estudo",
  },
  {
    value: "-90%",
    label: "de horas em sala",
    description: "Menos treinamento presencial, mais aprendizado contínuo",
  },
] as const;

export const StatsSection = () => {
  return (
    <Section id="resultados" className="py-16" ariaLabelledby="resultados-heading">
      <h2 id="resultados-heading" className="sr-only">
        Resultados da Sappie
      </h2>
      <StatsBand stats={stats} />
    </Section>
  );
};
