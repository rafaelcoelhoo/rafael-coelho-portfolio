import { Mail, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { profile } from '@/lib/site-data'

export function Contact() {
  return (
    <section aria-labelledby="contacto-titulo" className="bg-primary text-primary-foreground">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-5 py-16 md:flex-row md:items-end md:justify-between md:px-8 md:py-20">
        <div className="flex max-w-xl flex-col gap-4">
          <h2 id="contacto-titulo" className="font-display text-3xl font-bold tracking-tight md:text-5xl text-balance">
            Vamos falar sobre o seu site?
          </h2>
          <p className="text-lg leading-relaxed opacity-90 text-pretty">
            Envie-me uma mensagem. Respondo rapidamente e sem compromisso.
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <Button asChild size="lg" variant="secondary" className="h-12 px-6 text-base">
            <a href={profile.whatsappUrl} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="size-5" aria-hidden="true" />
              Falar no WhatsApp
              <span className="sr-only">(abre numa nova janela)</span>
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="h-12 border-primary-foreground/40 bg-transparent px-6 text-base text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
          >
            <a href={`mailto:${profile.email}`}>
              <Mail className="size-5" aria-hidden="true" />
              Enviar email
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
