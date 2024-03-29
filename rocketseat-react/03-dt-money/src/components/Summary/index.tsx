import { ArrowDownFromLine, ArrowUpFromLine, DollarSign } from 'lucide-react'
import { useSummary } from '../../hooks/useSummary'

const summaryCard = 'bg-gray-600 rounded-md p-8'
const summaryHeader = 'flex items-center justify-between text-gray-300'
const summaryHeaderGreen = 'flex items-center justify-between text-white'
const summaryStrong = 'block mt-4 text-[2rem]'

export function Summary() {
  const { total, plusFormat, lessFormat, totalFormat } = useSummary()

  const summaryCardTotal =
    total >= 0 ? 'bg-green-500 rounded-md p-8' : 'bg-red-500 rounded-md p-8'

  return (
    <section className="w-full max-w-[1120px] mb-0 mt-[-5rem] mx-auto px-6 py-0 grid grid-cols-dt gap-8">
      <div className={summaryCard}>
        <header className={summaryHeader}>
          <span>Entradas</span>
          <ArrowDownFromLine size={32} color="#00b37e" />
        </header>
        <strong className={summaryStrong}>{plusFormat}</strong>
      </div>
      <div className={summaryCard}>
        <header className={summaryHeader}>
          <span>Saídas</span>
          <ArrowUpFromLine size={32} color="#f75a68" />
        </header>
        <strong className={summaryStrong}>{lessFormat}</strong>
      </div>
      <div className={summaryCardTotal}>
        <header className={summaryHeaderGreen}>
          <span>Total</span>
          <DollarSign size={32} />
        </header>
        <strong className={summaryStrong}>{totalFormat}</strong>
      </div>
    </section>
  )
}
