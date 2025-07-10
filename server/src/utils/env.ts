import { z } from "zod/v4";

const envSchema = z.object({
  GEMINI_API_KEY: z.string(),
  PORT: z.coerce.number().default(3333),
  DATABASE_URL: z.url().startsWith("postgresql://"),
});

export const env = envSchema.parse(process.env);
