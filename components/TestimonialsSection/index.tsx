import Image from "next/image";
import { Section } from "@/components/shared/Section";
import { DemoCTA } from "@/components/shared/DemoCTA";

import hospitalClinicas from "@/assets/partners/hospital-das-clinicas-fmusp.png";
import inovaHc from "@/assets/partners/inova-hc.png";
import ocaEnergia from "@/assets/partners/oca-energia.png";

// Partner-anchored cases with verifiable framing only — quotes and metrics
// require client sign-off before publishing
const cases = [
  {
    name: "Hospital das Clínicas FMUSP",
    logo: hospitalClinicas,
    segment: "Saúde e ensino",
    description:
      "O maior complexo hospitalar da América Latina utiliza a Sappie em iniciativas de capacitação, levando microlearning com repetição espaçada para a formação em saúde.",
  },
  {
    name: "Inova HC",
    logo: inovaHc,
    segment: "Hub de inovação em saúde",
    description:
      "Parceiro de inovação do Hospital das Clínicas, o Inova HC apoia a aplicação da metodologia Sappie em contextos reais de educação em saúde.",
  },
  {
    name: "OCA Energia",
    logo: ocaEnergia,
    segment: "Educação corporativa",
    description:
      "No setor de energia, a OCA usa a Sappie para transformar conhecimento técnico e comercial em trilhas de microlearning para suas equipes.",
  },
] as const;

export const TestimonialsSection = () => {
  return (
    <Section id="depoimentos" className="py-24 bg-muted/50" ariaLabelledby="depoimentos-heading">
      <header className="text-center mb-16 animate-fade-in">
        <h2 id="depoimentos-heading" className="font-heading text-4xl sm:text-5xl lg:text-6xl mb-6">
          Quem já aprende <span className="primary-text">com a Sappie</span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Organizações de saúde, energia e educação que usam nossa metodologia no dia a dia
        </p>
      </header>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto" role="list">
        {cases.map((item, index) => (
          <article
            key={item.name}
            className="flex flex-col p-8 bg-card/50 backdrop-blur-sm border border-primary/20 hover:border-primary/40 transition-all duration-300 rounded-lg animate-slide-up"
            style={{ animationDelay: `${index * 0.1}s` }}
            role="listitem"
          >
            <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-lg overflow-hidden mb-6">
              <Image
                src={item.logo}
                alt={`Logo ${item.name}`}
                width={64}
                height={64}
                className="w-12 h-12 object-contain p-1"
                loading="lazy"
              />
            </div>
            <p className="text-sm font-semibold tracking-widest uppercase text-primary mb-2">
              {item.segment}
            </p>
            <h3 className="font-heading text-xl mb-3">{item.name}</h3>
            <p className="text-muted-foreground leading-relaxed">{item.description}</p>
          </article>
        ))}
      </div>

      <div className="text-center mt-12">
        <DemoCTA size="lg" showArrow label="Quero ver a Sappie em ação" />
      </div>
    </Section>
  );
};
