import { ReactNode, createContext, useEffect, useState } from 'react'
import { api } from '../api'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

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

export interface AddressProps {
  cep: string
  logradouro: string
  complemento: string
  bairro: string
  localidade: string
  uf: string
  ibge: string
  gia: string
  ddd: string
  siafi: string
}

export interface FinalizingPurchaseProps {
  address: string
  time?: string
  pay: string
}

interface CoffeeContextProps {
  coffeeList: CoffeeListProps[]
  cartList: CoffeeListProps[]
  totalItemsInCart: number
  address: AddressProps
  finalizingPurchase: FinalizingPurchaseProps
  onPlusCart: (id: string) => void
  onLessCart: (id: string) => void
  onRemoveCart: (id: string) => void
  formatPrice: (price: number) => string
  onCep: (cep: string) => void
  onFinalizingPurchase: (data: FinalizingPurchaseProps) => void
}

export const CoffeeContext = createContext({} as CoffeeContextProps)

export function CoffeeProvider({ children }: CoffeeProviderProps) {
  const [coffeeList, setCoffeeList] = useState<CoffeeListProps[]>([])
  const [cartList, setCartList] = useState<CoffeeListProps[]>([])
  const [address, setAddress] = useState<AddressProps>({
    bairro: '',
    cep: '',
    complemento: '',
    ddd: '',
    gia: '',
    ibge: '',
    localidade: '',
    logradouro: '',
    siafi: '',
    uf: '',
  })
  const [finalizingPurchase, setFinalizingPurchase] =
    useState<FinalizingPurchaseProps>({
      address: '',
      time: '20 min - 30 min',
      pay: '',
    })
  const navidate = useNavigate()
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

  function onRemoveCart(id: string) {
    if (id === '') {
      const newCoffeeList = coffeeList.map((coffee) => {
        coffee.amount = 0
        return coffee
      })
      setCoffeeList(newCoffeeList)
      const newCartList = coffeeList.filter((coffee) => coffee.amount > 0)
      setCartList(newCartList)
    }
    const isThereCoffeeInTheCart = coffeeList.some((coffee) => coffee.id === id)
    if (isThereCoffeeInTheCart) {
      const newCoffeeList = coffeeList.map((coffee) => {
        if (coffee.id === id) {
          coffee.amount = 0
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

  function formatPrice(price: number): string {
    const formatPrice = Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    })

    return formatPrice.format(price)
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

  async function onCep(cep: string) {
    const cepFilter = cep
      .split('')
      .filter((str) => typeof Number(str) === 'number')
      .join('')

    if (cepFilter.length === 8) {
      const response = await axios.get(
        `https://viacep.com.br/ws/${cepFilter}/json/`,
      )
      const data = response.data
      if (data?.erro) {
        alert('Erro no cep')
      } else {
        setAddress(data)
      }
    }
  }

  function onFinalizingPurchase(data: FinalizingPurchaseProps) {
    setFinalizingPurchase(data)
    navidate('/success')
  }

  const totalItemsInCart = cartList.length
  return (
    <CoffeeContext.Provider
      value={{
        coffeeList,
        cartList,
        totalItemsInCart,
        address,
        finalizingPurchase,
        onPlusCart,
        onLessCart,
        onRemoveCart,
        formatPrice,
        onCep,
        onFinalizingPurchase,
      }}
    >
      {children}
    </CoffeeContext.Provider>
  )
}
