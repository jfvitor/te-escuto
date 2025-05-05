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
              {/* Book 1 */}
              <div className="bg-white rounded-xl shadow-sm border border-secondary/20 overflow-hidden hover:shadow-md transition-shadow duration-300">
                <div className="flex justify-center bg-primary/5 p-6">
                  <div className="w-32 h-48 bg-white shadow-md rounded-md flex items-center justify-center overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-primary/5"></div>
                    <FontAwesomeIcon icon={faBook} className="text-4xl text-primary/30" />
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-display font-semibold text-lg text-primary-dark mb-1">Por Que Os Homens Fazem Sexo e As Mulheres Fazem Amor?</h3>
                  <p className="text-sm text-muted-foreground mb-2">Barbara e Allan Pease</p>
                  <p className="text-sm text-foreground/80 mb-4">
                    Uma análise das diferentes perspectivas masculinas e femininas nos relacionamentos, 
                    ajudando a entender melhor os conflitos de comunicação e expectativas.
                  </p>
                  <a href="#" className="inline-flex items-center text-sm font-medium text-primary hover:text-primary-dark transition-colors gap-1.5">
                    <span>Ver na Amazon</span>
                    <FontAwesomeIcon icon={faExternalLinkAlt} className="text-xs" />
                  </a>
                </div>
              </div>
              
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
              {/* Video 1 */}
              <div className="bg-white rounded-xl shadow-sm border border-secondary/20 overflow-hidden hover:shadow-md transition-shadow duration-300">
                <div className="aspect-video bg-black/5 flex items-center justify-center">
                  <div className="text-center p-8">
                    <FontAwesomeIcon icon={faVideo} className="text-4xl text-primary/30 mb-4" />
                    <p className="text-sm text-muted-foreground">Prévia do vídeo</p>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-display font-semibold text-lg text-primary-dark mb-1">
                    Dependência Emocional: Como Superar?
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2">Psicóloga Cláudia Lins</p>
                  <p className="text-sm text-foreground/80 mb-4">
                    Uma análise sobre os sinais de dependência emocional e estratégias práticas 
                    para desenvolver autonomia e construir relacionamentos mais saudáveis.
                  </p>
                  <a href="#" className="inline-flex items-center text-sm font-medium text-primary hover:text-primary-dark transition-colors gap-1.5">
                    <span>Assistir no YouTube</span>
                    <FontAwesomeIcon icon={faExternalLinkAlt} className="text-xs" />
                  </a>
                </div>
              </div>
              
              {/* Video 2 */}
              <div className="bg-white rounded-xl shadow-sm border border-secondary/20 overflow-hidden hover:shadow-md transition-shadow duration-300">
                <div className="aspect-video bg-black/5 flex items-center justify-center">
                  <div className="text-center p-8">
                    <FontAwesomeIcon icon={faVideo} className="text-4xl text-primary/30 mb-4" />
                    <p className="text-sm text-muted-foreground">Prévia do vídeo</p>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-display font-semibold text-lg text-primary-dark mb-1">
                    O Poder da Vulnerabilidade
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2">Brené Brown (Legendado)</p>
                  <p className="text-sm text-foreground/80 mb-4">
                    Nesta palestra inspiradora, Brené Brown explora como a vulnerabilidade 
                    é essencial para conexões autênticas e como podemos abraçar nossas imperfeições.
                  </p>
                  <a href="#" className="inline-flex items-center text-sm font-medium text-primary hover:text-primary-dark transition-colors gap-1.5">
                    <span>Assistir no YouTube</span>
                    <FontAwesomeIcon icon={faExternalLinkAlt} className="text-xs" />
                  </a>
                </div>
              </div>
              
              {/* Video 3 */}
              <div className="bg-white rounded-xl shadow-sm border border-secondary/20 overflow-hidden hover:shadow-md transition-shadow duration-300">
                <div className="aspect-video bg-black/5 flex items-center justify-center">
                  <div className="text-center p-8">
                    <FontAwesomeIcon icon={faVideo} className="text-4xl text-primary/30 mb-4" />
                    <p className="text-sm text-muted-foreground">Prévia do vídeo</p>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-display font-semibold text-lg text-primary-dark mb-1">
                    Como Reconstruir a Autoestima Após um Relacionamento Abusivo
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2">Canal Psicologia Viva</p>
                  <p className="text-sm text-foreground/80 mb-4">
                    Este vídeo oferece orientações práticas sobre o processo de recuperação 
                    emocional e reconstrução da autoestima após experiências traumáticas em relacionamentos.
                  </p>
                  <a href="#" className="inline-flex items-center text-sm font-medium text-primary hover:text-primary-dark transition-colors gap-1.5">
                    <span>Assistir no YouTube</span>
                    <FontAwesomeIcon icon={faExternalLinkAlt} className="text-xs" />
                  </a>
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