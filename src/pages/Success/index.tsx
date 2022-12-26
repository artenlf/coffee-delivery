import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import { useAddress } from "../../contexts/AddressContext";
import { useCart } from "../../contexts/CartContext";
import { SuccessContainer } from "./styles";

import illustration from "/illustration.png";

export function Sucess() {

  const {
    isActivePaymentMethod,
  } = useCart()

  const { addressFields } = useAddress();

  return (
    <SuccessContainer>
      <h2>Uhu! Pedido confirmado</h2>
      <h3>Agora é só aguardar que logo o café chegará até você</h3>
      <div className="checkout__wrapper">
        <div className="checkout__container">
          <div className="info__wrapper">
            <div className="location__container"><MapPin weight="fill" />
            </div>
            <p>
              Entrega em
              <span>
                {` 
                ${addressFields.street}, 
                ${addressFields.number}
                `}
              </span>
              <br />
              {`
              ${addressFields.neighborhood} - 
              ${addressFields.city}, 
              ${addressFields.state}
              `}
            </p>
          </div>
          <div className="info__wrapper">
            <div className="timer__container">
              <Timer weight="fill" />
            </div>
            <p>
              Previsão de entrega
              <br />
              <span>
                20 min - 30 min
              </span>
            </p>
          </div>
          <div className="info__wrapper">
            <div className="currency__container">
              <CurrencyDollar weight="fill" />
            </div>
            <p>Pagamento na entrega
              <br />
              <span>
                {`${isActivePaymentMethod}`}
              </span>
            </p>
          </div>
        </div>
        <img src={illustration} alt="" />
      </div>
    </SuccessContainer>
  )
}