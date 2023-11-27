import { NavLink } from 'react-router-dom'
import { HeaderContainer } from './styles'
import logo from '../../assets/Logo.svg'
import { Scroll, Timer } from 'phosphor-react'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt="" />
      <nav>
        <NavLink to="/" title="home">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="historico">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
