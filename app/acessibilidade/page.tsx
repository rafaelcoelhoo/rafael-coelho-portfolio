import { SiteFooter } from '@/components/site-footer'
import { profile } from '@/lib/site-data'

export const metadata = {
  title: 'Declaração de Acessibilidade',
  description: 'Declaração de acessibilidade do site de Rafael Coelho',
}

export default function AccessibilityPage() {
  return (
    <>
      <main className="min-h-screen bg-background">
        <div className="mx-auto max-w-3xl px-5 py-16 md:px-8 md:py-24">
          <a href="/" className="mb-6 inline-block font-medium text-primary">
            ← Voltar à página inicial
          </a>
          <h1 className="font-display text-4xl font-bold tracking-tight text-foreground md:text-5xl mb-8">
            Declaração de Acessibilidade
          </h1>

          <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Compromisso com a Acessibilidade</h2>
              <p>
                Rafael Coelho está empenhado em garantir a acessibilidade digital do seu website para todas as pessoas, incluindo aquelas com deficiências. Estamos continuamente a melhorar a experiência do utilizador para todos e a aplicar as normas de acessibilidade relevantes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Conformidade com Normas</h2>
              <p>
                Este website está em conformidade com as <a href="https://www.w3.org/WAI/WCAG22/quickref/">Diretrizes de Acessibilidade para Conteúdo Web (WCAG) 2.2</a> nível AA, estabelecidas pelo <a href="https://www.w3.org/WAI/">Web Accessibility Initiative (WAI)</a> do W3C.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Características de Acessibilidade</h2>
              <p>Este website inclui as seguintes características de acessibilidade:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Estrutura semântica HTML adequada para navegação com leitores de ecrã</li>
                <li>Contraste de cores que cumpre os requisitos WCAG AA</li>
                <li>Texto alternativo descritivo para todas as imagens</li>
                <li>Navegação por teclado completamente funcional</li>
                <li>Indicadores de foco visíveis para navegação por teclado</li>
                <li>Sem dependência de cor como único meio de transmitir informação</li>
                <li>Sem uso de cookies de rastreamento</li>
                <li>Links sublinhados para melhor identificação</li>
                <li>Tamanho de fonte legível e escalável</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Tecnologias Utilizadas</h2>
              <p>
                Este website é construído com tecnologias web acessíveis, incluindo HTML semântico, CSS moderno e JavaScript progressivo. Utilizamos frameworks e bibliotecas que seguem as melhores práticas de acessibilidade.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Limitações Conhecidas</h2>
              <p>
                Apesar dos nossos esforços, podem existir limitações de acessibilidade em algumas áreas do website. Estamos continuamente a trabalhar para identificar e resolver qualquer problema.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Feedback e Contacto</h2>
              <p>
                Se encontrar algum problema de acessibilidade neste website ou tiver sugestões para melhorias, por favor contacte-nos:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  Email: <a href={`mailto:${profile.email}`}>{profile.email}</a>
                </li>
                <li>
                  Telefone: <a href={`tel:+351${profile.phoneDisplay.replace(/\s/g, '')}`}>{profile.phoneDisplay}</a>
                </li>
                <li>
                  WhatsApp: <a href={profile.whatsappUrl} target="_blank" rel="noopener noreferrer">Enviar mensagem via WhatsApp<span className="sr-only"> (abre numa nova janela)</span></a>
                </li>
              </ul>
              <p className="mt-4">
                Responderemos ao seu feedback no prazo de 5 dias úteis.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Recursos de Acessibilidade</h2>
              <p>
                Para mais informações sobre acessibilidade web, consulte os seguintes recursos:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <a href="https://www.w3.org/WAI/">Web Accessibility Initiative (WAI)</a>
                </li>
                <li>
                  <a href="https://www.w3.org/WAI/WCAG22/quickref/">WCAG 2.2 Quick Reference</a>
                </li>
                <li>
                  <a href="https://www.w3.org/WAI/test-evaluate/">Evaluating Web Accessibility</a>
                </li>
                <li>
                  <a href="https://www.acessibilidade.gov.pt/">Portal de Acessibilidade (Portugal)</a>
                </li>
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
