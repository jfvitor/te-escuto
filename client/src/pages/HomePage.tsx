import { Link } from "wouter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faHeart, 
  faComments, 
  faBookOpen, 
  faArrowRight,
  faHome,
  faLeaf,
  faFeather
} from "@fortawesome/free-solid-svg-icons";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Navbar */}
      <nav className="bg-white/90 backdrop-blur-sm shadow-sm py-4 px-6 w-full">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <div className="flex items-center gap-1.5 text-primary">
              <FontAwesomeIcon icon={faHeart} className="text-xl" />
              <span className="font-display font-bold text-xl">Te Escuto</span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/chat" className="text-muted-foreground hover:text-primary transition-colors font-medium text-sm flex items-center gap-1.5">
              <FontAwesomeIcon icon={faHome} className="text-sm" />
              <span>Início</span>
            </Link>
            <Link href="/chat" className="text-muted-foreground hover:text-primary transition-colors font-medium text-sm flex items-center gap-1.5">
              <FontAwesomeIcon icon={faComments} className="text-sm" />
              <span>Conversar agora</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors font-medium text-sm flex items-center gap-1.5">
              <FontAwesomeIcon icon={faBookOpen} className="text-sm" />
              <span>Leituras recomendadas</span>
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button className="flex items-center justify-center p-2 rounded-md text-primary hover:text-primary-dark focus:outline-none">
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Main content */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 md:px-6 py-12 md:py-24 bg-gradient-to-b from-secondary/5 to-white">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          {/* Decorative elements */}
          <div className="relative">
            <div className="absolute -left-16 top-0 opacity-10 text-primary transform -rotate-12">
              <FontAwesomeIcon icon={faLeaf} className="text-5xl" />
            </div>
            <div className="absolute -right-10 bottom-0 opacity-10 text-primary transform rotate-12">
              <FontAwesomeIcon icon={faFeather} className="text-4xl" />
            </div>
            
            {/* Main icon */}
            <div className="mx-auto w-24 h-24 bg-primary/5 rounded-full flex items-center justify-center border border-primary/10 mb-6 relative z-10">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <FontAwesomeIcon icon={faHeart} className="text-3xl text-primary" />
              </div>
            </div>
          </div>
          
          {/* Welcome message */}
          <h1 className="text-3xl md:text-4xl font-display font-bold text-primary-dark leading-tight">
            Bem-vinda ao Te Escuto
          </h1>
          
          <p className="text-lg md:text-xl text-foreground/80 max-w-xl mx-auto leading-relaxed">
            Este é um espaço seguro para você compartilhar o que sente e ser acolhida com empatia.
          </p>
          
          {/* Call to action button */}
          <div className="mt-12 flex justify-center">
            <Link href="/chat" className="group relative inline-flex items-center rounded-full px-8 py-4 bg-primary text-white shadow-md hover:bg-primary-dark transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 font-medium text-lg">
              <span>Começar conversa</span>
              <FontAwesomeIcon icon={faArrowRight} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          {/* Supportive text */}
          <p className="text-muted-foreground mt-6 italic font-light text-base">
            Você não precisa passar por isso sozinha.
          </p>
        </div>
        
        {/* Features section */}
        <div className="w-full max-w-5xl mx-auto mt-24 px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-secondary/20 hover:border-primary/20 transition-colors duration-300 hover:shadow-md">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <FontAwesomeIcon icon={faComments} className="text-xl text-primary" />
              </div>
              <h3 className="font-display font-semibold text-lg mb-2 text-primary-dark">Conversa Acolhedora</h3>
              <p className="text-muted-foreground text-sm">Um espaço onde você pode expressar seus sentimentos sem julgamentos, recebendo apoio emocional.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-secondary/20 hover:border-primary/20 transition-colors duration-300 hover:shadow-md">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <FontAwesomeIcon icon={faHeart} className="text-xl text-primary" />
              </div>
              <h3 className="font-display font-semibold text-lg mb-2 text-primary-dark">Apoio Emocional</h3>
              <p className="text-muted-foreground text-sm">Receba respostas empáticas e calorosas, como uma conversa com uma amiga que realmente se importa.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-secondary/20 hover:border-primary/20 transition-colors duration-300 hover:shadow-md">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <FontAwesomeIcon icon={faBookOpen} className="text-xl text-primary" />
              </div>
              <h3 className="font-display font-semibold text-lg mb-2 text-primary-dark">Recursos Úteis</h3>
              <p className="text-muted-foreground text-sm">Acesse leituras e informações que podem ajudar a compreender melhor seus sentimentos e situações.</p>
            </div>
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