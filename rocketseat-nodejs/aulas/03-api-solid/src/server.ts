import { app } from './app'
import { env } from './env'

const port = env.PORT

app
  .listen({
    host: '0.0.0.0',
    port,
  })
  .then(() => console.log(`HTTP server running on http://localhost:${port} 🚀`))
