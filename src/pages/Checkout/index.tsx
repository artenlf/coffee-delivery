import { useState } from "react";
import { useForm } from "react-hook-form";

import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "phosphor-react";

import { SelectedProduct } from "../../components/SelectedProduct";

import { CartSummaryContainer, FieldSetContainer, InfoContainer, InputContainer, PaymentContainer, PaymentMethodSelect, SubmitButton } from "./styles";

export interface CartProps {
  cartItems: string[];
}


export function Checkout() {
  const { register, handleSubmit, watch, formState } = useForm();


  const [cartItems, setCartItems] = useState([]);

  function onSubmit() {
    // event.target.preventDefault()
    console.log("submited")
  }

  return (

    <InfoContainer>

      <form>
        <h2>Complete o seu pedido</h2>
        <h2>Cafés selecionados</h2>
        <div>


          <FieldSetContainer onSubmit={handleSubmit(onSubmit)}>
            <div className="title__container">
              <MapPinLine size={22} className="location-icon" />
              <div>
                <h3>Endereço de Entrega</h3>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </div>
            </div>
            <fieldset>
              <InputContainer inputSize="default" placeholder="CEP" required />
              <InputContainer inputSize="full" placeholder="Rua" required />
              <InputContainer inputSize="default" placeholder="Número" required />
              <InputContainer inputSize="comp" placeholder="Complemento" />
              <InputContainer inputSize="default" placeholder="Bairro" required />
              <InputContainer inputSize="city" placeholder="Cidade" required />
              <InputContainer inputSize="uf" placeholder="UF" required />
            </fieldset>
          </FieldSetContainer>
          <PaymentContainer>
            <div className="title__container">
              <CurrencyDollar size={22} weight="fill" className="dollar-icon" />
              <div>
                <h3>Pagamento</h3>
                <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
              </div>
            </div>
            <div className="method__wrapper">
              <PaymentMethodSelect type="button">
                <CreditCard size={16} className="card-icon" />
                Cartão de crédito
              </PaymentMethodSelect>

              <PaymentMethodSelect type="button">
                <Bank size={16} className="bank-icon" />
                Cartão de débito
              </PaymentMethodSelect>

              <PaymentMethodSelect type="button">
                <Money size={16} className="cash-icon" />
                Dinheiro
              </PaymentMethodSelect>

            </div>
          </PaymentContainer>
        </div>

        <CartSummaryContainer>
          <SelectedProduct cartItems={cartItems} />


          <div className="summary">
            <div className="summary__line">
              <p>Total de itens</p>
              <p>R$ 29,70</p>
            </div>
            <div className="summary__line">
              <p>Entrega</p>
              <p>R$ 3,50</p>
            </div>
            <div className="summary__line">
              <span>Total</span>
              <span>R$ 33,20</span>
            </div>
          </div>
          <SubmitButton type="submit">
            Confirmar pedido
          </SubmitButton>

        </CartSummaryContainer>

      </form >
    </InfoContainer >

  )
}