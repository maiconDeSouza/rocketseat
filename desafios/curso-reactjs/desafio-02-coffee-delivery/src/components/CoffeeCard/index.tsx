import { ShoppingCart } from 'lucide-react'
import { useContext, useEffect, useState } from 'react'
import { CoffeeContext, CoffeeListProps } from '../../contexts/CoffeeContext'
import { Link } from 'react-router-dom'

interface CoffeeCardProps {
  id: string
}

export function CoffeeCard({ id }: CoffeeCardProps) {
  const { coffeeList, onPlusCart, onLessCart } = useContext(CoffeeContext)
  const [card, setCard] = useState<CoffeeListProps>()

  useEffect(() => {
    const coffeeCard = coffeeList.find((coffee) => coffee.id === id)
    if (coffeeCard) {
      setCard(coffeeCard)
    }
  }, [coffeeList, id])

  return (
    <div className="bg-background w-[16rem] h-[22rem] rounded-tl-md rounded-tr-[2rem] rounded-br-md rounded-bl-[2rem] border border-background flex flex-col items-center gap-4 p-2">
      <div className="flex justify-center">
        <img src={card?.cover} alt="" className="w-[7.5rem] mt-[-1.5rem]" />
      </div>
      <ul className="flex items-center gap-2">
        {card?.tag.map((tag) => {
          return (
            <li
              className="p-1 text-yellow-dark bg-yellow-light rounded-lg text-xs border border-yellow-dark"
              key={tag}
            >
              {tag}
            </li>
          )
        })}
      </ul>
      <h1 className="font-bold text-2xl">{card?.name}</h1>
      <p className="text-center text-base-label text-sm h-14">
        {card?.description}
      </p>
      <div className="w-full flex justify-between p-2">
        <div className="flex justify-center items-center">
          <span className="text-xs font-baloo font-bold text-base-text">
            R$
          </span>
          <span className="text-2xl font-roboto font-bold text-base-text">
            {card?.price}
          </span>
        </div>
        <div className="flex gap-2">
          <div className="h-[2.375rem] w-[4.5rem]  rounded-md p-1 bg-base-button flex justify-center items-center gap-2">
            <button
              className="text-purple text-3xl borde -mt-2"
              onClick={() => onLessCart(id)}
            >
              -
            </button>
            <span className="font-bold font-roboto">{card?.amount}</span>
            <button
              className="text-purple text-2xl -mt-2"
              onClick={() => onPlusCart(id)}
            >
              +
            </button>
          </div>
          <Link to="/checkout">
            <div className="w-[2.375rem] h-[2.375rem] bg-purple-dark rounded-md flex justify-center items-center">
              <ShoppingCart size={22} color="#F3F2F2" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
