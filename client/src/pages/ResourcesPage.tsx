import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faVideo, faNewspaper, faHeart, faArrowUp, faExternalLinkAlt, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { books, videos, articles } from '../data/resources';
import Navbar from '../components/Navbar';

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-secondary/5">
      {/* Navigation */}
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary to-primary-dark text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Livros e Recursos Recomendados
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
            Uma coleção cuidadosamente selecionada de livros, vídeos e artigos 
            para apoiar sua jornada de autoconhecimento e crescimento pessoal
          </p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-center space-x-8">
            <a href="#livros" className="flex items-center text-primary hover:text-primary-dark transition-colors font-medium">
              <FontAwesomeIcon icon={faBook} className="mr-2" />
              Livros
            </a>
            <a href="#videos" className="flex items-center text-primary hover:text-primary-dark transition-colors font-medium">
              <FontAwesomeIcon icon={faVideo} className="mr-2" />
              Vídeos
            </a>
            <a href="#artigos" className="flex items-center text-primary hover:text-primary-dark transition-colors font-medium">
              <FontAwesomeIcon icon={faNewspaper} className="mr-2" />
              Artigos
            </a>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-4 py-12">
        <div className="space-y-16">
          {/* Books section */}
          <section id="livros" className="scroll-mt-24">
            <div className="flex items-center mb-8 border-b border-secondary/20 pb-2">
              <FontAwesomeIcon icon={faBook} className="text-primary mr-3 text-xl" />
              <h2 className="text-2xl font-display font-semibold text-primary-dark">Livros</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {books.map((book) => (
                <div key={book.id} className="bg-white rounded-xl shadow-sm border border-secondary/20 overflow-hidden hover:shadow-md transition-shadow duration-300">
                  <div className="flex justify-center bg-primary/5 p-6">
                    <div className="w-32 h-48 bg-white shadow-md rounded-md flex items-center justify-center overflow-hidden relative">
                      <img 
                        src={book.coverImage} 
                        alt={`Capa do livro ${book.title}`} 
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-display font-semibold text-lg text-primary-dark mb-1">{book.title}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{book.author}</p>
                    <p className="text-sm text-foreground/80 mb-4">
                      {book.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {book.tags.map((tag) => (
                        <span key={tag} className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <a href={book.amazonLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm font-medium text-primary hover:text-primary-dark transition-colors gap-1.5">
                      <span>Ver na Amazon</span>
                      <FontAwesomeIcon icon={faExternalLinkAlt} className="text-xs" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>
          
          {/* Videos section */}
          <section id="videos" className="scroll-mt-24">
            <div className="flex items-center mb-8 border-b border-secondary/20 pb-2">
              <FontAwesomeIcon icon={faVideo} className="text-primary mr-3 text-xl" />
              <h2 className="text-2xl font-display font-semibold text-primary-dark">Vídeos</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {videos.map((video) => (
                <div key={video.id} className="bg-white rounded-xl shadow-sm border border-secondary/20 overflow-hidden hover:shadow-md transition-shadow duration-300">
                  <div className="aspect-video">
                    <iframe 
                      className="w-full h-full" 
                      src={`https://www.youtube.com/embed/${video.youtubeId}`} 
                      title={video.title} 
                      frameBorder="0" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                      allowFullScreen
                    ></iframe>
                  </div>
                  <div className="p-4">
                    <h3 className="font-display font-semibold text-base text-primary-dark mb-1">
                      {video.title}
                    </h3>
                    <p className="text-xs text-muted-foreground mb-2">{video.author}</p>
                    <p className="text-sm text-foreground/80 mb-4">
                      {video.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {video.tags.map((tag) => (
                        <span key={tag} className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <a href={video.youtubeUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm font-medium text-primary hover:text-primary-dark transition-colors gap-1.5">
                      <span>Assistir no YouTube</span>
                      <FontAwesomeIcon icon={faExternalLinkAlt} className="text-xs" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>
          
          {/* Articles section */}
          <section id="artigos" className="scroll-mt-24">
            <div className="flex items-center mb-8 border-b border-secondary/20 pb-2">
              <FontAwesomeIcon icon={faNewspaper} className="text-primary mr-3 text-xl" />
              <h2 className="text-2xl font-display font-semibold text-primary-dark">Artigos</h2>
            </div>
            
            <div className="space-y-6">
              {articles.map((article) => (
                <div key={article.id} className="bg-white rounded-xl shadow-sm border border-secondary/20 p-6 hover:shadow-md transition-shadow duration-300">
                  <h3 className="font-display font-semibold text-lg text-primary-dark mb-1">
                    {article.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">{article.source}</p>
                  <p className="text-sm text-foreground/80 mb-4">
                    {article.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {article.tags.map((tag) => (
                      <span key={tag} className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a href={article.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm font-medium text-primary hover:text-primary-dark transition-colors gap-1.5">
                    <span>Ler artigo</span>
                    <FontAwesomeIcon icon={faChevronRight} className="text-xs" />
                  </a>
                </div>
              ))}
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
