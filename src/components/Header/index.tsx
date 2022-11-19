import { MapPin, ShoppingCart } from 'phosphor-react'
import { HeaderContainer } from './styles'
import logo from '/logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt="" />
      <nav>
        <div className='map'>
          <a href="" >
            <MapPin size={22} weight='fill' className='map-icon' />
            <p>Cidade/UF</p>
          </a>
        </div>
        <div className='cart'>
          <a href="">
            <ShoppingCart size={22} weight='fill' className='cart-icon' />
          </a>
        </div>
      </nav>
    </HeaderContainer>
  )
}