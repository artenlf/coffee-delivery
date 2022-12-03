import { useState } from "react";
import { useForm } from "react-hook-form";

import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "phosphor-react";

import { SelectedProduct } from "../../components/SelectedProduct";

import {
  CartSummaryContainer,
  ErrorContainer,
  FieldSetContainer,
  InfoContainer,
  InputContainer,
  PaymentContainer,
  PaymentMethodSelect,
  SubmitButton
} from "./styles";

export interface CartProps {
  cartItems: string[];
}

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
  const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>({
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
                required
                minLength={8}
                maxLength={8}
              />

              <ErrorContainer>{errors.postalCode?.message}</ErrorContainer>

              <InputContainer
                {...register("street",
                  // { required: "Este campo é obrigatório." }
                )
                }
                inputSize="full"
                placeholder="Rua"
                required
              />

              {/* <ErrorContainer>{errors.street?.message}</ErrorContainer> */}

              <InputContainer
                {...register("number",
                  // { required: "Este campo é obrigatório." }
                )
                }
                inputSize="default"
                placeholder="Número"
                required
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
                required
              />
              <InputContainer {...register("city",
                // { required: "Este campo é obrigatório." }
              )
              }
                inputSize="city"
                placeholder="Cidade"
                required
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
                required={true}
                minLength={2}
                maxLength={2}
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