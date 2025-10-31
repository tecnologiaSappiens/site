import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";
import { ContactModal } from "@/components/ContactModal";

export const FinalCTASection = () => {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  return (
    <>
      <section id="cta" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/10"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl mb-6">
              Pronto para ser um criador de flashcards e <span className="primary-text">transformar</span> seu negócio?
            </h2>
            
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Seja um criador e junte-se à revolução dos flashcards inteligentes com a Sappie
          </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 transition-all duration-300 glow-effect group w-full sm:w-auto"
              >
                PORTAL DO CRIADOR
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button 
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 border-2 border-primary hover:bg-primary/10 transition-all duration-300 w-full sm:w-auto"
                onClick={() => setContactModalOpen(true)}
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                FALE CONOSCO
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <ContactModal open={contactModalOpen} onOpenChange={setContactModalOpen} />
    </>
  );
};
