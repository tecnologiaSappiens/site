import { Instagram, Linkedin } from "lucide-react";
import { useState } from "react";
import { ContactModal } from "@/components/ContactModal";
import sappieLogo from "@/assets/sappie-logo.svg";

export const Footer = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const links = {
    soluções: [
      { label: "Para Alunos", href: "/alunos" },
      { label: "Para Criadores", href: "/criadores" },
      { label: "Para Empresas", href: "/empresas" },
      { label: "Para Instituições", href: "/ensino" },
    ],
    produto: [
      { label: "Ciência", href: "/#ciencia" },
      { label: "Aplicativo", href: "/#app" },
      { label: "Parceiros", href: "/#parceiros" },
      { label: "Depoimentos", href: "/#depoimentos" },
    ],
    recursos: [
      { label: "Perguntas Frequentes", href: "/#faq" },
      { label: "Fale Conosco", href: "#", onClick: () => setIsContactModalOpen(true) },
    ],
    legal: [
      { label: "Termos de Uso", href: "#" },
      { label: "Política de Privacidade", href: "#" },
      { label: "LGPD", href: "#" },
    ],
  };

  const socialLinks = [
    { icon: Instagram, href: "https://www.instagram.com/sappie.app/", label: "Instagram" },
    { icon: Linkedin, href: "https://www.linkedin.com/company/sappie4all", label: "LinkedIn" },
  ];

  return (
    <footer className="bg-card/50 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12 mb-12">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2 lg:col-span-2">
            <img src={sappieLogo} alt="Sappie" className="h-8 w-auto mb-4" />
            <p className="text-muted-foreground mb-6 leading-relaxed text-sm max-w-xs">
              Flashcards inteligentes para aprendizado exponencial e monetização do conhecimento.
            </p>
            
            <div className="flex gap-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-9 h-9 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors"
                  >
                    <Icon className="w-4 h-4 text-primary" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([category, items]) => (
            <div key={category} className="col-span-1">
              <h4 className="font-semibold text-foreground mb-4 capitalize">{category}</h4>
              <ul className="space-y-2.5">
                {items.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href}
                      onClick={(e) => {
                        if (link.onClick) {
                          e.preventDefault();
                          link.onClick();
                        }
                      }}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm block cursor-pointer"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Copyright */}
        <div className="text-center pt-12 border-t border-border">
          <p className="text-sm text-muted-foreground mb-2">
            Feito por quem 💜 flashcards
          </p>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Sappie. Todos os direitos reservados.
          </p>
        </div>
      </div>

      <ContactModal open={isContactModalOpen} onOpenChange={setIsContactModalOpen} />
    </footer>
  );
};
