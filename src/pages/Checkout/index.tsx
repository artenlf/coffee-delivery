import cep from 'cep-promise';
import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money, ShoppingCart } from "phosphor-react";
import { ChangeEvent, useState } from 'react';
import { useForm } from "react-hook-form";
import { SelectedProduct } from "../../components/SelectedProduct";
import { useCart } from "../../contexts/CartContext";
import products from "../../db/products.json";
import {
  CartSummaryContainer,
  ErrorContainer,
  FieldSetContainer,
  InfoContainer,
  InputContainer, PaymentContainer, PaymentMethodSelect, SubmitButton
} from "./styles";

interface IFormInput {
  postalCode: string;
  street: string;
  number: string;
  complement: string;
  neighborhood: string;
  city: string;
  state: string;

}

export function Checkout() {

  const {
    cartItems
  } = useCart()

  const { register, handleSubmit, formState: { errors }, setValue } = useForm<IFormInput>({
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

  const itemsTotalPrice = (cartItems.reduce((total, cartItem) => {
    const item = products.find(item => item.id === cartItem.id)
    return total + (item?.price || 0) * cartItem.quantity
  }, 0));

  const deliveryFees = 3.50;

  const avaiblePaymentMethods = [
    {
      id: "credit",
      icon: <CreditCard size={16} className="card-icon" />,
      name: "Cartão de crédito",
    },
    {
      id: "debit",
      icon: <Bank size={16} className="bank-icon" />,
      name: "Cartão de débito"
    },
    {
      id: "cash",
      icon: <Money size={16} className="cash-icon" />,
      name: "Dinheiro"
    }
  ]

  const [isActivePaymentMethod, setIsActivePaymentMethod] = useState<string | undefined>()

  function postalCodeAutoCompleteAddress(event: ChangeEvent<HTMLInputElement>) {
    const postalCode = event.target.value.replace(/\D/g, "");
    cep(postalCode).then(data => {
      setValue("street", data.street);
      setValue("neighborhood", data.neighborhood);
      setValue("city", data.city);
      setValue("state", data.state);
    }).catch()
  }

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
                    //   required: "Este campo é obrigatório.",
                    pattern:
                    {
                      value: /^[0-9]{5}[0-9]{3}$/,
                      message: "CEP inválido!"
                    },
                  },
                )}
                inputSize="default"
                placeholder="CEP"

                minLength={8}
                maxLength={8}
                onBlur={postalCodeAutoCompleteAddress}
              />

              <ErrorContainer>{errors.postalCode?.message}</ErrorContainer>

              <InputContainer
                {...register("street",
                  // { required: "Este campo é obrigatório." }
                )
                }
                inputSize="full"
                placeholder="Rua"

              />

              {/* <ErrorContainer>{errors.street?.message}</ErrorContainer> */}

              <InputContainer
                {...register("number",
                  // { required: "Este campo é obrigatório." }
                )
                }
                inputSize="default"
                placeholder="Número"

              />

              {/* <ErrorContainer>{errors.number?.message}</ErrorContainer> */}


              <InputContainer
                {...register("complement")}
                inputSize="comp"
                placeholder="Complemento"
              />

              <InputContainer
                {...register("neighborhood",
                  // { required: "Este campo é obrigatório." }
                )
                }
                inputSize="default"
                placeholder="Bairro"

              />
              <InputContainer {...register("city",
                // { required: "Este campo é obrigatório." }
              )
              }
                inputSize="city"
                placeholder="Cidade"

              />

              <InputContainer
                {...register("state",
                  // {
                  //   required: "Este campo é obrigatório.",
                  //   minLength: 2
                  // }
                )
                }
                inputSize="uf"
                placeholder="UF"

                minLength={2}
                maxLength={2}
              />

            </fieldset>
          </FieldSetContainer >
          <PaymentContainer>
            <div className="title__container">
              <CurrencyDollar size={22} weight="fill" className="dollar-icon" />
              <div>
                <h3>Pagamento</h3>
                <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
              </div>
            </div>
            <div className="method__wrapper">
              {
                avaiblePaymentMethods.map((paymentMethod) => (
                  <PaymentMethodSelect type="button"
                    key={paymentMethod.id}
                    isActive={isActivePaymentMethod === paymentMethod.id}
                    onClick={() => setIsActivePaymentMethod(paymentMethod.id)}
                  >
                    {paymentMethod.icon}
                    {paymentMethod.name}
                  </PaymentMethodSelect>
                ))}

            </div>
          </PaymentContainer>
        </div>

        <CartSummaryContainer>
          {cartItems.length < 1 ?
            <div className="empty-cart">
              <ShoppingCart size={60} weight="fill" className="cart-icon" />
              O seu carrinho está vázio.<br /> Adicione um café!
            </div>

            :

            cartItems.map(item => (
              <SelectedProduct key={item.id} {...item} />
            ))}

          <div className="summary">
            <div className="summary__line">
              <p>Total de itens</p>
              <p>R$ {(itemsTotalPrice).toFixed(2).replace(".", ",")}</p>
            </div>
            <div className="summary__line">
              <p>Entrega</p>
              <p>R$ {(deliveryFees).toFixed(2).replace(".", ",")}</p>
            </div>
            <div className="summary__line">
              <span>Total</span>
              <span>R$ {(itemsTotalPrice + deliveryFees).toFixed(2).replace(".", ",")}</span>
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