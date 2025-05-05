import { useState } from "react";
import { apiRequest } from "@/lib/queryClient";
import { useMutation } from "@tanstack/react-query";

interface AnalysisResponse {
  response: string;
}

export function useTextAnalysis() {
  const [analysisResult, setAnalysisResult] = useState<string | null>(null);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const mutation = useMutation({
    mutationFn: async (text: string) => {
      const response = await apiRequest("POST", "/api/analyze", { text });
      return response.json() as Promise<AnalysisResponse>;
    },
    onSuccess: (data) => {
      setAnalysisResult(data.response);
      setHasSubmitted(true);
    }
  });

  const analyzeText = async (text: string) => {
    try {
      await mutation.mutateAsync(text);
    } catch (error) {
      console.error("Error analyzing text:", error);
      throw error;
    }
  };

  const resetAnalysis = () => {
    setAnalysisResult(null);
    setHasSubmitted(false);
  };

  return {
    analyzeText,
    isAnalyzing: mutation.isPending,
    analysisResult,
    hasSubmitted,
    resetAnalysis,
    error: mutation.error
  };
}
