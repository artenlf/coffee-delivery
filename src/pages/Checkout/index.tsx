import { MapPinLine } from "phosphor-react";
import { FormContainer, InfoContainer, InputContainer } from "./styles";

export function Checkout() {
  return (
    <main>
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
            <InputContainer />
            <InputContainer />
            <InputContainer />
            <InputContainer />
            <InputContainer />
            <InputContainer />
            <InputContainer />
          </fieldset>
        </FormContainer>

      </InfoContainer>
    </main>
  )
}