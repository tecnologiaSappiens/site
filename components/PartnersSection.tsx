import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

// Imports
import hospitalClinicas from "@/assets/partners/hospital-das-clinicas-fmusp.png";
import inovaHc from "@/assets/partners/inova-hc.png";
import moso from "@/assets/partners/moso.png";
import ablao from "@/assets/partners/ablao.png";
import easycards from "@/assets/partners/easycards-new.png";
import oportuniza from "@/assets/partners/oportuniza.png";
import ocaEnergia from "@/assets/partners/oca-energia.png";
import enfmaps from "@/assets/partners/enfmaps.png";
import susResumido from "@/assets/partners/sus-resumido-new.png";
import faseFinal from "@/assets/partners/fase-final-ha-vida.png";
import mapeandoAprovacao from "@/assets/partners/mapeando-aprovacao.png";
import medvetResume from "@/assets/partners/medvet-resume.png";
import portuguesLeticia from "@/assets/partners/portugues-com-leticia.png";
import reborn from "@/assets/partners/reborn.png";
import tambellini from "@/assets/partners/tabelando-com-tambellini.png";
import arkamed from "@/assets/partners/arkamed.png";
import bibliaFlashcards from "@/assets/partners/biblia-flashcards.png";
import farmacologia from "@/assets/partners/farmacologia-na-pratica.png";

export const PartnersSection = () => {
  const partners = [
    { name: "Hospital das Clínicas FMUSP", logo: hospitalClinicas },
    { name: "Inova HC", logo: inovaHc },
    { name: "MOSO", logo: moso },
    { name: "ABLAO", logo: ablao },
    { name: "EasyCards", logo: easycards },
    { name: "OportuniZA", logo: oportuniza },
    { name: "OCA Energia", logo: ocaEnergia },
    { name: "EnfMaps", logo: enfmaps },
    { name: "SUS Resumido", logo: susResumido },
    { name: "Fase Final: Há Vida", logo: faseFinal },
    { name: "Mapeando Aprovação", logo: mapeandoAprovacao },
    { name: "MedVet Resume", logo: medvetResume },
    { name: "Português com Letícia", logo: portuguesLeticia },
    { name: "Reborn", logo: reborn },
    { name: "Tabelando com Tambellini", logo: tambellini },
    { name: "Arkamed", logo: arkamed },
    { name: "Bíblia Flashcards", logo: bibliaFlashcards },
    { name: "Farmacologia na Prática", logo: farmacologia },
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
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={96}
                    height={96}
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
