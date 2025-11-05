import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";

const TermosDeUso = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <article className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Termos e Condições de Uso da Plataforma Sappie</h1>
          <p className="text-muted-foreground mb-12">
            Última atualização: 16 de dezembro de 2024
          </p>

          <section className="space-y-8">
            {/* Introdução */}
            <div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Os presentes Termos e Condições de Uso da Plataforma Sappie (&quot;T&amp;C&quot;) regulam, em caráter geral, 
                o acesso e a utilização dos serviços disponibilizados por meio de plataforma, hospedada sob o 
                domínio <a href="https://www.sappie.com.br/" className="text-primary hover:underline">https://www.sappie.com.br/</a> (&quot;Plataforma Sappie&quot;) e de propriedade da <strong>SAPPIENS LTDA</strong>, 
                pessoa jurídica de direito privado, inscrita no CNPJ/MF sob o nº 55.658.740/0001-01, com os seus 
                atos constitutivos devidamente registrados na Junta Comercial do Estado de São Paulo sob o NIRE 
                35264238167, sede na Rua Doutor Ovidio Pires de Campos, S/N, Edif. CEAC, 5º Andar, bairro de 
                Cerqueira Cesar, São Paulo/SP, CEP: 05.403-010 (doravante simplesmente denominada &quot;SAPPIE&quot;).
              </p>

              <p className="text-muted-foreground leading-relaxed mb-4">
                Para fazer uso dos serviços de licenciamento de software oferecidos por meio da Plataforma Sappie, 
                voltados à criação e gestão de conteúdos educativos, como flashcards (&quot;Serviços Sappie&quot;), os 
                Usuários (conforme definidos a seguir) devem, por meio de aceite eletrônico, concordar, respeitar e 
                seguir todas as normas e diretrizes dispostas nestes Termos e Condições de Uso (&quot;T&amp;C&quot;).
              </p>

              <p className="text-muted-foreground leading-relaxed mb-4">
                Estes T&amp;C poderão sofrer alterações ao longo do tempo, por razões legais ou operacionais. Tais 
                alterações serão imediatamente disponibilizadas no endereço https://www.sappie.com.br/. Os 
                Usuários serão notificados por e-mail ou por notificação no aplicativo sempre que houver 
                modificações substanciais. A continuidade do uso da Plataforma Sappie após a publicação do aviso 
                e da nova versão destes T&amp;C implicará a aceitação das mudanças pelo Usuário.
              </p>

              <p className="text-muted-foreground leading-relaxed font-semibold">
                A utilização da Plataforma Sappie implica a compreensão, aceitação e vinculação dos Usuários aos 
                presentes T&amp;C.
              </p>
            </div>

            {/* 1. DEFINIÇÕES */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">1. Definições</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Para os fins destes T&amp;C, as palavras e expressões listadas abaixo, quando utilizadas com as 
                letras iniciais maiúsculas, no singular ou no plural, terão o seguinte sentido:
              </p>

              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2">a) Plataforma Sappie</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Sistema digital que permite a criação, gestão e comercialização de conteúdos educativos, como 
                    flashcards, por professores e criadores de conteúdo, bem como o acesso a tais conteúdos por 
                    consumidores finais. A plataforma oferece ferramentas para auxiliar na organização e 
                    desenvolvimento dos conteúdos, possibilitando a transformação de materiais educacionais em 
                    flashcards interativos e outros recursos pedagógicos que promovam o aprendizado.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">b) Usuário</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Criadores de conteúdo, professores, consumidores finais e outros usuários autorizados, bem como 
                    empregados, estagiários, prestadores de serviços, colaboradores e sócios da SAPPIE. Inclui 
                    qualquer pessoa que interaja com as funcionalidades da Plataforma de forma regular ou ocasional.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">c) Dados Pessoais</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Informações relacionadas a pessoa natural identificada ou identificável, coletadas, armazenadas 
                    e tratadas pela Plataforma Sappie, conforme definido na Política de Privacidade, abrangendo 
                    dados como nome, endereço de e-mail, localização e outros elementos que permitam identificar o 
                    indivíduo.
                  </p>
                </div>
              </div>
            </div>

            {/* 2. A PLATAFORMA SAPPIE */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">2. A Plataforma Sappie</h2>
              
              <h3 className="text-xl font-semibold mb-3 mt-6">2.1. Plataforma</h3>
              <p className="text-muted-foreground leading-relaxed">
                A Plataforma Sappie é um ambiente virtual que permite aos criadores de conteúdo, como professores e 
                educadores, desenvolver, gerenciar, comercializar e estudar flashcards. Por meio da Plataforma, os 
                criadores de conteúdo têm acesso a ferramentas que facilitam a criação de conteúdos interativos, e 
                o acompanhamento do desempenho de estudantes, oferecendo uma experiência educacional eficiente e 
                personalizada. Os estudantes também possuem acesso a plataforma de estudos por flashcards, com 
                ferramentas de gamificação.
              </p>

              <h3 className="text-xl font-semibold mb-3 mt-6">2.2. Tecnologias e Ferramentas</h3>
              <p className="text-muted-foreground leading-relaxed">
                A Plataforma Sappie disponibiliza tecnologias e ferramentas que auxiliam os criadores de conteúdo 
                na organização e gestão de materiais educacionais. Ela também facilita a comercialização desses 
                conteúdos, permitindo que os criadores de conteúdo vendam seus flashcards a outros usuários, 
                garantindo suporte técnico e administrativo necessário para o funcionamento da Plataforma. Além 
                disso, a Plataforma busca integrar soluções para o estudo e a gamificação do aprendizado, 
                promovendo maior engajamento.
              </p>

              <h3 className="text-xl font-semibold mb-3 mt-6">2.3. Finalidade</h3>
              <p className="text-muted-foreground leading-relaxed">
                Conforme autorizado por estes T&amp;C, a Plataforma Sappie tem como objetivo exclusivo fornecer um 
                ambiente para a criação, gestão e comercialização de conteúdos educativos por meio de flashcards. 
                Os Usuários não estão autorizados a utilizar a Plataforma para qualquer outra finalidade que não 
                seja essa, ou sem o consentimento expresso da Sappie. O uso não autorizado inclui, mas não se limita 
                a, propósitos fraudulentos, ilícitos ou que violem normas de conduta dispostas nestes T&amp;C.
              </p>

              <h3 className="text-xl font-semibold mb-3 mt-6">2.4. Vícios e Defeitos</h3>
              <p className="text-muted-foreground leading-relaxed">
                O Usuário concorda que qualquer software, independentemente de seu desenvolvedor ou de suas 
                características, está sempre em constante atualização e aperfeiçoamento. Aspectos da Plataforma 
                Sappie que venham a ser identificados pelos Usuários como passíveis de melhorias não serão 
                considerados falhas ou defeitos, mas, sim, oportunidades de aperfeiçoamento. Quaisquer melhorias 
                identificadas deverão ser comunicadas à Sappie para análise e, se necessário, a adoção de medidas 
                cabíveis.
              </p>

              <h3 className="text-xl font-semibold mb-3 mt-6">2.6. Modificação ou Encerramento da Plataforma</h3>
              <p className="text-muted-foreground leading-relaxed">
                A Sappie reserva-se o direito de modificar ou descontinuar, temporária ou permanentemente, a 
                Plataforma, ou partes dela, com ou sem aviso prévio. O Usuário concorda que a Sappie não será 
                responsabilizada, nem terá qualquer obrigação adicional, implícita ou explícita, em razão de 
                qualquer modificação, suspensão ou desativação da Plataforma.
              </p>
            </div>

            {/* 3. DO ACESSO, DA UTILIZAÇÃO E DO LICENCIAMENTO */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">3. Do Acesso, da Utilização e do Licenciamento da Plataforma Sappie</h2>
              
              <h3 className="text-xl font-semibold mb-3">3.1. Acesso</h3>
              <p className="text-muted-foreground leading-relaxed">
                O acesso à Plataforma Sappie é disponibilizado via aplicativo móvel ou interface web, acessíveis 
                pelos Usuários, por meio de e-mail cadastrado na plataforma e validação do e-mail via envio de 
                token eletrônico, temporário e individual, a ser inserido na Plataforma. Também serão adotadas 
                soluções de autenticação em duas etapas para maior segurança do Usuário.
              </p>

              <h3 className="text-xl font-semibold mb-3 mt-6">3.2. Cadastro</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Para a utilização da Plataforma Sappie, é necessário que o Usuário (i) envie as informações 
                solicitadas pela Sappie para a realização de cadastro.
              </p>

              <div className="ml-4 space-y-4">
                <div>
                  <h4 className="text-lg font-semibold mb-2">3.2.1. Aprovação de Cadastro</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    A Sappie poderá recusar qualquer solicitação de Cadastro, bem como cancelar Conta que esteja em 
                    desacordo com estes T&amp;C.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-2">3.2.2. Informações Prestadas</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Para realização do Cadastro, o Usuário deverá fornecer informações verdadeiras e completas. A 
                    Sappie reserva-se o direito de verificar a veracidade das informações fornecidas, podendo exigir 
                    documentação adicional para garantir a autenticidade dos dados submetidos.
                  </p>
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-3 mt-6">3.3. Penalidades</h3>
              <p className="text-muted-foreground leading-relaxed">
                A Sappie poderá, a seu exclusivo critério, suspender, bloquear, desativar ou, de qualquer outro 
                modo, encerrar o cadastro e o acesso do Usuário aos Serviços disponibilizados por meio da Plataforma 
                Sappie em casos de violação das normas. Além disso, serão aplicáveis medidas adicionais em situações 
                de reincidência.
              </p>
            </div>

            {/* 4. PRIVACIDADE E DADOS PESSOAIS */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">4. Privacidade e Dados Pessoais</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2">4.1. Política de Privacidade</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    A coleta, o uso e o tratamento de Dados Pessoais seguem as disposições da Política de Privacidade 
                    da Sappie, que integra estes T&amp;C como referência complementar.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">4.2. Legislações Aplicáveis</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Os Dados Pessoais serão tratados conforme legislações aplicáveis, incluindo LGPD, GDPR e CCPA.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">4.3. Compartilhamento com Terceiros</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Os Dados Pessoais poderão ser compartilhados com terceiros contratados para a prestação de 
                    serviços, respeitando as diretrizes legais e contratuais, garantindo-se a devida proteção e 
                    confidencialidade.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">4.4. Solicitações Legais</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Em caso de solicitações de autoridades legais ou judiciais, os Dados Pessoais poderão ser 
                    fornecidos nos limites da legislação aplicável.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">4.5. Direitos do Usuário</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    O Usuário tem direito de solicitar a exclusão de seus Dados Pessoais armazenados na Plataforma 
                    Sappie, conforme previsto na Política de Privacidade, ressalvadas as obrigações legais ou 
                    regulatórias que exijam sua manutenção. Além disso, o Usuário poderá solicitar informações 
                    detalhadas sobre o tratamento de seus dados.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">4.6. Segurança dos Dados</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    A Sappie implementa medidas técnicas e administrativas adequadas para proteger os Dados Pessoais 
                    contra acessos não autorizados, destruição, perda, alteração ou divulgação indevida. Estas medidas 
                    incluem criptografia, firewall e sistemas de detecção de intrusão.
                  </p>
                </div>
              </div>
            </div>

            {/* 5. DA PROPRIEDADE INTELECTUAL */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">5. Da Propriedade Intelectual</h2>
              
              <h3 className="text-xl font-semibold mb-3">5.1. Proteção de Direitos</h3>
              <p className="text-muted-foreground leading-relaxed">
                Todos os elementos da Plataforma Sappie estão protegidos por direitos de propriedade intelectual e 
                não podem ser usados sem autorização expressa da Sappie.
              </p>

              <h3 className="text-xl font-semibold mb-3 mt-6">5.2. Violações</h3>
              <p className="text-muted-foreground leading-relaxed">
                Qualquer reprodução ou redistribuição de conteúdo sem autorização prévia da Sappie será considerada 
                uma violação de direitos, sujeita às penalidades previstas em lei.
              </p>
            </div>

            {/* 6. SUPORTE E FUNCIONAMENTO */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">6. Suporte e Funcionamento</h2>
              
              <h3 className="text-xl font-semibold mb-3">6.1. Serviços de Suporte</h3>
              <p className="text-muted-foreground leading-relaxed">
                A Sappie prestará serviços de suporte e manutenção por meio de seus canais de atendimento, 
                garantindo que quaisquer problemas identificados sejam tratados conforme os prazos estabelecidos 
                neste documento.
              </p>
            </div>

            {/* Informações Adicionais */}
            <div className="border-t pt-8 mt-8">
              <h2 className="text-2xl font-semibold mb-4">Informações de Contato</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong>SAPPIENS LTDA</strong><br />
                CNPJ: 55.658.740/0001-01<br />
                NIRE: 35264238167<br />
                Endereço: Rua Doutor Ovidio Pires de Campos, S/N, Edif. CEAC, 5º Andar<br />
                Bairro: Cerqueira Cesar<br />
                São Paulo/SP - CEP: 05.403-010
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Para dúvidas sobre estes Termos e Condições de Uso, entre em contato através dos canais oficiais 
                disponíveis em nosso site.
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
