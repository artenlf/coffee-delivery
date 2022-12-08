import { Minus, Plus } from "phosphor-react";
import { CartItemProps, useCart } from "../../contexts/CartContext";
import { ControlsContainer } from "./styles";

export function Controls({ id }: CartItemProps) {

  const {
    itemQuantity,
    increaseQuantity,
    decreaseQuantity,
  } = useCart()

  const quantity = itemQuantity(id)

  return (
    <ControlsContainer>
      <button onClick={() => decreaseQuantity(id)}>
        <Minus size={14} weight="fill" className="minus-icon" />
      </button>
      <span>{quantity}</span>

      <button onClick={() => increaseQuantity(id)} >
        <Plus size={14} weight="fill" className="plus-icon" />
      </button>
    </ControlsContainer>
  );
}
