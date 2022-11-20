import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import { IntroContainer, IntroItemsContainer, IntroSubTitle, IntroTitle } from "./styles";

import IntroImage from "/intro-picture.png";

export function Home() {
  return (
    <IntroContainer>
      <div className="title__container">
        <IntroTitle>
          Encontre o café perfeito para qualquer hora do dia
        </IntroTitle>
        <IntroSubTitle>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora
        </IntroSubTitle>
        <IntroItemsContainer>
          <p>
            <div className="cart__container">
              <ShoppingCart size={16} weight="fill" className="cart-icon" />
            </div>
            Compra simples e segura</p>
          <p>
            <div className="package__container ">
              <Package size={16} weight="fill" className="package-icon" />
            </div>
            Embalagem mantém o café intacto
          </p>
          <p>
            <div className="timer__container">
              <Timer size={16} weight="fill" className="timer-icon" />
            </div>
            Entrega rápida e rastreada
          </p>
          <p>
            <div className="coffee__container">
              <Coffee size={16} weight="fill" className="coffee-icon" />
            </div>
            O café chega fresquinho até você
          </p>
        </IntroItemsContainer>
      </div>
      <img src={IntroImage} alt="" />
    </IntroContainer>
  )
}