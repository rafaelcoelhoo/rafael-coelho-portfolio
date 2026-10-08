import type { Metadata, Viewport } from 'next'
import { Bricolage_Grotesque, Manrope } from 'next/font/google'
import './globals.css'

const display = Bricolage_Grotesque({ subsets: ['latin'], variable: '--font-bricolage' })
const body = Manrope({ subsets: ['latin'], variable: '--font-manrope' })

export const metadata: Metadata = {
  title: 'Rafael Coelho · Criação de Websites para Negócios Locais em Ovar',
  description:
    'Websites simples, rápidos e profissionais para negócios locais em Ovar e arredores. Mais de 10 anos de experiência com marcas como Ford, PUMA, Lindt e Nestlé.',
}

export const viewport: Viewport = {
  themeColor: '#2a4fa3',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-PT" className={`${display.variable} ${body.variable} bg-background`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
