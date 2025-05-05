import { useState, useRef, FormEvent, useEffect } from "react";
import { useTextAnalysis } from "@/hooks/useTextAnalysis";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faHeart, 
  faPaperPlane, 
  faHistory, 
  faCommentAlt, 
  faShieldAlt, 
  faQuestionCircle, 
  faExclamationCircle, 
  faCommentDots, 
  faSmile, 
  faComments,
  faInfoCircle
} from "@fortawesome/free-solid-svg-icons";

// Limite máximo de mensagens por sessão
const MENSAGENS_LIMITE = 10;

const TextAnalyzer = () => {
  const [userText, setUserText] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [mensagensEnviadas, setMensagensEnviadas] = useState<number>(0);
  const [limiteAtingido, setLimiteAtingido] = useState<boolean>(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  
  const { 
    messages,
    sendMessage,
    isAnalyzing,
    isTyping,
    startNewConversation: clearConversation,
    error: apiError
  } = useTextAnalysis();
  
  // Wrapper para o método startNewConversation que mantém o contador de mensagens
  const startNewConversation = () => {
    clearConversation();
    // O contador de mensagens continua o mesmo
    // Uma nova conversa não significa um novo limite
  };
  
  // Recuperar o contador de mensagens do sessionStorage ao carregar o componente
  useEffect(() => {
    const mensagensArmazenadas = sessionStorage.getItem("mensagensEnviadas");
    if (mensagensArmazenadas) {
      const contadorMensagens = parseInt(mensagensArmazenadas, 10);
      setMensagensEnviadas(contadorMensagens);
      
      // Verificar se o limite já foi atingido
      if (contadorMensagens >= MENSAGENS_LIMITE) {
        setLimiteAtingido(true);
      }
    }
  }, []);

  // Scroll to bottom whenever messages change
  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    // Reset error state
    setError(null);

    // Verificar se o limite de mensagens foi atingido
    if (limiteAtingido) {
      setError("Você atingiu o limite de mensagens para esta sessão. Por favor, volte mais tarde.");
      return;
    }

    // Validate input - minimum 3 characters
    if (!userText.trim()) {
      setError("Por favor, escreva algo para enviar.");
      return;
    }
    
    // Check for minimum length of 3 characters
    if (userText.trim().length < 3) {
      setError("Por favor, escreva pelo menos 3 caracteres.");
      return;
    }

    try {
      await sendMessage(userText);
      
      // Atualizar o contador de mensagens enviadas
      const novoContador = mensagensEnviadas + 1;
      setMensagensEnviadas(novoContador);
      
      // Armazenar o contador no sessionStorage
      sessionStorage.setItem("mensagensEnviadas", novoContador.toString());
      
      // Verificar se atingiu o limite
      if (novoContador >= MENSAGENS_LIMITE) {
        setLimiteAtingido(true);
      }
      
      // Clear input after sending
      setUserText("");
      
      // Focus the input for next message (a menos que o limite tenha sido atingido)
      if (novoContador < MENSAGENS_LIMITE) {
        setTimeout(() => {
          inputRef.current?.focus();
        }, 100);
      }
    } catch (err) {
      setError("Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente.");
    }
  };

  // Handle textarea auto-resize
  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const target = e.target;
    setUserText(target.value);
    
    // Reset height to calculate the new height
    target.style.height = "auto";
    // Set new height based on content
    target.style.height = `${Math.min(target.scrollHeight, 150)}px`;
  };

  // Function to format the timestamp
  const formatTime = (date: Date) => {
    return new Intl.DateTimeFormat('pt-BR', {
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  };

  return (
    <div className="w-full max-w-2xl bg-white rounded-xl shadow-lg flex flex-col h-[600px] transition-all duration-300 scale-in overflow-hidden">
      {/* Header */}
      <header className="p-4 border-b border-secondary flex items-center justify-between bg-gradient-to-r from-primary/10 to-secondary/30">
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white">
            <FontAwesomeIcon icon={faHeart} />
          </div>
          <div className="ml-3">
            <h1 className="text-xl font-display font-bold text-primary-dark">
              Te Escuto
            </h1>
            <p className="text-muted-foreground text-xs">
              Um espaço seguro para compartilhar
            </p>
          </div>
        </div>
        <button 
          onClick={startNewConversation}
          className="flex items-center px-3 py-1.5 text-sm bg-white hover:bg-secondary/50 text-primary hover:text-primary-dark rounded-lg border border-secondary/50 transition-colors duration-200"
        >
          <FontAwesomeIcon icon={faHistory} className="mr-1.5" />
          Nova Conversa
        </button>
      </header>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-secondary/20">
        {/* Welcome message when no messages */}
        {messages.length === 0 && (
          <div className="flex flex-col items-center justify-center h-full text-center p-6">
            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center text-primary mb-4">
              <FontAwesomeIcon icon={faComments} className="text-2xl" />
            </div>
            <h3 className="text-lg font-display font-semibold text-primary-dark mb-2">
              Bem-vindo(a) ao Te Escuto
            </h3>
            <p className="text-muted-foreground mb-4 max-w-md">
              Compartilhe seus pensamentos e sentimentos como se estivesse conversando com uma amiga. 
              Estou aqui para escutar e oferecer apoio. <FontAwesomeIcon icon={faSmile} className="text-primary" />
            </p>
            <div className="text-xs text-muted-foreground bg-white p-3 rounded-lg border border-secondary/50">
              <FontAwesomeIcon icon={faShieldAlt} className="mr-1 text-primary" />
              Suas conversas são privadas e seguras
            </div>
          </div>
        )}

        {/* Message bubbles */}
        {messages.map((message) => (
          <div 
            key={message.id} 
            className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div 
              className={`max-w-[80%] rounded-lg p-3 ${
                message.role === 'user' 
                ? 'bg-primary text-white rounded-tr-none' 
                : 'bg-white border border-secondary rounded-tl-none'
              }`}
            >
              <div className="flex items-center mb-1">
                {message.role === 'assistant' && (
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mr-1.5">
                    <FontAwesomeIcon icon={faCommentAlt} className="text-xs text-primary" />
                  </div>
                )}
                <span className={`text-xs ${message.role === 'user' ? 'text-white/80' : 'text-muted-foreground'}`}>
                  {message.role === 'user' ? 'Você' : 'Te Escuto'} • {formatTime(message.timestamp)}
                </span>
              </div>
              <div className={`whitespace-pre-wrap ${message.role === 'user' ? '' : 'prose prose-sm'} max-w-none`}>
                {message.content}
              </div>
            </div>
          </div>
        ))}

        {/* Typing indicator */}
        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-white border border-secondary rounded-lg rounded-tl-none p-3 max-w-[80%]">
              <div className="flex items-center mb-1">
                <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mr-1.5">
                  <FontAwesomeIcon icon={faCommentAlt} className="text-xs text-primary" />
                </div>
                <span className="text-xs text-muted-foreground">
                  Te Escuto • Digitando
                </span>
              </div>
              <div className="flex space-x-1 items-center h-6">
                <div className="w-2 h-2 bg-primary/60 rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></div>
                <div className="w-2 h-2 bg-primary/60 rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></div>
                <div className="w-2 h-2 bg-primary/60 rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></div>
              </div>
            </div>
          </div>
        )}

        {/* Error message if any */}
        {error && (
          <div className="rounded-lg bg-red-50 p-3 border-l-4 border-red-400 fade-in my-2 mx-auto max-w-md">
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

        {/* Div to scroll to */}
        <div ref={messagesEndRef} />
      </div>

      {/* Aviso de limite atingido */}
      {limiteAtingido && (
        <div className="border-t border-secondary bg-secondary/10 p-4">
          <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-lg">
            <div className="flex">
              <div className="flex-shrink-0">
                <FontAwesomeIcon icon={faInfoCircle} className="text-amber-400" />
              </div>
              <div className="ml-3">
                <p className="text-sm text-amber-700 font-medium">Limite de mensagens atingido</p>
                <p className="text-sm text-amber-700 mt-1">
                  Você já enviou {MENSAGENS_LIMITE} mensagens nesta sessão. Para garantir a qualidade do atendimento e manter o projeto gratuito, limitamos o número de interações por vez. Se precisar continuar, volte mais tarde. Estaremos aqui pra você. 💜
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Input Area */}
      <div className="border-t border-secondary p-3 bg-white">
        <form onSubmit={handleSubmit} className="flex items-end space-x-2">
          <div className="flex-1 relative">
            <textarea 
              ref={inputRef}
              value={userText}
              onChange={handleTextareaChange}
              placeholder={limiteAtingido ? "Limite de mensagens atingido..." : "Escreva sua mensagem..."}
              rows={1}
              disabled={limiteAtingido}
              className={`w-full px-4 py-3 border rounded-lg outline-none transition-all duration-200 resize-none max-h-[150px] min-h-[44px] ${
                limiteAtingido 
                ? "bg-gray-100 border-gray-200 text-gray-400 cursor-not-allowed" 
                : "border-secondary focus:ring-2 focus:ring-primary focus:border-primary text-foreground"
              }`}
              onKeyDown={(e) => {
                // Submit on Enter without Shift
                if (!limiteAtingido && e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  handleSubmit(e);
                }
              }}
            />
            <div className="absolute bottom-2 right-3 text-muted-foreground text-xs opacity-70">
              {!limiteAtingido && userText.length > 0 && (
                userText.trim().length < 3 
                ? <span className="text-amber-500">{userText.length}/3 caracteres mínimos</span>
                : `${userText.length} caracteres`
              )}
            </div>
          </div>
          <button 
            type="submit"
            disabled={limiteAtingido || isAnalyzing || !userText.trim() || userText.trim().length < 3}
            className="px-4 py-3 bg-primary hover:bg-primary-dark text-white rounded-lg shadow-sm transition-all duration-200 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed h-[44px]"
          >
            <FontAwesomeIcon icon={faPaperPlane} />
          </button>
        </form>
        <div className="flex justify-center mt-2">
          <div className="text-xs text-muted-foreground">
            {!limiteAtingido ? (
              <>
                <FontAwesomeIcon icon={faCommentDots} className="text-primary mr-1" />
                Um espaço seguro para compartilhar seus sentimentos
              </>
            ) : (
              <>
                <FontAwesomeIcon icon={faInfoCircle} className="text-primary mr-1" />
                Volte mais tarde para continuar nossa conversa
              </>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-2 px-4 text-center text-muted-foreground text-xs border-t border-secondary/50 bg-secondary/10">
        <div className="flex justify-center space-x-4">
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
            <FontAwesomeIcon icon={faShieldAlt} />
            <span className="ml-1">Privacidade</span>
          </a>
          <span>•</span>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
            <FontAwesomeIcon icon={faQuestionCircle} />
            <span className="ml-1">Ajuda</span>
          </a>
          <span>•</span>
          <span>© {new Date().getFullYear()}</span>
        </div>
      </footer>
    </div>
  );
};

export default TextAnalyzer;
