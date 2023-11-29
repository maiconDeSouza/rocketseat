import { ShoppingCart } from 'lucide-react'
import banner from '../../assets/Imagem.png'
import { IconAndText } from '../../components/IconAndText'
export function Home() {
  return (
    <main className="w-full h-[34rem] flex justify-center border border-orange-500">
      <div className="w-full md:w-[70rem] flex mt-20">
        <section className="border border-sky-900 flex flex-col">
          <div className="border border-red-800">
            <h1 className="font-baloo text-4xl font-bold text-base-title">
              Encontre o café perfeito para qualquer hora do dia
            </h1>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>
          </div>
          <div>
            <ul className="flex justify-end flex-wrap border border-red-800">
              <li className="w-[50%]">
                <IconAndText
                  text="Compra simples e segura"
                  color="bg-yellow-dark"
                >
                  <ShoppingCart size={16} color="#fff" />
                </IconAndText>
              </li>
              <li>
                <IconAndText
                  text="Compra simples e segura"
                  color="bg-yellow-dark"
                >
                  <ShoppingCart size={16} color="#fff" />
                </IconAndText>
              </li>
              <li>
                <IconAndText
                  text="Compra simples e segura"
                  color="bg-yellow-dark"
                >
                  <ShoppingCart size={16} color="#fff" />
                </IconAndText>
              </li>
              <li>
                <IconAndText
                  text="Compra simples e segura"
                  color="bg-yellow-dark"
                >
                  <ShoppingCart size={16} color="#fff" />
                </IconAndText>
              </li>
            </ul>
          </div>
        </section>
        <section>
          <img src={banner} alt="" />
        </section>
      </div>
    </main>
  )
}
