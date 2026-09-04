import { decodeEntities, postPath, posts } from '../lib/wp';

export const communityUrl = 'https://chat.whatsapp.com/HEfdXlvRTkwFM7hKxNWcP5';
export const introCourseUrl = 'https://cursos.aldeia.cc/courses/aulas-zero-curso-de-facilitacao/';

export const clientLogos = [
  'Prancheta-1-100.jpg',
  'Prancheta-1-copia-100.jpg',
  'Prancheta-1-copia-17-100.jpg',
  'Prancheta-1-copia-16-100.jpg',
  'Prancheta-1-copia-14-100.jpg',
  'Prancheta-1-copia-13-100.jpg',
  'Prancheta-1-copia-12-100.jpg',
  'Prancheta-1-copia-11-100.jpg',
  'Prancheta-1-copia-10-100.jpg',
  'Prancheta-1-copia-9-100.jpg',
  'Prancheta-1-copia-8-100.jpg',
  'Prancheta-1-copia-7-100.jpg',
  'Prancheta-1-copia-6-100.jpg',
  'Prancheta-1-copia-5-100.jpg',
  'Prancheta-1-copia-4-100.jpg',
  'Prancheta-1-copia-3-100.jpg',
  'Prancheta-1-copia-2-100.jpg',
].map((file) => ({
  src: `https://facilitr.org/wp-content/uploads/2024/06/${file}`,
  alt: '',
}));

export const blogCards = [
  {
    title: 'Montando a Agenda de um Workshop',
    excerpt: 'Nesta live, vamos mergulhar em detalhes práticos e estratégias essenciais para montar uma agenda de workshop que realmente funcione.',
    image: 'https://facilitr.org/wp-content/uploads/2023/06/image1-1024x576.png',
    slug: 'montando-a-agenda-de-um-workshop',
  },
  {
    title: 'Pensando fora da caixa: Estruturas Libertadoras',
    excerpt: 'Nesta live, vamos explorar técnicas de facilitação inovadoras desenvolvidas por Henri Lipmanowicz e Keith McCandless.',
    image: 'https://facilitr.org/wp-content/uploads/2023/06/image6-1024x576.png',
    slug: 'pensando-fora-da-caixa-estruturas-libertadoras',
  },
  {
    title: 'Teoria "U" na Facilitação',
    excerpt: 'Vamos mergulhar juntos nesta live onde exploraremos a fascinante Teoria U, que molda líderes, equipes e organizações ao redor do mundo.',
    image: 'https://facilitr.org/wp-content/uploads/2023/06/image4-1024x576.png',
    slug: 'teoria-u-na-facilitacao',
  },
  {
    title: 'Transforme Conflitos em Oportunidades',
    excerpt: 'Como um facilitador pode converter diálogos desafiadores em oportunidades significativas de aprendizado?',
    image: 'https://facilitr.org/wp-content/uploads/2023/06/image5-1024x576.png',
    slug: 'transforme-conflitos-em-oportunidades',
  },
].map((card) => {
  const post = posts.find((entry) => entry.slug === card.slug);
  return {
    ...card,
    title: post ? decodeEntities(post.title.rendered) : card.title,
    href: post ? postPath(post) : `/2023/06/21/${card.slug}/`,
  };
});

export const liveCards = [
  {
    speaker: 'Ricardo Dória',
    title: 'Como Lidar com Conflitos na Facilitação?',
    text: 'Afinal, quando tudo está legal, é até fácil facilitar. Entretanto, quando não está, o que podemos fazer para lidar com conflitos e desafios emocionais de forma eficaz?',
    youtube: 'https://www.youtube.com/embed/xJ7rv1_ZK1E',
    thumb: 'https://img.youtube.com/vi/xJ7rv1_ZK1E/hqdefault.jpg',
  },
  {
    speaker: 'Janine Saponara',
    title: 'Teoria U: Como Criar um Ambiente de Escuta Profunda e Empatia na Facilitação',
    text: 'A Teoria U, desenvolvida por Otto Scharmer, propõe um framework que facilita este tipo de ambiente, enfatizando a importância da escuta profunda e da empatia.',
    youtube: 'https://www.youtube.com/embed/qV6zX5W3bqk',
    thumb: 'https://img.youtube.com/vi/qV6zX5W3bqk/hqdefault.jpg',
  },
];

export const faqItems = [
  {
    question: 'O que é o Facilitr?',
    answer: [
      'Somos o primeiro Núcleo de Facilitação do Brasil.',
      'O Facilitr foi criado em parceria com a Aldeia InCompany, umas das frentes mais influentes em Facilitação do país. Temos a missão de formar e ajudar pessoas facilitadoras a se desenvolverem ainda mais.',
      'Além de conectar pessoas facilitadores, desenvolvemos o curso que foi projetado para capacitar indivíduos a se tornarem facilitadores e líderes mais eficazes.',
    ],
  },
  {
    question: 'O que preciso para fazer parte do núcleo?',
    answer: ['Somos uma comunidade de pessoas facilitadoras, por isso junte-se a nós se você já atua ou está iniciando na área.'],
  },
  {
    question: 'Ainda não sou facilitador, ou não sei o que é Facilitação:',
    answer: ['Nosso compromisso é transformar profissionais da facilitação, por isso, temos nosso curso Facilitr, entre em contato para saber mais.', 'Contato: (41) 3798-1698'],
  },
  {
    question: 'Preciso pagar para ser um membro?',
    answer: ['Não! O Facilitr é um núcleo para pessoas facilitadoras se conectarem, não existem cobranças.'],
  },
  {
    question: 'Como funciona o curso?',
    answer: [
      'Ao adquirir o curso, você terá uma experiência imersiva no mundo da facilitação. O curso é online, com aulas gravadas e ao vivo para dinâmicas em grupo.',
      'O curso tem duração de aproximadamente 10 horas, e você pode realizá-lo no seu tempo, sem pressa, como e quantas vezes quiser, com acesso vitalício.',
      'São 8 módulos, e cada módulo é liberado de forma gradativa porque o grupo colabora com o aperfeiçoamento do curso.',
    ],
  },
];
