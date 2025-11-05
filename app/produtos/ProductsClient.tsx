"use client"

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ExternalLink, Search, Filter, X, Sparkles, AlertCircle, ChevronDown, ChevronUp } from "lucide-react";
import { useState, useMemo } from "react";

type Product = {
  id: number;
  title: string;
  category: string;
  image: string;
  creator: string;
  creatorImage: string;
  creatorLink: string;
  description: string;
  link: string;
  available: boolean;
  price?: string;
};

type ProductsClientProps = {
  products: readonly Product[];
};

export function ProductsClient({ products }: ProductsClientProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedCreator, setSelectedCreator] = useState("all");
  const [expandedCards, setExpandedCards] = useState<Set<number>>(new Set());

  // Extract unique categories and creators
  const categories = useMemo(() => {
    const uniqueCategories = Array.from(new Set(products.map(p => p.category)));
    return uniqueCategories.sort();
  }, [products]);

  const creators = useMemo(() => {
    const uniqueCreators = Array.from(new Set(products.map(p => p.creator)));
    return uniqueCreators.sort();
  }, [products]);

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

  const handleClearFilters = () => {
    setSearchTerm("");
    setSelectedCategory("all");
    setSelectedCreator("all");
  };

  const toggleExpanded = (productId: number) => {
    const newExpanded = new Set(expandedCards);
    if (newExpanded.has(productId)) {
      newExpanded.delete(productId);
    } else {
      newExpanded.add(productId);
    }
    setExpandedCards(newExpanded);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-b from-primary/5 via-background to-background overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        </div>

        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-primary" aria-hidden="true" />
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
      <section className="sticky top-16 md:top-20 z-40 py-8 bg-gradient-to-br from-background via-background/98 to-primary/5 backdrop-blur-xl border-b-2 border-primary/20 shadow-lg" aria-labelledby="search-heading">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto space-y-6">
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h2 id="search-heading" className="text-2xl font-heading font-bold flex items-center gap-2">
                  <Sparkles className="w-6 h-6 text-primary" aria-hidden="true" />
                  Encontre seu Flashcard
                </h2>
                <p className="text-sm text-muted-foreground mt-1">
                  Explore nossa coleção de materiais de estudo
                </p>
              </div>
              
              {(searchTerm || selectedCategory !== "all" || selectedCreator !== "all") && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleClearFilters}
                  className="border-2 border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300 shadow-sm"
                >
                  <X className="w-4 h-4 mr-2" />
                  Limpar Tudo
                </Button>
              )}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
              <div className="lg:col-span-6">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 rounded-lg blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5 group-hover:text-primary transition-colors" aria-hidden="true" />
                    <Input
                      type="text"
                      placeholder="Pesquisar flashcards por nome, assunto ou autor..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-12 pr-12 h-14 border-2 border-border focus:border-primary bg-background/50 backdrop-blur-sm text-base transition-all duration-300 shadow-sm hover:shadow-md"
                      aria-label="Pesquisar flashcards"
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

              <div className="lg:col-span-3">
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="h-14 border-2 border-border focus:border-primary bg-background/50 backdrop-blur-sm text-base transition-all duration-300 shadow-sm hover:shadow-md hover:border-primary/50" aria-label="Filtrar por categoria">
                    <div className="flex items-center gap-2">
                      <Filter className="w-4 h-4 text-primary" aria-hidden="true" />
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

              <div className="lg:col-span-3">
                <Select value={selectedCreator} onValueChange={setSelectedCreator}>
                  <SelectTrigger className="h-14 border-2 border-border focus:border-primary bg-background/50 backdrop-blur-sm text-base transition-all duration-300 shadow-sm hover:shadow-md hover:border-primary/50" aria-label="Filtrar por criador">
                    <div className="flex items-center gap-2">
                      <Filter className="w-4 h-4 text-primary" aria-hidden="true" />
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
      <section className="py-20 bg-gradient-to-b from-background to-background/50" aria-labelledby="products-heading">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="products-heading" className="sr-only">Catálogo de Produtos</h2>
          {filteredProducts.length === 0 ? (
            <div className="text-center py-24 animate-fade-in">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                <Search className="w-10 h-10 text-primary" aria-hidden="true" />
              </div>
              <h3 className="text-2xl font-heading font-semibold mb-4">Nenhum produto encontrado</h3>
              <p className="text-lg text-muted-foreground mb-8">
                Não encontramos produtos com os filtros selecionados.
              </p>
              <Button
                onClick={handleClearFilters}
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
                  <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-primary/10 to-primary/5">
                    <img 
                      src={product.image} 
                      alt={`Flashcard ${product.title} por ${product.creator}`}
                      className={`w-full h-full object-cover transition-all duration-500 ${
                        product.available ? 'group-hover:scale-110' : 'grayscale opacity-60'
                      }`}
                      loading="lazy"
                    />
                    <div className={`absolute inset-0 transition-opacity duration-300 ${
                      product.available 
                        ? 'bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100'
                        : 'bg-black/40'
                    }`} />
                    
                    <Badge className="absolute top-3 right-3 bg-primary/90 backdrop-blur-sm border-0 text-primary-foreground shadow-lg">
                      {product.category}
                    </Badge>

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
                      
                      <a 
                        href={product.creatorLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 group/creator hover:opacity-80 transition-opacity"
                        aria-label={`Visitar perfil de ${product.creator}`}
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
                          onClick={() => toggleExpanded(product.id)}
                          className="flex items-center gap-1 text-sm text-primary hover:text-primary/80 transition-colors font-medium"
                          aria-label={expandedCards.has(product.id) ? "Ver menos descrição" : "Ver mais descrição"}
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
                        aria-label="Produto indisponível"
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
    </>
  );
}
