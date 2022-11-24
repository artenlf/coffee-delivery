import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "phosphor-react";
import { FormContainer, InfoContainer, InputContainer, PaymentContainer, PaymentMethodSelect } from "./styles";

export function Checkout() {
  return (
    <InfoContainer>
      <h2>Complete o seu pedido</h2>
      <FormContainer>
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
      </FormContainer>
      <PaymentContainer>
        <div className="title__container">
          <CurrencyDollar size={22} weight="fill" className="dollar-icon" />
          <div>
            <h3>Pagamento</h3>
            <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
          </div>
        </div>
        <div className="method__wrapper">
          <PaymentMethodSelect><CreditCard size={16} className="card-icon" />Cartão de crédito</PaymentMethodSelect>
          <PaymentMethodSelect><Bank size={16} className="bank-icon" />Cartão de débito</PaymentMethodSelect>
          <PaymentMethodSelect><Money size={16} className="cash-icon" />Dinheiro</PaymentMethodSelect>
        </div>
      </PaymentContainer>

    </InfoContainer>

  )
}