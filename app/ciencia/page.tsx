import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";
import { DemoCTA } from "@/components/shared/DemoCTA";
import {
  Brain,
  Mountain,
  MessageCircle,
  Target,
  Lightbulb,
  AlertTriangle,
  Rocket,
  CheckCircle,
  BookOpen,
  Timer,
  BarChart3,
  ArrowRight,
  FlaskConical
} from "lucide-react";

export const metadata: Metadata = {
  title: "A Ciência por Trás da Sappie | Sistema de Repetição Espaçada",
  description: "Descubra como o algoritmo da Sappie usa inteligência artificial e o modelo DSR para criar um cronograma de estudos personalizado, reduzindo 20-30% do tempo de estudo.",
  keywords: [
    "repetição espaçada",
    "modelo DSR",
    "curva do esquecimento",
    "Ebbinghaus",
    "algoritmo de aprendizado",
    "treinamento corporativo",
    "flashcards inteligentes",
    "machine learning educação"
  ],
  authors: [{ name: "Sappie" }],
  openGraph: {
    title: "A Ciência por Trás da Sappie | Sistema de Repetição Espaçada",
    description: "Como o algoritmo da Sappie potencializa seu aprendizado com inteligência artificial.",
    type: "website",
    locale: "pt_BR",
    siteName: "Sappie",
  },
  twitter: {
    card: "summary_large_image",
    title: "A Ciência por Trás da Sappie",
    description: "Como o algoritmo da Sappie potencializa seu aprendizado com inteligência artificial.",
  },
  alternates: {
    canonical: "/ciencia",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "/ciencia",
      name: "A Ciência por Trás da Sappie",
      description: "Manual do Sistema de Aprendizagem Inteligente",
      inLanguage: "pt-BR",
    },
    {
      "@type": "Article",
      headline: "Manual do Sistema de Aprendizagem Inteligente",
      description: "Como o algoritmo da Sappie potencializa seu treinamento com repetição espaçada e modelo DSR",
      author: {
        "@type": "Organization",
        name: "Sappie"
      }
    }
  ]
};

const dsrModel = [
  {
    icon: Target,
    title: "Dificuldade (D)",
    description: "O quanto aquela informação específica é difícil para você fixar"
  },
  {
    icon: Mountain,
    title: "Estabilidade (S)",
    description: "O quanto essa memória resiste ao esquecimento com o passar do tempo"
  },
  {
    icon: MessageCircle,
    title: "Recuperabilidade (R)",
    description: "A chance de você conseguir lembrar dessa informação agora"
  }
] as const;

const stabilityRules = [
  "Revisar quando você está quase esquecendo gera ganhos maiores de estabilidade — é o efeito de espaçamento funcionando",
  "Memórias que já são muito estáveis crescem mais devagar — os ganhos vão diminuindo",
  "Conteúdo mais simples se fixa mais rápido que conteúdo complexo"
] as const;

const studyHabits = [
  "10 a 30 minutos por dia é suficiente para a maioria das pessoas",
  "Mantenha o hábito mesmo em viagens, feriados e dias corridos",
  "5 minutinhos de revisão valem muito mais do que pular o dia",
  "Cada card novo gera revisões que se estendem por meses",
  "Comece com 5 a 10 cards novos por dia e aumente aos poucos"
] as const;

const dashboardFeatures = [
  "Usuários Totais vs. Ativos: Veja quantas pessoas da equipe estão realmente usando a plataforma. Identificar inativos cedo permite ações de reengajamento antes que vire hábito",
  "Taxa de Ativação: Porcentagem de usuários que estão ativamente estudando. Uma taxa saudável fica acima de 70%",
  "Total de Flashcards: Acompanhe o volume de conteúdo disponível e estudado pela equipe"
] as const;

const corporateBenefits = [
  {
    icon: Rocket,
    title: "Onboarding",
    description: "Distribui o aprendizado ao longo dos 90 dias de adaptação, garantindo que o conhecimento se fixe de verdade"
  },
  {
    icon: CheckCircle,
    title: "Compliance",
    description: "Troca a maratona anual por manutenção leve e contínua ao longo do ano todo"
  },
  {
    icon: BookOpen,
    title: "Capacitação",
    description: "Treinamentos técnicos rendem muito mais quando combinados com revisão espaçada"
  },
  {
    icon: Timer,
    title: "Produtividade",
    description: "5 a 10 minutos por dia, encaixados nas pausas naturais do trabalho"
  }
] as const;

