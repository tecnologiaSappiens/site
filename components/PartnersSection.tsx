import { Section } from "@/components/shared/Section";
import { LogoBar } from "@/components/shared/LogoBar";

// Partner logos imports
import hospitalClinicas from "@/assets/partners/hospital-das-clinicas-fmusp.png";
import inovaHc from "@/assets/partners/inova-hc.png";
import ocaEnergia from "@/assets/partners/oca-energia.png";
import moso from "@/assets/partners/moso.png";
import ablao from "@/assets/partners/ablao.png";
import easycards from "@/assets/partners/easycards-new.png";
import oportuniza from "@/assets/partners/oportuniza.png";
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

// Institutional and corporate partners first — they anchor B2B credibility
const partners = [
  { name: "Hospital das Clínicas FMUSP", logo: hospitalClinicas },
  { name: "Inova HC", logo: inovaHc },
  { name: "OCA Energia", logo: ocaEnergia },
  { name: "MOSO", logo: moso },
  { name: "ABLAO", logo: ablao },
  { name: "EasyCards", logo: easycards },
  { name: "OportuniZA", logo: oportuniza },
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
] as const;

export const PartnersSection = () => {
  return (
    <Section id="parceiros" className="py-14 bg-gradient-to-b from-background to-muted/30">
      <LogoBar logos={partners} title="Quem confia na Sappie" />
    </Section>
  );
};
