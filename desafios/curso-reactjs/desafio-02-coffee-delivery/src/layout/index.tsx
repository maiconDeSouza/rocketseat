import { Outlet } from 'react-router-dom'
import { Header } from '../components/Header'
import { CoffeeProvider } from '../contexts/CoffeeContext'

export function Layout() {
  return (
    <>
      <CoffeeProvider>
        <Header />
        <Outlet />
      </CoffeeProvider>
    </>
  )
}
