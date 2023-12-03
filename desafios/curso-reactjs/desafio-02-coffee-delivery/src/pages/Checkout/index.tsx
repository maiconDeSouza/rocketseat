import { CreditCard, DollarSign, MapPin } from 'lucide-react'
import { useContext, useState } from 'react'
import {
  CoffeeContext,
  FinalizingPurchaseProps,
} from '../../contexts/CoffeeContext'
import { CoffeeCardCheckout } from '../../components/CoffeeCardCheckout'

type FormOfPaymentType = 'cartão crédito' | 'cartão débito' | 'dinheiro'

export function Checkout() {
  const {
    cartList,
    address,
    formatPrice,
    onCep,
    onFinalizingPurchase,
    onRemoveCart,
  } = useContext(CoffeeContext)
  const totalItems = cartList.reduce((acc, current) => {
    return (acc += current.price * current.amount)
  }, 0)
  const freight = totalItems === 0 ? 0 : 3.5
  const total = totalItems + freight

  const [number, setNumber] = useState('')

  const [formOfPayment, setFormOfPayment] =
    useState<FormOfPaymentType>('cartão crédito')

  function completeOrder() {
    if (!number || !cartList.length || !address.cep) {
      alert('Preenche tudo!')
    } else {
      const data: FinalizingPurchaseProps = {
        address: `${address.logradouro}, ${number} - ${address.localidade} - ${address.uf}`,
        pay: formOfPayment,
        time: '20 min - 30 min',
      }
      onRemoveCart('')
      onFinalizingPurchase(data)
    }
  }

  return (
    <div className="flex flex-col gap-2 items-center w-full min-h-screen">
      <main className="w-[70rem]  flex flex-wrap justify-between">
        <div>
          <section className="w-[40rem] flex flex-col gap-1">
            <h2 className="font-bold font-baloo text-base">
              Complete seu pedido
            </h2>
            <form
              action=""
              className="bg-background w-full flex flex-col gap-4 p-[2.5rem] rounded-md"
            >
              <h3 className="flex items-center gap-1">
                <MapPin size={22} color="#C47F17" /> Endereço de Entrega
              </h3>
              <p>Informe o endereço onde deseja receber seu pedido</p>
              <div>
                <input
                  className="w-[12.5rem] h-[2.625rem] bg-base-input rounded text-base-label p-2"
                  type="number"
                  placeholder="CEP"
                  onChange={(e) => onCep(e.target.value)}
                />
              </div>
              <div>
                <input
                  className="w-full h-[2.625rem] bg-base-input rounded text-base-label p-2"
                  type="text"
                  placeholder="Rua"
                  defaultValue={address.logradouro}
                />
              </div>
              <div className="flex justify-between">
                <input
                  className="w-[12.5rem] h-[2.625rem] bg-base-input rounded text-base-label p-2"
                  type="text"
                  placeholder="Numero"
                  onChange={(e) => setNumber(e.target.value)}
                />
                <div className="flex items-center">
                  <input
                    className="w-[17rem] h-[2.625rem] bg-base-input rounded-bl rounded-tl text-base-label p-2"
                    type="text"
                    placeholder="Complemento"
                    defaultValue={address.complemento}
                  />
                  <span className="text-xs h-[2.625rem] bg-base-input rounded-br rounded-tr text-base-label p-2 flex justify-center items-center">
                    Opcional
                  </span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <input
                  className="w-[12.5rem] h-[2.625rem] bg-base-input rounded text-base-label p-2"
                  type="text"
                  placeholder="Bairro"
                  defaultValue={address.bairro}
                />
                <input
                  className="w-[17.25rem] h-[2.625rem] bg-base-input rounded text-base-label p-2"
                  type="text"
                  placeholder="Cidade"
                  defaultValue={address.localidade}
                />
                <input
                  className="w-[3.75rem] h-[2.625rem] bg-base-input rounded text-base-label p-2"
                  type="text"
                  placeholder="UF"
                  defaultValue={address.uf}
                />
              </div>
            </form>
          </section>
          <section className="w-[40rem] bg-background  mt-3 p-[2.5rem] rounded-md flex flex-col gap-4 self-start">
            <div className="flex gap-1">
              <DollarSign size={22} color="#4B2995" />
              <div>
                <h2 className="font-bold font-baloo text-base">Pagamento</h2>
                <p className="text-base-text">
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <button
                onClick={() => setFormOfPayment('cartão crédito')}
                className="w-[12rem] h-[3.188rem] bg-base-button text-base-text rounded-md flex justify-center items-center gap-4 active:border active:border-orange-900"
              >
                <CreditCard size={16} color="#4B2995" />
                Cartão de crédito
              </button>
              <button
                onClick={() => setFormOfPayment('cartão débito')}
                className="w-[12rem] h-[3.188rem] bg-base-button text-base-text rounded-md flex justify-center items-center gap-4"
              >
                <CreditCard size={16} color="#4B2995" />
                Cartão de débito
              </button>
              <button
                onClick={() => setFormOfPayment('dinheiro')}
                className="w-[12rem] h-[3.188rem] bg-base-button text-base-text rounded-md flex justify-center items-center gap-4"
              >
                <CreditCard size={16} color="#4B2995" />
                Dinheiro
              </button>
            </div>
          </section>
        </div>
        <aside className="w-[28rem] flex flex-col gap-1">
          <h2 className="font-bold font-baloo text-base">Café Selecionado</h2>
          <div className="bg-background p-[2.5rem] rounded-tl-md rounded-tr-[2rem] rounded-br-md rounded-bl-[2rem] border border-background flex flex-col gap-6">
            <div>
              <ul className="flex flex-col gap-8">
                {cartList.map((coffee) => {
                  return (
                    <li key={coffee.id}>
                      <CoffeeCardCheckout
                        cover={coffee.cover}
                        name={coffee.name}
                        amount={coffee.amount}
                        id={coffee.id}
                        price={coffee.price}
                      />
                    </li>
                  )
                })}
              </ul>
            </div>
            <div className="bg-background  flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <span className="text-base-text">Total de Itens</span>
                <span>{formatPrice(totalItems)}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-base-text">Entrega</span>
                <span>{formatPrice(freight)}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-bold">Total</span>
                <span>{formatPrice(total)}</span>
              </div>
            </div>
            <div>
              <button
                type="button"
                className="w-[23rem] h-[2.875rem] bg-yellow text-white rounded-md font-bold"
                onClick={completeOrder}
              >
                Confirmar Pedido
              </button>
            </div>
          </div>
        </aside>
      </main>
    </div>
  )
}
