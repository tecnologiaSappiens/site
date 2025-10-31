import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Maria Silva",
      role: "Estudante de Medicina",
      content: "Aumentei significativamente minha retenção de conteúdo depois que comecei a usar os flashcards da Sappie. A repetição espaçada realmente funciona!",
      rating: 5,
    },
    {
      name: "Carlos Mendes",
      role: "Professor e Criador de Conteúdo",
      content: "Consegui monetizar meu conhecimento de forma simples e eficiente. Tenho muitos alunos usando meus flashcards!",
      rating: 5,
    },
    {
      name: "Ana Costa",
      role: "Gerente de RH",
      content: "Os treinamentos da nossa equipe nunca foram tão eficientes. A retenção de conhecimento aumentou significativamente.",
      rating: 5,
    },
    {
      name: "Pedro Oliveira",
      role: "Estudante de Direito",
      content: "Passei no exame da OAB estudando com flashcards. A forma de organização e revisão me ajudou demais a memorizar legislação.",
      rating: 5,
    },
    {
      name: "Juliana Santos",
      role: "Concurseira",
      content: "Depois de usar a plataforma, minha nota melhorou muito. Os flashcards me ajudaram a organizar melhor o conteúdo extenso.",
      rating: 5,
    },
    {
      name: "Ricardo Alves",
      role: "Estudante de Engenharia",
      content: "Os flashcards salvaram minhas notas em Cálculo e Física. Agora consigo revisar de forma muito mais eficiente!",
      rating: 5,
    },
    {
      name: "Fernanda Lima",
      role: "Professora de Inglês",
      content: "Criei flashcards para meus alunos e o engajamento deles aumentou muito. Ferramenta incrível para educadores!",
      rating: 5,
    },
    {
      name: "Lucas Ferreira",
      role: "Estudante de Farmácia",
      content: "Consegui decorar todas as classes medicamentosas em tempo recorde. Os flashcards da Sappie são meu segredo para boas notas!",
      rating: 5,
    },
  ];

  return (
    <section id="depoimentos" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl mb-6">
            O que nossos <span className="primary-text">usuários dizem</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Histórias reais de pessoas que transformaram seu aprendizado com a Sappie
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <Card 
                  className="p-8 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105 h-full"
                >
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>
                  
                  <p className="text-foreground mb-6 leading-relaxed italic">
                    "{testimonial.content}"
                  </p>
                  
                  <div className="border-t border-border pt-4">
                    <p className="font-semibold text-foreground">{testimonial.name.split(' ')[0]}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex bg-primary text-primary-foreground hover:bg-primary/90 border-0" />
          <CarouselNext className="hidden md:flex bg-primary text-primary-foreground hover:bg-primary/90 border-0" />
        </Carousel>
      </div>
    </section>
  );
};
