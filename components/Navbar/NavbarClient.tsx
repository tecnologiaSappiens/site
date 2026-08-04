"use client";

import { Button } from "@/components/ui/button";
import { useState, useEffect, memo } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
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

const WHATSAPP_URL = "https://wa.me/5511935031749?text=Quero%20conhecer%20a%20Sappie";

interface NavbarClientProps {
  navigationData: {
    mainLinks: readonly { label: string; href: string }[];
    plataforma: readonly { label: string; href: string; description: string }[];
    afterPlataforma: readonly { label: string; href: string }[];
    paraVoce: readonly { label: string; href: string; isExternal: boolean }[];
  };
}

export const NavbarClient = memo(({ navigationData }: NavbarClientProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) => {
    const route = href.split("#")[0] || "/";
    return route === "/" ? pathname === "/" : pathname.startsWith(route);
  };

  return (
    <div
      className={`transition-all duration-300 ${
        isScrolled || isMobileMenuOpen
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link
            href="/"
            className="hover:opacity-80 transition-opacity shrink-0"
            aria-label="Sappie - Página inicial"
          >
            <Image src={sappieLogo} alt="Sappie Logo" className="h-8 md:h-10 w-auto" priority />
          </Link>

          <DesktopMenu navigationData={navigationData} isActive={isActive} />

          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <Button variant="ghost" size="icon" asChild>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Falar com a Sappie pelo WhatsApp"
              >
                <MessageCircle className="w-5 h-5" aria-hidden="true" />
              </a>
            </Button>
            <Button asChild>
              <Link href="/demo">Agendar demonstração</Link>
            </Button>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-foreground p-2 hover:bg-accent rounded-md transition-colors"
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
          navigationData={navigationData}
          isActive={isActive}
          closeMobileMenu={() => setIsMobileMenuOpen(false)}
        />
      )}
    </div>
  );
});

NavbarClient.displayName = "NavbarClient";

// Memoized Desktop Menu Component
const DesktopMenu = memo(
  ({
    navigationData,
    isActive,
  }: {
    navigationData: NavbarClientProps["navigationData"];
    isActive: (href: string) => boolean;
  }) => (
    <div className="hidden lg:flex items-center gap-7">
      {navigationData.mainLinks.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={`transition-colors font-medium ${
            isActive(item.href) ? "text-primary" : "text-foreground/80 hover:text-primary"
          }`}
          aria-current={isActive(item.href) ? "page" : undefined}
        >
          {item.label}
        </Link>
      ))}

      {/* Plataforma Dropdown */}
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger
              className={`bg-transparent hover:bg-transparent data-[state=open]:bg-transparent hover:text-primary data-[state=open]:text-primary font-medium h-auto p-0 ${
                isActive("/plataforma") ? "text-primary" : "text-foreground/80"
              }`}
              aria-label="Menu da plataforma"
            >
              Plataforma
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[280px] gap-1 p-2 bg-background border border-border shadow-lg">
                {navigationData.plataforma.map((item) => (
                  <li key={item.href}>
                    <NavigationMenuLink asChild>
                      <Link
                        href={item.href}
                        className="block select-none rounded-md p-3 leading-none outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium mb-1">{item.label}</div>
                        <p className="text-xs text-muted-foreground leading-snug">{item.description}</p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      {navigationData.afterPlataforma.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={`transition-colors font-medium ${
            isActive(item.href) ? "text-primary" : "text-foreground/80 hover:text-primary"
          }`}
          aria-current={isActive(item.href) ? "page" : undefined}
        >
          {item.label}
        </Link>
      ))}

      {/* Para você Dropdown */}
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger
              className="bg-transparent hover:bg-transparent data-[state=open]:bg-transparent hover:text-primary data-[state=open]:text-primary font-medium h-auto p-0 text-foreground/80"
              aria-label="Menu para alunos e criadores"
            >
              Para você
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[220px] gap-1 p-2 bg-background border border-border shadow-lg">
                {navigationData.paraVoce.map((item) => (
                  <li key={item.label}>
                    <NavigationMenuLink asChild>
                      {item.isExternal ? (
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block select-none rounded-md p-3 leading-none outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium">{item.label}</div>
                        </a>
                      ) : (
                        <Link
                          href={item.href}
                          className="block select-none rounded-md p-3 leading-none outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium">{item.label}</div>
                        </Link>
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
  )
);

DesktopMenu.displayName = "DesktopMenu";

// Memoized Mobile Menu Component
const MobileMenu = memo(
  ({
    navigationData,
    isActive,
    closeMobileMenu,
  }: {
    navigationData: NavbarClientProps["navigationData"];
    isActive: (href: string) => boolean;
    closeMobileMenu: () => void;
  }) => {
    return (
      <div
        id="mobile-menu"
        className="lg:hidden bg-background/98 backdrop-blur-md border-t border-border max-h-[calc(100vh-4rem)] overflow-y-auto"
        role="dialog"
        aria-label="Menu de navegação mobile"
      >
        <div className="container mx-auto px-4 py-6 flex flex-col gap-1">
          {navigationData.mainLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={closeMobileMenu}
              className={`transition-colors font-medium py-2.5 ${
                isActive(item.href) ? "text-primary" : "text-foreground/80 hover:text-primary"
              }`}
            >
              {item.label}
            </Link>
          ))}

          <div className="border-t border-border mt-3 pt-4">
            <h3 className="text-foreground/60 text-sm font-semibold mb-2">Plataforma</h3>
            {navigationData.plataforma.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMobileMenu}
                className="block text-foreground/80 hover:text-primary transition-colors font-medium py-2 px-3"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {navigationData.afterPlataforma.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={closeMobileMenu}
              className={`transition-colors font-medium py-2.5 ${
                isActive(item.href) ? "text-primary" : "text-foreground/80 hover:text-primary"
              }`}
            >
              {item.label}
            </Link>
          ))}

          <div className="border-t border-border mt-3 pt-4">
            <h3 className="text-foreground/60 text-sm font-semibold mb-2">Para você</h3>
            {navigationData.paraVoce.map((item) =>
              item.isExternal ? (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMobileMenu}
                  className="block text-foreground/80 hover:text-primary transition-colors font-medium py-2 px-3"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={closeMobileMenu}
                  className="block text-foreground/80 hover:text-primary transition-colors font-medium py-2 px-3"
                >
                  {item.label}
                </Link>
              )
            )}
          </div>

          <div className="border-t border-border mt-3 pt-5 flex flex-col gap-3">
            <Button asChild className="w-full">
              <Link href="/demo" onClick={closeMobileMenu}>
                Agendar demonstração
              </Link>
            </Button>
            <Button variant="outline" asChild className="w-full">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-4 h-4 mr-2" aria-hidden="true" />
                Falar no WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>
    );
  }
);

MobileMenu.displayName = "MobileMenu";
