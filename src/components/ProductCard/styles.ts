import styled from 'styled-components';

export const CardContainer = styled.div`
  align-items: center;
  background: ${(props) => props.theme['gray-100']};
  border-radius: 6px 36px;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  height: 19.375rem;
  text-align: center;
  width: 16rem;

  @media (max-width: 1400px) {
    width: 13.3rem;
  }

  img {
    height: 7.5rem;
    width: 7.5rem;
    margin: -1.25rem auto 0.25rem auto;
  }

  .tag__container {
    display: inline-flex;
    gap: 0.25rem;
  }

  .tag__background {
    background: ${(props) => props.theme['yellow-100']};
    border-radius: 100px;
    margin-bottom: 0.5rem;
    padding: 0.125rem 0.5rem;
  }

  .tag {
    color: ${(props) => props.theme['yellow-700']};
    font-size: 0.625rem;
    font-weight: 700;
    text-transform: uppercase;
  }

  h2 {
    color: ${(props) => props.theme['gray-800']};
    font-family: 'Baloo 2', cursive;
    font-weight: 700;
    font-size: 1.25rem;

    @media (max-width: 1400px) {
      font-size: 1.1rem;
    }
  }

  .description {
    color: ${(props) => props.theme['gray-600']};
    font-size: 0.875rem;
    margin-bottom: 1.5rem;
    padding: 0 1.25rem;

    @media (max-width: 1400px) {
      font-size: 0.75rem;
      padding: 0 0.75rem;
      margin-bottom: 1rem;
    }
  }

  .shop__container {
    align-items: center;
    display: flex;
    gap: 0.5rem;

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
      @media (max-width: 1400px) {
        gap: 0.25rem;

        p {
          margin-right: 0;
        }

        .price{
          font-size: 1.25rem;
        }
    }

    .cart {
      align-items: center;
      background: ${(props) => props.theme['purple-700']};
      border: none;
      border-radius: 6px;
      color: ${(props) => props.theme['bg-color']};
      display: flex;
      padding: 0.5rem;

      :hover {
        background: ${(props) => props.theme['purple-500']};
      }

      @media (max-width: 1400px) {
        
      }
    }
  }
`;
