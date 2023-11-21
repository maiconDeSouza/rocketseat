import { app } from './app'
import cookie from '@fastify/cookie'
import cors from '@fastify/cors'

import { transactionsRoutes } from './routes/transactions'

async function ex() {
  await app.register(cors)

  await app.register(cookie)

  await app.register(transactionsRoutes, {
    prefix: 'transactions',
  })
}

ex()
