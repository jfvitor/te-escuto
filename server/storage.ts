import { db } from "@db";
import { analyses } from "@shared/schema";

interface Analysis {
  content: string;
  response: string;
}

export const storage = {
  /**
   * Saves a text analysis interaction to the database
   */
  async saveAnalysis(analysis: Analysis) {
    try {
      const [result] = await db.insert(analyses)
        .values({
          content: analysis.content,
          response: analysis.response,
          createdAt: new Date()
        })
        .returning();
        
      return result;
    } catch (error) {
      console.error("Error saving analysis:", error);
      throw error;
    }
  },

  /**
   * Gets recent analyses from the database
   */
  async getRecentAnalyses(limit = 10) {
    try {
      return await db.query.analyses.findMany({
        orderBy: (analyses, { desc }) => [desc(analyses.createdAt)],
        limit
      });
    } catch (error) {
      console.error("Error getting recent analyses:", error);
      throw error;
    }
  }
};
