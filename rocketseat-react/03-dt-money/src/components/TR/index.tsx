import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
const td = "py-5 px-8 bg-gray-700"
interface TRPros {
    title: string
    value: number
    type: string
    date: Date
}
export function TR({title, value, type, date}:TRPros){
    const classValue = value >= 0 ? "text-green-500" : "text-red-500"
    function formatPrice(price: number): string {
        const formatPrice = Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        })
    
        return formatPrice.format(price)
      }
    return (
        <tr>
        <td width="50%" className={`${td} rounded-tl-md rounded-bl-md`}>{title}</td>
        <td className={`${td} ${classValue}`}>{formatPrice(value)}</td>
        <td className={td}>{type}</td>
        <td className={`${td} rounded-tr-md rounded-br-md`}>{formatDistanceToNow(date, {
            addSuffix: true,
            locale: ptBR
        })}</td>
      </tr>
    )
}