import { HistoryContainer, HistoryList, Status } from './style'

export function History() {
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
            <tr>
              <td>Projeto 1</td>
              <td>20 minutos</td>
              <td>Há 2 meses</td>
              <td>
                <Status statusColor="green-500">Cocluído</Status>
              </td>
            </tr>
            <tr>
              <td>Projeto 1</td>
              <td>20 minutos</td>
              <td>Há 2 meses</td>
              <td>
                <Status statusColor="yellow-500">Em andamento</Status>
              </td>
            </tr>
            <tr>
              <td>Projeto 1</td>
              <td>20 minutos</td>
              <td>Há 2 meses</td>
              <td>
                <Status statusColor="green-500">Cocluído</Status>
              </td>
            </tr>
            <tr>
              <td>Projeto 1</td>
              <td>20 minutos</td>
              <td>Há 2 meses</td>
              <td>
                <Status statusColor="red-500">Interrompido</Status>
              </td>
            </tr>
            <tr>
              <td>Projeto 1</td>
              <td>20 minutos</td>
              <td>Há 2 meses</td>
              <td>
                <Status statusColor="green-500">Cocluído</Status>
              </td>
            </tr>
            <tr>
              <td>Projeto 1</td>
              <td>20 minutos</td>
              <td>Há 2 meses</td>
              <td>
                <Status statusColor="green-500">Cocluído</Status>
              </td>
            </tr>
            <tr>
              <td>Projeto 1</td>
              <td>20 minutos</td>
              <td>Há 2 meses</td>
              <td>
                <Status statusColor="green-500">Cocluído</Status>
              </td>
            </tr>
            <tr>
              <td>Projeto 1</td>
              <td>20 minutos</td>
              <td>Há 2 meses</td>
              <td>
                <Status statusColor="green-500">Cocluído</Status>
              </td>
            </tr>
            <tr>
              <td>Projeto 1</td>
              <td>20 minutos</td>
              <td>Há 2 meses</td>
              <td>
                <Status statusColor="green-500">Cocluído</Status>
              </td>
            </tr>
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}
