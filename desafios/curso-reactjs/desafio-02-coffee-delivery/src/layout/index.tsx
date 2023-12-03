import { Outlet } from 'react-router-dom'
import { Header } from '../components/Header'
import { CoffeeProvider } from '../contexts/CoffeeContext'

export function Layout() {
  return (
    <>
      <CoffeeProvider>
        <div className="flex flex-col">
          <div className="h-[6.5rem]">
            <Header />
          </div>
          <div>
            <Outlet />
          </div>
        </div>
      </CoffeeProvider>
    </>
  )
}
