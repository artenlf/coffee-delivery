import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import { Card } from "../../components/Card";

import { IntroContainer, IntroItemsContainer, IntroSubTitle, IntroTitle, ProductsContainer } from "./styles";

import IntroImage from "/intro-picture.png";

import products from "../../db/products.json";


export function Home() {


  return (
    <main>
      <IntroContainer>
        <div className="title__container">
          <IntroTitle>
            Encontre o café perfeito para qualquer hora do dia
          </IntroTitle>
          <IntroSubTitle>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora
          </IntroSubTitle>
          <IntroItemsContainer>
            <span>
              <div className="cart__container">
                <ShoppingCart size={16} weight="fill" className="cart-icon" />
              </div>
              Compra simples e segura</span>
            <span>
              <div className="package__container ">
                <Package size={16} weight="fill" className="package-icon" />
              </div>
              Embalagem mantém o café intacto
            </span>
            <span>
              <div className="timer__container">
                <Timer size={16} weight="fill" className="timer-icon" />
              </div>
              Entrega rápida e rastreada
            </span>
            <span>
              <div className="coffee__container">
                <Coffee size={16} weight="fill" className="coffee-icon" />
              </div>
              O café chega fresquinho até você
            </span>
          </IntroItemsContainer>
        </div>
        <img src={IntroImage} alt="" />
      </IntroContainer>
      <ProductsContainer>
        <h2 className="title">Nossos cafés</h2>
        <div className="products__grid">
          {
            products.map((product) => (
              <Card
                key={product.id}
                id={product.id}
                picture={product.picture}
                label={product.label}
                name={product.name}
                description={product.description}
                price={product.price} />
            ))
          }
        </div>
      </ProductsContainer>
    </main>
  )
}