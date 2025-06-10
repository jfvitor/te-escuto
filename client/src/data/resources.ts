export interface Book {
  id: string;
  title: string;
  author: string;
  description: string;
  tags: string[];
  coverImage: string;
  amazonLink: string;
}

export interface Video {
  id: string;
  title: string;
  author: string;
  description: string;
  tags: string[];
  youtubeId: string;
  youtubeUrl: string;
}

export interface Article {
  id: string;
  title: string;
  source: string;
  description: string;
  tags: string[];
  url: string;
}

export const books: Book[] = [
  {
    id: "coragem-ser-imperfeito",
    title: "A Coragem de Ser Imperfeito",
    author: "Brené Brown",
    description: "Uma exploração sobre vulnerabilidade, vergonha e a importância de aceitar nossas imperfeições para construir relacionamentos mais autênticos e significativos.",
    tags: ["Autoestima", "Autoconhecimento"],
    coverImage: "https://m.media-amazon.com/images/I/61rRRbfINJL._SY425_.jpg",
    amazonLink: "https://amzn.to/3FO2j7j"
  },
  {
    id: "mulheres-que-correm-com-lobos",
    title: "Mulheres que Correm com os Lobos",
    author: "Clarissa Pinkola Estés",
    description: "Um mergulho profundo no arquétipo da mulher selvagem através de mitos e histórias ancestrais, ajudando mulheres a reconectarem-se com sua essência criativa, intuitiva e poderosa.",
    tags: ["Autoconhecimento", "Empoderamento"],
    coverImage: "https://m.media-amazon.com/images/I/51wMMDvGRhL._SY466_.jpg",
    amazonLink: "https://amzn.to/43VD2zY"
  },
  {
    id: "corpo-guarda-marcas",
    title: "O Corpo Guarda as Marcas",
    author: "Bessel van der Kolk",
    description: "Uma exploração sobre como o trauma afeta o corpo e a mente, oferecendo caminhos terapêuticos para curar feridas emocionais profundas e reconectar-se com o corpo.",
    tags: ["Trauma", "Cura", "Autoconhecimento"],
    coverImage: "https://m.media-amazon.com/images/I/71dQIhhXLwL._SY425_.jpg",
    amazonLink: "https://amzn.to/4dScS5K"
  },
  {
    id: "perigo-historia-unica",
    title: "O Perigo de Uma História Única",
    author: "Chimamanda Ngozi Adichie",
    description: "Uma reflexão sobre como estereótipos e narrativas simplificadas moldam nossas percepções, e como ampliar nosso entendimento através da diversidade de histórias.",
    tags: ["Perspectivas", "Diversidade"],
    coverImage: "https://m.media-amazon.com/images/I/71AGPh3u4HL._SY466_.jpg",
    amazonLink: "https://amzn.to/4kxPq05"
  },
];

export const videos: Video[] = [
  {
    id: "terapia-trauma",
    title: "Traumas Psicológicos Femininos: Caminhos para o Equilíbrio",
    author: "Podcast Terapiando",
    description: "Conversa profunda com especialistas sobre os desafios dos traumas psicológicos nas mulheres e caminhos para equilíbrio emocional.",
    tags: ["Autoestima", "Relacionamentos", "Psicologia"],
    youtubeId: "aV22IiM7nnU",
    youtubeUrl: "https://www.youtube.com/watch?v=aV22IiM7nnU"
  },
  {
    id: "sinais-relacionamento-abusivo",
    title: "Como Identificar um Relacionamento Tóxico",
    author: "Marcos Lacerda",
    description: "Aborda os 11 sinais de relacionamentos tóxicos, incluindo traços de abuso emocional e narcisismo, apresentados com clareza e autoridade",
    tags: ["Violência", "Sinais de alerta", "Prevenção"],
    youtubeId: "VCTWIsQ9R3w",
    youtubeUrl: "https://www.youtube.com/watch?v=VCTWIsQ9R3w"
  },
  {
    id: "terapia-trauma",
    title: "Como superar traumas emocionais",
    author: "Dicas do psicólogo",
    description: "Dicas práticas da psicologia para lidar e superar traumas emocionais, com abordagem terapêutica objetiva",
    tags: ["Trauma", "Cura", "Terapia"],
    youtubeId: "KFtk-v-KqL8",
    youtubeUrl: "https://www.youtube.com/watch?v=KFtk-v-KqL8"
  },
  {
    id: "empoderamento-feminino",
    title: "Psicologia e o Empoderamento Feminino",
    author: "Dra Silvana Bernardo",
    description: "Uma reflexões sobre como resgatar a autoestima, a autonomia e o empoderamento feminino sob o olhar da psicologia clínica.",
    tags: ["Empoderamento", "Feminino", "Autoconhecimento"],
    youtubeId: "Bsyk2PzEjyQ",
    youtubeUrl: "https://www.youtube.com/watch?v=Bsyk2PzEjyQ"
  }
];

export const articles: Article[] = [
  {
    id: "identificar-relacionamento-abusivo",
    title: "Como identificar um relacionamento abusivo",
    source: "Revista AzMina",
    description: "Muitas vezes, é difícil perceber que estamos em um relacionamento tóxico ou abusivo. Este artigo explora os sinais de alerta, padrões comportamentais e microagressões que podem indicar um relacionamento prejudicial. São discutidas também estratégias para buscar ajuda e recursos de apoio disponíveis para vítimas.",
    tags: ["Relacionamentos", "Abuso", "Sinais de alerta"],
    url: "https://azmina.com.br/reportagens/relacionamento-abusivo-15-sinais-de-que-voce-pode-estar-em-um/"
  },
  {
    id: "rede-apoio-feminina",
    title: "As redes de apoio garantem sobrevivência e acolhimento às mulheres",
    source: "Revista Claudia",
    description: "Como outras mulheres podem ser fundamentais no processo de cura e crescimento pessoal. O artigo explora a sororidade, grupos de apoio e como construir relacionamentos femininos saudáveis que promovem empoderamento mútuo e suporte emocional.",
    tags: ["Sororidade", "Rede de apoio", "Relacionamentos"],
    url: "https://claudia.abril.com.br/feminismo/mulheres-feminismo-redes-de-apoio/"
  }
];
