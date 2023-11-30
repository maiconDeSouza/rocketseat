import { ReactNode, createContext, useEffect, useState } from 'react'
import { api } from '../api'

export interface CoffeeProps {
  id: string
  cover: string
  name: string
  tag: string[]
  description: string
  price: number
}

interface CartProps extends CoffeeProps {
  amount: number
}

interface CoffeeProviderPros {
  children: ReactNode
}

interface CoffeeContextProps {
  coffeeList: CoffeeProps[]
  cart: CartProps[]
}

export const CoffeeContext = createContext({} as CoffeeContextProps)

export function CoffeeProvider({ children }: CoffeeProviderPros) {
  const [coffeeList, setCoffeeList] = useState<CoffeeProps[]>([])
  const [cart, setCart] = useState<CartProps[]>([])
  const [coffeeAmount, setCoffeeAmount] = useState(0)
  useEffect(() => {
    async function loader() {
      const response = await api.get('/coffee')
      const data = response.data
      setCoffeeList(data)
    }
    loader()
  }, [])

  function addCoffeeCart(id: string) {
    const thereIsProduct = cart.some((cart) => cart.id === id)
  }

  return (
    <CoffeeContext.Provider value={{ coffeeList, cart }}>
      {children}
    </CoffeeContext.Provider>
  )
}
