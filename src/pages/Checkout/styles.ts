import styled from 'styled-components';

import { CardContainer } from '../../components/Card/styles';

export const InfoContainer = styled.main`
  display: flex;
  gap: 2rem;

  h2 {
    font-family: 'Baloo 2', cursive;
    font-size: 1.125rem;
    font-weight: 700;
    margin-bottom: 1rem;
  }
`;

export const FormContainer = styled.form`
  background: ${(props) => props.theme['gray-100']};
  border-radius: 6px;
  height: 23.25rem;
  margin-bottom: 0.75rem;
  padding: 2.5rem;
  width: 40rem;

  .title__container {
    display: flex;
    gap: 0.5rem;
    margin-bottom: 2rem;

    .location-icon {
      color: ${(props) => props.theme['yellow-700']};
    }

    h3 {
      color: ${(props) => props.theme['gray-800']};
    }

    p {
      font-size: 0.875rem;
    }
  }

  fieldset {
    border: none;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem 0.75rem;
    padding: 0.75rem;
  }
`;

const INPUT_SIZE = {
  default: '12.5rem',
  full: '35rem',
  comp: '21.75rem',
  city: '17.25rem',
  uf: '3.75rem',
} as const;

interface InputProps {
  inputSize: keyof typeof INPUT_SIZE;
}

export const InputContainer = styled.input<InputProps>`
  background: ${(props) => props.theme['gray-200']};
  border: 1px solid ${(props) => props.theme['gray-300']};
  border-radius: 4px;
  height: 2.625rem;
  padding: 0.75rem;
  width: ${(props) => [INPUT_SIZE[props.inputSize]]};

  ::placeholder {
    color: ${(props) => props.theme['gray-600']};
    font-size: 0.875rem;
  }
`;

export const PaymentContainer = styled(FormContainer)`
  height: 13rem;

  .dollar-icon {
    color: ${(props) => props.theme['purple-500']};
  }

  .method__wrapper {
    display: flex;
    gap: 0.75rem;
  }
`;

export const PaymentMethodSelect = styled.button`
  background: ${(props) => props.theme['gray-300']};
  border: none;
  border-radius: 6px;
  color: ${(props) => props.theme['gray-700']};
  display: flex;
  gap: 0.75rem;
  font-size: 0.75rem;
  height: 3rem;
  padding: 1rem;
  text-transform: uppercase;
  width: 11rem;

  .card-icon,
  .bank-icon,
  .cash-icon {
    color: ${(props) => props.theme['purple-500']};
  }
`;

export const CartSummaryContainer = styled(CardContainer)`
  height: 31.125rem;
  padding: 2.5rem;
  width: 28rem;

  .summary {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    margin-top: 1.5rem;
    width: 100%;

    .summary__line {
      display: flex;
      justify-content: space-between;

      span {
        font-size: 1.25rem;
        font-weight: 700;
      }
    }
  }
`;

export const SubmitButton = styled.button`
  align-items: center;
  background: ${(props) => props.theme['yellow-600']};
  border: none;
  border-radius: 6px;
  color: ${(props) => props.theme['white']};
  display: flex;
  flex-direction: row;
  font-size: 0.875rem;
  font-weight: 700;
  gap: 0.25rem;
  justify-content: center;
  line-height: 160%;
  margin-top: 1.5rem;
  padding: 0.75rem 0.5rem;
  text-transform: uppercase;
  width: 100%;

  :hover {
    background: ${(props) => props.theme['yellow-700']};
  }
`;
