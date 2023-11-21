import { FastifyInstance } from 'fastify'
import { knex } from '../database'
import { randomUUID } from 'node:crypto'
import { z } from 'zod'
import { creditDebit } from '../utils/creditDebit'
import { checkSessionIdExists } from '../middlewares/check-session-id-exists'

export async function transactionsRoutes(app: FastifyInstance) {
  app.get(
    '/',
    {
      preHandler: [checkSessionIdExists],
    },
    async (request, replay) => {
      const { sessionID } = request.cookies
      const transactions = await knex('transactions')
        .where('session_id', sessionID)
        .select('*')
      return {
        transactions,
      }
    },
  )

  app.get(
    '/:id',
    {
      preHandler: [checkSessionIdExists],
    },
    async (request) => {
      const getTransactionParams = z.object({
        id: z.string().uuid(),
      })
      const { sessionID } = request.cookies
      const { id } = getTransactionParams.parse(request.params)

      const transactions = await knex('transactions')
        .where({
          id,
          session_id: sessionID,
        })
        .first()

      return { transactions }
    },
  )

  app.get(
    '/summary',
    {
      preHandler: [checkSessionIdExists],
    },
    async (request) => {
      const { sessionID } = request.cookies
      const summary = await knex('transactions')
        .where('session_id', sessionID)
        .sum('amount', { as: 'amount' })
        .first()

      return {
        summary,
      }
    },
  )
  app.post('/', async (req, reply) => {
    const createTransactionBodySchema = z.object({
      title: z.string(),
      amount: z.number(),
      type: z.enum(['credit', 'debit']),
    })
    const { title, amount, type } = createTransactionBodySchema.parse(req.body)
    const amountCreditDebit = creditDebit(amount, type)

    try {
      let sessionID = req.cookies.sessionID

      if (!sessionID) {
        sessionID = randomUUID()
      }

      reply.cookie('sessionID', sessionID, {
        path: '/',
        maxAge: 1000 * 60 * 60 * 24 * 30, // 30days
      })

      await knex('transactions').insert({
        id: randomUUID(),
        title,
        amount: amountCreditDebit,
        session_id: sessionID,
      })

      return reply.status(201).send()
    } catch (error) {
      console.log(error)
      reply.status(500).send()
    }
  })
}
