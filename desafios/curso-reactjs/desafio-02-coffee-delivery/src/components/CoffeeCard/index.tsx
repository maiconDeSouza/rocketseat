import { ShoppingCart } from 'lucide-react'

interface CoffeeCardProps {
  cover: string
  type: string
  tag: string[]
  description: string
  price: number
}

export function CoffeeCard({
  type,
  tag,
  price,
  description,
  cover,
}: CoffeeCardProps) {
  return (
    <div className="bg-background w-[16rem] h-[20rem] rounded-tl-md rounded-tr-[2rem] rounded-br-md rounded-bl-[2rem] border border-background flex flex-col items-center gap-4 p-2">
      <div className="flex justify-center">
        <img src={cover} alt="" className="w-[7.5rem] mt-[-1.5rem]" />
      </div>
      <ul>
        {tag.map((t) => {
          return (
            <li
              key={t}
              className="p-1 text-yellow-dark bg-yellow-light rounded-lg text-xs border border-yellow-dark"
            >
              {t}
            </li>
          )
        })}
      </ul>
      <h1 className="font-bold text-2xl">{type}</h1>
      <p className="text-center text-base-label text-sm">{description}</p>
      <div className="w-full flex justify-between p-2">
        <div className="flex justify-center items-center">
          <span className="text-xs font-baloo font-bold text-base-text">
            R$
          </span>
          <span className="text-2xl font-roboto font-bold text-base-text">
            {price}
          </span>
        </div>
        <div className="flex gap-2">
          <div className="h-[2.375rem] w-[4.5rem]  rounded-md p-1 bg-base-button flex justify-center items-center gap-2">
            <button className="text-purple text-3xl borde -mt-2">-</button>
            <span className="font-bold font-roboto">1</span>
            <button className="text-purple text-2xl -mt-2">+</button>
          </div>
          <div className="w-[2.375rem] h-[2.375rem] bg-purple-dark rounded-md flex justify-center items-center">
            <ShoppingCart size={22} color="#F3F2F2" />
          </div>
        </div>
      </div>
    </div>
  )
}
