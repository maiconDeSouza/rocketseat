import { FastifyReply, FastifyRequest } from 'fastify'

export async function checkSessionIdExists(
  request: FastifyRequest,
  replay: FastifyReply,
) {
  const { sessionID } = request.cookies
  if (!sessionID) {
    return replay.status(401).send({
      error: 'Unauthorized',
    })
  }
}
