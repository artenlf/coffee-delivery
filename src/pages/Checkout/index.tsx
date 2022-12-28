import cep from "cep-promise";
import { CurrencyDollar, MapPinLine, ShoppingCart } from "phosphor-react";
import { ChangeEvent } from 'react';
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import { SelectedProduct } from "../../components/SelectedProduct";
import { AddressFormProps, useAddress } from '../../contexts/AddressContext';
import { useCart } from "../../contexts/CartContext";
import {
  CartSummaryContainer,
  ErrorContainer,
  FieldSetContainer,
  InfoContainer,
  InputContainer, PaymentContainer, PaymentMethodSelect, SubmitButton
} from "./styles";

export function Checkout() {

  const { onSubmit, addressFields } = useAddress();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue } = useForm<AddressFormProps>
      ({
        defaultValues: addressFields
      })

  const {
    cartItems,
    cartQuantity,
    itemsTotalPrice,
    deliveryFees,
    avaiblePaymentMethods,
    isActivePaymentMethod,
    setIsActivePaymentMethod
  } = useCart()

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
      <form onSubmit={handleSubmit(onSubmit)}>
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
                    required: "O campo CEP é obrigatório.",
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


              <InputContainer
                {...register("number",
                  { required: "O campo número é obrigatório." }
                )
                }
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
                    key={paymentMethod.method}
                    isActive={isActivePaymentMethod === paymentMethod.method}
                    onClick={() => setIsActivePaymentMethod(paymentMethod.method)}
                  >
                    {paymentMethod.icon}
                    {paymentMethod.method}
                  </PaymentMethodSelect>
                ))}

            </div>
          </PaymentContainer>
        </div>

        <CartSummaryContainer>
          {cartQuantity < 1 ?
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
          {cartQuantity < 1 ?
            <SubmitButton type="submit">


              Confirmar pedido

            </SubmitButton>
            :
            <NavLink to="/success" title="success" className="link">
              <SubmitButton type="submit">


                Confirmar pedido

              </SubmitButton>
            </NavLink>
          }



        </CartSummaryContainer>

      </form >
    </InfoContainer >

  )
}