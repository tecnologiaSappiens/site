import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ProductsClient } from "./ProductsClient";

// Metadata for SEO
export const metadata: Metadata = {
  title: "Flashcards Premium de Medicina, Saúde e Concursos | Sappie - Produtos",
  description: "Explore flashcards de alta qualidade criados por especialistas. Active recall e repetição espaçada para medicina, farmácia, biomedicina, veterinária, concursos e mais. Aprove nos seus estudos.",
  keywords: [
    "flashcards medicina",
    "flashcards farmácia",
    "flashcards veterinária",
    "flashcards concursos",
    "flashcards biomedicina",
    "active recall",
    "repetição espaçada",
    "material de estudo",
    "flashcards sus",
    "flashcards residência",
    "flashcards ebserh"
  ],
  authors: [{ name: "Sappie" }],
  openGraph: {
    title: "Flashcards Premium de Medicina, Saúde e Concursos | Sappie",
    description: "Flashcards de alta qualidade criados por especialistas. Active recall e repetição espaçada para maximizar seus estudos.",
    type: "website",
    locale: "pt_BR",
    siteName: "Sappie",
  },
  twitter: {
    card: "summary_large_image",
    title: "Flashcards Premium | Sappie",
    description: "Flashcards de alta qualidade criados por especialistas para medicina, saúde e concursos.",
  },
  alternates: {
    canonical: "/produtos",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// Static product data
export const products = [
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
    available: true,
    price: "R$ 99,90"
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
    available: true,
    price: "R$ 89,90"
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
    available: false,
    price: "R$ 99,90"
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
    available: true,
    price: "R$ 79,90"
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
    available: true,
    price: "R$ 119,90"
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
    available: true,
    price: "R$ 89,90"
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
    available: true,
    price: "R$ 79,90"
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
    available: true,
    price: "R$ 149,90"
  },
] as const;

// Structured data for SEO
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "/produtos",
      "name": "Produtos - Flashcards Premium",
      "description": "Catálogo de flashcards de alta qualidade para medicina, saúde e concursos",
      "inLanguage": "pt-BR",
    },
    {
      "@type": "ItemList",
      "itemListElement": products.filter(p => p.available).map((product, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "Product",
          "name": product.title,
          "description": product.description,
          "image": product.image,
          "category": product.category,
          "brand": {
            "@type": "Brand",
            "name": product.creator
          },
          "offers": {
            "@type": "Offer",
            "url": product.link,
            "priceCurrency": "BRL",
            "availability": "https://schema.org/InStock"
          }
        }
      }))
    },
    {
      "@type": "CollectionPage",
      "name": "Flashcards Premium",
      "description": "Coleção de flashcards educacionais de alta qualidade",
      "about": {
        "@type": "Thing",
        "name": "Materiais Educacionais"
      }
    }
  ]
};

const Products = () => {
  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="min-h-screen">
        <Navbar />
        <ProductsClient products={products} />
        <Footer />
      </div>
    </>
  );
};

export default Products;
