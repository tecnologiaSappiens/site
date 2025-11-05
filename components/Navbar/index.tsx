import { NavbarClient } from "./NavbarClient";
import Image from "next/image";
import Link from "next/link";
import sappieLogo from "@/assets/sappie-logo.svg";

// Navigation data (static, SEO-friendly)
export const navigationData = {
  // Split menu items for correct positioning of dropdowns
  menuBeforeSolutions: [
    { label: "Início", href: "#hero", id: "hero" },
    { label: "Ciência", href: "#ciencia", id: "ciencia" },
    { label: "Aplicativo", href: "#app", id: "app" },
  ],
  menuAfterSolutions: [
    { label: "Parceiros", href: "#parceiros", id: "parceiros" },
    { label: "Depoimentos", href: "#depoimentos", id: "depoimentos" },
    { label: "Contato", href: "#cta", id: "cta" },
  ],
  solutions: [
    { label: "Para Alunos", href: "#solucoes-alunos", fullPath: "/#solucoes-alunos" },
    { label: "Para Criadores", href: "#solucoes-criadores", fullPath: "/#solucoes-criadores" },
    { label: "Para Empresas", href: "#solucoes-empresas", fullPath: "/#solucoes-empresas" },
    { label: "Para Instituições de Ensino", href: "#solucoes-instituicoes", fullPath: "/#solucoes-instituicoes" },
  ],
  platform: [
    { label: "Aluno", href: "#app", isExternal: false },
    { label: "Criador", href: "https://creator.sappie.com.br/", isExternal: true },
    { label: "Empresa", href: "https://creator.sappie.com.br/", isExternal: true },
    { label: "Instituição", href: "https://creator.sappie.com.br/", isExternal: true },
  ],
} as const;

export const Navbar = () => {
  return (
    <>
      {/* Server-rendered navigation for SEO */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 bg-transparent"
        role="navigation"
        aria-label="Navegação principal"
        itemScope
        itemType="https://schema.org/SiteNavigationElement"
      >
        <noscript>
          {/* Fallback for SEO/no-JS */}
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16 md:h-20">
              <Link
                href="/"
                className="hover:opacity-80 transition-opacity"
                aria-label="Sappie - Página inicial"
                itemProp="url"
              >
                <Image 
                  src={sappieLogo} 
                  alt="Sappie - Plataforma de Flashcards Inteligentes" 
                  className="h-8 md:h-10 w-auto" 
                  priority
                />
              </Link>
              
              <div className="hidden md:flex items-center gap-8">
                {[...navigationData.menuBeforeSolutions, ...navigationData.menuAfterSolutions].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-foreground/80 hover:text-primary transition-colors font-medium"
                    itemProp="url"
                  >
                    <span itemProp="name">{item.label}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </noscript>
        
        {/* Client-side interactive navbar */}
        <NavbarClient navigationData={navigationData} />
      </nav>

      {/* SEO-friendly hidden navigation for crawlers */}
      <div className="sr-only" aria-hidden="true">
        <h2>Navegação do site</h2>
        <ul>
          {[...navigationData.menuBeforeSolutions, ...navigationData.menuAfterSolutions].map((item) => (
            <li key={item.href}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
          <li>
            <span>Soluções:</span>
            <ul>
              {navigationData.solutions.map((solution) => (
                <li key={solution.href}>
                  <a href={solution.fullPath}>{solution.label}</a>
                </li>
              ))}
            </ul>
          </li>
          <li>
            <span>Plataforma:</span>
            <ul>
              {navigationData.platform.map((platform) => (
                <li key={platform.label}>
                  <a 
                    href={platform.href}
                    {...(platform.isExternal && { 
                      target: "_blank", 
                      rel: "noopener noreferrer" 
                    })}
                  >
                    {platform.label}
                  </a>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </div>
      
      <div className="h-16 md:h-20" aria-hidden="true" />
    </>
  );
};
