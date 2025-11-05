import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";

const PoliticaDePrivacidade = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <article className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Política de Privacidade</h1>
          <p className="text-muted-foreground mb-12">
            Última atualização: {new Date().toLocaleDateString('pt-BR')}
          </p>

          <section className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4">1. Introdução</h2>
              <p className="text-muted-foreground leading-relaxed">
                A Sappie está comprometida em proteger sua privacidade. Esta Política de Privacidade explica como 
                coletamos, usamos, armazenamos e protegemos suas informações pessoais quando você utiliza nossa plataforma.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">2. Informações que Coletamos</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Coletamos diferentes tipos de informações para fornecer e melhorar nossos serviços:
              </p>
              
              <h3 className="text-xl font-semibold mb-3 mt-6">2.1 Informações Fornecidas por Você</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Nome completo e e-mail ao criar sua conta</li>
                <li>Informações de perfil (foto, biografia, preferências)</li>
                <li>Conteúdo criado (flashcards, decks, anotações)</li>
                <li>Informações de pagamento (processadas por terceiros seguros)</li>
                <li>Comunicações com nosso suporte</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 mt-6">2.2 Informações Coletadas Automaticamente</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Dados de uso da plataforma (páginas visitadas, tempo de uso, funcionalidades utilizadas)</li>
                <li>Informações do dispositivo (tipo, sistema operacional, navegador)</li>
                <li>Endereço IP e dados de localização aproximada</li>
                <li>Cookies e tecnologias similares</li>
                <li>Dados de desempenho de aprendizado e progresso</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">3. Como Usamos suas Informações</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Utilizamos suas informações para:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Fornecer, operar e manter nossa plataforma</li>
                <li>Personalizar sua experiência de aprendizado</li>
                <li>Processar transações e gerenciar assinaturas</li>
                <li>Enviar notificações sobre atualizações e novos recursos</li>
                <li>Melhorar nossos serviços através de análises e pesquisas</li>
                <li>Detectar, prevenir e resolver problemas técnicos</li>
                <li>Cumprir obrigações legais e regulatórias</li>
                <li>Enviar comunicações de marketing (com seu consentimento)</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">4. Compartilhamento de Informações</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Não vendemos suas informações pessoais. Podemos compartilhar suas informações nas seguintes circunstâncias:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li><strong>Provedores de serviços:</strong> Empresas que nos auxiliam na operação da plataforma (hospedagem, análise, pagamentos)</li>
                <li><strong>Conteúdo público:</strong> Informações que você escolhe tornar públicas em seu perfil ou flashcards compartilhados</li>
                <li><strong>Obrigações legais:</strong> Quando exigido por lei ou para proteger direitos legais</li>
                <li><strong>Transferências empresariais:</strong> Em caso de fusão, aquisição ou venda de ativos</li>
                <li><strong>Com seu consentimento:</strong> Outras situações com sua autorização explícita</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">5. Armazenamento e Segurança dos Dados</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Implementamos medidas de segurança técnicas e organizacionais para proteger suas informações:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Criptografia de dados em trânsito e em repouso</li>
                <li>Controles de acesso rigorosos</li>
                <li>Monitoramento contínuo de segurança</li>
                <li>Auditorias regulares de segurança</li>
                <li>Treinamento de equipe em práticas de privacidade</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Seus dados são armazenados em servidores seguros e mantidos pelo tempo necessário para cumprir 
                as finalidades descritas nesta política ou conforme exigido por lei.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">6. Seus Direitos de Privacidade</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                De acordo com a LGPD (Lei Geral de Proteção de Dados), você tem os seguintes direitos:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li><strong>Acesso:</strong> Solicitar cópias de seus dados pessoais</li>
                <li><strong>Retificação:</strong> Corrigir dados incompletos ou imprecisos</li>
                <li><strong>Exclusão:</strong> Solicitar a exclusão de seus dados</li>
                <li><strong>Portabilidade:</strong> Receber seus dados em formato estruturado</li>
                <li><strong>Revogação de consentimento:</strong> Retirar consentimento para processamento de dados</li>
                <li><strong>Oposição:</strong> Opor-se ao processamento de seus dados em certas situações</li>
                <li><strong>Informação:</strong> Obter informações sobre o uso de seus dados</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Para exercer qualquer um desses direitos, entre em contato conosco através do formulário disponível 
                em nosso site.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">7. Cookies e Tecnologias Similares</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Utilizamos cookies e tecnologias similares para:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Manter você conectado à sua conta</li>
                <li>Lembrar suas preferências e configurações</li>
                <li>Analisar o uso da plataforma</li>
                <li>Personalizar conteúdo e anúncios</li>
                <li>Melhorar a segurança e detectar fraudes</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Você pode gerenciar suas preferências de cookies através das configurações do seu navegador.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">8. Privacidade de Menores</h2>
              <p className="text-muted-foreground leading-relaxed">
                Nossa plataforma não é direcionada a menores de 13 anos. Não coletamos intencionalmente informações 
                de crianças. Se você é pai ou responsável e acredita que seu filho forneceu informações pessoais, 
                entre em contato conosco para que possamos tomar as medidas apropriadas.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">9. Transferências Internacionais de Dados</h2>
              <p className="text-muted-foreground leading-relaxed">
                Seus dados podem ser transferidos e processados em países diferentes do seu país de residência. 
                Garantimos que tais transferências atendam aos requisitos de proteção de dados aplicáveis e 
                implementamos salvaguardas apropriadas.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">10. Alterações nesta Política</h2>
              <p className="text-muted-foreground leading-relaxed">
                Podemos atualizar esta Política de Privacidade periodicamente. Notificaremos você sobre mudanças 
                significativas através de aviso em nossa plataforma ou por e-mail. Recomendamos que você revise 
                esta política regularmente.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">11. Encarregado de Proteção de Dados</h2>
              <p className="text-muted-foreground leading-relaxed">
                Se você tiver dúvidas sobre o tratamento de seus dados pessoais ou desejar exercer seus direitos, 
                pode entrar em contato com nosso Encarregado de Proteção de Dados através do formulário disponível 
                em nosso site.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">12. Contato</h2>
              <p className="text-muted-foreground leading-relaxed">
                Para questões relacionadas à privacidade ou para exercer seus direitos, entre em contato conosco 
                através do formulário de contato disponível em nosso site ou pelos canais oficiais de comunicação.
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

export default PoliticaDePrivacidade;
