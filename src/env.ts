import { z } from "zod";

const envSchema = z
  .object({
    VITE_GITHUB_API_TOKEN: z.string().min(1),
    VITE_GITHUB_API_USER: z.string().min(1),
  })
  .readonly();

export type ImportMetaEnv = z.infer<typeof envSchema>;
export const env = envSchema.parse(import.meta.env);
