import { v4 as uuidv4 } from 'uuid'
import { ArrowDownFromLine, ArrowUpFromLine, X } from 'lucide-react'
import logo from '../../assets/logo.svg'
import * as Dialog from '@radix-ui/react-dialog'
import { FormEvent, useContext, useState } from 'react'
import { TransactionsContext } from '../../context/transactions'

const inputStyle =
  'rounded-md border-none bg-gray-900 text-gray-300 p-4 placeholder:text-gray-500'

export function Header() {
  const [description, setDescription] = useState('')
  const [value, setValue] = useState(0)
  const [category, setCategory] = useState('')
  const [type, setType] = useState('entrada')
  const { createNewTransaction } = useContext(TransactionsContext)
  function handleEntradaSaida(value: string) {
    setType(value)
  }

  function handleCreateNewTransaction(e: FormEvent) {
    e.preventDefault()
    if (type === '') {
      return
    }
    console.log(description, value, category, type)
    const newTransaction = {
      id: uuidv4(),
      descricao: description,
      valor: value,
      operacao: type,
      tipo: category,
      data: '2023-12-29',
    }
    createNewTransaction(newTransaction)
    setDescription('')
    setValue(0)
    setCategory('')
    setType('')
  }
  return (
    <header className="bg-gray-900 pt-10 pb-28 px-0">
      <div className="w-full max-w-[1120px] my-0 mx-auto px-6 py-0 flex justify-between items-center ">
        <img src={logo} alt="" />
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <button
              type="button"
              className="h-[50px] border-none bg-green-500 text-white font-bold py-0 px-5 rounded-md cursor-pointer hover:bg-green-700 hover:transition-all hover:duration-500"
            >
              Nova Transação
            </button>
          </Dialog.Trigger>

          <Dialog.Portal>
            <Dialog.Overlay className="fixed w-screen h-screen inset-0 bg-black/75" />

            <Dialog.Content className="min-w-[32rem] rounded-md py-10 px-12 bg-gray-800 fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
              <Dialog.Title>Nova Transação</Dialog.Title>
              <Dialog.Close className="absolute bg-transparent border-none top-6 right-6 leading-none cursor-pointer text-red-500">
                <X size={24} />
              </Dialog.Close>
              <form
                className="mt-8 flex flex-col gap-4"
                onSubmit={handleCreateNewTransaction}
              >
                <input
                  type="text"
                  placeholder="Descrição"
                  required
                  className={inputStyle}
                  onChange={(e) => setDescription(e.target.value)}
                />
                <input
                  type="number"
                  placeholder="Valor"
                  required
                  className={inputStyle}
                  onChange={(e) => setValue(Number(e.target.value))}
                />
                <input
                  type="text"
                  placeholder="categoria"
                  required
                  className={inputStyle}
                  onChange={(e) => setCategory(e.target.value)}
                />

                <div className="grid grid-cols-2 gap-4 mt-2">
                  <button
                    onClick={() => handleEntradaSaida('entrada')}
                    type="button"
                    className="bg-gray-700 p-4 flex items-center justify-center gap-2 rounded-md border-none text-gray-100 cursor-pointer"
                  >
                    <ArrowDownFromLine size={24} color="#00b37e" />
                    <span>Entrada</span>
                  </button>
                  <button
                    onClick={() => handleEntradaSaida('saida')}
                    type="button"
                    className="bg-gray-700 p-4 flex items-center justify-center gap-2 rounded-md border-none text-gray-100 cursor-pointer"
                  >
                    <ArrowUpFromLine size={24} color="#f75a68" />
                    <span>Saída</span>
                  </button>
                </div>
                <button
                  type="submit"
                  className="h-[58px]  border-none bg-green-500 text-white font-bold py-0 px-5 rounded-md mt-6 cursor-pointer hover:bg-green-700 hover:transition-all hover:duration-300"
                >
                  Cadastrar
                </button>
              </form>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </div>
    </header>
  )
}
