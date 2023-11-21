import 'dotenv/config'
import { z } from 'zod'

const envSchema = z.object({
  DATABASE_URL: z.string().default('./db/app.db'),
  PORT: z.number().default(1992),
})

export const env = envSchema.parse(process.env)
