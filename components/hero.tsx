import Image from 'next/image'
import { ArrowDown, MapPin, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { asset, profile } from '@/lib/site-data'

export function Hero() {
  return (
    <header className="mx-auto grid w-full max-w-6xl items-center gap-10 px-5 pb-16 pt-10 md:grid-cols-[1.15fr_1fr] md:gap-16 md:px-8 md:pb-24 md:pt-16">
      <div className="flex flex-col gap-6 motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-4 motion-safe:duration-700">
        <p className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
          <MapPin className="size-4 text-primary" aria-hidden="true" />
          {profile.location}
        </p>

        <div className="flex flex-col gap-3">
          <h1 className="font-display text-5xl font-bold leading-none tracking-tight text-foreground md:text-7xl">
            {profile.name}
          </h1>
          <p className="font-display text-2xl font-medium text-primary text-balance md:text-3xl">
            {profile.role}
          </p>
        </div>

        <p className="max-w-md text-lg leading-relaxed text-muted-foreground text-pretty">
          Sites simples, rápidos e profissionais, para que os seus clientes o encontrem e o contactem.
        </p>

        <div className="flex flex-col gap-3 sm:flex-row">
          <Button asChild size="lg" className="h-12 px-6 text-base">
            <a href={profile.whatsappUrl} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="size-5" aria-hidden="true" />
              Falar no WhatsApp
              <span className="sr-only">(abre numa nova janela)</span>
            </a>
          </Button>
          <Button asChild size="lg" variant="outline" className="h-12 bg-card px-6 text-base">
            <a href="#exemplos">
              Ver exemplos
              <ArrowDown className="size-4" aria-hidden="true" />
            </a>
          </Button>
        </div>
      </div>

      <div className="relative mx-auto w-[90%] max-w-[26rem] motion-safe:animate-in motion-safe:fade-in motion-safe:duration-1000">
        <div className="azulejo rounded-2xl p-5 md:p-7">
          <div className="overflow-hidden rounded-xl border-4 border-card bg-card shadow-xl">
            <Image
              src={asset(profile.photo) || '/placeholder.svg'}
              alt=""
              width={600}
              height={720}
              priority
              className="aspect-[5/6] h-auto w-full object-cover"
            />
          </div>
        </div>
        <p className="absolute -bottom-4 left-4 rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background shadow-lg md:left-auto md:right-6">
          Ovar, cidade do azulejo
        </p>
      </div>
    </header>
  )
}
