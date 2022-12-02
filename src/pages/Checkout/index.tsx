import { useState } from "react";
import { useForm } from "react-hook-form";

import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "phosphor-react";

import { SelectedProduct } from "../../components/SelectedProduct";

import { CartSummaryContainer, FieldSetContainer, InfoContainer, InputContainer, PaymentContainer, PaymentMethodSelect, SubmitButton } from "./styles";

export interface CartProps {
  cartItems: string[];
}


export function Checkout() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      postalCode: "",
      street: "",
      number: "",
      complement: "",
      neighborhood: "",
      city: "",
      state: "",
    }
  });


  const [cartItems, setCartItems] = useState([]);

  return (

    <InfoContainer>

      <form onSubmit={handleSubmit((data) => {
        console.log(data)
      })}>
        <h2>Complete o seu pedido</h2>
        <h2>Cafés selecionados</h2>
        <div>


          <FieldSetContainer>
            <div className="title__container">
              <MapPinLine size={22} className="location-icon" />
              <div>
                <h3>Endereço de Entrega</h3>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </div>
            </div>
            <fieldset>
              <InputContainer
                {...register("postalCode",
                  {
                    required: "Este campo é obrigatório.",
                    minLength: { value: 5, message: "CEP inválido!" },
                    maxLength: 5
                  })}
                inputSize="default"
                placeholder="CEP"
              />
              {/* <p>{errors.postalCode?.message}</p> */}
              <InputContainer
                {...register("street",
                  { required: "Este campo é obrigatório." })}
                inputSize="full"
                placeholder="Rua"
              />

              <InputContainer
                {...register("number",
                  { required: "Este campo é obrigatório." })}
                inputSize="default"
                placeholder="Número"
              />

              <InputContainer
                {...register("complement")}
                inputSize="comp"
                placeholder="Complemento"
              />

              <InputContainer
                {...register("neighborhood",
                  { required: "Este campo é obrigatório." })}
                inputSize="default"
                placeholder="Bairro"
              />
              <InputContainer {...register("city",
                { required: "Este campo é obrigatório." })}
                inputSize="city"
                placeholder="Cidade" />

              <InputContainer
                {...register("state",
                  {
                    required: "Este campo é obrigatório.",
                    minLength: 2
                  })}
                inputSize="uf"
                placeholder="UF"
              />

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