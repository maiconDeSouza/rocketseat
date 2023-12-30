import { useContext } from 'react'
import { TransactionsContext } from '../context/transactions'

export function useSummary() {
  const { transactions, formatPrice } = useContext(TransactionsContext)

  const summary = transactions.reduce(
    (acc, transactionCurrent) => {
      if (transactionCurrent.operacao === 'entrada') {
        acc.plus += transactionCurrent.valor
        acc.total += transactionCurrent.valor
      }
      if (transactionCurrent.operacao === 'saída') {
        acc.less += transactionCurrent.valor
        acc.total -= transactionCurrent.valor
      }
      return acc
    },
    {
      plus: 0,
      less: 0,
      total: 0,
    },
  )
  const total = summary.total
  const plusFormat = formatPrice(summary.plus)
  const lessFormat = formatPrice(summary.less)
  const totalFormat = formatPrice(summary.total)
  return { total, plusFormat, lessFormat, totalFormat }
}
