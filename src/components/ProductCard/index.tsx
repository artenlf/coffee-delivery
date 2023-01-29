import { ShoppingCartSimple } from 'phosphor-react';
import { useCart } from '../../contexts/CartContext';
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


export function ProductCard({ id, picture, label, name, description, price }: ProductProps) {

  const {
    itemQuantity,
    increaseQuantity,
  } = useCart()

  const quantity = itemQuantity(id)


  return (
    <CardContainer>

      <img src={picture} alt="" />

      <div className='tag__container'>
        {label.map((label) => (
          <div className="tag__background" key={id + label}>
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
        {
          quantity > 0 ?
            <Controls id={id} quantity={quantity} />
            : <button
              className="cart"
              onClick={() => increaseQuantity(id)}
            >
              <ShoppingCartSimple size={22} weight="fill" />
            </button>
        }

      </div>

    </CardContainer >
  )
}