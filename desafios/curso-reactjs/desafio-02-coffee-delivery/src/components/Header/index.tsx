import { MapPinIcon, ShoppingCart } from 'lucide-react'
import logo from '../../assets/logocoffee.png'
export function Header() {
  return (
    <header className="bg-background w-full h-[6.5rem] flex justify-center">
      <div className="w-[70rem] flex items-center justify-between">
        <div>
          <img src={logo} alt="logo" />
        </div>
        <div className="flex items-center gap-3">
          <div className="bg-purple-light w-[9rem] h-[2.375rem] rounded-md flex items-center gap-1 text-purple-dark font-baloo font-bold text-sm p-2">
            <MapPinIcon size={22} color="#8047F8" />
            <span>Sua Cidade</span>
          </div>
          <div className="relative bg-yellow-light w-[2.375rem] h-[2.375rem] rounded-md p-2 flex justify-center items-center">
            <ShoppingCart size={22} color="#C47F17" />
            <span className="absolute -top-2 -right-2 px-2.5 bg-yellow-dark rounded-full w-5 h-5 flex items-center justify-center text-white text-xs font-baloo font-bold">
              5
            </span>
          </div>
        </div>
      </div>
    </header>
  )
}
