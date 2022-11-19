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
  }

  .cart-icon {
    color: ${(props) => props.theme['yellow-700']};
  }
`;
