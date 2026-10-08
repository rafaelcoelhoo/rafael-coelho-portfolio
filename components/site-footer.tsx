import { profile } from '@/lib/site-data'

export function SiteFooter() {
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-5 py-8 text-sm md:flex-row md:items-center md:justify-between md:px-8">
        <p>
          {profile.name} · {profile.location}
        </p>
        <ul className="flex flex-wrap gap-x-6 gap-y-2">
          <li>
            <a href={`mailto:${profile.email}`} className="underline-offset-4 hover:underline">
              {profile.email}
            </a>
          </li>
          <li>
            <a href={`tel:+351${profile.phoneDisplay.replace(/\s/g, '')}`} className="underline-offset-4 hover:underline">
              {profile.phoneDisplay}
            </a>
          </li>
          <li>
            <a href={profile.linkedinUrl} target="_blank" rel="noopener noreferrer" className="underline-offset-4 hover:underline">
              LinkedIn<span className="sr-only"> (abre numa nova janela)</span>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}
