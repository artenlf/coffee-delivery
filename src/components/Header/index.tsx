import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import { HeaderContainer } from './styles'
import logo from '/logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/" title="home">
        <img src={logo} alt="" />
      </NavLink>
      <nav>
        <NavLink to="/" title="location">
          <div className='map'>
            <MapPin size={22} weight='fill' className='map-icon' />
            <p>Cidade/UF</p>
          </div>
        </NavLink>
        <NavLink to="/" title="cart">
          <div className='cart'>
            <ShoppingCart size={22} weight='fill' className='cart-icon' />
          </div>
        </NavLink>
      </nav >
    </HeaderContainer >
  )
}