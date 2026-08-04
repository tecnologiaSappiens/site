import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { PartnersSection } from "@/components/PartnersSection";
import { StatsSection } from "@/components/StatsSection";
import { AudienceSection } from "@/components/AudienceSection";
import { AppShowcaseSection } from "@/components/AppShowcaseSection";
import { ScienceSection } from "@/components/ScienceSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { FAQSection } from "@/components/FAQSection";
import { FinalCTASection } from "@/components/FinalCTASection";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <PartnersSection />
      <StatsSection />
      <AudienceSection />
      <AppShowcaseSection />
      <ScienceSection />
      <TestimonialsSection />
      <FAQSection />
      <FinalCTASection />
      <Footer />
      <BackToTop />
    </div>
  );
}
