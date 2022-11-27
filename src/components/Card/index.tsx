import { ShoppingCartSimple } from 'phosphor-react';
import Expresso from '../../../public/assets/coffee/expresso.png';
import { Controls } from '../Controls';
import { CardContainer } from "./styles";

export function Card() {
  return (
    <CardContainer>
      <img src={Expresso} alt="" />
      <div className='tag__container'>
        <div className="tag__background">
          <span className="tag">Tradicional</span>
        </div>
      </div>
      <h2>Expresso Tradicional</h2>
      <p className="description">O tradicional café feito com água quente e grãos moídos</p>
      <div className="shop__container">
        <p>R$
          <span className="price">
            9,90
          </span>
        </p>
        <Controls />
        <div className="cart">
          <ShoppingCartSimple size={22} weight="fill" />
        </div>
      </div>


    </CardContainer>
  )
}