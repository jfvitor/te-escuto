import { useState, useRef, FormEvent } from "react";
import { useTextAnalysis } from "@/hooks/useTextAnalysis";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faTimes, faArrowRight, faCommentAlt, faShieldAlt, faQuestionCircle, faExclamationCircle, faCommentDots } from "@fortawesome/free-solid-svg-icons";

const TextAnalyzer = () => {
  const [userText, setUserText] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [showTypingAnimation, setShowTypingAnimation] = useState(false);
  const responseRef = useRef<HTMLDivElement>(null);
  
  const { 
    analyzeText, 
    isAnalyzing, 
    analysisResult, 
    hasSubmitted,
    resetAnalysis
  } = useTextAnalysis();

  const handleClear = () => {
    setUserText("");
    setError(null);
    resetAnalysis();
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    // Reset states
    setError(null);

    // Validate input
    if (!userText.trim()) {
      setError("Por favor, escreva algo para que possamos analisar.");
      return;
    }

    try {
      await analyzeText(userText);
    } catch (err) {
      setError("Ocorreu um erro ao analisar seu texto. Por favor, tente novamente.");
    }
  };

  const addWritingAnimation = (text: string) => {
    if (!responseRef.current) return;

    setShowTypingAnimation(true);
    responseRef.current.innerHTML = "";
    responseRef.current.classList.add('writing-animation');
    
    let i = 0;
    const interval = setInterval(() => {
      if (i < text.length) {
        responseRef.current!.innerHTML += text.charAt(i);
        i++;
      } else {
        clearInterval(interval);
        responseRef.current!.classList.remove('writing-animation');
        setShowTypingAnimation(false);
      }
    }, 10);
  };

  // Trigger animation when analysis result changes
  if (analysisResult && responseRef.current && !showTypingAnimation) {
    addWritingAnimation(analysisResult);
  }

  return (
    <div className="w-full max-w-xl bg-white rounded-xl shadow-softer p-5 md:p-8 transition-all duration-300 scale-in">
      {/* Header */}
      <header className="mb-6">
        <h1 className="text-3xl md:text-4xl font-display font-bold text-primary-dark mb-2 flex items-center">
          <FontAwesomeIcon icon={faHeart} className="mr-3 text-primary" />
          Te Escuto
        </h1>
        <p className="text-muted-foreground text-sm md:text-base">
          Escreva o que aconteceu, como se estivesse desabafando com uma amiga:
        </p>
      </header>

      {/* Input Form */}
      <form className="space-y-4" onSubmit={handleSubmit}>
        {/* Textarea Section */}
        <div className="relative">
          <textarea 
            id="userInput"
            value={userText}
            onChange={(e) => setUserText(e.target.value)}
            placeholder="Digite aqui como você está se sentindo..."
            rows={8}
            className="w-full p-4 border border-secondary rounded-lg focus:ring-2 focus:ring-primary-light focus:border-primary-light outline-none transition-all duration-200 text-foreground resize-none shadow-sm"
          />
          <div className="absolute bottom-3 right-3 text-muted-foreground text-xs font-sans">
            <span>{userText.length}</span> caracteres
          </div>
        </div>

        {/* Button Group */}
        <div className="flex justify-end space-x-3">
          <button 
            type="button"
            onClick={handleClear}
            className="px-4 py-2 bg-gray-100 text-muted-foreground rounded-lg hover:bg-gray-200 transition-colors duration-200 font-medium"
          >
            <FontAwesomeIcon icon={faTimes} className="mr-1" />
            Limpar
          </button>
          <button 
            type="submit"
            disabled={isAnalyzing}
            className="px-6 py-2 bg-primary hover:bg-primary-dark text-white rounded-lg shadow-sm transition-all duration-200 font-medium flex items-center justify-center"
          >
            <span>Analisar</span>
            <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
          </button>
        </div>
      </form>

      {/* Response Section */}
      <div className="mt-6 transition-all duration-300">
        {/* Empty state */}
        {!hasSubmitted && !error && !isAnalyzing && (
          <div className="py-4 text-center text-muted-foreground">
            <FontAwesomeIcon icon={faCommentDots} className="text-3xl mb-2 text-secondary" />
            <p className="text-sm">Sua resposta aparecerá aqui</p>
          </div>
        )}

        {/* Loading state */}
        {isAnalyzing && (
          <div className="py-8 text-center animate-pulse-gentle">
            <div className="flex justify-center mb-2">
              <div className="w-8 h-8 rounded-full border-4 border-primary border-t-transparent animate-spin"></div>
            </div>
            <p className="text-primary-dark font-medium">Estou analisando seu texto...</p>
          </div>
        )}

        {/* Error state */}
        {error && (
          <div className="rounded-lg bg-red-50 p-4 border-l-4 border-red-400 fade-in">
            <div className="flex">
              <div className="flex-shrink-0">
                <FontAwesomeIcon icon={faExclamationCircle} className="text-red-400" />
              </div>
              <div className="ml-3">
                <p className="text-sm text-red-700">{error}</p>
              </div>
            </div>
          </div>
        )}

        {/* Response state */}
        {hasSubmitted && analysisResult && !isAnalyzing && !error && (
          <div className="rounded-lg bg-secondary p-5 border-l-4 border-primary fade-in shadow-soft">
            <div className="mb-3 flex items-center">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white">
                <FontAwesomeIcon icon={faCommentAlt} />
              </div>
              <h3 className="ml-2 font-display font-semibold text-primary-dark">
                Minha resposta para você
              </h3>
            </div>
            <div 
              ref={responseRef} 
              className="text-foreground whitespace-pre-wrap prose prose-sm max-w-none"
            >
              {analysisResult}
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="mt-8 text-center text-muted-foreground text-sm">
        <p>Te Escuto © {new Date().getFullYear()} - Um espaço seguro para compartilhar</p>
        <div className="mt-2 flex justify-center space-x-3">
          <a href="#" className="text-primary hover:text-primary-dark transition-colors">
            <FontAwesomeIcon icon={faShieldAlt} />
            <span className="ml-1">Privacidade</span>
          </a>
          <a href="#" className="text-primary hover:text-primary-dark transition-colors">
            <FontAwesomeIcon icon={faQuestionCircle} />
            <span className="ml-1">Ajuda</span>
          </a>
        </div>
      </footer>
    </div>
  );
};

export default TextAnalyzer;
