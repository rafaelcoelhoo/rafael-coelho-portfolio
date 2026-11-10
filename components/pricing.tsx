import { Check, ChevronDown, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { creationPlan, maintenancePlans, pricingFaq, whatsappLink, type PricingPlan } from '@/lib/site-data'

function PlanCard({ plan, headingLevel = 'h3' }: { plan: PricingPlan; headingLevel?: 'h3' | 'h4' }) {
  const Heading = headingLevel
  const highlighted = plan.highlighted
  return (
    <article
      className={`flex h-full flex-col gap-5 rounded-2xl border p-6 shadow-sm ${
        highlighted ? 'border-primary bg-primary text-primary-foreground' : 'border-border bg-card text-foreground'
      }`}
    >
      <div className="flex flex-col gap-2">
        {highlighted && (
          <p className="w-fit rounded-full bg-primary-foreground px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
            Recomendado
          </p>
        )}
        <Heading className="font-display text-xl font-bold">{plan.name}</Heading>
        <p className="flex flex-wrap items-baseline gap-x-2">
          <span className="font-display text-4xl font-bold">{plan.price}</span>
          <span className={`text-sm ${highlighted ? 'opacity-90' : 'text-muted-foreground'}`}>{plan.period}</span>
        </p>
        <p className={`leading-relaxed ${highlighted ? 'opacity-90' : 'text-muted-foreground'}`}>{plan.description}</p>
      </div>

      <ul className="flex flex-col gap-3">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3 leading-relaxed">
            <span
              className={`mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full ${
                highlighted ? 'bg-primary-foreground text-primary' : 'bg-primary text-primary-foreground'
              }`}
            >
              <Check className="size-3" aria-hidden="true" />
            </span>
            {feature}
          </li>
        ))}
      </ul>

      <Button
        asChild
        size="lg"
        variant={highlighted ? 'secondary' : 'default'}
        className="mt-auto h-12 px-6 text-base"
      >
        <a href={whatsappLink(plan.message)} target="_blank" rel="noopener noreferrer" className="whatsapp-cta">
          <MessageCircle className="size-5" aria-hidden="true" />
          {plan.cta}
          <span className="sr-only">(abre numa nova janela)</span>
        </a>
      </Button>
    </article>
  )
}

export function Pricing() {
  return (
    <section id="precos" aria-labelledby="precos-titulo" className="scroll-mt-6 border-t border-border">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-5 py-16 md:px-8 md:py-24">
        <div className="flex flex-col gap-4 md:max-w-2xl">
          <h2 id="precos-titulo" className="font-display text-3xl font-bold tracking-tight text-foreground md:text-5xl text-balance">
            Preços simples e transparentes
          </h2>
          <p className="leading-relaxed text-muted-foreground text-pretty">
            Um preço de criação único e, a partir do 2.º ano, escolhe a manutenção que faz sentido para si. Todos os
            preços acrescem IVA.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-[1fr_1.6fr]">
          <PlanCard plan={creationPlan} />
          <div className="flex flex-col gap-4">
            <h3 className="font-display text-xl font-bold text-foreground">A partir do 2.º ano, escolha a manutenção</h3>
            <div className="grid flex-1 gap-8 sm:grid-cols-2">
              {maintenancePlans.map((plan) => (
                <PlanCard key={plan.name} plan={plan} headingLevel="h4" />
              ))}
            </div>
          </div>
        </div>

        <p className="rounded-xl bg-accent px-4 py-3 leading-relaxed text-accent-foreground">
          Novas secções ou páginas são sempre orçamentadas à parte, sem compromisso.
        </p>

        <div className="grid gap-8 md:grid-cols-[1fr_1.6fr] md:gap-16">
          <div className="flex flex-col gap-3">
            <h3 className="font-display text-2xl font-bold tracking-tight text-foreground md:text-3xl">
              Perguntas frequentes
            </h3>
            <p className="leading-relaxed text-muted-foreground text-pretty">
              Não encontra a sua resposta? Fale comigo, sem compromisso.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            {pricingFaq.map((item) => (
              <details
                key={item.q}
                className="group rounded-xl border border-border bg-card shadow-sm transition-colors open:border-primary/40 open:shadow-md"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-xl px-5 py-4 font-semibold text-foreground marker:content-none hover:bg-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring [&::-webkit-details-marker]:hidden">
                  {item.q}
                  <ChevronDown
                    className="size-5 shrink-0 text-primary transition-transform duration-200 group-open:rotate-180 motion-reduce:transition-none"
                    aria-hidden="true"
                  />
                </summary>
                <p className="border-t border-border px-5 py-4 leading-relaxed text-muted-foreground">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
