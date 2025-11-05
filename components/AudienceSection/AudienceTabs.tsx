"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GraduationCap, Users, Briefcase, School, Check } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";

const iconMap = {
  GraduationCap,
  Users,
  Briefcase,
  School,
};

// Updated type to accept readonly arrays
type AudienceData = {
  readonly id: string;
  readonly label: string;
  readonly icon: keyof typeof iconMap;
  readonly title: string;
  readonly description: string;
  readonly benefits: readonly string[];  // Changed from string[] to readonly string[]
  readonly cta: string;
  readonly href: string;
  readonly schema: string;
};

interface AudienceTabsProps {
  audiences: readonly AudienceData[];  // Changed from AudienceData[]
}

export const AudienceTabs = ({ audiences }: AudienceTabsProps) => {
  const [activeTab, setActiveTab] = useState("alunos");

  useEffect(() => {
    const hash = window.location.hash;
    if (hash.startsWith("#solucoes-")) {
      const tab = hash.replace("#solucoes-", "");
      setActiveTab(tab);
    }
  }, []);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith("#solucoes-")) {
        const tab = hash.replace("#solucoes-", "");
        setActiveTab(tab);
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <Tabs 
      value={activeTab} 
      onValueChange={setActiveTab} 
      className="w-full max-w-6xl mx-auto"
      aria-label="Soluções por público"
    >
      <TabsList 
        className="grid grid-cols-2 lg:grid-cols-4 mb-12 h-auto gap-2 bg-card/50 p-2"
        role="tablist"
        aria-label="Escolha seu público"
      >
        {audiences.map((audience) => {
          const Icon = iconMap[audience.icon];
          return (
            <TabsTrigger 
              key={audience.id} 
              value={audience.id}
              className="py-4 data-[state=active]:bg-primary"
              role="tab"
              aria-selected={activeTab === audience.id}
              aria-controls={`panel-${audience.id}`}
              id={`tab-${audience.id}`}
            >
              <Icon className="w-5 h-5 mr-2" aria-hidden="true" />
              <span className="hidden sm:inline">{audience.label}</span>
              <span className="sm:hidden">{audience.label.replace("Para ", "")}</span>
            </TabsTrigger>
          );
        })}
      </TabsList>

      {audiences.map((audience, index) => {
        const Icon = iconMap[audience.icon];
        return (
          <TabsContent 
            key={audience.id} 
            value={audience.id} 
            className="animate-fade-in"
            role="tabpanel"
            id={`panel-${audience.id}`}
            aria-labelledby={`tab-${audience.id}`}
            itemScope
            itemType={`https://schema.org/${audience.schema}`}
            itemProp="itemListElement"
          >
            <meta itemProp="position" content={String(index + 1)} />
            <Card className="p-8 md:p-12 bg-card/50 backdrop-blur-sm border-primary/20">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 
                    className="font-heading text-3xl lg:text-4xl mb-4 primary-text"
                    itemProp="name"
                  >
                    {audience.title}
                  </h3>
                  <p 
                    className="text-lg text-muted-foreground mb-8 leading-relaxed"
                    itemProp="description"
                  >
                    {audience.description}
                  </p>
                  
                  <Link 
                    href={audience.href}
                    aria-label={`Saiba mais sobre soluções ${audience.label.toLowerCase()}`}
                    itemProp="url"
                  >
                    <Button 
                      size="lg"
                      className="bg-primary hover:bg-primary/90 transition-all duration-300"
                    >
                      {audience.cta} →
                    </Button>
                  </Link>
                </div>

                <div 
                  className="space-y-4"
                  role="list"
                  aria-label={`Benefícios ${audience.label.toLowerCase()}`}
                >
                  {audience.benefits.map((benefit, benefitIndex) => (
                    <div 
                      key={benefitIndex} 
                      className="flex items-start gap-3 animate-slide-up"
                      style={{ animationDelay: `${benefitIndex * 0.1}s` }}
                      role="listitem"
                      itemProp="offers"
                      itemScope
                      itemType="https://schema.org/Offer"
                    >
                      <div 
                        className="flex-shrink-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center mt-0.5"
                        aria-hidden="true"
                      >
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <p className="text-foreground" itemProp="description">
                        {benefit}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </TabsContent>
        );
      })}
    </Tabs>
  );
};
