"use client"

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ExternalLink, Search, Filter, X, Sparkles, AlertCircle, ChevronDown, ChevronUp } from "lucide-react";
import { useState, useMemo } from "react";

const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedCreator, setSelectedCreator] = useState("all");
  const [expandedCards, setExpandedCards] = useState<Set<number>>(new Set());

  const products = [
    {
      id: 1,
      title: "Farmácia",
      category: "Saúde",
      image: "https://onboarding-creator-images.s3.us-east-1.amazonaws.com/cursau/farmacia-checkout.jpg",
      creator: "Cursau Educação",
      creatorImage: "https://onboarding-creator-images.s3.us-east-1.amazonaws.com/cursau/perfil.png",
      creatorLink: "https://www.instagram.com/cursau/",
      description: "O Cursau Cards para Farmácia foi pensado para facilitar o estudo das matérias mais temidas da graduação. Aqui você encontra flashcards sobre Farmacologia, Análises Clínicas, Microbiologia, Fisiopatologia e muitos outros temas essenciais para a sua formação.",
      link: "https://pay.sappie.com.br/R6250EKJ81",
      available: true
    },
    {
      id: 2,
      title: "MedVetResume",
      category: "Veterinária",
      image: "https://onboarding-creator-images.s3.us-east-1.amazonaws.com/med-vet-resume/checkout.jpeg",
      creator: "Camila Marinho",
      creatorImage: "https://onboarding-creator-images.s3.us-east-1.amazonaws.com/med-vet-resume/profile.jpeg",
      creatorLink: "https://www.instagram.com/med.vet.resume/",
      description: "Esses flashcards foram desenvolvidos para facilitar o aprendizado e a revisão dos principais sistemas abordados na Fisiologia Veterinária. Ideais tanto para quem está começando o curso quanto para quem quer reforçar o conteúdo antes das provas.",
      link: "https://pay.sappie.com.br/2UMF0ZGFM6",
      available: true
    },
    {
      id: 3,
      title: "Biomedicina",
      category: "Saúde",
      image: "https://onboarding-creator-images.s3.us-east-1.amazonaws.com/cursau/biomedicina-checkout-v2.jpg",
      creator: "Cursau Educação",
      creatorImage: "https://onboarding-creator-images.s3.us-east-1.amazonaws.com/cursau/perfil.png",
      creatorLink: "https://www.instagram.com/cursau/",
      description: "O Cursau Cards para Biomedicina reúne os principais conteúdos das áreas que mais exigem memorização e revisão constante. São flashcards sobre Hematologia, Microbiologia, Imunologia, Parasitologia, Bioquímica e todas disciplinas da faculdade.",
      link: "https://pay.sappie.com.br/BRQ2LVJPB0",
      available: false
    },
    {
      id: 4,
      title: "SUS Resumido",
      category: "Concursos",
      image: "https://onboarding-creator-images.s3.us-east-1.amazonaws.com/sus-res/checkout.png",
      creator: "Bruno Costa Silva",
      creatorImage: "https://onboarding-creator-images.s3.us-east-1.amazonaws.com/sus-res/profile.png",
      creatorLink: "https://www.instagram.com/susresumido/",
      description: "Os Flashcards de Legislação do SUS são ideais para profissionais e estudantes da área da saúde que estão se preparando para concursos públicos e programas de residência.",
      link: "https://pay.sappie.com.br/MT2PWC1OQL",
      available: true
    },
    {
      id: 5,
      title: "EasyACLS",
      category: "Medicina",
      image: "https://onboarding-creator-images.s3.us-east-1.amazonaws.com/acl/checkout.png",
      creator: "Easy Cards",
      creatorImage: "https://onboarding-creator-images.s3.us-east-1.amazonaws.com/acl/profile.png",
      creatorLink: "https://www.instagram.com/easycardsbr/",
      description: "O Deck ACLS da Easy Medicina foi feito pra quem quer dominar, de verdade, os protocolos de emergência e reanimação cardiopulmonar. Usando os métodos comprovados de active recall e repetição espaçada.",
      link: "https://pay.sappie.com.br/CQNEW26QK7",
      available: true
    },
    {
      id: 6,
      title: "Legislação EBSERH",
      category: "Concursos",
      image: "https://onboarding-creator-images.s3.us-east-1.amazonaws.com/celi/logo-ebs.png",
      creator: "Flashcards da Saúde",
      creatorImage: "https://onboarding-creator-images.s3.us-east-1.amazonaws.com/celi/profile-new.png",
      creatorLink: "https://www.instagram.com/flashcardsdasaude/",
      description: "Para quem quer dominar, de verdade, os principais documentos que mais caem nas provas do concurso da EBSERH. Ele traz conteúdos do básico ao avançado sobre o Regimento Interno da EBSERH.",
      link: "https://pay.sappie.com.br/YYMSXSTVBY",
      available: true
    },
    {
      id: 7,
      title: "Legislação SUS",
      category: "Concursos",
      image: "https://onboarding-creator-images.s3.us-east-1.amazonaws.com/celi/logo-sus.png",
      creator: "Flashcards da Saúde",
      creatorImage: "https://onboarding-creator-images.s3.us-east-1.amazonaws.com/celi/profile-new.png",
      creatorLink: "https://www.instagram.com/flashcardsdasaude/",
      description: "Tudo o que você precisa dominar sobre o SUS para se destacar em concursos, residências e provas da faculdade: História do SUS, Organização Geral, SUS na Constituição Federal.",
      link: "https://pay.sappie.com.br/OL7DOUCIUX",
      available: true
    },
    {
      id: 8,
      title: "EasyCards",
      category: "Medicina",
      image: "https://onboarding-creator-images.s3.us-east-1.amazonaws.com/easy-cards-final/checkout.png",
      creator: "Easy Cards",
      creatorImage: "https://onboarding-creator-images.s3.us-east-1.amazonaws.com/acl/profile.png",
      creatorLink: "https://www.instagram.com/easycardsbr/",
      description: "O deck da EasyCards é a maneira mais eficiente de estudar medicina sem perder tempo. São flashcards prontos, baseados em active recall e repetição espaçada.",
      link: "https://pay.sappie.com.br/CKSCZWTE3A",
      available: true
    },
  ];

  // Extract unique categories and creators
  const categories = useMemo(() => {
    const uniqueCategories = Array.from(new Set(products.map(p => p.category)));
    return uniqueCategories.sort();
  }, []);

  const creators = useMemo(() => {
    const uniqueCreators = Array.from(new Set(products.map(p => p.creator)));
    return uniqueCreators.sort();
  }, []);

  // Filter products based on search and filters
  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           product.creator.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
      const matchesCreator = selectedCreator === "all" || product.creator === selectedCreator;
      
      return matchesSearch && matchesCategory && matchesCreator;
    });
  }, [searchTerm, selectedCategory, selectedCreator, products]);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-b from-primary/5 via-background to-background overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        </div>

        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Produtos Premium</span>
            </div>
            
            <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl mb-6 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
              Flashcards de Alta Qualidade
            </h1>
            
            <p className="text-xl text-muted-foreground mb-4 leading-relaxed max-w-2xl mx-auto">
              Produtos pensados para transformar tempo de estudo em resultado. Criados por especialistas, 
              testados por milhares de alunos e turbinados com <span className="text-primary font-semibold">active recall</span> e{" "}
              <span className="text-primary font-semibold">spaced repetition</span>.
            </p>
            
            <p className="text-lg text-muted-foreground/80">
              Confira os flashcards disponíveis e impulsione seus estudos! 🚀
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="sticky top-16 md:top-20 z-40 py-8 bg-gradient-to-br from-background via-background/98 to-primary/5 backdrop-blur-xl border-b-2 border-primary/20 shadow-lg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto space-y-6">
            
            {/* Title and Stats Row */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-2xl font-heading font-bold flex items-center gap-2">
                  <Sparkles className="w-6 h-6 text-primary" />
                  Encontre seu Flashcard
                </h2>
                <p className="text-sm text-muted-foreground mt-1">
                  Explore nossa coleção de materiais de estudo
                </p>
              </div>
              
              {/* Active Filters Badge */}
              {(searchTerm || selectedCategory !== "all" || selectedCreator !== "all") && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedCategory("all");
                    setSelectedCreator("all");
                  }}
                  className="border-2 border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300 shadow-sm"
                >
                  <X className="w-4 h-4 mr-2" />
                  Limpar Tudo
                </Button>
              )}
            </div>

            {/* Search and Filters Row */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
              
              {/* Search Bar - Takes more space */}
              <div className="lg:col-span-6">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 rounded-lg blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5 group-hover:text-primary transition-colors" />
                    <Input
                      type="text"
                      placeholder="Pesquisar flashcards por nome, assunto ou autor..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-12 pr-12 h-14 border-2 border-border focus:border-primary bg-background/50 backdrop-blur-sm text-base transition-all duration-300 shadow-sm hover:shadow-md"
                    />
                    {searchTerm && (
                      <button
                        onClick={() => setSearchTerm("")}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors p-1 hover:bg-muted rounded-full"
                        aria-label="Limpar busca"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    )}
                  </div>
                </div>
              </div>

              {/* Category Filter */}
              <div className="lg:col-span-3">
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="h-14 border-2 border-border focus:border-primary bg-background/50 backdrop-blur-sm text-base transition-all duration-300 shadow-sm hover:shadow-md hover:border-primary/50">
                    <div className="flex items-center gap-2">
                      <Filter className="w-4 h-4 text-primary" />
                      <SelectValue placeholder="Categoria" />
                    </div>
                  </SelectTrigger>
                  <SelectContent className="bg-background border-2 border-primary/20 shadow-xl backdrop-blur-xl">
                    <SelectItem value="all" className="text-base">
                      📚 Todas Categorias
                    </SelectItem>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category} className="text-base">
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Creator Filter */}
              <div className="lg:col-span-3">
                <Select value={selectedCreator} onValueChange={setSelectedCreator}>
                  <SelectTrigger className="h-14 border-2 border-border focus:border-primary bg-background/50 backdrop-blur-sm text-base transition-all duration-300 shadow-sm hover:shadow-md hover:border-primary/50">
                    <div className="flex items-center gap-2">
                      <Filter className="w-4 h-4 text-primary" />
                      <SelectValue placeholder="Criador" />
                    </div>
                  </SelectTrigger>
                  <SelectContent className="bg-background border-2 border-primary/20 shadow-xl backdrop-blur-xl">
                    <SelectItem value="all" className="text-base">
                      👤 Todos Criadores
                    </SelectItem>
                    {creators.map((creator) => (
                      <SelectItem key={creator} value={creator} className="text-base">
                        {creator}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Results count bar */}
            <div className="flex items-center gap-2 px-2">
              <div className="h-1 w-1 rounded-full bg-primary animate-pulse" />
              <p className="text-sm font-medium">
                <span className="text-primary font-bold text-lg">{filteredProducts.length}</span>
                <span className="text-muted-foreground"> {filteredProducts.length === 1 ? 'produto encontrado' : 'produtos encontrados'}</span>
                {(searchTerm || selectedCategory !== "all" || selectedCreator !== "all") && (
                  <span className="text-muted-foreground"> com os filtros ativos</span>
                )}
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-gradient-to-b from-background to-background/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-24 animate-fade-in">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                <Search className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-2xl font-heading font-semibold mb-4">Nenhum produto encontrado</h3>
              <p className="text-lg text-muted-foreground mb-8">
                Não encontramos produtos com os filtros selecionados.
              </p>
              <Button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("all");
                  setSelectedCreator("all");
                }}
                size="lg"
                className="bg-primary hover:bg-primary/90 transition-all duration-300"
              >
                <X className="w-5 h-5 mr-2" />
                Limpar Filtros
              </Button>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {filteredProducts.map((product, index) => (
                <Card 
                  key={product.id} 
                  className="group overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 bg-card/50 backdrop-blur-sm border-2 border-border hover:border-primary/50 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Image with overlay */}
                  <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-primary/10 to-primary/5">
                    <img 
                      src={product.image} 
                      alt={product.title}
                      className={`w-full h-full object-cover transition-all duration-500 ${
                        product.available ? 'group-hover:scale-110' : 'grayscale opacity-60'
                      }`}
                    />
                    <div className={`absolute inset-0 transition-opacity duration-300 ${
                      product.available 
                        ? 'bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100'
                        : 'bg-black/40'
                    }`} />
                    
                    {/* Category Badge */}
                    <Badge className="absolute top-3 right-3 bg-primary/90 backdrop-blur-sm border-0 text-primary-foreground shadow-lg">
                      {product.category}
                    </Badge>

                    {/* Unavailable Badge */}
                    {!product.available && (
                      <Badge className="absolute top-3 left-3 bg-destructive/90 backdrop-blur-sm border-0 text-destructive-foreground shadow-lg flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        Indisponível
                      </Badge>
                    )}
                  </div>

                  <CardHeader className="space-y-4">
                    <div>
                      <CardTitle className="text-2xl mb-2 group-hover:text-primary transition-colors">
                        {product.title}
                      </CardTitle>
                      
                      {/* Creator Info */}
                      <a 
                        href={product.creatorLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 group/creator hover:opacity-80 transition-opacity"
                      >
                        <Avatar className="w-10 h-10 border-2 border-primary/20 group-hover/creator:border-primary transition-colors">
                          <AvatarImage src={product.creatorImage} alt={product.creator} />
                          <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                            {product.creator[0]}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="text-xs text-muted-foreground">Criado por</p>
                          <CardDescription className="text-sm font-medium text-foreground flex items-center gap-1">
                            {product.creator}
                            <ExternalLink className="w-3 h-3 opacity-0 group-hover/creator:opacity-100 transition-opacity" />
                          </CardDescription>
                        </div>
                      </a>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <p className={`text-muted-foreground leading-relaxed text-base transition-all duration-300 ${
                        expandedCards.has(product.id) ? '' : 'line-clamp-3'
                      }`}>
                        {product.description}
                      </p>
                      
                      {product.description.length > 150 && (
                        <button
                          onClick={() => {
                            const newExpanded = new Set(expandedCards);
                            if (newExpanded.has(product.id)) {
                              newExpanded.delete(product.id);
                            } else {
                              newExpanded.add(product.id);
                            }
                            setExpandedCards(newExpanded);
                          }}
                          className="flex items-center gap-1 text-sm text-primary hover:text-primary/80 transition-colors font-medium"
                        >
                          {expandedCards.has(product.id) ? (
                            <>
                              Ver menos
                              <ChevronUp className="w-4 h-4" />
                            </>
                          ) : (
                            <>
                              Ver mais
                              <ChevronDown className="w-4 h-4" />
                            </>
                          )}
                        </button>
                      )}
                    </div>
                    
                    {product.available ? (
                      <Button 
                        className="w-full bg-primary hover:bg-primary/90 transition-all duration-300 group/btn shadow-lg hover:shadow-xl"
                        size="lg"
                        asChild
                      >
                        <a href={product.link} target="_blank" rel="noopener noreferrer">
                          <span>Comprar Agora</span>
                          <ExternalLink className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                        </a>
                      </Button>
                    ) : (
                      <Button 
                        className="w-full bg-muted text-muted-foreground cursor-not-allowed"
                        size="lg"
                        disabled
                      >
                        <AlertCircle className="w-4 h-4 mr-2" />
                        <span>Produto Indisponível</span>
                      </Button>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;
