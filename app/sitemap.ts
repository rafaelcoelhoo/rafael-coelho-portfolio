import type { MetadataRoute } from 'next'

export const dynamic = 'force-static'

const siteUrl = 'https://rafaelcoelho.pt'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${siteUrl}/`,
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${siteUrl}/privacidade/`,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${siteUrl}/acessibilidade/`,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]
}
