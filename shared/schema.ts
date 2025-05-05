import { pgTable, text, serial, integer, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";
import { relations } from "drizzle-orm";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

// Schema for analyses
export const analyses = pgTable("analyses", {
  id: serial("id").primaryKey(),
  content: text("content").notNull(),
  response: text("response").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const analysesInsertSchema = createInsertSchema(analyses, {
  content: (schema) => schema.min(1, "Content cannot be empty"),
  response: (schema) => schema.min(1, "Response cannot be empty"),
});

export type AnalysisInsert = z.infer<typeof analysesInsertSchema>;
export type Analysis = typeof analyses.$inferSelect;
