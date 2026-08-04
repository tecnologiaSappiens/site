import { FAQ } from "@/components/shared/FAQ";

// B2B-first FAQ; consumer questions live on /alunos and /criadores
const faqs = [
  {
    question: "Como a Sappie funciona para treinamento corporativo?",
    answer:
      "Transformamos seus materiais de treinamento — onboarding, produto, compliance, vendas — em trilhas de microlearning com flashcards. Seus colaboradores estudam em sessões curtas pelo celular, e o algoritmo de repetição espaçada garante que o conhecimento seja retido. Gestores acompanham progresso e retenção em relatórios por equipe.",
  },
  {
    question: "E para instituições de ensino?",
    answer:
      "Sua instituição converte materiais didáticos em flashcards oficiais, organizados por turma e disciplina. Os alunos revisam o conteúdo das aulas de forma gamificada, e professores e coordenadores acompanham relatórios de progresso e desempenho.",
  },
  {
    question: "O que é repetição espaçada e por que funciona?",
    answer:
      "A repetição espaçada é um método com mais de 30 anos de evidência científica: revisar o conteúdo em intervalos crescentes, calculados pelo algoritmo, aumenta a retenção de longo prazo em até 90%. O que a pessoa erra aparece mais; o que domina, aparece menos.",
  },
  {
    question: "Quem cria o conteúdo? Precisamos de uma equipe dedicada?",
    answer:
      "Não. Nossa consultoria de conteúdo apoia a conversão dos seus materiais em flashcards de qualidade. Sua equipe também pode criar e atualizar decks de forma autônoma no estúdio de conteúdo, sem conhecimento técnico.",
  },
  {
    question: "Como acompanhamos o progresso da equipe ou dos alunos?",
    answer:
      "A plataforma oferece painéis com métricas de progresso, tempo de estudo, taxa de retenção e lacunas de conhecimento — por pessoa, equipe ou turma. Gestores e coordenadores enxergam exatamente o que ficou aprendido.",
  },
  {
    question: "Funciona em qualquer dispositivo?",
    answer:
      "Sim. A Sappie tem aplicativo para iOS e Android e funciona também no navegador. O progresso é sincronizado automaticamente entre os dispositivos, permitindo aprendizado assíncrono onde e quando fizer sentido.",
  },
  {
    question: "Quanto custa?",
    answer:
      "O investimento depende do tamanho da sua equipe ou instituição e do apoio de conteúdo necessário. Agende uma demonstração e apresentamos uma proposta sob medida para o seu contexto.",
  },
] as const;

export const FAQSection = () => {
  return (
    <FAQ
      items={faqs}
      id="faq"
      className="py-24 bg-background"
      subtitle="Tudo o que você precisa saber sobre a Sappie"
    />
  );
};
