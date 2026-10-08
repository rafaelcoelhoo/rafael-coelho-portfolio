const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

export function asset(path: string) {
  if (path.startsWith('http')) return path
  return `${basePath}${path}`
}

const whatsappMessage =
  'Olá Rafael, vi o seu site e gostaria de saber mais sobre a criação de um website para o meu negócio.'

export const profile = {
  name: 'Rafael Coelho',
  role: 'Criação de Websites para Negócios Locais',
  location: 'Ovar, Aveiro',
  email: 'rafaelcoelhoo77@gmail.com',
  phoneDisplay: '961 969 601',
  whatsappUrl: `https://wa.me/351961969601?text=${encodeURIComponent(whatsappMessage)}`,
  linkedinUrl: 'https://www.linkedin.com/in/rafael-coelho-446869110',
  // Substitua pela sua foto, ex: '/images/rafael.jpg' (guardada em /public/images)
  photo: '/images/fotografia.jpeg?height=720&width=600',
}

export const brands = ['Ford', 'PUMA', 'Lindt', 'Nestlé']

export const credentials = [
  'Mais de 10 anos a desenvolver websites',
  'Especialista certificado em acessibilidade web (IAAP WAS)',
  'Formador em acessibilidade digital',
]

export type DemoSite = {
  name: string
  type: string
  description: string
  url: string
  image: string
}

// Adicione aqui os seus sites de demonstração (3 ou 4 ficam ótimos).
// Guarde os screenshots em /public/images e use, por exemplo, '/images/salao-silva.jpg'.
export const demoSites: DemoSite[] = [
  {
    name: 'Salão Silva',
    type: 'Cabeleireiro',
    description: 'Serviços, preços, horário e marcações rápidas por WhatsApp.',
    url: '#',
    image: '/placeholder.svg?height=750&width=1200',
  },
  {
    name: 'Clínica Ovar',
    type: 'Clínica de saúde',
    description: 'Especialidades, equipa, localização e contacto direto.',
    url: '#',
    image: '/placeholder.svg?height=750&width=1200',
  },
]

export const included = [
  {
    title: 'Site à medida do seu negócio',
    text: 'Design pensado para a sua área, com as suas fotos, serviços e identidade.',
  },
  {
    title: 'Perfeito no telemóvel',
    text: 'A maioria dos seus clientes vai visitar o site pelo telemóvel. Fica rápido e fácil de usar.',
  },
  {
    title: 'Fácil de encontrar e de contactar',
    text: 'Otimização básica para o Google, mapa, horário e botão direto para WhatsApp e telefone.',
  },
  {
    title: 'Acessível a todos',
    text: 'Construído segundo as normas europeias de acessibilidade, para que ninguém fique de fora.',
  },
]
