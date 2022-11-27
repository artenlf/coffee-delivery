import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import { SuccessContainer } from "./styles";

export function Sucess() {
  return (
    <SuccessContainer>
      <h2>Uhu! Pedido confirmado</h2>
      <h3>Agora é só aguardar que logo o café chegará até você</h3>
      <div>
        <div>
          <MapPin weight="fill" /><p>Entrega em <span>Rua João Daniel Martinelli, 102</span> Farrapos - Porto Alegre, RS</p>
          <Timer weight="fill" /><p>Previsão de entrega <span>20 min - 30 min </span></p>
          <CurrencyDollar weight="fill" /><p>Pagamento na entrega <span>Cartão de Crédito</span></p>
        </div>
      </div>
    </SuccessContainer>
  )
}