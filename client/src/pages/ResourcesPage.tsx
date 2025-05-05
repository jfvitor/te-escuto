import { Link } from "wouter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faBook, 
  faNewspaper, 
  faVideo,
  faExternalLinkAlt,
  faHeart,
  faChevronRight,
  faArrowUp
} from "@fortawesome/free-solid-svg-icons";
import Navbar from "@/components/Navbar";

export default function ResourcesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      
      <main className="flex-1 bg-gradient-to-b from-secondary/5 to-white">
        {/* Header */}
        <div className="pt-12 pb-6 md:pt-16 md:pb-10 px-4 md:px-8 text-center">
          <div className="mx-auto max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-display font-bold text-primary-dark mb-4">
              Leituras e Recursos Recomendados
            </h1>
            <p className="text-foreground/80 text-lg md:text-xl max-w-2xl mx-auto">
              Uma coleção de livros, artigos e vídeos que podem ajudar na compreensão 
              e na jornada para relacionamentos mais saudáveis.
            </p>
          </div>
        </div>
        
        {/* Content sections */}
        <div className="px-4 md:px-8 pb-16 max-w-6xl mx-auto space-y-16">
          {/* Books section */}
          <section id="livros" className="scroll-mt-24">
            <div className="flex items-center mb-8 border-b border-secondary/20 pb-2">
              <FontAwesomeIcon icon={faBook} className="text-primary mr-3 text-xl" />
              <h2 className="text-2xl font-display font-semibold text-primary-dark">Livros</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

              
              {/* Book 2 */}
              <div className="bg-white rounded-xl shadow-sm border border-secondary/20 overflow-hidden hover:shadow-md transition-shadow duration-300">
                <div className="flex justify-center bg-primary/5 p-6">
                  <div className="w-32 h-48 bg-white shadow-md rounded-md flex items-center justify-center overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-primary/5"></div>
                    <FontAwesomeIcon icon={faBook} className="text-4xl text-primary/30" />
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-display font-semibold text-lg text-primary-dark mb-1">Mulheres que Amam Demais</h3>
                  <p className="text-sm text-muted-foreground mb-2">Robin Norwood</p>
                  <p className="text-sm text-foreground/80 mb-4">
                    Um livro fundamental para mulheres que se encontram presas em padrões de relacionamentos 
                    destrutivos, mostrando caminhos para recuperação e autoconhecimento.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                      Relacionamentos
                    </span>
                    <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                      Autoajuda
                    </span>
                    <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                      Limites
                    </span>
                  </div>
                  <a href="#" className="inline-flex items-center text-sm font-medium text-primary hover:text-primary-dark transition-colors gap-1.5">
                    <span>Ver na Amazon</span>
                    <FontAwesomeIcon icon={faExternalLinkAlt} className="text-xs" />
                  </a>
                </div>
              </div>
              
              {/* Book 3 */}
              <div className="bg-white rounded-xl shadow-sm border border-secondary/20 overflow-hidden hover:shadow-md transition-shadow duration-300">
                <div className="flex justify-center bg-primary/5 p-6">
                  <div className="w-32 h-48 bg-white shadow-md rounded-md flex items-center justify-center overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-primary/5"></div>
                    <FontAwesomeIcon icon={faBook} className="text-4xl text-primary/30" />
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-display font-semibold text-lg text-primary-dark mb-1">A Coragem de Ser Imperfeito</h3>
                  <p className="text-sm text-muted-foreground mb-2">Brené Brown</p>
                  <p className="text-sm text-foreground/80 mb-4">
                    Uma exploração sobre vulnerabilidade, vergonha e a importância de aceitar 
                    nossas imperfeições para construir relacionamentos mais autênticos e significativos.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                      Autoestima
                    </span>
                    <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                      Autoconhecimento
                    </span>
                  </div>
                  <a href="#" className="inline-flex items-center text-sm font-medium text-primary hover:text-primary-dark transition-colors gap-1.5">
                    <span>Ver na Amazon</span>
                    <FontAwesomeIcon icon={faExternalLinkAlt} className="text-xs" />
                  </a>
                </div>
              </div>
              
              {/* Book 4 - Mulheres que Correm com os Lobos */}
              <div className="bg-white rounded-xl shadow-sm border border-secondary/20 overflow-hidden hover:shadow-md transition-shadow duration-300">
                <div className="flex justify-center bg-primary/5 p-6">
                  <div className="w-32 h-48 bg-white shadow-md rounded-md flex items-center justify-center overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-primary/5"></div>
                    <FontAwesomeIcon icon={faBook} className="text-4xl text-primary/30" />
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-display font-semibold text-lg text-primary-dark mb-1">Mulheres que Correm com os Lobos</h3>
                  <p className="text-sm text-muted-foreground mb-2">Clarissa Pinkola Estés</p>
                  <p className="text-sm text-foreground/80 mb-4">
                    Um mergulho profundo no arquétipo da mulher selvagem através de mitos e histórias ancestrais, 
                    ajudando mulheres a reconectarem-se com sua essência criativa, intuitiva e poderosa.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                      Autoconhecimento
                    </span>
                    <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                      Empoderamento
                    </span>
                  </div>
                  <a href="#" className="inline-flex items-center text-sm font-medium text-primary hover:text-primary-dark transition-colors gap-1.5">
                    <span>Ver na Amazon</span>
                    <FontAwesomeIcon icon={faExternalLinkAlt} className="text-xs" />
                  </a>
                </div>
              </div>
              
              {/* Book 5 - O Corpo Guarda as Marcas */}
              <div className="bg-white rounded-xl shadow-sm border border-secondary/20 overflow-hidden hover:shadow-md transition-shadow duration-300">
                <div className="flex justify-center bg-primary/5 p-6">
                  <div className="w-32 h-48 bg-white shadow-md rounded-md flex items-center justify-center overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-primary/5"></div>
                    <FontAwesomeIcon icon={faBook} className="text-4xl text-primary/30" />
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-display font-semibold text-lg text-primary-dark mb-1">O Corpo Guarda as Marcas</h3>
                  <p className="text-sm text-muted-foreground mb-2">Bessel van der Kolk</p>
                  <p className="text-sm text-foreground/80 mb-4">
                    Uma exploração sobre como o trauma afeta o corpo e a mente, oferecendo caminhos 
                    terapêuticos para curar feridas emocionais profundas e reconectar-se com o corpo.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                      Trauma
                    </span>
                    <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                      Cura
                    </span>
                    <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                      Autoconhecimento
                    </span>
                  </div>
                  <a href="#" className="inline-flex items-center text-sm font-medium text-primary hover:text-primary-dark transition-colors gap-1.5">
                    <span>Ver na Amazon</span>
                    <FontAwesomeIcon icon={faExternalLinkAlt} className="text-xs" />
                  </a>
                </div>
              </div>
              
              {/* Book 6 - Não Era Amor */}
              <div className="bg-white rounded-xl shadow-sm border border-secondary/20 overflow-hidden hover:shadow-md transition-shadow duration-300">
                <div className="flex justify-center bg-primary/5 p-6">
                  <div className="w-32 h-48 bg-white shadow-md rounded-md flex items-center justify-center overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-primary/5"></div>
                    <FontAwesomeIcon icon={faBook} className="text-4xl text-primary/30" />
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-display font-semibold text-lg text-primary-dark mb-1">Não Era Amor</h3>
                  <p className="text-sm text-muted-foreground mb-2">Coletivo de psicólogas brasileiras</p>
                  <p className="text-sm text-foreground/80 mb-4">
                    Uma coletânea de relatos e análises sobre relacionamentos abusivos no contexto brasileiro, 
                    ajudando mulheres a identificarem sinais de alerta e encontrarem caminhos para a liberdade.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                      Relacionamentos
                    </span>
                    <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                      Abuso
                    </span>
                    <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                      Empoderamento
                    </span>
                  </div>
                  <a href="#" className="inline-flex items-center text-sm font-medium text-primary hover:text-primary-dark transition-colors gap-1.5">
                    <span>Ver na Amazon</span>
                    <FontAwesomeIcon icon={faExternalLinkAlt} className="text-xs" />
                  </a>
                </div>
              </div>
              
              {/* Book 7 - O Perigo de Uma História Única */}
              <div className="bg-white rounded-xl shadow-sm border border-secondary/20 overflow-hidden hover:shadow-md transition-shadow duration-300">
                <div className="flex justify-center bg-primary/5 p-6">
                  <div className="w-32 h-48 bg-white shadow-md rounded-md flex items-center justify-center overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-primary/5"></div>
                    <FontAwesomeIcon icon={faBook} className="text-4xl text-primary/30" />
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-display font-semibold text-lg text-primary-dark mb-1">O Perigo de Uma História Única</h3>
                  <p className="text-sm text-muted-foreground mb-2">Chimamanda Ngozi Adichie</p>
                  <p className="text-sm text-foreground/80 mb-4">
                    Uma reflexão sobre como estereótipos e narrativas simplificadas moldam nossas 
                    percepções, e como ampliar nosso entendimento através da diversidade de histórias.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                      Perspectivas
                    </span>
                    <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                      Diversidade
                    </span>
                  </div>
                  <a href="#" className="inline-flex items-center text-sm font-medium text-primary hover:text-primary-dark transition-colors gap-1.5">
                    <span>Ver na Amazon</span>
                    <FontAwesomeIcon icon={faExternalLinkAlt} className="text-xs" />
                  </a>
                </div>
              </div>
              
              {/* Book 8 - O Poder do Não */}
              <div className="bg-white rounded-xl shadow-sm border border-secondary/20 overflow-hidden hover:shadow-md transition-shadow duration-300">
                <div className="flex justify-center bg-primary/5 p-6">
                  <div className="w-32 h-48 bg-white shadow-md rounded-md flex items-center justify-center overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-primary/5"></div>
                    <FontAwesomeIcon icon={faBook} className="text-4xl text-primary/30" />
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-display font-semibold text-lg text-primary-dark mb-1">O Poder do Não</h3>
                  <p className="text-sm text-muted-foreground mb-2">Damon Zahariades</p>
                  <p className="text-sm text-foreground/80 mb-4">
                    Um guia prático para estabelecer limites saudáveis, aprender a recusar 
                    pedidos inconvenientes e priorizar o próprio bem-estar sem sentir culpa.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                      Limites
                    </span>
                    <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                      Autoajuda
                    </span>
                    <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                      Confiança
                    </span>
                  </div>
                  <a href="#" className="inline-flex items-center text-sm font-medium text-primary hover:text-primary-dark transition-colors gap-1.5">
                    <span>Ver na Amazon</span>
                    <FontAwesomeIcon icon={faExternalLinkAlt} className="text-xs" />
                  </a>
                </div>
              </div>
              
              {/* Book 9 - Sobrevivi... posso contar */}
              <div className="bg-white rounded-xl shadow-sm border border-secondary/20 overflow-hidden hover:shadow-md transition-shadow duration-300">
                <div className="flex justify-center bg-primary/5 p-6">
                  <div className="w-32 h-48 bg-white shadow-md rounded-md flex items-center justify-center overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-primary/5"></div>
                    <FontAwesomeIcon icon={faBook} className="text-4xl text-primary/30" />
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-display font-semibold text-lg text-primary-dark mb-1">Sobrevivi... posso contar</h3>
                  <p className="text-sm text-muted-foreground mb-2">Clara Averbuck</p>
                  <p className="text-sm text-foreground/80 mb-4">
                    Uma obra autobiográfica que relata experiências pessoais de violência e 
                    abuso, mostrando como é possível sobreviver, reconhecer e compartilhar histórias difíceis.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                      Trauma
                    </span>
                    <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                      Violência
                    </span>
                    <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                      Superação
                    </span>
                  </div>
                  <a href="#" className="inline-flex items-center text-sm font-medium text-primary hover:text-primary-dark transition-colors gap-1.5">
                    <span>Ver na Amazon</span>
                    <FontAwesomeIcon icon={faExternalLinkAlt} className="text-xs" />
                  </a>
                </div>
              </div>
            </div>
          </section>
          
          {/* Articles section */}
          <section id="artigos" className="scroll-mt-24">
            <div className="flex items-center mb-8 border-b border-secondary/20 pb-2">
              <FontAwesomeIcon icon={faNewspaper} className="text-primary mr-3 text-xl" />
              <h2 className="text-2xl font-display font-semibold text-primary-dark">Artigos</h2>
            </div>
            
            <div className="space-y-6">
              {/* Article 1 */}
              <div className="bg-white rounded-xl shadow-sm border border-secondary/20 p-6 hover:shadow-md transition-shadow duration-300">
                <h3 className="font-display font-semibold text-lg text-primary-dark mb-1">
                  Como identificar um relacionamento abusivo
                </h3>
                <p className="text-sm text-muted-foreground mb-3">Revista AzMina</p>
                <p className="text-sm text-foreground/80 mb-4">
                  Muitas vezes, é difícil perceber que estamos em um relacionamento tóxico ou abusivo. 
                  Este artigo explora os sinais de alerta, padrões comportamentais e microagressões que 
                  podem indicar um relacionamento prejudicial. São discutidas também estratégias 
                  para buscar ajuda e recursos de apoio disponíveis para vítimas.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                    Relacionamentos
                  </span>
                  <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                    Abuso
                  </span>
                  <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                    Sinais de alerta
                  </span>
                </div>
                <a href="#" className="inline-flex items-center text-sm font-medium text-primary hover:text-primary-dark transition-colors gap-1.5">
                  <span>Ler artigo</span>
                  <FontAwesomeIcon icon={faChevronRight} className="text-xs" />
                </a>
              </div>
              
              {/* Article 2 */}
              <div className="bg-white rounded-xl shadow-sm border border-secondary/20 p-6 hover:shadow-md transition-shadow duration-300">
                <h3 className="font-display font-semibold text-lg text-primary-dark mb-1">
                  Gaslighting: quando te fazem duvidar da sua própria sanidade
                </h3>
                <p className="text-sm text-muted-foreground mb-3">Portal Maria da Penha</p>
                <p className="text-sm text-foreground/80 mb-4">
                  O gaslighting é uma forma de abuso psicológico em que o agressor manipula 
                  informações para fazer a vítima questionar sua própria memória, percepção e sanidade. 
                  Este artigo explica o conceito, exemplifica situações comuns e oferece orientações 
                  sobre como reconhecer este comportamento e proteger-se.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                    Abuso psicológico
                  </span>
                  <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                    Manipulação
                  </span>
                  <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                    Autodefesa
                  </span>
                </div>
                <a href="#" className="inline-flex items-center text-sm font-medium text-primary hover:text-primary-dark transition-colors gap-1.5">
                  <span>Ler artigo</span>
                  <FontAwesomeIcon icon={faChevronRight} className="text-xs" />
                </a>
              </div>
              
              {/* Article 3 */}
              <div className="bg-white rounded-xl shadow-sm border border-secondary/20 p-6 hover:shadow-md transition-shadow duration-300">
                <h3 className="font-display font-semibold text-lg text-primary-dark mb-1">
                  Limites saudáveis em relacionamentos: como estabelecê-los
                </h3>
                <p className="text-sm text-muted-foreground mb-3">Terapia para Todos</p>
                <p className="text-sm text-foreground/80 mb-4">
                  Estabelecer limites claros é crucial para relacionamentos saudáveis. 
                  Este artigo discute a importância dos limites pessoais, emocionais e físicos, 
                  como comunicá-los assertivamente e como respeitar os limites dos outros, 
                  criando um ambiente de respeito mútuo e compreensão.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                    Limites
                  </span>
                  <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                    Comunicação
                  </span>
                  <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                    Respeito
                  </span>
                </div>
                <a href="#" className="inline-flex items-center text-sm font-medium text-primary hover:text-primary-dark transition-colors gap-1.5">
                  <span>Ler artigo</span>
                  <FontAwesomeIcon icon={faChevronRight} className="text-xs" />
                </a>
              </div>
            </div>
          </section>
          
          {/* Videos section */}
          <section id="videos" className="scroll-mt-24">
            <div className="flex items-center mb-8 border-b border-secondary/20 pb-2">
              <FontAwesomeIcon icon={faVideo} className="text-primary mr-3 text-xl" />
              <h2 className="text-2xl font-display font-semibold text-primary-dark">Vídeos</h2>
            </div>
            
            <div className="space-y-8">
              {/* Video cards with smaller previews */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Video 1 */}
                <div className="bg-white rounded-xl shadow-sm border border-secondary/20 overflow-hidden hover:shadow-md transition-shadow duration-300">
                  <div className="flex">
                    <div className="w-36 h-24 bg-black/5 flex items-center justify-center flex-shrink-0">
                      <div className="text-center">
                        <FontAwesomeIcon icon={faVideo} className="text-2xl text-primary/30" />
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-display font-semibold text-base text-primary-dark mb-1 line-clamp-1">
                        Dependência Emocional: Como Superar?
                      </h3>
                      <p className="text-xs text-muted-foreground">Psicóloga Cláudia Lins</p>
                    </div>
                  </div>
                  <div className="p-4 pt-0">
                    <p className="text-sm text-foreground/80 mb-4">
                      Uma análise sobre os sinais de dependência emocional e estratégias práticas 
                      para desenvolver autonomia e construir relacionamentos mais saudáveis.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                        Dependência
                      </span>
                      <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                        Autonomia
                      </span>
                      <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                        Autoajuda
                      </span>
                    </div>
                    <a href="#" className="inline-flex items-center text-sm font-medium text-primary hover:text-primary-dark transition-colors gap-1.5">
                      <span>Assistir no YouTube</span>
                      <FontAwesomeIcon icon={faExternalLinkAlt} className="text-xs" />
                    </a>
                  </div>
                </div>
                
                {/* Video 2 */}
                <div className="bg-white rounded-xl shadow-sm border border-secondary/20 overflow-hidden hover:shadow-md transition-shadow duration-300">
                  <div className="flex">
                    <div className="w-36 h-24 bg-black/5 flex items-center justify-center flex-shrink-0">
                      <div className="text-center">
                        <FontAwesomeIcon icon={faVideo} className="text-2xl text-primary/30" />
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-display font-semibold text-base text-primary-dark mb-1 line-clamp-1">
                        O Poder da Vulnerabilidade
                      </h3>
                      <p className="text-xs text-muted-foreground">Brené Brown (Legendado)</p>
                    </div>
                  </div>
                  <div className="p-4 pt-0">
                    <p className="text-sm text-foreground/80 mb-4">
                      Nesta palestra inspiradora, Brené Brown explora como a vulnerabilidade 
                      é essencial para conexões autênticas e como podemos abraçar nossas imperfeições.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                        Vulnerabilidade
                      </span>
                      <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                        Autoconhecimento
                      </span>
                      <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                        Conexão
                      </span>
                    </div>
                    <a href="#" className="inline-flex items-center text-sm font-medium text-primary hover:text-primary-dark transition-colors gap-1.5">
                      <span>Assistir no YouTube</span>
                      <FontAwesomeIcon icon={faExternalLinkAlt} className="text-xs" />
                    </a>
                  </div>
                </div>
                
                {/* Video 3 */}
                <div className="bg-white rounded-xl shadow-sm border border-secondary/20 overflow-hidden hover:shadow-md transition-shadow duration-300">
                  <div className="flex">
                    <div className="w-36 h-24 bg-black/5 flex items-center justify-center flex-shrink-0">
                      <div className="text-center">
                        <FontAwesomeIcon icon={faVideo} className="text-2xl text-primary/30" />
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-display font-semibold text-base text-primary-dark mb-1 line-clamp-1">
                        Como Reconstruir a Autoestima
                      </h3>
                      <p className="text-xs text-muted-foreground">Canal Psicologia Viva</p>
                    </div>
                  </div>
                  <div className="p-4 pt-0">
                    <p className="text-sm text-foreground/80 mb-4">
                      Este vídeo oferece orientações práticas sobre o processo de recuperação 
                      emocional e reconstrução da autoestima após experiências traumáticas em relacionamentos.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                        Autoestima
                      </span>
                      <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                        Recuperação
                      </span>
                      <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                        Trauma
                      </span>
                    </div>
                    <a href="#" className="inline-flex items-center text-sm font-medium text-primary hover:text-primary-dark transition-colors gap-1.5">
                      <span>Assistir no YouTube</span>
                      <FontAwesomeIcon icon={faExternalLinkAlt} className="text-xs" />
                    </a>
                  </div>
                </div>
                
                {/* Video 4 */}
                <div className="bg-white rounded-xl shadow-sm border border-secondary/20 overflow-hidden hover:shadow-md transition-shadow duration-300">
                  <div className="flex">
                    <div className="w-36 h-24 bg-black/5 flex items-center justify-center flex-shrink-0">
                      <div className="text-center">
                        <FontAwesomeIcon icon={faVideo} className="text-2xl text-primary/30" />
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-display font-semibold text-base text-primary-dark mb-1 line-clamp-1">
                        Relacionamentos Saudáveis: Identifique os Sinais
                      </h3>
                      <p className="text-xs text-muted-foreground">Psicóloga Ana Beatriz Barbosa</p>
                    </div>
                  </div>
                  <div className="p-4 pt-0">
                    <p className="text-sm text-foreground/80 mb-4">
                      Um guia sobre como identificar sinais de relacionamentos saudáveis 
                      e como nutrir conexões baseadas em respeito mútuo e comunicação efetiva.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                        Relacionamentos
                      </span>
                      <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                        Comunicação
                      </span>
                      <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                        Respeito
                      </span>
                    </div>
                    <a href="#" className="inline-flex items-center text-sm font-medium text-primary hover:text-primary-dark transition-colors gap-1.5">
                      <span>Assistir no YouTube</span>
                      <FontAwesomeIcon icon={faExternalLinkAlt} className="text-xs" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          {/* Back to top button */}
          <div className="flex justify-center pt-8">
            <a 
              href="#" 
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
            >
              <FontAwesomeIcon icon={faArrowUp} />
            </a>
          </div>
        </div>
      </main>

      {/* Ethical Note */}
      <div className="bg-primary/5 py-6 px-4 border-y border-secondary/10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm text-foreground/80 italic">
            Alguns links aqui são afiliados. Isso significa que, se você decidir comprar, o Te Escuto pode receber uma pequena comissão — sem custo extra pra você. Isso nos ajuda a manter a plataforma gratuita, ética e segura. 💜
          </p>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="bg-white py-8 px-4 border-t border-secondary/10">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center gap-1.5 text-primary mb-4">
            <FontAwesomeIcon icon={faHeart} className="text-sm" />
            <span className="font-display font-semibold text-sm">Te Escuto</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Te Escuto © {new Date().getFullYear()} | Um espaço seguro para compartilhar
          </p>
        </div>
      </footer>
    </div>
  );
}