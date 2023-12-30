import { zodResolver } from '@hookform/resolvers/zod'
import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { TransactionsContext } from '../../context/transactions'

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export function SearchForm() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })
  const { searchTransactions } = useContext(TransactionsContext)

  function handleSearchTransactions(data: SearchFormInputs) {
    searchTransactions(data.query)
  }

  return (
    <div className="w-full max-w-[1120px] mb-0 mt-16 mx-auto px-6 py-0">
      <form
        className="flex gap-4"
        onSubmit={handleSubmit(handleSearchTransactions)}
      >
        <input
          className="flex-1 border-none bg-gray-900 text-gray-300 p-4 placeholder:text-gray-500 rounded-md"
          type="text"
          placeholder="Buscar uma transação"
          {...register('query')}
        />
        <button
          className="flex items-center gap-3 p-4 bg-transparent border border-green-300 rounded-md hover:bg-green-500 hover:border-green-500 hover:text-white hover:transition-all hover:duration-500 cursor-pointer"
          disabled={isSubmitting}
          type="submit"
        >
          <span>Buscar</span>
        </button>
      </form>
    </div>
  )
}
