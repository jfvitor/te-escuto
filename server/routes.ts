import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { analyzeText } from "./openai";

export async function registerRoutes(app: Express): Promise<Server> {
  // API route for text analysis
  app.post("/api/analyze", async (req, res) => {
    try {
      const { text } = req.body;
      
      if (!text || typeof text !== "string" || text.trim() === "") {
        return res.status(400).json({ 
          message: "Por favor, forneça um texto válido para análise." 
        });
      }

      // Generate AI response
      const response = await analyzeText(text);
      
      // Store the analysis record if needed
      try {
        await storage.saveAnalysis({
          content: text,
          response
        });
      } catch (storageError) {
        console.error("Error saving analysis:", storageError);
        // Continue even if storage fails
      }

      return res.status(200).json({ response });
    } catch (error) {
      console.error("Error analyzing text:", error);
      return res.status(500).json({ 
        message: "Ocorreu um erro ao analisar o texto. Por favor, tente novamente." 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
