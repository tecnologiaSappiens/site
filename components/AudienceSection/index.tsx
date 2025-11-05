import { AudienceTabs } from "./AudienceTabs";
import { GraduationCap, Users, Briefcase, School } from "lucide-react";

// This data is now in the Server Component (better for SEO)
const audiences = [
  {
    id: "alunos",
    label: "Para Alunos",
    icon: "GraduationCap",
    title: "Domine seus estudos e alcance seus objetivos",
    description: "Encontre ou crie os melhores flashcards para um aprendizado eficiente e divertido.",
    benefits: [
      "Acesso a milhares de flashcards prontos",
      "Criação fácil e rápida de flashcards",
      "Revisão personalizada pelo algoritmo",
      "Estudo gamificado e divertido",
      "Disponível em qualquer dispositivo",
    ],
    cta: "COMO AJUDAMOS ALUNOS",
    href: "/alunos",
    schema: "EducationalOrganization",
  },
  {
    id: "criadores",
    label: "Para Criadores",
    icon: "Users",
    title: "Monetize seu conhecimento e impacte milhares",
    description: "Transforme sua expertise em flashcards, com total controle sobre seu conteúdo e ganhos.",
    benefits: [
      "Monetização simplificada do seu conteúdo",
      "Proteção da propriedade intelectual",
      "Ferramentas de criação profissionais",
      "Checkout seguro integrado",
      "Migração fácil de outras plataformas",
    ],
    cta: "COMO AJUDAMOS CRIADORES",
    href: "/criadores",
    schema: "ProfessionalService",
  },
  {
    id: "empresas",
    label: "Para Empresas",
    icon: "Briefcase",
    title: "Potencialize o treinamento de colaboradores",
    description: "Garanta alta retenção de conhecimento e um aprendizado eficiente para sua equipe.",
    benefits: [
      "Consultoria para criação de conteúdo",
      "Distribuição controlada por equipe",
      "Métricas de desempenho detalhadas",
      "Aprendizado flexível e assíncrono",
      "Integração com sistemas corporativos",
    ],
    cta: "COMO AJUDAMOS EMPRESAS",
    href: "/empresas",
    schema: "Organization",
  },
  {
    id: "instituicoes",
    label: "Para Ensino",
    icon: "School",
    title: "Inove no apoio acadêmico e potencialize o aprendizado",
    description: "Crie flashcards oficiais de seus materiais didáticos para apoiar o sucesso dos estudantes.",
    benefits: [
      "Conversão de materiais didáticos",
      "Plataforma completa de distribuição",
      "Acesso organizado por turma/disciplina",
      "Relatórios de progresso dos alunos",
      "Suporte técnico e pedagógico dedicado",
    ],
    cta: "COMO AJUDAMOS ENSINO",
    href: "/ensino",
    schema: "EducationalOrganization",
  },
] as const;

export const AudienceSection = () => {
  return (
    <section 
      id="solucoes" 
      className="py-24 bg-background"
      aria-labelledby="solucoes-heading"
      itemScope
      itemType="https://schema.org/ItemList"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-16 animate-fade-in">
          <h2 
            id="solucoes-heading"
            className="font-heading text-4xl sm:text-5xl lg:text-6xl mb-6"
            itemProp="name"
          >
            Soluções <span className="primary-text">para cada público</span>
          </h2>
          <p 
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            itemProp="description"
          >
            Descubra como a Sappie pode transformar seu aprendizado ou seu negócio
          </p>
        </header>

        <AudienceTabs audiences={audiences} />
      </div>
    </section>
  );
};
