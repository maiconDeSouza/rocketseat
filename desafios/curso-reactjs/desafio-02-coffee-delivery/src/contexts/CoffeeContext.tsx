import { ReactNode, createContext, useEffect, useState } from 'react'
import { api } from '../api'

interface CoffeeProviderProps {
  children: ReactNode
}

export interface CoffeeListProps {
  id: string
  name: string
  tag: string[]
  cover: string
  description: string
  price: number
  amount: number
}

interface CoffeeContextProps {
  coffeeList: CoffeeListProps[]
  totalItemsInCart: number
  onPlusCart: (id: string) => void
  onLessCart: (id: string) => void
}

export const CoffeeContext = createContext({} as CoffeeContextProps)

export function CoffeeProvider({ children }: CoffeeProviderProps) {
  const [coffeeList, setCoffeeList] = useState<CoffeeListProps[]>([])
  const [cartList, setCartList] = useState<CoffeeListProps[]>([])
  useEffect(() => {
    async function loading() {
      const response = await api.get('/coffee')
      const data = response.data
      setCoffeeList(data)
    }
    loading()
  }, [])

  function onPlusCart(id: string) {
    const isThereCoffeeInTheCart = coffeeList.some((coffee) => coffee.id === id)

    if (isThereCoffeeInTheCart) {
      const newCoffeeList = coffeeList.map((coffee) => {
        if (coffee.id === id) {
          coffee.amount = coffee.amount + 1
          return coffee
        } else {
          return coffee
        }
      })
      setCoffeeList(newCoffeeList)
      const newCartList = coffeeList.filter((coffee) => coffee.amount > 0)
      setCartList(newCartList)
    }
  }

  function onLessCart(id: string) {
    const isThereCoffeeInTheCart = coffeeList.some((coffee) => coffee.id === id)

    if (isThereCoffeeInTheCart) {
      const newCoffeeList = coffeeList.map((coffee) => {
        if (coffee.id === id && coffee.amount > 0) {
          coffee.amount = coffee.amount - 1
          return coffee
        } else {
          return coffee
        }
      })
      setCoffeeList(newCoffeeList)
      const newCartList = coffeeList.filter((coffee) => coffee.amount > 0)
      setCartList(newCartList)
    }
  }

  const totalItemsInCart = cartList.length
  return (
    <CoffeeContext.Provider
      value={{ coffeeList, onPlusCart, onLessCart, totalItemsInCart }}
    >
      {children}
    </CoffeeContext.Provider>
  )
}
