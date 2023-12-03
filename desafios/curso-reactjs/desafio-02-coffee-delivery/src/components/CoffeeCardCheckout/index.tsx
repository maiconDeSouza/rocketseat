import { useContext } from 'react'
import { CoffeeContext } from '../../contexts/CoffeeContext'
import { Trash } from 'lucide-react'

interface CoffeeCardCheckoutProps {
  id: string
  name: string
  cover: string
  amount: number
  price: number
}
export function CoffeeCardCheckout({
  id,
  name,
  cover,
  amount,
  price,
}: CoffeeCardCheckoutProps) {
  const { onPlusCart, onLessCart, onRemoveCart, formatPrice } =
    useContext(CoffeeContext)
  const priceCoffee = amount * price
  return (
    <div className="flex justify-between items-center w-[23rem]">
      <div className="w-[4rem]">
        <img className="w-[4rem]" src={cover} alt="" />
      </div>
      <div className="w-[10.688rem] flex flex-col items-center gap-1">
        <h3>{name}</h3>
        <div className="flex items-center gap-2">
          <div className="h-[2.375rem] w-[4.5rem]  rounded-md p-1 bg-base-button flex justify-center items-center gap-2">
            <button
              className="text-purple text-3xl borde -mt-2"
              onClick={() => onLessCart(id)}
            >
              -
            </button>
            <span className="font-bold font-roboto">{amount}</span>
            <button
              className="text-purple text-2xl -mt-2"
              onClick={() => onPlusCart(id)}
            >
              +
            </button>
          </div>
          <div>
            <button
              className="h-[2.375rem] rounded-md p-1 bg-base-button  text-[0.5rem] flex items-center gap-1"
              onClick={() => onRemoveCart(id)}
            >
              <Trash size={12} color="#4B2995" /> Remover
            </button>
          </div>
        </div>
      </div>
      <div className="w-[5rem]">{formatPrice(priceCoffee)}</div>
    </div>
  )
}
