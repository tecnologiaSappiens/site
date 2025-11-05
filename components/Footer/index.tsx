import { Instagram, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FooterContact } from "./FooterContact";
import sappieLogo from "@/assets/sappie-logo.svg";

// Static footer data
const footerLinks = {
  soluções: [
    { label: "Para Alunos", href: "/alunos", description: "Estude com flashcards inteligentes" },
    { label: "Para Criadores", href: "/criadores", description: "Monetize seu conhecimento" },
    { label: "Para Empresas", href: "/empresas", description: "Treinamento corporativo eficiente" },
    { label: "Para Instituições", href: "/ensino", description: "Apoio acadêmico inovador" },
  ],
  produto: [
    { label: "Ciência", href: "/#ciencia", description: "Base científica do método" },
    { label: "Aplicativo", href: "/#app", description: "Conheça nossa plataforma" },
    { label: "Parceiros", href: "/#parceiros", description: "Quem confia na Sappie" },
    { label: "Depoimentos", href: "/#depoimentos", description: "Experiências reais" },
  ],
  recursos: [
    { label: "Perguntas Frequentes", href: "/#faq", description: "Tire suas dúvidas" },
    { label: "Fale Conosco", href: "#contact", description: "Entre em contato", isContact: true },
  ],
  legal: [
    { label: "Termos de Uso", href: "/termos-de-uso", description: "Condições de uso da plataforma" },
    { label: "Política de Privacidade", href: "/politica-de-privacidade", description: "Como protegemos seus dados" },
    { label: "LGPD", href: "/lgpd", description: "Conformidade com proteção de dados" },
  ],
} as const;

const socialLinks = [
  { 
    icon: Instagram, 
    href: "https://www.instagram.com/sappie.app/", 
    label: "Instagram da Sappie",
    platform: "Instagram"
  },
  { 
    icon: Linkedin, 
    href: "https://www.linkedin.com/company/sappie4all", 
    label: "LinkedIn da Sappie",
    platform: "LinkedIn"
  },
] as const;

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer 
      className="bg-card/50 border-t border-border"
      role="contentinfo"
      aria-label="Rodapé do site"
      itemScope
      itemType="https://schema.org/WPFooter"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12 mb-12">
          {/* Logo and Description */}
          <div 
            className="col-span-1 md:col-span-2 lg:col-span-2"
            itemScope
            itemType="https://schema.org/Organization"
          >
            <Link href="/" aria-label="Voltar para página inicial">
              <Image 
                src={sappieLogo} 
                alt="Sappie - Flashcards Inteligentes" 
                className="h-8 w-auto mb-4" 
                priority
                itemProp="logo"
              />
            </Link>
            
            <p 
              className="text-muted-foreground mb-6 leading-relaxed text-sm max-w-xs"
              itemProp="description"
            >
              Flashcards inteligentes para aprendizado exponencial e monetização do conhecimento.
            </p>
            
            {/* Social Links */}
            <nav 
              className="flex gap-3"
              aria-label="Redes sociais"
              itemProp="sameAs"
            >
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a 
                    key={social.platform}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-9 h-9 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors"
                    itemProp="url"
                  >
                    <Icon className="w-4 h-4 text-primary" aria-hidden="true" />
                  </a>
                );
              })}
            </nav>

            {/* Hidden Organization Schema */}
            <div className="sr-only">
              <meta itemProp="name" content="Sappie" />
              <meta itemProp="url" content="https://sappie.com.br" />
              <meta itemProp="email" content="contato@sappie.com.br" />
              <meta itemProp="telephone" content="+55-11-XXXX-XXXX" />
              <div itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                <meta itemProp="addressCountry" content="BR" />
                <meta itemProp="addressLocality" content="São Paulo" />
              </div>
            </div>
          </div>

          {/* Link Sections */}
          {Object.entries(footerLinks).map(([category, items]) => (
            <nav 
              key={category} 
              className="col-span-1"
              aria-labelledby={`footer-${category}`}
              itemScope
              itemType="https://schema.org/SiteNavigationElement"
            >
              <h4 
                id={`footer-${category}`}
                className="font-semibold text-foreground mb-4 capitalize"
                itemProp="name"
              >
                {category}
              </h4>
              <ul className="space-y-2.5" role="list">
                {items.map((link) => (
                  <li key={link.label}>
                    {link.isContact ? (
                      <FooterContact label={link.label} />
                    ) : (
                      <Link
                        href={link.href}
                        className="text-muted-foreground hover:text-primary transition-colors text-sm block"
                        title={link.description}
                        itemProp="url"
                      >
                        <span itemProp="name">{link.label}</span>
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* Copyright */}
        <div className="text-center pt-12 border-t border-border">
          <p className="text-sm text-muted-foreground mb-2">
            Feito por quem 💜 flashcards
          </p>
          <p className="text-sm text-muted-foreground">
            © {currentYear} Sappie. Todos os direitos reservados.
          </p>
        </div>
      </div>

      {/* Rich Structured Data for Search Engines */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Sappie",
            "url": "https://sappie.com.br",
            "logo": "https://sappie.com.br/logo.png",
            "description": "Plataforma de flashcards inteligentes com repetição espaçada para aprendizado eficiente e monetização de conhecimento",
            "foundingDate": "2020",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+55-11-XXXX-XXXX",
              "contactType": "customer service",
              "email": "contato@sappie.com.br",
              "areaServed": "BR",
              "availableLanguage": "Portuguese"
            },
            "sameAs": [
              "https://www.instagram.com/sappie.app/",
              "https://www.linkedin.com/company/sappie4all"
            ],
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "BR",
              "addressLocality": "São Paulo"
            },
            "founder": {
              "@type": "Organization",
              "name": "Sappie"
            }
          })
        }}
      />
    </footer>
  );
};
