import { Check } from 'lucide-react'
import { brands, credentials } from '@/lib/site-data'

export function About() {
  return (
    <section aria-labelledby="sobre-titulo" className="border-y border-border bg-card">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-16 md:grid-cols-2 md:gap-16 md:px-8 md:py-20">
        <div className="flex flex-col gap-5">
          <h2 id="sobre-titulo" className="font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Quem sou
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground text-pretty">
            Sou programador web há mais de 10 anos. Trabalho numa agência internacional a criar sites para grandes
            marcas e agora quero pôr essa experiência ao serviço dos negócios da minha zona, com um contacto
            próximo e sem complicações.
          </p>
          <ul className="flex flex-col gap-3">
            {credentials.map((item) => (
              <li key={item} className="flex items-start gap-3 leading-relaxed text-foreground">
                <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Check className="size-3" aria-hidden="true" />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col justify-center gap-5">
          <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            Marcas com que já trabalhei
          </h3>
          <ul className="grid grid-cols-2 gap-3">
            {brands.map((brand) => (
              <li
                key={brand}
                className="flex h-20 items-center justify-center rounded-xl border border-border bg-background font-display text-2xl font-bold tracking-tight text-foreground"
              >
                {brand}
              </li>
            ))}
          </ul>
          <p className="text-sm leading-relaxed text-muted-foreground">Projetos desenvolvidos através da agência VML.</p>
        </div>
      </div>
    </section>
  )
}
