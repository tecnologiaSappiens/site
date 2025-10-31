"use client";

import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Menu, X, Home } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import sappieLogo from "@/assets/sappie-logo.svg";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const pathname = usePathname();
  const router = useRouter();
  
  // Detectar se estamos em uma página específica (não home)
  const isSpecificPage = pathname !== "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Detect active section
      const sections = ["hero", "ciencia", "app", "solucoes", "parceiros", "depoimentos", "cta"];
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Início", href: "#hero", isLink: false },
    { label: "Ciência", href: "#ciencia", isLink: false },
    { label: "Aplicativo", href: "#app", isLink: false },
    { label: "Parceiros", href: "#parceiros", isLink: false },
    { label: "Depoimentos", href: "#depoimentos", isLink: false },
    { label: "Contato", href: "#cta", isLink: false },
  ];

  const solutionsItems = [
    { label: "Para Alunos", href: "/#solucoes-alunos", section: "solucoes", tab: "alunos" },
    { label: "Para Criadores", href: "/#solucoes-criadores", section: "solucoes", tab: "criadores" },
    { label: "Para Empresas", href: "/#solucoes-empresas", section: "solucoes", tab: "empresas" },
    { label: "Para Instituições de Ensino", href: "/#solucoes-instituicoes", section: "solucoes", tab: "instituicoes" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsMobileMenuOpen(false);
    }
  };

  const handleNavClick = (item: { href: string; isLink: boolean }) => {
    // Se estamos em uma página que não é a home, navegar para a home com a hash
    if (pathname !== "/" && !item.isLink) {
      router.push("/" + item.href);
    } else if (item.isLink) {
      router.push(item.href);
    } else {
      scrollToSection(item.href);
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/95 backdrop-blur-md border-b border-border shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link
              href="/"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="hover:opacity-80 transition-opacity"
            >
              <Image 
                src={sappieLogo} 
                alt="Sappie" 
                className="h-8 md:h-10 w-auto" 
                priority
              />
            </Link>

            {/* Desktop Menu - Simplificado para páginas específicas */}
            {isSpecificPage ? (
              <div className="hidden md:flex items-center gap-4">
                <Link href="/">
                  <Button variant="outline" className="gap-2">
                    <Home className="w-4 h-4" />
                    Voltar à Home
                  </Button>
                </Link>
              </div>
            ) : (
              <div className="hidden md:flex items-center gap-8">
              <Link
                href="#hero"
                className={`transition-colors font-medium ${
                  activeSection === "hero" 
                    ? "text-primary" 
                    : "text-foreground/80 hover:text-primary"
                }`}
              >
                Início
              </Link>
              <Link
                href="#ciencia"
                className={`transition-colors font-medium ${
                  activeSection === "ciencia" 
                    ? "text-primary" 
                    : "text-foreground/80 hover:text-primary"
                }`}
              >
                Ciência
              </Link>
              <Link
                href="#app"
                className={`transition-colors font-medium ${
                  activeSection === "app" 
                    ? "text-primary" 
                    : "text-foreground/80 hover:text-primary"
                }`}
              >
                Aplicativo
              </Link>
              
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className={`bg-transparent hover:bg-transparent data-[state=open]:bg-transparent hover:text-primary data-[state=open]:text-primary font-medium h-auto p-0 ${
                      activeSection === "solucoes" ? "text-primary" : "text-foreground/80"
                    }`}>
                      Soluções
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[200px] gap-1 p-2 bg-background border border-border shadow-lg">
                        {solutionsItems.map((solution) => (
                          <li key={solution.label}>
                            <NavigationMenuLink asChild>
                              <Link
                                href={solution.href}
                                onClick={() => {
                                  if (solution.section) {
                                    setTimeout(() => scrollToSection(`#${solution.section}`), 100);
                                  }
                                }}
                                className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                              >
                                <div className="text-sm font-medium">{solution.label}</div>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
              
              <button
                onClick={() => handleNavClick({ href: "#parceiros", isLink: false })}
                className={`transition-colors font-medium ${
                  activeSection === "parceiros" 
                    ? "text-primary" 
                    : "text-foreground/80 hover:text-primary"
                }`}
              >
                Parceiros
              </button>
              <button
                onClick={() => handleNavClick({ href: "#depoimentos", isLink: false })}
                className={`transition-colors font-medium ${
                  activeSection === "depoimentos" 
                    ? "text-primary" 
                    : "text-foreground/80 hover:text-primary"
                }`}
              >
                Depoimentos
              </button>
              <button
                onClick={() => handleNavClick({ href: "#cta", isLink: false })}
                className={`transition-colors font-medium ${
                  activeSection === "cta" 
                    ? "text-primary" 
                    : "text-foreground/80 hover:text-primary"
                }`}
              >
                Contato
              </button>
              
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-transparent hover:bg-transparent data-[state=open]:bg-transparent hover:text-primary data-[state=open]:text-primary font-medium h-auto p-0 text-foreground/80">
                      Plataforma
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[200px] gap-1 p-2 bg-background border border-border shadow-lg">
                        <li>
                          <NavigationMenuLink asChild>
                            <button
                              onClick={() => handleNavClick({ href: "#app", isLink: false })}
                              className="w-full block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground text-left"
                            >
                              <div className="text-sm font-medium">Aluno</div>
                            </button>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <a
                              href="https://creator.sappie.com.br/"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="text-sm font-medium">Criador</div>
                            </a>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <a
                              href="https://creator.sappie.com.br/"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="text-sm font-medium">Empresa</div>
                            </a>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <a
                              href="https://creator.sappie.com.br/"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="text-sm font-medium">Instituição</div>
                            </a>
                          </NavigationMenuLink>
                        </li>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>
            )}

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-foreground p-2"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-background/98 backdrop-blur-md border-t border-border">
            <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {isSpecificPage ? (
                <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button variant="outline" className="w-full gap-2">
                    <Home className="w-4 h-4" />
                    Voltar à Home
                  </Button>
                </Link>
              ) : (
                <>
                  {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => handleNavClick(item)}
                  className="text-foreground/80 hover:text-primary transition-colors font-medium text-left py-2"
                >
                  {item.label}
                </Link>
              ))}
              
              <div className="border-t border-border pt-4">
                <div className="text-foreground/60 text-sm font-semibold mb-2 px-2">Plataforma</div>
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    handleNavClick({ href: "#app", isLink: false });
                  }}
                  className="w-full block text-foreground/80 hover:text-primary transition-colors font-medium text-left py-2 px-4"
                >
                  Aluno
                </button>
                <a
                  href="https://creator.sappie.com.br/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-foreground/80 hover:text-primary transition-colors font-medium text-left py-2 px-4"
                >
                  Criador
                </a>
                <a
                  href="https://creator.sappie.com.br/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-foreground/80 hover:text-primary transition-colors font-medium text-left py-2 px-4"
                >
                  Empresa
                </a>
                <a
                  href="https://creator.sappie.com.br/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-foreground/80 hover:text-primary transition-colors font-medium text-left py-2 px-4"
                >
                  Instituição
                </a>
              </div>
              
              <div className="border-t border-border pt-4">
                <div className="text-foreground/60 text-sm font-semibold mb-2 px-2">Soluções</div>
                {solutionsItems.map((solution) => (
                  <Link
                    key={solution.label}
                    href={solution.href}
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      if (solution.section) {
                        setTimeout(() => scrollToSection(`#${solution.section}`), 100);
                      }
                    }}
                    className="block text-foreground/80 hover:text-primary transition-colors font-medium text-left py-2 px-4"
                  >
                    {solution.label}
                  </Link>
                ))}
              </div>
              </>
              )}
            </div>
          </div>
        )}
      </nav>

      {/* Spacer to prevent content from going under fixed navbar */}
      <div className="h-16 md:h-20" />
    </>
  );
};
