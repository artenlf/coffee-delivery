import styled from 'styled-components';

export const IntroContainer = styled.section`
  display: flex;
  justify-content: space-between;

  .title__container {
    width: 36.75rem;
  }

  img {
    max-height: 22.5rem;
    max-width: 29.75rem;
  }
`;

export const IntroTitle = styled.h1`
  color: ${(props) => props.theme['gray-900']};
  font-family: 'Baloo 2', cursive;
  font-size: 3rem;
  font-weight: 800;
`;

export const IntroSubTitle = styled.h2`
  color: ${(props) => props.theme['gray-800']};
  font-family: 'Roboto', sans-serif;
  font-size: 1.25rem;
  font-weight: 400;
  margin: 1rem auto 4.125rem auto;
`;

export const IntroItemsContainer = styled.div`
  display: grid;
  gap: 1.25rem 0;
  grid-template-columns: repeat(2, 1fr);

  p {
    align-items: center;
    display: flex;
  }

  .cart__container,
  .package__container,
  .timer__container,
  .coffee__container {
    align-items: center;
    border-radius: 999px;
    color: ${(props) => props.theme['bg-color']};
    display: flex;
    height: 2rem;
    justify-content: center;
    width: 2rem;
    margin-right: 0.75rem;
  }

  .cart__container {
    background: ${(props) => props.theme['yellow-700']};
  }

  .package__container {
    background: ${(props) => props.theme['gray-700']};
  }

  .timer__container {
    background: ${(props) => props.theme['yellow-600']};
  }

  .coffee__container {
    background: ${(props) => props.theme['purple-500']};
  }
`;

export const ProductsContainer = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  gap: 2.5rem;

  .title {
    color: ${(props) => props.theme['gray-800']};
    font-family: 'Baloo 2', cursive;
    font-size: 2rem;
    font-weight: 800;
    margin-bottom: 0.875rem;
  }
`;
