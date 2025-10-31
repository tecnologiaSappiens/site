import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQSection = () => {
  const faqs = [
    {
      question: "O que são flashcards e como eles funcionam?",
      answer: "Flashcards são cartões de estudo com uma pergunta de um lado e a resposta do outro. Na Sappie, usamos repetição espaçada, um método científico que otimiza o momento de revisão de cada cartão para maximizar a retenção na memória de longo prazo."
    },
    {
      question: "Como funciona a repetição espaçada?",
      answer: "A repetição espaçada é baseada em estudos de neurociência que mostram que revisar informações em intervalos específicos aumenta a retenção. Nosso algoritmo calcula automaticamente o melhor momento para você revisar cada flashcard, baseado no seu desempenho anterior."
    },
    {
      question: "Posso criar meus próprios flashcards?",
      answer: "Sim! A Sappie permite que você crie seus próprios flashcards personalizados. Você pode adicionar texto, imagens e organizar em baralhos temáticos. Além disso, criadores de conteúdo podem monetizar seus flashcards na plataforma."
    },
    {
      question: "A plataforma funciona em dispositivos móveis?",
      answer: "Sim, a Sappie é totalmente responsiva e funciona perfeitamente em smartphones e tablets. Você pode estudar onde e quando quiser, e seu progresso é sincronizado automaticamente entre todos os dispositivos."
    },
    {
      question: "Como posso acompanhar meu progresso?",
      answer: "A plataforma oferece dashboards detalhados com estatísticas sobre seu desempenho, tempo de estudo, taxa de retenção e progresso em cada baralho. Você pode visualizar gráficos e métricas que ajudam a identificar áreas que precisam de mais atenção."
    },
    {
      question: "Como funciona a monetização para criadores?",
      answer: "Criadores de conteúdo podem vender seus baralhos de flashcards na plataforma Sappie. Você define o preço, gerencia seu conteúdo e recebe pagamentos diretamente. É uma ótima forma de compartilhar conhecimento e gerar renda."
    },
    {
      question: "A Sappie pode ser usada para treinamento corporativo?",
      answer: "Sim! Empresas usam a Sappie para treinamentos internos, onboarding de funcionários e capacitação contínua. A plataforma permite criar conteúdo personalizado e acompanhar o progresso de toda a equipe."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl mb-6">
            Perguntas <span className="primary-text">Frequentes</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Tudo o que você precisa saber sobre a Sappie
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-lg px-6 hover:border-primary/40 transition-all duration-300"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="font-semibold text-lg">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
