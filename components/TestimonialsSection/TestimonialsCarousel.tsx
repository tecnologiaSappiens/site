"use client";

import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  date: string;
  verified: boolean;
}

interface TestimonialsCarouselProps {
  testimonials: readonly Testimonial[];
}

export const TestimonialsCarousel = ({ testimonials }: TestimonialsCarouselProps) => {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full max-w-6xl mx-auto"
      aria-label="Carrossel de depoimentos de usuários"
    >
      <CarouselContent className="-ml-2 md:-ml-4">
        {testimonials.map((testimonial, index) => (
          <CarouselItem 
            key={testimonial.id} 
            className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3"
          >
            <article
              className="h-full"
              itemScope
              itemType="https://schema.org/Review"
              aria-label={`Depoimento de ${testimonial.name.split(' ')[0]}`}
            >
              <Card 
                className="p-8 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105 h-full flex flex-col"
              >
                {/* Rating */}
                <div 
                  className="flex mb-4"
                  role="img"
                  aria-label={`Avaliação: ${testimonial.rating} de 5 estrelas`}
                  itemProp="reviewRating"
                  itemScope
                  itemType="https://schema.org/Rating"
                >
                  <meta itemProp="ratingValue" content={String(testimonial.rating)} />
                  <meta itemProp="bestRating" content="5" />
                  <meta itemProp="worstRating" content="1" />
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-5 h-5 ${
                        i < testimonial.rating 
                          ? "fill-primary text-primary" 
                          : "fill-muted text-muted"
                      }`}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                
                {/* Content */}
                <blockquote className="text-foreground mb-6 leading-relaxed italic flex-grow">
                  <p itemProp="reviewBody">
                    "{testimonial.content}"
                  </p>
                </blockquote>
                
                {/* Author */}
                <footer 
                  className="border-t border-border pt-4"
                  itemProp="author"
                  itemScope
                  itemType="https://schema.org/Person"
                >
                  <p className="font-semibold text-foreground" itemProp="name">
                    {testimonial.name.split(' ')[0]}
                    {testimonial.verified && (
                      <span 
                        className="ml-2 text-xs text-primary"
                        aria-label="Usuário verificado"
                        title="Usuário verificado"
                      >
                        ✓
                      </span>
                    )}
                  </p>
                  <p className="text-sm text-muted-foreground" itemProp="jobTitle">
                    {testimonial.role}
                  </p>
                  <meta itemProp="datePublished" content={testimonial.date} />
                </footer>
              </Card>
            </article>
          </CarouselItem>
        ))}
      </CarouselContent>
      
      <CarouselPrevious 
        className="hidden md:flex bg-primary text-primary-foreground hover:bg-primary/90 border-0"
        aria-label="Ver depoimento anterior"
      />
      <CarouselNext 
        className="hidden md:flex bg-primary text-primary-foreground hover:bg-primary/90 border-0"
        aria-label="Ver próximo depoimento"
      />
    </Carousel>
  );
};
