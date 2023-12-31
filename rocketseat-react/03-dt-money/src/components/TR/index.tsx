import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { useContext } from 'react'
import { TransactionsContext } from '../../context/transactions'
const td = 'py-5 px-8 bg-gray-700'
interface TRPros {
  title: string
  value: number
  type: string
  date: Date
}
export function TR({ title, value, type, date }: TRPros) {
  const classValue = value >= 0 ? 'text-green-500' : 'text-red-500'
  const { formatPrice } = useContext(TransactionsContext)
  return (
    <tr>
      <td
        width="50%"
        className={`${td} rounded-tl-md rounded-bl-md`}
        title="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus rem deserunt iste sunt. Amet repudiandae exercitationem quae maiores maxime? Delectus debitis ipsa cum praesentium voluptatibus culpa reiciendis, deleniti et aut."
      >
        {title}
      </td>
      <td className={`${td} ${classValue}`}>{formatPrice(value)}</td>
      <td className={td}>{type}</td>
      <td className={`${td} rounded-tr-md rounded-br-md`}>
        {formatDistanceToNow(date, {
          addSuffix: true,
          locale: ptBR,
        })}
      </td>
    </tr>
  )
}
