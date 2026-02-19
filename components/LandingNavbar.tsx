import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import sappieLogo from "@/assets/sappie-logo.svg";

const WHATSAPP_URL =
  "https://wa.me/5511933919447?text=Quero%20conhecer%20a%20solu%C3%A7%C3%A3o%20da%20Sappie%20para%20equipes%20de%20vendas";

export const LandingNavbar = () => (
  <>
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border"
      role="navigation"
      aria-label="Navegação principal"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link
            href="/"
            className="hover:opacity-80 transition-opacity"
            aria-label="Sappie - Página inicial"
          >
            <Image
              src={sappieLogo}
              alt="Sappie Logo"
              className="h-8 md:h-10 w-auto"
              priority
            />
          </Link>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90"
            asChild
          >
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              <span className="hidden sm:inline">Fale Conosco</span>
              <span className="sm:hidden">Contato</span>
            </a>
          </Button>
        </div>
      </div>
    </nav>
    <div className="h-16 md:h-20" aria-hidden="true" />
  </>
);
