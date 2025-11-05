"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
  keywords: string;
}

interface FAQAccordionProps {
  faqs: readonly FAQ[];
}

export const FAQAccordion = ({ faqs }: FAQAccordionProps) => {
  return (
    <Accordion 
      type="single" 
      collapsible 
      className="w-full space-y-4"
      aria-label="Perguntas e respostas frequentes sobre a Sappie"
    >
      {faqs.map((faq, index) => (
        <AccordionItem 
          key={faq.id}
          value={faq.id}
          className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-lg px-6 hover:border-primary/40 transition-all duration-300"
          itemScope
          itemType="https://schema.org/Question"
        >
          <AccordionTrigger 
            className="text-left hover:no-underline py-6"
            aria-label={`Pergunta ${index + 1}: ${faq.question}`}
          >
            <span className="font-semibold text-lg" itemProp="name">
              {faq.question}
            </span>
          </AccordionTrigger>
          <AccordionContent 
            className="text-muted-foreground leading-relaxed pb-6"
            itemProp="acceptedAnswer"
            itemScope
            itemType="https://schema.org/Answer"
          >
            <div itemProp="text">
              {faq.answer}
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};
