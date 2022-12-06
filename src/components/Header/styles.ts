import styled from 'styled-components';

export const HeaderContainer = styled.header`
  align-items: center;
  display: flex;
  height: 6.5rem;
  justify-content: space-between;
  padding: 2rem 10rem;

  nav {
    align-items: center;
    display: flex;
    gap: 0.75rem;
  }

  a {
    align-items: center;
    display: flex;
    gap: 0.25rem;
    text-decoration: none;
  }

  nav div {
    align-items: center;
    border-radius: 6px;
    display: flex;
    height: 2.375rem;
    justify-content: center;
  }

  .map {
    background: ${(props) => props.theme['purple-100']};
    color: ${(props) => props.theme['purple-500']};
    width: 9rem;
  }

  .map-icon {
    color: ${(props) => props.theme['purple-500']};
  }

  .map p {
    color: ${(props) => props.theme['purple-700']};
  }

  .cart {
    background: ${(props) => props.theme['yellow-100']};
    color: white;
    width: 2.375rem;

    .cart-icon {
      color: ${(props) => props.theme['yellow-700']};
      margin: auto;
    }
  }

  .item__counter {
    background: ${(props) => props.theme['yellow-700']};
    border: none;
    border-radius: 999px;
    color: ${(props) => props.theme['gray-100']};
    font-size: 0.75rem;
    font-weight: 700;
    height: 1.25rem;
    margin-top: -2rem;
    margin-left: -1.5rem;
    width: 1.25rem;
  }
`;
