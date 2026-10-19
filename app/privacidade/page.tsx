import { SiteFooter } from '@/components/site-footer'

export const metadata = {
  title: 'Política de Privacidade',
  description: 'Política de privacidade do site de Rafael Coelho',
}

export default function PrivacyPage() {
  return (
    <>
      <main className="min-h-screen bg-background">
        <div className="mx-auto max-w-3xl px-5 py-16 md:px-8 md:py-24">
          <h1 className="font-display text-4xl font-bold tracking-tight text-foreground md:text-5xl mb-8">
            Política de Privacidade
          </h1>

          <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Introdução</h2>
              <p>
                Esta Política de Privacidade descreve como o site de Rafael Coelho recolhe, utiliza e protege os dados pessoais dos utilizadores.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">2. Dados Recolhidos</h2>
              <p>
                Os dados pessoais são recolhidos apenas quando o utilizador contacta voluntariamente através de:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Formulário de contacto por email</li>
                <li>Mensagens via WhatsApp</li>
              </ul>
              <p className="mt-4">
                Os dados partilhados podem incluir, por exemplo, nome, endereço de email, número de telefone e conteúdo da mensagem, bem como quaisquer outros dados pessoais que o utilizador decida incluir no contacto.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">3. Utilização dos Dados</h2>
              <p>
                Os dados pessoais são utilizados exclusivamente para:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Responder às suas questões e pedidos</li>
                <li>Fornecer informações sobre serviços de criação de websites</li>
                <li>Manter contacto para seguimento de propostas comerciais</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">4. Cookies</h2>
              <p>
                Este site não utiliza cookies de rastreamento ou análise. Não recolhemos dados de navegação dos utilizadores.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Segurança dos Dados</h2>
              <p>
                Os dados pessoais são armazenados de forma segura e não são partilhados com terceiros, exceto quando legalmente obrigado.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">6. Retenção de Dados</h2>
              <p>
                Os dados pessoais são mantidos apenas pelo tempo necessário para responder ao seu contacto e para fins comerciais legítimos. Após este período, os dados são eliminados de forma segura.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">7. Seus Direitos</h2>
              <p>
                De acordo com a legislação de proteção de dados (RGPD), tem o direito de:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Aceder aos seus dados pessoais</li>
                <li>Corrigir dados incorretos</li>
                <li>Solicitar a eliminação dos seus dados</li>
                <li>Revogar o consentimento a qualquer momento</li>
              </ul>
              <p className="mt-4">
                Para exercer estes direitos, contacte-nos através de <a href="mailto:info@rafaelcoelho.pt" className="text-primary hover:underline">info@rafaelcoelho.pt</a>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">8. Alterações a Esta Política</h2>
              <p>
                Esta Política de Privacidade pode ser atualizada ocasionalmente. Qualquer alteração será publicada nesta página.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">9. Contacto</h2>
              <p>
                Para questões sobre esta Política de Privacidade, contacte-nos:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Email: <a href="mailto:info@rafaelcoelho.pt" className="text-primary hover:underline">info@rafaelcoelho.pt</a></li>
                <li>Telefone: +351 910 265 723</li>
              </ul>
            </section>

            <section className="pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground">
                Última atualização: {new Date().toLocaleDateString('pt-PT', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </section>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
