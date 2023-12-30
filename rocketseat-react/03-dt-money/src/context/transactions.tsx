import { ReactNode, createContext, useEffect, useState } from 'react'
import { api } from '../api/axios'

interface ChildrenProps {
  children: ReactNode
}

interface TransactionProps {
  id: string
  descricao: string
  operacao: string
  valor: number
  tipo: string
  data: string
}

interface TransactionsProps {
  transactions: TransactionProps[]
  formatPrice: (value: number) => string
  setValue: (str: 'entrada' | 'saída', value: number) => number
  searchTransactions: (query: string) => void
  createNewTransaction: (transaction: TransactionProps) => void
}

export const TransactionsContext = createContext({} as TransactionsProps)

export function TransactionProvider({ children }: ChildrenProps) {
  const [transactions, setTransactions] = useState<TransactionProps[]>([])
  useEffect(() => {
    async function loader() {
      const response = await api.get('/transactions')
      const data = response.data
      setTransactions(data)
    }
    loader()
  }, [])

  async function searchTransactions(query: string) {
    const response = await api.get('/transactions', {
      params: {
        q: query,
      },
    })
    const data = response.data
    setTransactions(data)
  }

  async function createNewTransaction(transaction: TransactionProps) {
    const { id, descricao, valor, operacao, tipo, data } = transaction
    const response = await api.post('/transactions', {
      id,
      descricao,
      valor,
      operacao,
      tipo,
      data,
    })
    setTransactions((state) => [response.data, ...state])
  }

  function formatPrice(price: number): string {
    const formatPrice = Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    })

    return formatPrice.format(price)
  }

  function setValue(str: 'entrada' | 'saída', value: number) {
    if (str === 'entrada') {
      return value
    } else {
      return -1 * value
    }
  }

  return (
    <TransactionsContext.Provider
      value={{
        transactions,
        setValue,
        formatPrice,
        searchTransactions,
        createNewTransaction,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  )
}
