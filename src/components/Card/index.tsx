import { ShoppingCartSimple } from 'phosphor-react';
import { Controls } from '../Controls';
import { CardContainer } from "./styles";


interface ProductProps {
  id: number;
  picture: string;
  label: string[];
  name: string;
  description: string;
  price: number;
}


export function Card({ id, picture, label, name, description, price }: ProductProps) {


  return (
    <CardContainer>

      <img src={picture} alt="" />

      <div className='tag__container'>
        {label.map((label) => (
          <div className="tag__background">
            <span className="tag">{label}</span>
          </div>
        ))}
      </div>

      <h2 key={id}>{name}</h2>
      <p className="description">{description}</p>
      <div className="shop__container">
        <p>R$
          <span className="price">
            {(price).toFixed(2).replace(".", ",")}
          </span>
        </p>
        <Controls />
        <button className="cart">
          <ShoppingCartSimple size={22} weight="fill" />
        </button>
      </div>

    </CardContainer >
  )
}