import { useContext } from 'react'
import { HistoryContainer, HistoryList, Status } from './style'
import { CyclesContext } from '../../Contexts/CyclesContexts'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

export function History() {
  const { cycles } = useContext(CyclesContext)
  return (
    <HistoryContainer>
      <h1>Meu Histórico</h1>
      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Início</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {cycles.map((cycle) => {
              return (
                <tr key={cycle.id}>
                  <td>{cycle.task}</td>
                  <td>{cycle.minutesAmount} Minutos</td>
                  <td>
                    {formatDistanceToNow(cycle.startDate, {
                      addSuffix: true,
                      locale: ptBR,
                    })}
                  </td>
                  <td>
                    {cycle.finashDate && (
                      <Status statusColor="green-500">Cocluído</Status>
                    )}
                    {cycle.interruptedDate && !cycle.finashDate && (
                      <Status statusColor="red-500">Interrompido</Status>
                    )}
                    {!cycle.finashDate && !cycle.interruptedDate && (
                      <Status statusColor="yellow-500">Em andamento</Status>
                    )}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}
