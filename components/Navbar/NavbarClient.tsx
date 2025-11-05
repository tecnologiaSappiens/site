"use client";

import { Button } from "@/components/ui/button";
import { useState, useEffect, useCallback, memo } from "react";
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

interface NavbarClientProps {
  navigationData: {
    menuBeforeSolutions: readonly { label: string; href: string; id: string }[];
    menuAfterSolutions: readonly { label: string; href: string; id: string }[];
    solutions: readonly { label: string; href: string; fullPath: string }[];
    platform: readonly { label: string; href: string; isExternal: boolean }[];
  };
}

export const NavbarClient = memo(({ navigationData }: NavbarClientProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const pathname = usePathname();
  const router = useRouter();
  
  const isSpecificPage = pathname !== "/";

  // Optimized scroll handler with throttling
  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20);

          // Only track active section on homepage
          if (!isSpecificPage) {
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
          }
          
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isSpecificPage]);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const scrollToSection = useCallback((href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsMobileMenuOpen(false);
    }
  }, []);

  const handleNavClick = useCallback((href: string) => {
    if (pathname !== "/") {
      router.push("/" + href);
    } else {
      scrollToSection(href);
    }
  }, [pathname, router, scrollToSection]);

  const handleSolutionClick = useCallback((solution: { href: string; fullPath: string }) => {
    if (pathname !== "/") {
      router.push(solution.fullPath);
    } else {
      window.location.hash = solution.href;
      const sectionElement = document.getElementById("solucoes");
      if (sectionElement) {
        sectionElement.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
    setIsMobileMenuOpen(false);
  }, [pathname, router]);

  const handleLogoClick = useCallback((e: React.MouseEvent) => {
    if (pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [pathname]);

  return (
    <div
      className={`transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link
            href="/"
            onClick={handleLogoClick}
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

          {isSpecificPage ? (
            <div className="hidden md:flex items-center gap-4">
              <Link href="/" aria-label="Voltar para a página inicial">
                <Button variant="outline" className="gap-2">
                  <Home className="w-4 h-4" aria-hidden="true" />
                  Voltar à Home
                </Button>
              </Link>
            </div>
          ) : (
            <DesktopMenu
              navigationData={navigationData}
              activeSection={activeSection}
              handleNavClick={handleNavClick}
              handleSolutionClick={handleSolutionClick}
            />
          )}

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-foreground p-2 hover:bg-accent rounded-md transition-colors"
            aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <MobileMenu
          isSpecificPage={isSpecificPage}
          navigationData={navigationData}
          handleNavClick={handleNavClick}
          handleSolutionClick={handleSolutionClick}
          closeMobileMenu={() => setIsMobileMenuOpen(false)}
        />
      )}
    </div>
  );
});

NavbarClient.displayName = "NavbarClient";

// Memoized Desktop Menu Component
const DesktopMenu = memo(({ 
  navigationData, 
  activeSection, 
  handleNavClick,
  handleSolutionClick 
}: {
  navigationData: NavbarClientProps['navigationData'];
  activeSection: string;
  handleNavClick: (href: string) => void;
  handleSolutionClick: (solution: { href: string; fullPath: string }) => void;
}) => (
  <div className="hidden md:flex items-center gap-8">
    {/* Menu items BEFORE Soluções dropdown */}
    {navigationData.menuBeforeSolutions.map((item) => (
      <Link
        key={item.href}
        href={item.href}
        onClick={(e) => {
          e.preventDefault();
          handleNavClick(item.href);
        }}
        className={`transition-colors font-medium ${
          activeSection === item.id
            ? "text-primary" 
            : "text-foreground/80 hover:text-primary"
        }`}
        aria-current={activeSection === item.id ? "page" : undefined}
      >
        {item.label}
      </Link>
    ))}
    
    {/* Soluções Dropdown */}
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger 
            className={`bg-transparent hover:bg-transparent data-[state=open]:bg-transparent hover:text-primary data-[state=open]:text-primary font-medium h-auto p-0 ${
              activeSection === "solucoes" ? "text-primary" : "text-foreground/80"
            }`}
            aria-label="Menu de soluções"
          >
            Soluções
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[220px] gap-1 p-2 bg-background border border-border shadow-lg">
              {navigationData.solutions.map((solution) => (
                <li key={solution.label}>
                  <NavigationMenuLink asChild>
                    <button
                      onClick={() => handleSolutionClick(solution)}
                      className="w-full block select-none rounded-md p-3 leading-none outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground text-left"
                    >
                      <div className="text-sm font-medium">{solution.label}</div>
                    </button>
                  </NavigationMenuLink>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>

    {/* Menu items AFTER Soluções dropdown */}
    {navigationData.menuAfterSolutions.map((item) => (
      <Link
        key={item.href}
        href={item.href}
        onClick={(e) => {
          e.preventDefault();
          handleNavClick(item.href);
        }}
        className={`transition-colors font-medium ${
          activeSection === item.id
            ? "text-primary" 
            : "text-foreground/80 hover:text-primary"
        }`}
        aria-current={activeSection === item.id ? "page" : undefined}
      >
        {item.label}
      </Link>
    ))}
    
    {/* Plataforma Dropdown - AT THE END */}
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger 
            className="bg-transparent hover:bg-transparent data-[state=open]:bg-transparent hover:text-primary data-[state=open]:text-primary font-medium h-auto p-0 text-foreground/80"
            aria-label="Menu da plataforma"
          >
            Plataforma
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[180px] gap-1 p-2 bg-background border border-border shadow-lg">
              {navigationData.platform.map((platform) => (
                <li key={platform.label}>
                  <NavigationMenuLink asChild>
                    {platform.isExternal ? (
                      <a
                        href={platform.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block select-none rounded-md p-3 leading-none outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium">{platform.label}</div>
                      </a>
                    ) : (
                      <button
                        onClick={() => handleNavClick(platform.href)}
                        className="w-full block select-none rounded-md p-3 leading-none outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground text-left"
                      >
                        <div className="text-sm font-medium">{platform.label}</div>
                      </button>
                    )}
                  </NavigationMenuLink>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  </div>
));

DesktopMenu.displayName = "DesktopMenu";

// Memoized Mobile Menu Component
const MobileMenu = memo(({ 
  isSpecificPage,
  navigationData,
  handleNavClick,
  handleSolutionClick,
  closeMobileMenu
}: {
  isSpecificPage: boolean;
  navigationData: NavbarClientProps['navigationData'];
  handleNavClick: (href: string) => void;
  handleSolutionClick: (solution: { href: string; fullPath: string }) => void;
  closeMobileMenu: () => void;
}) => {
  // Combine both menu arrays for mobile
  const allMenuItems = [...navigationData.menuBeforeSolutions, ...navigationData.menuAfterSolutions];
  
  return (
    <div 
      id="mobile-menu"
      className="md:hidden bg-background/98 backdrop-blur-md border-t border-border"
      role="dialog"
      aria-label="Menu de navegação mobile"
    >
      <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
        {isSpecificPage ? (
          <Link 
            href="/" 
            onClick={closeMobileMenu}
            aria-label="Voltar para a página inicial"
          >
            <Button variant="outline" className="w-full gap-2">
              <Home className="w-4 h-4" aria-hidden="true" />
              Voltar à Home
            </Button>
          </Link>
        ) : (
          <>
            {allMenuItems.map((item) => (
              <button
                key={item.href}
                onClick={() => {
                  handleNavClick(item.href);
                  closeMobileMenu();
                }}
                className="text-foreground/80 hover:text-primary transition-colors font-medium text-left py-2"
              >
                {item.label}
              </button>
            ))}
            
            <div className="border-t border-border pt-4">
              <h3 className="text-foreground/60 text-sm font-semibold mb-2 px-2">
                Plataforma
              </h3>
              {navigationData.platform.map((platform) => (
                <div key={platform.label}>
                  {platform.isExternal ? (
                    <a
                      href={platform.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={closeMobileMenu}
                      className="block text-foreground/80 hover:text-primary transition-colors font-medium text-left py-2 px-4"
                    >
                      {platform.label}
                    </a>
                  ) : (
                    <button
                      onClick={() => {
                        handleNavClick(platform.href);
                        closeMobileMenu();
                      }}
                      className="w-full block text-foreground/80 hover:text-primary transition-colors font-medium text-left py-2 px-4"
                    >
                      {platform.label}
                    </button>
                  )}
                </div>
              ))}
            </div>
            
            <div className="border-t border-border pt-4">
              <h3 className="text-foreground/60 text-sm font-semibold mb-2 px-2">
                Soluções
              </h3>
              {navigationData.solutions.map((solution) => (
                <button
                  key={solution.label}
                  onClick={() => handleSolutionClick(solution)}
                  className="w-full block text-foreground/80 hover:text-primary transition-colors font-medium text-left py-2 px-4"
                >
                  {solution.label}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
});

MobileMenu.displayName = "MobileMenu";
