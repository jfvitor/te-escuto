import { useState } from "react";
import { apiRequest } from "@/lib/queryClient";
import { useMutation } from "@tanstack/react-query";

interface AnalysisResponse {
  response: string;
}

interface Message {
  id: string;
  content: string;
  role: "user" | "assistant";
  timestamp: Date;
}

export function useTextAnalysis() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);

  const mutation = useMutation({
    mutationFn: async (text: string) => {
      const response = await apiRequest("POST", "/api/analyze", { text });
      return response.json() as Promise<AnalysisResponse>;
    },
    onSuccess: (data, variables) => {
      // After we get the response, we show typing indicator first
      setIsTyping(true);
      
      // Add user message immediately
      const userMessage: Message = {
        id: generateId(),
        content: variables,
        role: "user",
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, userMessage]);
      
      // Delay the assistant's response to simulate typing
      setTimeout(() => {
        const assistantMessage: Message = {
          id: generateId(),
          content: data.response,
          role: "assistant",
          timestamp: new Date()
        };
        
        setMessages(prev => [...prev, assistantMessage]);
        setIsTyping(false);
      }, 1500);
    }
  });

  const generateId = () => {
    return Date.now().toString(36) + Math.random().toString(36).substring(2);
  };

  const sendMessage = async (text: string) => {
    if (!text.trim()) return;
    
    try {
      await mutation.mutateAsync(text);
    } catch (error) {
      console.error("Error analyzing text:", error);
      throw error;
    }
  };

  const startNewConversation = () => {
    setMessages([]);
  };

  return {
    messages,
    sendMessage,
    isAnalyzing: mutation.isPending,
    isTyping,
    startNewConversation,
    error: mutation.error
  };
}
