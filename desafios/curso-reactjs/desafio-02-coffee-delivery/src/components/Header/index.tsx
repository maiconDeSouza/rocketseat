import { MapPinIcon, ShoppingCart } from 'lucide-react'
import logo from '../../assets/logocoffee.png'
export function Header() {
  return (
    <header className="bg-background w-full h-[6.5rem] flex justify-between md:justify-center">
      <div className="w-full md:w-[70rem] flex flex-col md:flex-row items-center justify-between p-2">
        <div>
          <img src={logo} alt="logo" className="w-[5.25rem]" />
        </div>
        <div className="flex items-center gap-6 md:gap-3 ">
          <div className="bg-purple-light w-[9rem] h-[2.375rem] rounded-md flex justify-center items-center gap-1 text-purple-dark font-baloo font-bold text-sm p-2">
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
