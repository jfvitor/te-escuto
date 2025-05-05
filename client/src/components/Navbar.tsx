import { Link, useLocation } from "wouter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faHeart, 
  faComments, 
  faBookOpen, 
  faHome
} from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const [location] = useLocation();
  
  return (
    <nav className="bg-white/90 backdrop-blur-sm shadow-sm py-4 px-6 w-full">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center gap-1.5 text-primary">
          <FontAwesomeIcon icon={faHeart} className="text-xl" />
          <span className="font-display font-bold text-xl">Te Escuto</span>
        </Link>
        
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/" className={`text-muted-foreground hover:text-primary transition-colors font-medium text-sm flex items-center gap-1.5 ${location === '/' ? 'text-primary' : ''}`}>
            <FontAwesomeIcon icon={faHome} className="text-sm" />
            <span>Início</span>
          </Link>
          <Link href="/chat" className={`text-muted-foreground hover:text-primary transition-colors font-medium text-sm flex items-center gap-1.5 ${location === '/chat' ? 'text-primary' : ''}`}>
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
  );
}