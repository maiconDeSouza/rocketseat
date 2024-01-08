import { Header } from './components/Header'
import { Profile } from './components/Profile'

export function App() {
  return (
    <div className="w-full min-h-screen">
      <Header />
      <section className="md:w-[54rem] md:mx-auto md:px-0 w-full px-4">
        <Profile />
      </section>
    </div>
  )
}
