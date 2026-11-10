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
  email: 'info@rafaelcoelho.pt',
  phoneDisplay: '910 265 723',
  whatsappUrl: `https://wa.me/351910265723?text=${encodeURIComponent(whatsappMessage)}`,
  linkedinUrl: 'https://www.linkedin.com/in/rafael-coelho-446869110',
  // Substitua pela sua foto, ex: '/images/rafael.jpg' (guardada em /public/images)
  photo: '/images/foto-perfil.jpeg?height=720&width=600',
}

export function whatsappLink(message: string) {
  return `https://wa.me/351910265723?text=${encodeURIComponent(message)}`
}

export type PricingPlan = {
  name: string
  price: string
  period: string
  description: string
  features: string[]
  cta: string
  message: string
  highlighted?: boolean
}

export const creationPlan: PricingPlan = {
  name: 'Criação do site',
  price: 'a partir de 150€',
  period: '+ IVA, pagamento único',
  description: 'Tudo o que precisa para ter o seu negócio online, sem ter de tratar de nada.',
  features: [
    'Site à medida do seu negócio',
    'Alojamento incluído no 1.º ano',
    'Domínio (o endereço, ex.: www.onegocio.pt) em seu nome',
    'Alterações de textos e imagens durante o 1.º ano (até 1 por mês)',
    'Pague só quando aprovar o resultado',
  ],
  cta: 'Pedir o meu site',
  message: 'Olá Rafael, gostaria de saber mais sobre a criação de um site (a partir de 150€).',
}

export const maintenancePlans: PricingPlan[] = [
  {
    name: 'Manutenção base',
    price: '75€',
    period: '/ano + IVA',
    description: 'Para quem não precisa de alterar o site com frequência.',
    features: [
      'Site sempre online (domínio, alojamento e certificado)',
      'Monitorização e correção de avarias',
      'Sem alterações de textos e imagens',
    ],
    cta: 'Escolher manutenção base',
    message: 'Olá Rafael, tenho interesse na manutenção base (75€/ano).',
  },
  {
    name: 'Manutenção com atualizações',
    price: '120€',
    period: '/ano + IVA',
    description: 'Para manter o site sempre atual, sem se preocupar.',
    features: [
      'Tudo o que inclui a manutenção base',
      'Atualização de textos e imagens, até 1 vez por mês',
      'Resposta em cerca de 5 dias úteis',
    ],
    cta: 'Escolher com atualizações',
    message: 'Olá Rafael, tenho interesse na manutenção com atualizações (120€/ano).',
    highlighted: true,
  },
]

export const pricingFaq = [
/*   {
    q: 'O domínio fica em meu nome?',
    a: 'Sim. Registo o domínio com os seus dados como titular. Se quiser sair, entrego-lhe o código de transferência e os ficheiros do site.',
  }, */
  {
    q: 'O que acontece se eu parar de pagar a manutenção?',
    a: 'O site deixa de ficar online e o domínio deixa de ser renovado, podendo expirar e perder-se. Se quiser sair, peça-me antes o código de transferência do domínio e os ficheiros do site para os levar para outro sítio.',
  },
  {
    q: 'O que conta como atualização?',
    a: 'Trocar textos, preços, horários e imagens que já existem no site. As atualizações não acumulam de um mês para o outro.',
  },
  {
    q: 'E se eu quiser uma nova secção ou página?',
    a: 'Novas secções, páginas ou funcionalidades são sempre orçamentadas à parte, sem compromisso.',
  },
  {
    q: 'Os preços incluem IVA?',
    a: 'Não. Todos os preços acrescem IVA à taxa legal em vigor.',
  },
  {
    q: 'Quanto tempo demora a fazer o site?',
    a: 'Normalmente até 2 semanas, dependendo do que precisa. Combinamos o prazo exato antes de começar.',
  },
  {
    q: 'E se eu não gostar do resultado?',
    a: 'Só paga quando aprovar o site.',
  },
]

export const brands = ['Ford', 'PUMA', 'Lindt', 'Nestlé']

export const credentials = [
  'Mais de 10 anos a desenvolver websites',
  'Especialista certificado em acessibilidade web (IAAP WAS)',
  'Formador em acessibilidade digital',
]

export type DemoSite = {
  name: string
  type: string
  url: string
  image: string
}

// Adicione aqui os seus sites de demonstração (3 ou 4 ficam ótimos).
// Guarde os screenshots em /public/images e use, por exemplo, '/images/salao-silva.jpg'.
export const demoSites: DemoSite[] = [
  {
    name: 'Barbearia de Bairro',
    type: 'Barbearia',
    url: 'https://barbearia-demonstracao.netlify.app/',
    image: '/images/barbearia.png',
  },
  {
    name: 'Oficina Ferreira',
    type: 'Oficina automóvel',
    url: 'https://oficinaferreira.netlify.app/',
    image: '/images/oficina2.png',
  },
]

export const clientSites: DemoSite[] = [
  {
    name: 'Doce Formula',
    type: 'Pastelaria artesanal',
    url: 'https://rafaelcoelhoo.github.io/joana-coelho/',
    image: '/images/doceformula.png',
  },
  {
    name: 'Mapa de Preços da Habitação',
    type: 'Imobiliário',
    url: 'https://pia-baeza-analise-imobiliaria.netlify.app/',
    image: '/images/mapa.png',
  },
]

export const included = [
  'Funciona bem no telemóvel e no computador',
  'Rápido e seguro (SSL)',
  'Aparece no Google (otimização básica e Google Search Console)',
  'Acessível a todos, segundo as normas europeias',
  '1.º ano de alojamento e domínio incluídos',
  'Suporte durante todo o desenvolvimento',
]

export const siteContents = [
  'Abertura com as suas fotografias, o logótipo e a cor da marca',
  'Sobre o negócio',
  'Serviços e preços, tal como os escreve',
  'Horário, morada e «Como chegar»',
  'Botões para ligar, WhatsApp e email, e formulário de contacto se preferir',
  'Galeria e perguntas frequentes',
  'Rodapé legal com o Livro de Reclamações',
]
