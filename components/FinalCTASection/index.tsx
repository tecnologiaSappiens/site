import { FinalCTAClient } from "./FinalCTAClient";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";

export const FinalCTASection = () => {
  return (
    <section 
      id="cta" 
      className="py-24 relative overflow-hidden"
      aria-labelledby="cta-heading"
      itemScope 
      itemType="https://schema.org/WebPageElement"
    >
      <div className="absolute inset-0 bg-primary/10" aria-hidden="true"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h2 
            id="cta-heading"
            className="font-heading text-4xl sm:text-5xl lg:text-6xl mb-6"
            itemProp="headline"
          >
            Pronto para ser um criador de flashcards e{" "}
            <span className="primary-text">transformar</span> seu negócio?
          </h2>
          
          <p 
            className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto"
            itemProp="description"
          >
            Seja um criador e junte-se à revolução dos flashcards inteligentes 
            com a Sappie. Crie, compartilhe e monetize seus baralhos de estudo.
          </p>
          
          <nav 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            aria-label="Ações principais"
          >
            <Link 
              href="https://creator.sappie.com.br/"
              rel="noopener noreferrer"
              aria-label="Acessar Portal do Criador da Sappie"
            >
              <Button 
                size="lg" 
                className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 transition-all duration-300 glow-effect group w-full sm:w-auto"
              >
                PORTAL DO CRIADOR
                <ArrowRight 
                  className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" 
                  aria-hidden="true"
                />
              </Button>
            </Link>
            
            <FinalCTAClient />
          </nav>
        </div>
      </div>
    </section>
  );
};
