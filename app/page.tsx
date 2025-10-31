"use client"

import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { ScienceSection } from "@/components/ScienceSection";
import { AppShowcaseSection } from "@/components/AppShowcaseSection";
import { AudienceSection } from "@/components/AudienceSection";
//import { PartnersSection } from "@/components/PartnersSection";
//import { TestimonialsSection } from "@/components/TestimonialsSection";
//import { FAQSection } from "@/components/FAQSection";
//import { FinalCTASection } from "@/components/FinalCTASection";
//import { Footer } from "@/components/Footer";
//import { BackToTop } from "@/components/BackToTop";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ScienceSection />
      <AppShowcaseSection />
      <AudienceSection />
      {/*<PartnersSection />
      <TestimonialsSection />
      <FAQSection />
      <FinalCTASection />
      <Footer />
      <BackToTop />*/}
    </div>
  );
}
