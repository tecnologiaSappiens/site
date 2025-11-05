import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";

const LGPD = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <article className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">LGPD - Lei Geral de Proteção de Dados</h1>
          <p className="text-muted-foreground mb-12">
            Última atualização: {new Date().toLocaleDateString('pt-BR')}
          </p>

          <section className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4">O que é a LGPD?</h2>
              <p className="text-muted-foreground leading-relaxed">
                A Lei Geral de Proteção de Dados (Lei nº 13.709/2018) é a legislação brasileira que regula o 
                tratamento de dados pessoais, tanto no meio físico quanto digital, por pessoas naturais ou jurídicas, 
                de direito público ou privado. A LGPD tem como objetivo proteger os direitos fundamentais de 
                liberdade e privacidade, e garantir o livre desenvolvimento da personalidade da pessoa natural.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Compromisso da Sappie com a LGPD</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                A Sappie está totalmente comprometida com a proteção dos dados pessoais de seus usuários e com 
                o cumprimento integral da LGPD. Implementamos processos, políticas e medidas técnicas para garantir 
                que todos os dados pessoais sejam tratados de forma segura, transparente e em conformidade com a lei.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Seus Direitos sob a LGPD</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Como titular de dados pessoais, você possui os seguintes direitos garantidos pela LGPD:
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">1. Direito de Confirmação e Acesso</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Você pode solicitar a confirmação da existência de tratamento de seus dados pessoais e obter 
                    acesso aos dados que mantemos sobre você.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">2. Direito de Correção</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Você pode solicitar a correção de dados incompletos, inexatos ou desatualizados.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">3. Direito de Anonimização, Bloqueio ou Eliminação</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Você pode solicitar a anonimização, bloqueio ou eliminação de dados desnecessários, excessivos 
                    ou tratados em desconformidade com a LGPD.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">4. Direito de Portabilidade</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Você pode solicitar a portabilidade de seus dados a outro fornecedor de serviço ou produto, 
                    mediante requisição expressa, de acordo com a regulamentação da autoridade nacional.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">5. Direito de Informação sobre Compartilhamento</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Você tem o direito de obter informações sobre as entidades públicas e privadas com as quais 
                    compartilhamos seus dados.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">6. Direito de Informação sobre a Possibilidade de Não Fornecer Consentimento</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Você tem o direito de ser informado sobre as consequências de não fornecer o consentimento 
                    para o tratamento de seus dados.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">7. Direito de Revogação do Consentimento</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Você pode revogar o consentimento para o tratamento de seus dados a qualquer momento, 
                    mediante manifestação expressa.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">8. Direito de Oposição</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Você pode se opor ao tratamento de seus dados quando este for realizado em desconformidade 
                    com a LGPD.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">9. Direito de Revisão de Decisões Automatizadas</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Você tem o direito de solicitar a revisão de decisões tomadas unicamente com base em 
                    tratamento automatizado de dados pessoais que afetem seus interesses.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Bases Legais para Tratamento de Dados</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                A Sappie trata dados pessoais com base nas seguintes hipóteses legais previstas na LGPD:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li><strong>Consentimento:</strong> Quando você fornece consentimento expresso e inequívoco para o tratamento</li>
                <li><strong>Execução de contrato:</strong> Para cumprir obrigações contratuais ou procedimentos preliminares</li>
                <li><strong>Legítimo interesse:</strong> Para atender aos interesses legítimos do controlador ou de terceiros</li>
                <li><strong>Exercício regular de direitos:</strong> Em processos judiciais, administrativos ou arbitrais</li>
                <li><strong>Proteção da vida:</strong> Quando necessário para proteção da vida ou incolumidade física</li>
                <li><strong>Tutela da saúde:</strong> Para procedimentos realizados por profissionais de saúde</li>
                <li><strong>Cumprimento de obrigação legal:</strong> Para cumprir com obrigações legais ou regulatórias</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Medidas de Segurança</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Para garantir a proteção dos seus dados pessoais, a Sappie implementa medidas de segurança 
                técnicas e administrativas, incluindo:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Criptografia de dados sensíveis em trânsito e em repouso</li>
                <li>Controles de acesso baseados em função e privilégio mínimo</li>
                <li>Monitoramento contínuo de segurança e detecção de ameaças</li>
                <li>Auditorias regulares de segurança e privacidade</li>
                <li>Treinamento contínuo da equipe em proteção de dados</li>
                <li>Plano de resposta a incidentes de segurança</li>
                <li>Backup regular e procedimentos de recuperação de desastres</li>
                <li>Políticas rigorosas de retenção e descarte de dados</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Encarregado de Proteção de Dados (DPO)</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                A Sappie designou um Encarregado de Proteção de Dados (Data Protection Officer - DPO) responsável 
                por aceitar reclamações e comunicações dos titulares, prestar esclarecimentos e adotar providências.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Para entrar em contato com nosso DPO sobre questões relacionadas à LGPD ou para exercer seus 
                direitos, utilize o formulário de contato disponível em nosso site.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Tratamento de Dados de Menores</h2>
              <p className="text-muted-foreground leading-relaxed">
                O tratamento de dados pessoais de crianças e adolescentes é realizado com o consentimento específico 
                e em destaque dado por pelo menos um dos pais ou pelo responsável legal. Nossa plataforma não é 
                direcionada a menores de 13 anos e não coletamos intencionalmente dados de crianças nessa faixa etária 
                sem o consentimento parental adequado.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Transferência Internacional de Dados</h2>
              <p className="text-muted-foreground leading-relaxed">
                Quando realizamos transferências internacionais de dados pessoais, garantimos que o país de destino 
                ou a organização internacional proporcione grau de proteção de dados adequado, ou implementamos 
                salvaguardas apropriadas, tais como cláusulas contratuais específicas, normas corporativas globais, 
                ou selos, certificados e códigos de conduta regularmente emitidos.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Retenção de Dados</h2>
              <p className="text-muted-foreground leading-relaxed">
                Mantemos seus dados pessoais apenas pelo tempo necessário para cumprir as finalidades para as quais 
                foram coletados, incluindo para fins de cumprimento de obrigações legais, regulatórias, contábeis ou 
                de relatórios. Para determinar o período de retenção apropriado, consideramos a quantidade, natureza 
                e sensibilidade dos dados, o risco potencial de dano por uso não autorizado ou divulgação, e os 
                requisitos legais aplicáveis.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Notificação de Incidentes</h2>
              <p className="text-muted-foreground leading-relaxed">
                Em caso de incidente de segurança que possa acarretar risco ou dano relevante aos titulares de dados, 
                a Sappie se compromete a comunicar à Autoridade Nacional de Proteção de Dados (ANPD) e aos titulares 
                afetados em prazo adequado, conforme estabelecido pela LGPD e suas regulamentações.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Como Exercer seus Direitos</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Para exercer qualquer um dos seus direitos sob a LGPD, você pode:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Utilizar o formulário de contato disponível em nosso site</li>
                <li>Acessar as configurações de privacidade em sua conta</li>
                <li>Entrar em contato com nosso Encarregado de Proteção de Dados</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Responderemos às suas solicitações dentro dos prazos estabelecidos pela LGPD, mediante validação de 
                sua identidade. Caso sua solicitação seja negada, forneceremos justificativa fundamentada.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Autoridade Nacional de Proteção de Dados (ANPD)</h2>
              <p className="text-muted-foreground leading-relaxed">
                Você tem o direito de apresentar reclamação à Autoridade Nacional de Proteção de Dados (ANPD) se 
                considerar que o tratamento de seus dados pessoais viola a LGPD. No entanto, encorajamos você a 
                entrar em contato conosco primeiro para que possamos resolver suas preocupações diretamente.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Atualizações desta Página</h2>
              <p className="text-muted-foreground leading-relaxed">
                Esta página pode ser atualizada periodicamente para refletir mudanças na legislação ou em nossas 
                práticas de tratamento de dados. Notificaremos você sobre alterações significativas através de 
                aviso em nossa plataforma ou por e-mail.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Contato</h2>
              <p className="text-muted-foreground leading-relaxed">
                Para questões relacionadas à LGPD ou para exercer seus direitos, entre em contato conosco através 
                do formulário de contato disponível em nosso site ou pelos canais oficiais de comunicação.
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

export default LGPD;
