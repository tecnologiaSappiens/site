import { FAQAccordion } from "./FAQAccordion";

// Static FAQ data with enhanced metadata
const faqs = [
  {
    id: "flashcards-como-funcionam",
    question: "O que são flashcards e como eles funcionam?",
    answer: "Flashcards são cartões de estudo com uma pergunta de um lado e a resposta do outro. Na Sappie, usamos repetição espaçada, um método científico que otimiza o momento de revisão de cada cartão para maximizar a retenção na memória de longo prazo.",
    category: "Básico",
    keywords: "flashcards, repetição espaçada, método de estudo, memória",
  },
  {
    id: "repeticao-espacada",
    question: "Como funciona a repetição espaçada?",
    answer: "A repetição espaçada é baseada em estudos de neurociência que mostram que revisar informações em intervalos específicos aumenta a retenção. Nosso algoritmo calcula automaticamente o melhor momento para você revisar cada flashcard, baseado no seu desempenho anterior.",
    category: "Funcionalidades",
    keywords: "repetição espaçada, algoritmo, neurociência, retenção",
  },
  {
    id: "criar-flashcards",
    question: "Posso criar meus próprios flashcards?",
    answer: "Sim! A Sappie permite que você crie seus próprios flashcards personalizados. Você pode adicionar texto, imagens e organizar em baralhos temáticos. Além disso, criadores de conteúdo podem monetizar seus flashcards na plataforma.",
    category: "Criação",
    keywords: "criar flashcards, personalizado, monetização, criadores",
  },
  {
    id: "dispositivos-moveis",
    question: "A plataforma funciona em dispositivos móveis?",
    answer: "Sim, a Sappie é totalmente responsiva e funciona perfeitamente em smartphones e tablets. Você pode estudar onde e quando quiser, e seu progresso é sincronizado automaticamente entre todos os dispositivos.",
    category: "Acesso",
    keywords: "mobile, responsivo, sincronização, multiplataforma",
  },
  {
    id: "acompanhar-progresso",
    question: "Como posso acompanhar meu progresso?",
    answer: "A plataforma oferece dashboards detalhados com estatísticas sobre seu desempenho, tempo de estudo, taxa de retenção e progresso em cada baralho. Você pode visualizar gráficos e métricas que ajudam a identificar áreas que precisam de mais atenção.",
    category: "Funcionalidades",
    keywords: "progresso, estatísticas, dashboard, métricas, desempenho",
  },
  {
    id: "monetizacao-criadores",
    question: "Como funciona a monetização para criadores?",
    answer: "Criadores de conteúdo podem vender seus baralhos de flashcards na plataforma Sappie. Você define o preço, gerencia seu conteúdo e recebe pagamentos diretamente. É uma ótima forma de compartilhar conhecimento e gerar renda.",
    category: "Monetização",
    keywords: "monetização, vender flashcards, criadores, renda passiva",
  },
  {
    id: "treinamento-corporativo",
    question: "A Sappie pode ser usada para treinamento corporativo?",
    answer: "Sim! Empresas usam a Sappie para treinamentos internos, onboarding de funcionários e capacitação contínua. A plataforma permite criar conteúdo personalizado e acompanhar o progresso de toda a equipe.",
    category: "Empresas",
    keywords: "treinamento corporativo, empresas, onboarding, capacitação",
  },
] as const;

export const FAQSection = () => {
  return (
    <section 
      id="faq" 
      className="py-24 bg-background"
      aria-labelledby="faq-heading"
      itemScope
      itemType="https://schema.org/FAQPage"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-16 animate-fade-in">
          <h2 
            id="faq-heading"
            className="font-heading text-4xl sm:text-5xl lg:text-6xl mb-6"
          >
            Perguntas <span className="primary-text">Frequentes</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Tudo o que você precisa saber sobre a Sappie
          </p>
        </header>

        <div className="max-w-4xl mx-auto">
          <FAQAccordion faqs={faqs} />
        </div>

        {/* Hidden structured data for SEO - FAQPage Schema */}
        <div className="sr-only">
          <h3>Lista completa de perguntas frequentes:</h3>
          <dl>
            {faqs.map((faq) => (
              <div 
                key={faq.id}
                itemProp="mainEntity"
                itemScope
                itemType="https://schema.org/Question"
              >
                <dt itemProp="name">{faq.question}</dt>
                <dd
                  itemProp="acceptedAnswer"
                  itemScope
                  itemType="https://schema.org/Answer"
                >
                  <div itemProp="text">{faq.answer}</div>
                </dd>
                <meta itemProp="keywords" content={faq.keywords} />
              </div>
            ))}
          </dl>
        </div>

        {/* Additional metadata for better indexing */}
        <div className="sr-only">
          <div itemScope itemType="https://schema.org/WebPage">
            <meta itemProp="name" content="Perguntas Frequentes - Sappie" />
            <meta itemProp="description" content="Respostas para as perguntas mais comuns sobre flashcards inteligentes, repetição espaçada e a plataforma Sappie" />
            <div itemProp="breadcrumb" itemScope itemType="https://schema.org/BreadcrumbList">
              <div itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <meta itemProp="position" content="1" />
                <a itemProp="item" href="/">
                  <span itemProp="name">Início</span>
                </a>
              </div>
              <div itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <meta itemProp="position" content="2" />
                <span itemProp="name">FAQ</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
