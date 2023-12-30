import { TransactionProvider } from './context/transactions'
import { Transaction } from './pages/Transactions'

export function App() {
  return (
    <>
      <TransactionProvider>
        <Transaction />
      </TransactionProvider>
    </>
  )
}
