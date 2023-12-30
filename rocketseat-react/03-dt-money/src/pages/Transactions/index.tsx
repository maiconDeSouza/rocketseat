import { useContext } from 'react'
import { Header } from '../../components/Header'
import { SearchForm } from '../../components/SearchForm'
import { Summary } from '../../components/Summary'
import { TR } from '../../components/TR'
import { TransactionsContext } from '../../context/transactions'

export function Transaction() {
  const { transactions, setValue } = useContext(TransactionsContext)
  return (
    <div>
      <Header />
      <Summary />
      <SearchForm />
      <section className="w-full max-w-[1120px] mb-0 mt-16 mx-auto px-6 py-0">
        <table className="w-full border-separate border-spacing-x-0 border-spacing-y-2 mt-6">
          <tbody>
            {transactions.map((transaction) => {
              return (
                <TR
                  title={transaction.descricao}
                  value={setValue(transaction.operacao, transaction.valor)}
                  type={transaction.tipo}
                  date={new Date(transaction.data)}
                  key={transaction.id}
                />
              )
            })}
          </tbody>
        </table>
      </section>
    </div>
  )
}
