import { NavbarClient } from "./NavbarClient";
import Image from "next/image";
import Link from "next/link";
import sappieLogo from "@/assets/sappie-logo.svg";

// Navigation data (static, SEO-friendly)
export const navigationData = {
  mainLinks: [
    { label: "Empresas", href: "/empresas" },
    { label: "Instituições de Ensino", href: "/ensino" },
  ],
  plataforma: [
    { label: "Visão geral", href: "/plataforma", description: "Conheça a plataforma Sappie" },
    { label: "App do Aluno", href: "/plataforma#app", description: "Microlearning gamificado no celular" },
    { label: "Estúdio de Conteúdo", href: "/plataforma#criador", description: "Transforme materiais em flashcards" },
    { label: "Gamificação", href: "/plataforma#gamificacao", description: "Engajamento com rankings e conquistas" },
    { label: "Acompanhamento", href: "/plataforma#analytics", description: "Dados de progresso e retenção" },
  ],
  afterPlataforma: [{ label: "Ciência", href: "/ciencia" }],
  paraVoce: [
    { label: "Para Alunos", href: "/alunos", isExternal: false },
    { label: "Para Criadores", href: "/criadores", isExternal: false },
    { label: "Loja de Flashcards", href: "/produtos", isExternal: false },
    { label: "Acessar a plataforma", href: "https://creator.sappie.com.br/", isExternal: true },
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
                  alt="Sappie - Plataforma de Microlearning Gamificado"
                  className="h-8 md:h-10 w-auto"
                  priority
                />
              </Link>

              <div className="hidden md:flex items-center gap-8">
                {[
                  ...navigationData.mainLinks,
                  { label: "Plataforma", href: "/plataforma" },
                  ...navigationData.afterPlataforma,
                  { label: "Agendar demonstração", href: "/demo" },
                ].map((item) => (
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
          {[...navigationData.mainLinks, ...navigationData.afterPlataforma].map((item) => (
            <li key={item.href}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
          <li>
            <span>Plataforma:</span>
            <ul>
              {navigationData.plataforma.map((item) => (
                <li key={item.href}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </li>
          <li>
            <span>Para você:</span>
            <ul>
              {navigationData.paraVoce.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    {...(item.isExternal && {
                      target: "_blank",
                      rel: "noopener noreferrer",
                    })}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </li>
          <li>
            <a href="/demo">Agendar demonstração</a>
          </li>
        </ul>
      </div>

      <div className="h-16 md:h-20" aria-hidden="true" />
    </>
  );
};
