import { Trash } from 'phosphor-react';
import { CartItemProps, useCart } from '../../contexts/CartContext';
import products from "../../db/products.json";
import { Controls } from '../Controls/index';
import { SelectedProductContainer } from './style';




export function SelectedProduct({ id, quantity }: CartItemProps) {
  const {
    removeItem,
  } = useCart()

  const product = products.find(product => product.id === id)
  if (product == null) return null;


  return (


    <SelectedProductContainer>
      <div className='product__wrapper'>
        <img src={product.picture} alt="" />
        <div className="controls__wrapper">
          <h3>{product.name}</h3>
          <div className="buttons__wrapper">
            <Controls id={id} quantity={quantity} />

            <div className="controls">
              <button onClick={() => removeItem(id)}>
                <Trash size={16} className="trash-icon" />
                Remover
              </button>
            </div>
          </div>
        </div>
      </div>
      <span className='price'>R$ {(product.price * quantity).toFixed(2).replace(".", ",")}</span>
    </SelectedProductContainer >
  )
}
