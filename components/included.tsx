import { Check } from 'lucide-react'
import { included, siteContents } from '@/lib/site-data'

function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-col gap-3">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 leading-relaxed text-foreground">
          <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <Check className="size-3" aria-hidden="true" />
          </span>
          {item}
        </li>
      ))}
    </ul>
  )
}

export function Included() {
  return (
    <section aria-labelledby="inclui-titulo" className="border-t border-border bg-card">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-16 md:grid-cols-[1fr_1.6fr] md:gap-16 md:px-8 md:py-24">
        <div className="flex flex-col gap-5">
          <h2 id="inclui-titulo" className="font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
            O que inclui
          </h2>
          <p className="leading-relaxed text-muted-foreground text-pretty">
            Trato de tudo, do início ao fim. Só precisa de me dizer como é o seu negócio.
          </p>
          <div className="flex flex-col gap-1 rounded-xl border border-border bg-background p-5">
            <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">Preço</p>
            <p className="font-display text-2xl font-bold text-foreground">A partir de 249€ + IVA</p>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Pague só quando aprovar.{' '}
              <a href="#precos" className="font-semibold text-primary">
                Ver preços
              </a>
            </p>
          </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          <div className="flex flex-col gap-4">
            <h3 className="font-display text-lg font-bold text-foreground">Todos os sites incluem</h3>
            <CheckList items={included} />
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="font-display text-lg font-bold text-foreground">O que o seu site tem</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Um site de página única com estas secções. Você fornece as fotos, o logótipo e os textos.
            </p>
            <CheckList items={siteContents} />
          </div>
        </div>
      </div>
    </section>
  )
}
