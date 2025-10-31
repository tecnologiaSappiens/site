import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const PartnersSection = () => {
  const partners = [
    { name: "Hospital das Clínicas FMUSP", logo: "/partners/hospital-das-clinicas-fmusp.png" },
    { name: "Inova HC", logo: "/partners/inova-hc.png" },
    { name: "MOSO", logo: "/partners/moso.png" },
    { name: "ABLAO", logo: "/partners/ablao.png" },
    { name: "EasyCards", logo: "/partners/easycards-new.png" },
    { name: "OportuniZA", logo: "/partners/oportuniza.png" },
    { name: "OCA Energia", logo: "/partners/oca-energia.png" },
    { name: "EnfMaps", logo: "/partners/enfmaps.png" },
    { name: "SUS Resumido", logo: "/partners/sus-resumido-new.png" },
    { name: "Fase Final: Há Vida", logo: "/partners/fase-final-ha-vida.png" },
    { name: "Mapeando Aprovação", logo: "/partners/mapeando-aprovacao.png" },
    { name: "MedVet Resume", logo: "/partners/medvet-resume.png" },
    { name: "Português com Letícia", logo: "/partners/portugues-com-leticia.png" },
    { name: "Reborn", logo: "/partners/reborn.png" },
    { name: "Tabelando com Tambellini", logo: "/partners/tabelando-com-tambellini.png" },
    { name: "Arkamed", logo: "/partners/arkamed.png" },
    { name: "Bíblia Flashcards", logo: "/partners/biblia-flashcards.png" },
    { name: "Farmacologia na Prática", logo: "/partners/farmacologia-na-pratica.png" },
  ];

  return (
    <section id="parceiros" className="py-24 relative overflow-hidden bg-gradient-to-b from-background to-muted/30">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Title */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl mb-6">
            Quem está <span className="primary-text">conosco</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Parceiros que confiam na Sappie para transformar aprendizado
          </p>
        </div>

        {/* Partners Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="group relative animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-white flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-2xl group-hover:shadow-primary/20 overflow-hidden">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="w-20 h-20 sm:w-24 sm:h-24 object-contain p-2"
                    loading="lazy"
                  />
                </div>
                
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-primary/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-16 animate-fade-in">
          <Button 
            size="lg"
            onClick={() => window.location.href = "/produtos"}
            className="bg-primary hover:bg-primary/90 transition-all duration-300 group"
          >
            EXPLORE NOSSOS FLASHCARDS
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};
