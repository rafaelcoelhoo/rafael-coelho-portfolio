/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Para GitHub Pages num repositório (ex: utilizador.github.io/meu-site), defina NEXT_PUBLIC_BASE_PATH=/meu-site
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  trailingSlash: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
