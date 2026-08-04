import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Section } from "./Section";

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: readonly FAQItem[];
  title?: React.ReactNode;
  subtitle?: string;
  id?: string;
  className?: string;
  /** Emit FAQPage JSON-LD. Use on at most one FAQ block per page. */
  jsonLd?: boolean;
}

export const FAQ = ({
  items,
  title = (
    <>
      Perguntas <span className="primary-text">frequentes</span>
    </>
  ),
  subtitle,
  id = "faq",
  className,
  jsonLd = true,
}: FAQProps) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <Section id={id} className={className} ariaLabelledby={`${id}-heading`}>
      <header className="text-center mb-12 animate-fade-in">
        <h2 id={`${id}-heading`} className="font-heading text-4xl sm:text-5xl mb-4">
          {title}
        </h2>
        {subtitle && <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>}
      </header>

      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="w-full space-y-4">
          {items.map((item, index) => (
            <AccordionItem
              key={item.question}
              value={`${id}-${index}`}
              className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-lg px-6 hover:border-primary/40 transition-all duration-300"
            >
              <AccordionTrigger className="text-left hover:no-underline py-6">
                <span className="font-semibold text-lg">{item.question}</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      )}
    </Section>
  );
};
