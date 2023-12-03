import { DollarSign, MapPin, Timer } from 'lucide-react'
import banner from '../../assets/illustration.png'
import { useContext } from 'react'
import { CoffeeContext } from '../../contexts/CoffeeContext'
export function Success() {
  const { finalizingPurchase } = useContext(CoffeeContext)
  return (
    <main className="flex justify-center items-center  mt-5">
      <div className="w-[70rem] flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <h1 className="text-yellow font-bold font-baloo text-2xl">
            Uhu! Pedido confirmado
          </h1>
          <p className="text-sm">
            Agora é só aguardar que logo o café chegará até você
          </p>
        </div>
        <div className="flex justify-between">
          <div className="w-[32.875rem] h-[16.875rem] bg-background rounded-tl-md rounded-tr-[2rem] rounded-br-md rounded-bl-[2rem] border border-background flex flex-col justify-center  gap-4">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-full bg-purple-dark">
                <MapPin size={16} color="#fff" />
              </div>
              <span>Entrega:</span>
              <span>{finalizingPurchase.address}</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="p-2 rounded-full bg-yellow">
                <Timer size={16} color="#fff7" />
              </div>
              <div className="flex flex-col">
                <span>Previsão de entrega:</span>
                <span className="font-bold">{finalizingPurchase.time}</span>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <div className="p-2 rounded-full bg-yellow-dark">
                <DollarSign size={16} color="#fff" />
              </div>
              <div className="flex flex-col">
                <span>Pagamento na entrega:</span>
                <span className="font-bold">{finalizingPurchase.pay}</span>
              </div>
            </div>
          </div>
          <div>
            <img src={banner} alt="" />
          </div>
        </div>
      </div>
    </main>
  )
}
