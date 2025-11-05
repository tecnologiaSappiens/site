import { TestimonialsCarousel } from "./TestimonialsCarousel";

// Static testimonials data with enhanced metadata
const testimonials = [
  {
    id: "1",
    name: "Maria Silva",
    role: "Estudante de Medicina",
    content: "Aumentei significativamente minha retenção de conteúdo depois que comecei a usar os flashcards da Sappie. A repetição espaçada realmente funciona!",
    rating: 5,
    date: "2024-10",
    verified: true,
  },
  {
    id: "2",
    name: "Carlos Mendes",
    role: "Professor e Criador de Conteúdo",
    content: "Consegui monetizar meu conhecimento de forma simples e eficiente. Tenho muitos alunos usando meus flashcards!",
    rating: 5,
    date: "2024-09",
    verified: true,
  },
  {
    id: "3",
    name: "Ana Costa",
    role: "Gerente de RH",
    content: "Os treinamentos da nossa equipe nunca foram tão eficientes. A retenção de conhecimento aumentou significativamente.",
    rating: 5,
    date: "2024-10",
    verified: true,
  },
  {
    id: "4",
    name: "Pedro Oliveira",
    role: "Estudante de Direito",
    content: "Passei no exame da OAB estudando com flashcards. A forma de organização e revisão me ajudou demais a memorizar legislação.",
    rating: 5,
    date: "2024-09",
    verified: true,
  },
  {
    id: "5",
    name: "Juliana Santos",
    role: "Concurseira",
    content: "Depois de usar a plataforma, minha nota melhorou muito. Os flashcards me ajudaram a organizar melhor o conteúdo extenso.",
    rating: 5,
    date: "2024-08",
    verified: true,
  },
  {
    id: "6",
    name: "Ricardo Alves",
    role: "Estudante de Engenharia",
    content: "Os flashcards salvaram minhas notas em Cálculo e Física. Agora consigo revisar de forma muito mais eficiente!",
    rating: 5,
    date: "2024-10",
    verified: true,
  },
  {
    id: "7",
    name: "Fernanda Lima",
    role: "Professora de Inglês",
    content: "Criei flashcards para meus alunos e o engajamento deles aumentou muito. Ferramenta incrível para educadores!",
    rating: 5,
    date: "2024-09",
    verified: true,
  },
  {
    id: "8",
    name: "Lucas Ferreira",
    role: "Estudante de Farmácia",
    content: "Consegui decorar todas as classes medicamentosas em tempo recorde. Os flashcards da Sappie são meu segredo para boas notas!",
    rating: 5,
    date: "2024-08",
    verified: true,
  },
] as const;

export const TestimonialsSection = () => {
  // Calculate aggregate rating
  const totalRating = testimonials.reduce((acc, t) => acc + t.rating, 0);
  const averageRating = totalRating / testimonials.length;

  return (
    <section 
      id="depoimentos" 
      className="py-24 bg-muted/50"
      aria-labelledby="depoimentos-heading"
      itemScope
      itemType="https://schema.org/Product"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-16 animate-fade-in">
          <h2 
            id="depoimentos-heading"
            className="font-heading text-4xl sm:text-5xl lg:text-6xl mb-6"
            itemProp="name"
          >
            O que nossos <span className="primary-text">usuários dizem</span>
          </h2>
          <p 
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            itemProp="description"
          >
            Histórias reais de pessoas que transformaram seu aprendizado com a Sappie
          </p>
        </header>

        {/* Hidden aggregate rating for SEO */}
        <div 
          itemProp="aggregateRating" 
          itemScope 
          itemType="https://schema.org/AggregateRating"
          className="sr-only"
        >
          <meta itemProp="ratingValue" content={averageRating.toFixed(1)} />
          <meta itemProp="bestRating" content="5" />
          <meta itemProp="ratingCount" content={String(testimonials.length)} />
          <meta itemProp="reviewCount" content={String(testimonials.length)} />
        </div>

        <TestimonialsCarousel testimonials={testimonials} />

        {/* Accessible list of testimonials for screen readers and SEO */}
        <div className="sr-only">
          <h3>Lista completa de depoimentos:</h3>
          <ul>
            {testimonials.map((testimonial) => (
              <li 
                key={testimonial.id}
                itemProp="review"
                itemScope
                itemType="https://schema.org/Review"
              >
                <div itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
                  <meta itemProp="ratingValue" content={String(testimonial.rating)} />
                  <meta itemProp="bestRating" content="5" />
                </div>
                <div itemProp="author" itemScope itemType="https://schema.org/Person">
                  <meta itemProp="name" content={testimonial.name} />
                </div>
                <span itemProp="reviewBody">{testimonial.content}</span>
                <meta itemProp="datePublished" content={testimonial.date} />
                {testimonial.verified && <meta itemProp="itemReviewed" content="Sappie Flashcards" />}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
