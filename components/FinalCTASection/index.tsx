import { Button } from "@/components/ui/button";
import { CTABand } from "@/components/shared/CTABand";
import { DemoCTA } from "@/components/shared/DemoCTA";
import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5511935031749?text=Quero%20conhecer%20a%20Sappie";

export const FinalCTASection = () => {
  return (
    <CTABand
      id="cta"
      title={
        <>
          Pronto para uma equipe que <span className="primary-text">realmente lembra</span> o que
          aprendeu?
        </>
      }
      subtitle="Agende uma demonstração e veja como empresas e instituições de ensino usam a Sappie para transformar conhecimento em resultado."
    >
      <DemoCTA size="lg" showArrow className="text-lg px-8 py-6 glow-effect w-full sm:w-auto" />
      <Button size="lg" variant="outline" className="text-lg px-8 py-6 w-full sm:w-auto" asChild>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Falar com a Sappie pelo WhatsApp"
        >
          <MessageCircle className="mr-2 h-5 w-5" aria-hidden="true" />
          Falar no WhatsApp
        </a>
      </Button>
    </CTABand>
  );
};
