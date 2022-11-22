import styled from 'styled-components';

export const CardContainer = styled.div`
  align-items: center;
  background: ${(props) => props.theme['gray-100']};
  border-radius: 6px 36px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: 19.375rem;
  margin-top: 3.75rem;
  text-align: center;
  width: 16rem;

  & .big {
    height: 31.125rem;
    width: 28rem;
  }

  img {
    height: 7.5rem;
    width: 7.5rem;
    margin: -3.75rem auto 0 auto;
  }

  .tag__container {
    background: ${(props) => props.theme['yellow-100']};
    border-radius: 100px;
    padding: 0.125rem 0.5rem;
  }

  .tag {
    color: ${(props) => props.theme['yellow-700']};
    font-size: 0.625rem;
    font-weight: 700;
    text-transform: uppercase;
  }

  h2 {
    font-family: 'Baloo 2', cursive;
    font-weight: 700;
    font-size: 1.25rem;
  }

  .description {
    color: ${(props) => props.theme['gray-600']};
    font-size: 0.875rem;
    padding: 0 1.25rem;
  }

  .shop__container {
    align-items: center;
    display: flex;
    gap: 0.5rem;
    margin-top: 1rem;

    p {
      font-size: 0.875rem;
      margin-right: 1rem;
    }

    .price {
      font-family: 'Baloo 2', cursive;
      font-size: 1.5rem;
      font-weight: 800;
      margin-left: 0.25rem;
    }

    .controls {
      border-radius: 6px;
      background: ${(props) => props.theme['gray-400']};
      display: flex;
      gap: 0.25rem;
      padding: 0.5rem;

      button {
        align-items: center;
        background: ${(props) => props.theme['gray-400']};
        border: none;
        color: ${(props) => props.theme['purple-500']};
        display: flex;
      }

      span {
        align-items: flex-end;
        display: flex;
        justify-content: flex-end;
      }
    }

    .cart {
      align-items: center;
      background: ${(props) => props.theme['purple-700']};
      border-radius: 6px;
      color: ${(props) => props.theme['bg-color']};
      display: flex;
      padding: 0.5rem;
    }
  }
`;
