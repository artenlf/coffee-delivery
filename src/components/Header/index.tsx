import { MapPin, ShoppingCart } from 'phosphor-react';
import { NavLink } from 'react-router-dom';
import { useCart } from '../../contexts/CartContext';
import { HeaderContainer } from './styles';
import logo from '/logo.svg';

export function Header() {

  const { cartQuantity } = useCart();

  return (
    <HeaderContainer>
      <NavLink to="/" title="home">
        <img src={logo} alt="" />
      </NavLink>
      <nav>
        <NavLink to="/checkout" title="location">
          <div className="map">
            <MapPin size={22} weight="fill" className="map-icon" />
            <p>Cidade/UF</p>
          </div>
        </NavLink>
        <NavLink to="/checkout" title="cart">
          <div className="cart">
            <ShoppingCart size={22} weight="fill" className="cart-icon" />

          </div>
        </NavLink>
        {cartQuantity > 0 && (
          <div className='item__counter'>
            {cartQuantity}
          </div>
        )}
      </nav >
    </HeaderContainer >
  )
}