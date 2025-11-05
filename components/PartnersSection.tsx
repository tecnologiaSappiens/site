import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

// Partner logos imports
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

// Static partners data with enhanced metadata
const partners = [
  { 
    name: "Hospital das Clínicas FMUSP", 
    logo: hospitalClinicas,
    type: "Hospital",
    description: "Hospital universitário de referência em São Paulo",
  },
  { 
    name: "Inova HC", 
    logo: inovaHc,
    type: "Innovation Hub",
    description: "Centro de inovação em saúde",
  },
  { 
    name: "MOSO", 
    logo: moso,
    type: "Educational",
    description: "Plataforma educacional para concursos",
  },
  { 
    name: "ABLAO", 
    logo: ablao,
    type: "Educational",
    description: "Conteúdo educacional especializado",
  },
  { 
    name: "EasyCards", 
    logo: easycards,
    type: "Educational",
    description: "Criador de flashcards educacionais",
  },
  { 
    name: "OportuniZA", 
    logo: oportuniza,
    type: "Educational",
    description: "Oportunidades educacionais e concursos",
  },
  { 
    name: "OCA Energia", 
    logo: ocaEnergia,
    type: "Corporate",
    description: "Setor de energia e sustentabilidade",
  },
  { 
    name: "EnfMaps", 
    logo: enfmaps,
    type: "Educational",
    description: "Mapas mentais para enfermagem",
  },
  { 
    name: "SUS Resumido", 
    logo: susResumido,
    type: "Educational",
    description: "Conteúdo sobre Sistema Único de Saúde",
  },
  { 
    name: "Fase Final: Há Vida", 
    logo: faseFinal,
    type: "Educational",
    description: "Preparação para concursos médicos",
  },
  { 
    name: "Mapeando Aprovação", 
    logo: mapeandoAprovacao,
    type: "Educational",
    description: "Estratégias para aprovação em concursos",
  },
  { 
    name: "MedVet Resume", 
    logo: medvetResume,
    type: "Educational",
    description: "Resumos para medicina veterinária",
  },
  { 
    name: "Português com Letícia", 
    logo: portuguesLeticia,
    type: "Educational",
    description: "Ensino de língua portuguesa",
  },
  { 
    name: "Reborn", 
    logo: reborn,
    type: "Educational",
    description: "Renovação e preparação educacional",
  },
  { 
    name: "Tabelando com Tambellini", 
    logo: tambellini,
    type: "Educational",
    description: "Tabelas e resumos médicos",
  },
  { 
    name: "Arkamed", 
    logo: arkamed,
    type: "Educational",
    description: "Conteúdo educacional médico",
  },
  { 
    name: "Bíblia Flashcards", 
    logo: bibliaFlashcards,
    type: "Religious Educational",
    description: "Flashcards para estudo bíblico",
  },
  { 
    name: "Farmacologia na Prática", 
    logo: farmacologia,
    type: "Educational",
    description: "Ensino prático de farmacologia",
  },
] as const;

export const PartnersSection = () => {
  return (
    <section 
      id="parceiros" 
      className="py-24 relative overflow-hidden bg-gradient-to-b from-background to-muted/30"
      aria-labelledby="parceiros-heading"
      itemScope
      itemType="https://schema.org/ItemList"
    >
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Title */}
        <header className="text-center mb-16 animate-fade-in">
          <h2 
            id="parceiros-heading"
            className="font-heading text-4xl sm:text-5xl lg:text-6xl mb-6"
            itemProp="name"
          >
            Quem está <span className="primary-text">conosco</span>
          </h2>
          <p 
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            itemProp="description"
          >
            Parceiros que confiam na Sappie para transformar aprendizado
          </p>
        </header>

        {/* Partners Grid */}
        <div className="max-w-6xl mx-auto">
          <div 
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center"
            role="list"
            aria-label="Parceiros da Sappie"
          >
            {partners.map((partner, index) => (
              <article
                key={partner.name}
                className="group relative animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
                role="listitem"
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/Organization"
              >
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-white flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-2xl group-hover:shadow-primary/20 overflow-hidden">
                  <Image
                    src={partner.logo}
                    alt={`Logo ${partner.name} - Parceiro Sappie`}
                    width={96}
                    height={96}
                    className="w-20 h-20 sm:w-24 sm:h-24 object-contain p-2"
                    loading="lazy"
                    itemProp="logo"
                  />
                </div>
                
                {/* Glow effect on hover */}
                <div 
                  className="absolute inset-0 bg-primary/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" 
                  aria-hidden="true"
                />

                {/* Hidden metadata for SEO */}
                <meta itemProp="name" content={partner.name} />
                <meta itemProp="description" content={partner.description} />
                <meta itemProp="additionalType" content={partner.type} />
                <span className="sr-only">
                  {partner.name} - {partner.description}
                </span>
              </article>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <nav className="text-center mt-16 animate-fade-in" aria-label="Explorar produtos">
          <Link 
            href="/produtos"
            aria-label="Explore nossos flashcards e produtos educacionais"
          >
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 transition-all duration-300 group"
            >
              EXPLORE NOSSOS FLASHCARDS
              <ArrowRight 
                className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" 
                aria-hidden="true"
              />
            </Button>
          </Link>
        </nav>

        {/* Hidden structured data for rich results */}
        <div className="sr-only">
          <div itemScope itemType="https://schema.org/Organization">
            <meta itemProp="name" content="Sappie - Flashcards Inteligentes" />
            <meta itemProp="description" content="Plataforma de flashcards inteligentes com mais de 18 parceiros educacionais" />
            <div itemProp="partner" itemScope itemType="https://schema.org/ItemList">
              <meta itemProp="numberOfItems" content={String(partners.length)} />
              <meta itemProp="itemListOrder" content="Unordered" />
            </div>
            <div itemProp="areaServed" itemScope itemType="https://schema.org/Country">
              <meta itemProp="name" content="Brasil" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
