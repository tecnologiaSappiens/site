import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";

const TermosDeUso = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <article className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Termos de Uso</h1>
          <p className="text-muted-foreground mb-12">
            Última atualização: {new Date().toLocaleDateString('pt-BR')}
          </p>

          <section className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4">1. Aceitação dos Termos</h2>
              <p className="text-muted-foreground leading-relaxed">
                Ao acessar e usar a plataforma Sappie, você concorda em cumprir e estar vinculado a estes Termos de Uso. 
                Se você não concordar com qualquer parte destes termos, não deverá usar nossos serviços.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">2. Descrição do Serviço</h2>
              <p className="text-muted-foreground leading-relaxed">
                O Sappie é uma plataforma de flashcards inteligentes que utiliza técnicas de repetição espaçada 
                para otimizar o aprendizado. Oferecemos serviços para alunos, criadores de conteúdo, empresas e 
                instituições de ensino.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">3. Cadastro e Conta do Usuário</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Para utilizar determinadas funcionalidades da plataforma, você precisará criar uma conta. Ao criar uma conta, você concorda em:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Fornecer informações verdadeiras, precisas e completas</li>
                <li>Manter a segurança de sua senha e conta</li>
                <li>Notificar-nos imediatamente sobre qualquer uso não autorizado de sua conta</li>
                <li>Ser responsável por todas as atividades que ocorram em sua conta</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">4. Uso Aceitável</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Você concorda em não usar a plataforma para:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Violar qualquer lei ou regulamento aplicável</li>
                <li>Infringir direitos de propriedade intelectual de terceiros</li>
                <li>Transmitir conteúdo ofensivo, difamatório ou ilegal</li>
                <li>Interferir ou interromper o funcionamento da plataforma</li>
                <li>Tentar obter acesso não autorizado a sistemas ou redes</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">5. Conteúdo do Usuário</h2>
              <p className="text-muted-foreground leading-relaxed">
                Você mantém todos os direitos sobre o conteúdo que criar na plataforma. Ao publicar conteúdo, 
                você concede ao Sappie uma licença mundial, não exclusiva e isenta de royalties para usar, 
                reproduzir e distribuir seu conteúdo conforme necessário para fornecer os serviços.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">6. Propriedade Intelectual</h2>
              <p className="text-muted-foreground leading-relaxed">
                A plataforma Sappie, incluindo seu design, funcionalidades, código-fonte e conteúdo original, 
                são de propriedade exclusiva da Sappie e estão protegidos por leis de propriedade intelectual.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">7. Assinaturas e Pagamentos</h2>
              <p className="text-muted-foreground leading-relaxed">
                Alguns serviços da plataforma podem requerer pagamento. Ao assinar um plano pago, você concorda 
                em pagar todas as taxas aplicáveis. As assinaturas são renovadas automaticamente, a menos que 
                canceladas antes do período de renovação.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">8. Cancelamento e Reembolso</h2>
              <p className="text-muted-foreground leading-relaxed">
                Você pode cancelar sua assinatura a qualquer momento através das configurações de sua conta. 
                Os reembolsos serão concedidos de acordo com nossa política de reembolso, disponível mediante solicitação.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">9. Limitação de Responsabilidade</h2>
              <p className="text-muted-foreground leading-relaxed">
                O Sappie não será responsável por quaisquer danos indiretos, incidentais, especiais ou 
                consequenciais decorrentes do uso ou incapacidade de usar a plataforma.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">10. Modificações dos Termos</h2>
              <p className="text-muted-foreground leading-relaxed">
                Reservamos o direito de modificar estes termos a qualquer momento. As alterações entrarão em 
                vigor imediatamente após a publicação. O uso continuado da plataforma após as alterações 
                constitui aceitação dos novos termos.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">11. Rescisão</h2>
              <p className="text-muted-foreground leading-relaxed">
                Podemos suspender ou encerrar sua conta e acesso à plataforma a qualquer momento, sem aviso 
                prévio, por violação destes termos ou por qualquer outro motivo a nosso exclusivo critério.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">12. Lei Aplicável</h2>
              <p className="text-muted-foreground leading-relaxed">
                Estes termos serão regidos e interpretados de acordo com as leis do Brasil. Qualquer disputa 
                relacionada a estes termos será submetida à jurisdição exclusiva dos tribunais brasileiros.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">13. Contato</h2>
              <p className="text-muted-foreground leading-relaxed">
                Se você tiver dúvidas sobre estes Termos de Uso, entre em contato conosco através do formulário 
                disponível em nosso site.
              </p>
            </div>
          </section>
        </article>
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
};

export default TermosDeUso;

