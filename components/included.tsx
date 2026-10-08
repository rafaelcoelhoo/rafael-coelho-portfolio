import { included } from '@/lib/site-data'

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
            <p className="font-display text-2xl font-bold text-foreground">Proposta personalizada</p>
            <p className="text-sm leading-relaxed text-muted-foreground">Sem compromisso, ajustada ao que precisa.</p>
          </div>
        </div>

        <ul className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
          {included.map((item) => (
            <li key={item.title} className="flex flex-col gap-2 bg-card p-6">
              <span className="azulejo-mini size-8 rounded-md" aria-hidden="true" />
              <h3 className="pt-2 font-display text-lg font-bold text-foreground">{item.title}</h3>
              <p className="leading-relaxed text-muted-foreground">{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
