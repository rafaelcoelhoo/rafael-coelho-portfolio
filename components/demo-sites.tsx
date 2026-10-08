import Image from 'next/image'
import { ArrowUpRight, Info } from 'lucide-react'
import { asset, demoSites } from '@/lib/site-data'

export function DemoSites() {
  return (
    <section id="exemplos" aria-labelledby="exemplos-titulo" className="scroll-mt-6">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-5 py-16 md:px-8 md:py-24">
        <div className="flex flex-col gap-4 md:max-w-2xl">
          <h2 id="exemplos-titulo" className="font-display text-3xl font-bold tracking-tight text-foreground md:text-5xl text-balance">
            Veja como poderia ficar o seu site
          </h2>
          <p className="flex items-start gap-3 rounded-xl bg-accent px-4 py-3 leading-relaxed text-accent-foreground">
            <Info className="mt-1 size-4 shrink-0" aria-hidden="true" />
            <span>
              Estes negócios são sites de demonstração, criados para mostrar o tipo de trabalho que
              posso fazer para si.
            </span>
          </p>
        </div>

        <ul className="grid gap-8 md:grid-cols-2">
          {demoSites.map((site) => (
            <li key={site.name}>
              <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-shadow hover:shadow-lg focus-within:shadow-lg">
                <div className="flex items-center gap-1.5 border-b border-border bg-muted px-4 py-3" aria-hidden="true">
                  <span className="size-2.5 rounded-full bg-border" />
                  <span className="size-2.5 rounded-full bg-border" />
                  <span className="size-2.5 rounded-full bg-border" />
                </div>
                <div className="overflow-hidden">
                  <Image
                    src={asset(site.image) || '/placeholder.svg'}
                    alt={`Página inicial do site de demonstração ${site.name}`}
                    width={1200}
                    height={750}
                    className="aspect-[16/10] h-auto w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-2 p-6">
                  <p className="text-sm font-semibold uppercase tracking-widest text-primary">{site.type}</p>
                  <h3 className="font-display text-2xl font-bold text-foreground">
                    <a
                      href={site.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="after:absolute after:inset-0 focus-visible:outline-none after:rounded-2xl focus-visible:after:ring-2 focus-visible:after:ring-ring"
                    >
                      {site.name}
                      <span className="sr-only"> — ver site ao vivo (abre numa nova janela)</span>
                    </a>
                  </h3>
                  <p className="leading-relaxed text-muted-foreground">{site.description}</p>
                  <p className="mt-auto flex items-center gap-1 pt-3 font-semibold text-primary" aria-hidden="true">
                    Ver site ao vivo
                    <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </p>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