const Ciencia = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="min-h-screen bg-background">
        <Navbar />

        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/10 to-background">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center animate-fade-in">
              <Badge className="mb-6 bg-primary/10 text-primary border-0 px-4 py-2">
                <FlaskConical className="w-4 h-4 mr-2" />
                Baseado em Ciência
              </Badge>

              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl mb-6">
                A ciência por trás dos <span className="primary-text">resultados</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Como o algoritmo da Sappie transforma treinamento corporativo e ensino em retenção
                de longo prazo — com 20 a 30% menos tempo de estudo
              </p>
            </div>
          </div>
        </section>

        {/* Introdução */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-4xl">
            <h2 className="font-heading text-3xl lg:text-4xl mb-8 pb-4 border-b-2 border-primary">
              Introdução
            </h2>

            <p className="text-lg text-muted-foreground mb-6">
              A repetição espaçada deixou de ser uma técnica simples e se tornou um sistema inteligente que entende como nosso cérebro funciona. O <strong className="text-foreground">algoritmo da Sappie</strong> usa inteligência artificial para criar um cronograma de estudos sob medida para cada pessoa — e o resultado é impressionante: <strong className="text-foreground">20 a 30% menos tempo de estudo</strong> com a mesma taxa de retenção.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Na prática, isso significa integração mais ágil de novos colaboradores, conformidade em dia sem dor de cabeça, e equipes que realmente absorvem o conhecimento dos treinamentos.
            </p>

            <Card className="p-8 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-3">
                <Lightbulb className="w-6 h-6" />
                O Diferencial da Sappie
              </h3>
              <p className="text-primary-foreground/90">
                Por trás do sistema está o <strong>modelo de memória DSR</strong>, que analiza três variáveis: Dificuldade, Estabilidade e Recuperabilidade. Em vez de seguir um cronograma fixo igual para todo mundo, o algoritmo acompanha essas três variáveis para cada conteúdo e calcula o momento exato da revisão — bem na hora em que você está prestes a esquecer.
              </p>
            </Card>
          </div>
        </section>

        {/* A Ciência do Esquecimento */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <h2 className="font-heading text-3xl lg:text-4xl mb-8 pb-4 border-b-2 border-primary">
              A Ciência por Trás do Esquecimento
            </h2>

            <p className="text-lg text-muted-foreground mb-6">
              Lá em 1885, o psicólogo alemão Hermann Ebbinghaus fez uma descoberta que mudaria para sempre nossa compreensão sobre a memória. Ele percebeu que esquecemos de forma previsível: perdemos <strong className="text-foreground">até metade do que aprendemos em apenas uma hora</strong>, mas depois essa perda vai desacelerando. Essa é a famosa curva do esquecimento, o alicerce de todo sistema de repetição espaçada.
            </p>

            <Card className="p-6 border-l-4 border-l-primary bg-card/50 mb-8">
              <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                <Brain className="w-5 h-5 text-primary" />
                A Grande Sacada
              </h4>
              <p className="text-muted-foreground">
                Toda vez que você lembra de algo com sucesso, a curva do esquecimento muda — ela fica mais achatada. A informação não volta ao ponto inicial, ela se torna mais resistente. E tem mais: o momento certo faz toda a diferença. Revisar quando você está quase esquecendo fortalece muito mais a memória do que revisar quando ainda está tudo fresquinho na cabeça.
              </p>
            </Card>

            <p className="text-lg text-muted-foreground">
              É por isso que estudar tudo de véspera não funciona. Parece que você aprendeu, mas a memória é frágil e some rapidinho. O segredo está no <strong className="text-foreground">efeito de espaçamento</strong>: distribuir as revisões ao longo do tempo.
            </p>
          </div>
        </section>

        {/* Modelo DSR */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-4xl">
            <h2 className="font-heading text-3xl lg:text-4xl mb-8 pb-4 border-b-2 border-primary">
              Entendendo o Modelo DSR
            </h2>

            <p className="text-lg text-muted-foreground mb-8">
              O modelo DSR trabalha com três componentes que, juntos, descrevem como sua memória se comporta:
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {dsrModel.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Card
                    key={item.title}
                    className="p-6 text-center border-2 border-primary/20 hover:border-primary/40 hover:shadow-lg transition-all duration-300 animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h4 className="font-heading text-lg primary-text mb-2">{item.title}</h4>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </Card>
                );
              })}
            </div>

            {/* Recuperabilidade */}
            <h3 className="font-heading text-2xl text-primary mb-4 mt-12">
              Recuperabilidade: Qual a Chance de Você Lembrar?
            </h3>
            <p className="text-lg text-muted-foreground mb-4">
              A <strong className="text-foreground">Recuperabilidade</strong> responde uma pergunta direta: qual a probabilidade de você lembrar disso agora? Começa em 100% logo após aprender e vai caindo conforme o tempo passa.
            </p>
            <p className="text-lg text-muted-foreground mb-4">
              Imagine um livro numa estante. Assim que você o guarda, sabe exatamente onde está. Com o passar dos dias sem mexer nele, outros livros vão se acumulando na frente, poeira se junta... ele continua lá, mas fica cada vez mais difícil de encontrar.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              O sistema da Sappie monitora a recuperabilidade o tempo todo e programa as revisões para quando ela chegar em <strong className="text-foreground">90%</strong> — ou seja, quando você ainda tem 90% de chance de acertar. É o ponto ideal entre esforço e resultado.
            </p>

            {/* Estabilidade */}
            <h3 className="font-heading text-2xl text-primary mb-4 mt-12">
              Estabilidade: O Quanto Essa Memória é Sólida?
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              A <strong className="text-foreground">Estabilidade</strong> indica o quanto uma memória aguenta antes de enfraquecer. Na prática, é quantos dias levam para sua chance de lembrar cair de 100% para 90%. Uma estabilidade de 30 dias significa que, depois de um mês, você ainda tem 90% de chance de acertar.
            </p>

            <Card className="p-6 border-l-4 border-l-primary bg-card/50 mb-8">
              <h4 className="font-semibold text-lg mb-3">Pense Numa Trilha na Mata</h4>
              <p className="text-muted-foreground">
                Quando você abre um caminho novo no mato, ele é frágil e logo o mato toma conta de novo. Mas cada vez que você passa por ali, a trilha fica mais firme. Depois de muitas passagens, vira um caminho tão batido que levaria anos para a vegetação cobrir de novo. É assim que funciona a estabilidade da memória.
              </p>
            </Card>

            <p className="text-lg text-muted-foreground mb-4">
              Três regras definem como a estabilidade aumenta:
            </p>
            <ul className="space-y-3 mb-8">
              {stabilityRules.map((rule) => (
                <li key={rule} className="flex items-start gap-4 p-4 bg-muted/50 rounded-lg">
                  <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <span className="text-muted-foreground">{rule}</span>
                </li>
              ))}
            </ul>

            {/* Dificuldade */}
            <h3 className="font-heading text-2xl text-primary mb-4 mt-12">
              Dificuldade: O Quanto Esse Conteúdo Gruda?
            </h3>
            <p className="text-lg text-muted-foreground mb-4">
              A <strong className="text-foreground">Dificuldade</strong> mede o quanto é difícil para você manter aquela memória específica. No algoritmo da Sappie, vai de 1 (muito fácil) a 10 (muito difícil), e é calculada individualmente para cada informação.
            </p>
            <p className="text-lg text-muted-foreground">
              Algumas coisas grudam na memória como velcro — outras escorregam como teflon, não importa quantas vezes você veja. O nome da sua mãe tem dificuldade mínima; um número de telefone aleatório de 12 dígitos tem dificuldade máxima. E não é só questão de ser complicado: depende também de quanto sentido faz para você, como se conecta com o que você já sabe, e o quanto se destaca na sua mente.
            </p>
          </div>
        </section>

        {/* Como o Algoritmo Funciona */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <h2 className="font-heading text-3xl lg:text-4xl mb-8 pb-4 border-b-2 border-primary">
              Como o Algoritmo Organiza as Revisões
            </h2>

            <p className="text-lg text-muted-foreground mb-8">
              O sistema inteligente da Sappie mantém o registro DSR de cada card da sua coleção. Quando você faz uma revisão, o algoritmo observa sua resposta, atualiza a dificuldade e estabilidade, e calcula quando deve ser a próxima revisão. O cálculo é feito para que, quando o card aparecer de novo, sua recuperabilidade esteja exatamente no ponto ideal.
            </p>

            <Card className="p-8 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground mb-8">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-3">
                <Brain className="w-6 h-6" />
                Inteligência Artificial a Seu Favor
              </h3>
              <p className="text-primary-foreground/90">
                O grande trunfo do algoritmo da Sappie é a <strong>personalização por machine learning</strong>. O sistema tem diversos parâmetros que controlam desde as estimativas iniciais até o quanto a estabilidade cresce a cada revisão. Ele analisa todo seu histórico e ajusta esses parâmetros para combinar com o seu jeito de aprender.
              </p>
            </Card>

            {/* Stats */}
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-8 text-center bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
                <div className="text-4xl font-heading font-bold text-yellow-400 mb-2">20-30%</div>
                <p className="text-primary-foreground/90">menos revisões</p>
              </Card>
              <Card className="p-8 text-center bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
                <div className="text-4xl font-heading font-bold text-yellow-400 mb-2">90%</div>
                <p className="text-primary-foreground/90">taxa de retenção</p>
              </Card>
              <Card className="p-8 text-center bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
                <div className="text-4xl font-heading font-bold text-yellow-400 mb-2">97%</div>
                <p className="text-primary-foreground/90">dos usuários têm melhores resultados</p>
              </Card>
            </div>
          </div>
        </section>

        {/* Configurações */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-4xl">
            <h2 className="font-heading text-3xl lg:text-4xl mb-8 pb-4 border-b-2 border-primary">
              Ajustando para Melhores Resultados
            </h2>

            <h3 className="font-heading text-2xl text-primary mb-4">
              Retenção Desejada
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              A <strong className="text-foreground">retenção desejada</strong> é o principal ajuste que você pode fazer. Ela define qual deve ser sua taxa de acerto quando os cards aparecem para revisão. Se você configurar em 90%, os cards vão aparecer quando sua chance de acertar tiver caído para 90%.
            </p>

            <Card className="p-6 border-l-4 border-l-primary bg-card/50">
              <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-primary" />
                Atenção: A Relação Não é Linear
              </h4>
              <p className="text-muted-foreground">
                Subir de 90% para 95% pode dobrar a quantidade de revisões diárias. Já baixar de 90% para 85% pode cortar as revisões em 40%. Para a maioria das situações, a faixa de <strong className="text-foreground">85-90%</strong> é o ponto de equilíbrio ideal entre aprender bem e não se sobrecarregar.
              </p>
            </Card>
          </div>
        </section>

        {/* Hábitos de Estudo */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <h2 className="font-heading text-3xl lg:text-4xl mb-8 pb-4 border-b-2 border-primary">
              Construindo Uma Rotina de Estudos que Funciona
            </h2>

            <p className="text-lg text-muted-foreground mb-6">
              Não tem como fugir: para a repetição espaçada dar certo, você precisa estudar todo dia. O sistema inteiro depende de revisar os cards na hora certa — nem antes, nem depois.
            </p>

            <Card className="p-6 border-l-4 border-l-yellow-500 bg-yellow-500/10 mb-8">
              <h4 className="font-semibold text-lg mb-3 flex items-center gap-2 text-yellow-700 dark:text-yellow-400">
                <AlertTriangle className="w-5 h-5" />
                Cuidado com o Efeito Bola de Neve
              </h4>
              <p className="text-muted-foreground">
                Pular alguns dias cria um acúmulo que cresce rápido. Aqueles 50 cards por dia que eram tranquilos viram uma montanha de 300 cards que leva horas para resolver — e acaba com sua motivação.
              </p>
            </Card>

            <p className="text-lg text-muted-foreground mb-6">
              A solução é encaixar a Sappie na sua rotina de um jeito que não dependa de força de vontade. Muita gente associa os estudos a momentos específicos do dia: junto com o café da manhã, no trajeto para o trabalho, nos primeiros minutos do almoço. O app no celular permite aproveitar aqueles minutinhos que iriam para o nada — fila do banco, sala de espera, transporte público.
            </p>

            <ul className="space-y-3 mb-8">
              {studyHabits.map((habit) => (
                <li key={habit} className="flex items-start gap-4 p-4 bg-muted/50 rounded-lg">
                  <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <span className="text-muted-foreground">{habit}</span>
                </li>
              ))}
            </ul>

            <Card className="p-6 border-l-4 border-l-primary bg-card/50">
              <h4 className="font-semibold text-lg mb-3">Uma Conta Rápida</h4>
              <p className="text-muted-foreground">
                Se você adicionar 20 cards novos por dia, quando o sistema estabilizar você terá cerca de 200 revisões diárias. Adicionar cards demais rápido demais é o jeito mais comum de desistir do método.
              </p>
            </Card>
          </div>
        </section>

        {/* Erros Comuns */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-4xl">
            <h2 className="font-heading text-3xl lg:text-4xl mb-8 pb-4 border-b-2 border-primary">
              Erros que Atrapalham o Aprendizado
            </h2>

            <h3 className="font-heading text-2xl text-destructive mb-4">
              Cards Longos Demais
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              Cards que pedem para você lembrar de muita coisa ao mesmo tempo viram uma tarefa chata em vez de um exercício rápido. Se o card pede uma dúzia de informações de uma vez, leva uma eternidade para revisar e você nem sabe direito onde errou — foi no item 7 ou no 12?
            </p>

            <Card className="p-6 border-l-4 border-l-primary bg-card/50 mb-10">
              <h4 className="font-semibold text-lg mb-3">Cards Atômicos: Um Fato por Card</h4>
              <p className="text-muted-foreground">
                O ideal é ter <strong className="text-foreground">cards atômicos</strong>: uma informação simples por card. Passam rápido, mostram exatamente o que você precisa reforçar, e ainda ajudam a entender melhor o conteúdo — afinal, para decidir como dividir a informação, você precisa pensar bem sobre ela.
              </p>
            </Card>

            <h3 className="font-heading text-2xl text-destructive mb-4">
              Querer Retenção Perfeita
            </h3>
            <p className="text-lg text-muted-foreground">
              Buscar uma retenção altíssima dá mais trabalho do que vale a pena. Passar de 90% para 97% pode triplicar sua carga de revisões, mas o ganho prático é mínimo. A não ser que você realmente precise de precisão total — como em procedimentos médicos ou protocolos de segurança — ficar na faixa de 85-90% é o melhor custo-benefício.
            </p>
          </div>
        </section>

        {/* Painel do Gestor */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <h2 className="font-heading text-3xl lg:text-4xl mb-8 pb-4 border-b-2 border-primary">
              Painel de Acompanhamento para Gestores
            </h2>

            <p className="text-lg text-muted-foreground mb-8">
              Uma das grandes vantagens da Sappie para empresas é o <strong className="text-foreground">Relatório de Uso</strong>, um painel completo que permite aos gestores acompanhar o engajamento e progresso das equipes em tempo real. Chega de depender só da palavra do colaborador — agora você tem dados concretos.
            </p>

            {/* Dashboard Preview */}
            <Card className="p-8 bg-slate-900 text-white mb-8">
              <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
                <h3 className="text-xl font-semibold flex items-center gap-2">
                  <BarChart3 className="w-5 h-5" />
                  Relatório de Uso
                </h3>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-white/5 border border-white/10 rounded-lg p-5 text-center">
                  <div className="text-3xl font-bold text-purple-400">40</div>
                  <div className="text-sm text-slate-400 mt-1">Usuários Totais</div>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-lg p-5 text-center">
                  <div className="text-3xl font-bold text-yellow-400">30</div>
                  <div className="text-sm text-slate-400 mt-1">Usuários Ativos</div>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-lg p-5 text-center">
                  <div className="text-3xl font-bold text-purple-400">10</div>
                  <div className="text-sm text-slate-400 mt-1">Usuários Inativos</div>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-lg p-5 text-center">
                  <div className="text-3xl font-bold text-purple-400">611</div>
                  <div className="text-sm text-slate-400 mt-1">Total de Flashcards</div>
                </div>
              </div>

              <div className="bg-white/5 rounded-lg p-5">
                <div className="text-sm text-slate-300 mb-3 flex items-center gap-2">
                  <Lightbulb className="w-4 h-4" />
                  Taxa de Ativação
                </div>
                <div className="bg-white/10 rounded-full h-8 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-primary to-purple-400 rounded-full flex items-center justify-center text-sm font-semibold"
                    style={{ width: "75%" }}
                  >
                    75,0%
                  </div>
                </div>
              </div>
            </Card>

            <h3 className="font-heading text-2xl text-primary mb-4">
              O Que Você Consegue Acompanhar
            </h3>
            <ul className="space-y-3 mb-8">
              {dashboardFeatures.map((feature) => (
                <li key={feature} className="flex items-start gap-4 p-4 bg-muted/50 rounded-lg">
                  <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <span className="text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>

            <Card className="p-6 border-l-4 border-l-primary bg-card/50 mb-8">
              <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                <Target className="w-5 h-5 text-primary" />
                Dica para Gestores
              </h4>
              <p className="text-muted-foreground">
                Use o relatório semanalmente para identificar quem está ficando para trás. Um colaborador que para de estudar por mais de 5 dias provavelmente precisa de um lembrete ou incentivo. Quanto antes você agir, mais fácil é recuperar o engajamento.
              </p>
            </Card>

            <h3 className="font-heading text-2xl text-primary mb-4">
              Retenção Real
            </h3>
            <p className="text-lg text-muted-foreground mb-4">
              Além do engajamento, o sistema também mostra a <strong className="text-foreground">taxa de acerto efetiva nas revisões</strong>. Compare com a meta configurada para avaliar se a equipe está no caminho certo.
            </p>
            <p className="text-lg text-muted-foreground">
              Se a retenção real estiver bem acima da meta, o treinamento está funcionando. Se estiver abaixo, vale investigar quais conteúdos estão puxando o resultado para baixo — talvez precisem ser reescritos ou divididos em cards menores.
            </p>
          </div>
        </section>

        {/* Aplicações Corporativas */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-4xl">
            <h2 className="font-heading text-3xl lg:text-4xl mb-8 pb-4 border-b-2 border-primary">
              No Contexto Corporativo
            </h2>

            <p className="text-lg text-muted-foreground mb-8">
              Treinamento tradicional tem um problema sério: colaboradores esquecem <strong className="text-foreground">até 70% do conteúdo em apenas 24 horas</strong>. Não importa se é reciclagem anual de compliance, integração de novos funcionários ou workshop de habilidades — informação que chega de uma vez só, vai embora de uma vez só.
            </p>

            <Card className="p-8 bg-muted/50 mb-8">
              <h3 className="font-heading text-2xl text-center mb-8">
                O Que a Sappie Entrega para Empresas
              </h3>
              <div className="grid sm:grid-cols-2 gap-6">
                {corporateBenefits.map((benefit) => {
                  const Icon = benefit.icon;
                  return (
                    <Card key={benefit.title} className="p-6 text-center bg-background">
                      <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <h4 className="font-semibold text-lg primary-text mb-2">{benefit.title}</h4>
                      <p className="text-muted-foreground text-sm">{benefit.description}</p>
                    </Card>
                  );
                })}
              </div>
            </Card>

            <p className="text-lg text-muted-foreground">
              A repetição espaçada muda completamente esse cenário. Em vez de sessões intensivas esporádicas, o colaborador faz reforços curtos todos os dias: 5-10 minutos revisando políticas, procedimentos, conhecimento de produto ou especificações técnicas. O resultado? Retenção muito melhor com menos tempo total investido.
            </p>
          </div>
        </section>

        {/* Conclusão */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <h2 className="font-heading text-3xl lg:text-4xl mb-8 pb-4 border-b-2 border-primary">
              Conclusão
            </h2>

            <p className="text-lg text-muted-foreground mb-8">
              O modelo DSR é um avanço real na compreensão de como a memória humana funciona, e o algoritmo da Sappie transforma essa ciência em um sistema prático que entrega resultados superiores. A lógica é elegante: a memória tem uma dimensão de acesso imediato (recuperabilidade) e uma de durabilidade (estabilidade), ambas influenciadas pela dificuldade do conteúdo e pelo espaçamento das revisões.
            </p>

            <Card className="p-8 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-3">
                <Target className="w-6 h-6" />
                O Que Faz a Diferença
              </h3>
              <p className="text-primary-foreground/90">
                Os pilares do sucesso são: <strong>estudar um pouquinho todo dia</strong>, <strong>cards simples e diretos</strong> e <strong>paciência</strong> para deixar a estabilidade se construir com o tempo. Empresas que dominam essa abordagem ganham uma vantagem real no desenvolvimento das suas equipes.
              </p>
            </Card>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 bg-primary/10" aria-labelledby="cta-heading">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 id="cta-heading" className="font-heading text-4xl sm:text-5xl mb-6">
                Pronto para ver essa ciência <span className="primary-text">na prática</span>?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Agende uma demonstração e veja o algoritmo aplicado ao seu treinamento ou ensino
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <DemoCTA size="lg" showArrow className="text-lg px-8 py-6 glow-effect" />
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 group" asChild>
                  <Link href="/produtos">
                    Explorar flashcards
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <Footer />
        <BackToTop />
      </div>
    </>
  );
};

export default Ciencia;
