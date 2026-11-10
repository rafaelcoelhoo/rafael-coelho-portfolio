import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { DemoSites } from '@/components/demo-sites'
import { ClientSites } from '@/components/client-sites'
import { Included } from '@/components/included'
import { Pricing } from '@/components/pricing'
import { Contact } from '@/components/contact'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <>
      <Hero />
      <main>
        <About />
        <DemoSites />
        <ClientSites />
        <Included />
        <Pricing />
        <Contact />
      </main>
      <SiteFooter />
    </>
  )
}
