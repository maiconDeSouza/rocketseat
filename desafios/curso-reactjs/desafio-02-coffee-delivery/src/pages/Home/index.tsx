import { Coffee, Package, ShoppingCart, Timer } from 'lucide-react'
import banner from '../../assets/Imagem.png'
import { IconAndText } from '../../components/IconAndText'
import { CoffeeCard } from '../../components/CoffeeCard'
import { useContext } from 'react'
import { CoffeeContext } from '../../contexts/CoffeeContext'

export function Home() {
  const { coffeeList } = useContext(CoffeeContext)
  return (
    <div className="flex flex-col gap-2">
      <main className="h-[34rem] flex justify-center items-center bg-background">
        <div className="w-[70rem] h-[21.375rem] flex">
          <section className="flex flex-col gap-5">
            <div className="w-[36.75rem] flex flex-col gap-2">
              <h1 className="font-baloo font-bold text-base-title text-[2.85rem]">
                Encontre o café perfeito para qualquer hora do dia
              </h1>
              <p className="text-base-subtitle text-xl">
                Com o Coffee Delivery você recebe seu café onde estiver, a
                qualquer hora
              </p>
            </div>
            <div>
              <ul className="flex flex-wrap gap-2 w-[36.75rem]">
                <li className="my-2">
                  <IconAndText
                    color="bg-yellow-dark"
                    text="Compra simples e segura"
                  >
                    <ShoppingCart size={16} color="#fff" />
                  </IconAndText>
                </li>
                <li className="my-2">
                  <IconAndText
                    color="bg-base-text"
                    text="Embalagem mantém o café intacto"
                  >
                    <Package size={16} color="#fff" />
                  </IconAndText>
                </li>
                <li className="my-2">
                  <IconAndText
                    color="bg-yellow"
                    text="Entrega rápida e rastreada"
                  >
                    <Timer size={16} color="#fff" />
                  </IconAndText>
                </li>
                <li className="my-2">
                  <IconAndText color="bg-purple" text="Compra simples e segura">
                    <Coffee size={16} color="#fff" />
                  </IconAndText>
                </li>
              </ul>
            </div>
          </section>
          <section className="">
            <img src={banner} alt="" />
          </section>
        </div>
      </main>
      <article className="flex justify-center items-center">
        <section className="w-[70rem] flex flex-col gap-10">
          <h2 className="font-baloo font-bold text-base-subtitle text-[2rem]">
            Nossos Cafés
          </h2>
          <ul className="flex flex-wrap justify-center items-center gap-4">
            {coffeeList.map((coffee) => {
              return (
                <li key={coffee.id} className="my-8">
                  <CoffeeCard
                    cover={coffee.cover}
                    description={coffee.description}
                    name={coffee.name}
                    price={coffee.price}
                    tag={coffee.tag}
                    id={coffee.id}
                  />
                </li>
              )
            })}
          </ul>
        </section>
      </article>
    </div>
  )
}
