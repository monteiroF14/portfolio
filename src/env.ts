import { z } from "zod";

const envSchema = z
  .object({
    VITE_GITHUB_API_URL: z.string().url(),
    VITE_GITHUB_API_USER: z.string().min(1),
  })
  .readonly();

export type ImportMetaEnv = z.infer<typeof envSchema>;
export const env = envSchema.parse(import.meta.env);
