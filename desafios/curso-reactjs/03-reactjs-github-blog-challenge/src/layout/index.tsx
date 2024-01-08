import { Outlet } from 'react-router-dom'
import { Header } from '../components/Header'

export function Layout() {
  return (
    <div className="w-full min-h-screen">
      <Header />
      <Outlet />
    </div>
  )
}
