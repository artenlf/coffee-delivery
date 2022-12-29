import styled from 'styled-components';

export const IntroContainer = styled.section`
  display: grid;
  gap: 0 3rem;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);

  .title__container {
    grid-area: 1 / 1 / 2 / 2;
    max-width: 36.75rem;
  }

  img {
    display: flex;
  grid-area: 1 / 2 / 3 / 3;

    max-height: 22.5rem;
    max-width: 29.75rem;
  }

  @media (max-width: 1400px) {

    .title__container {
      max-height: 10rem;
  }
    
    img {
      margin: 0 auto;
      max-width: 20rem;
      place-self: center;
    }
  }

  @media (max-width: 767px) {
    flex-wrap: wrap;

    img {
      margin: 0 auto;
      max-width: 15rem;
    }
  }
`;

export const IntroTitle = styled.h1`
  color: ${(props) => props.theme['gray-900']};
  font-family: 'Baloo 2', cursive;
  font-size: 3rem;
  font-weight: 800;

  @media (max-width: 1400px) {
    font-size: 1.75rem;
  }

  @media (max-width: 767px) {
    font-size: 1.5rem;
  }
`;

export const IntroSubTitle = styled.h2`
  color: ${(props) => props.theme['gray-800']};
  font-family: 'Roboto', sans-serif;
  font-size: 1.25rem;
  font-weight: 400;
  margin: 1rem auto 4.125rem auto;

  @media (max-width: 1400px) {
    font-size: 1rem;
  }

  @media (max-width: 767px) {
    font-size: 1rem;
  }
`;

export const IntroItemsContainer = styled.div`
  display: grid;
  gap: 1.25rem 0;
  grid-template-columns: repeat(2, 1fr);
  grid-area: 2 / 1 / 3 / 2 ;
  max-height: 5.25rem;
  max-width: 36.7rem;


  span {
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

  @media (max-width: 1400px) {
    font-size: 0.875rem;
    grid-template-columns: repeat(1, 1fr);
    gap: 1rem;

  }

`;

export const ProductsContainer = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  gap: 2.5rem;

  .products__grid {
    display: flex;
    flex-wrap: wrap;
    gap: 2.5rem 2rem;
  }

  .title {
    color: ${(props) => props.theme['gray-800']};
    font-family: 'Baloo 2', cursive;
    font-size: 2rem;
    font-weight: 800;
    margin-bottom: 0.875rem;

      @media (max-width: 1400px) {
        margin-top: 2rem;
        font-size: 1.75rem;
    }

      @media (max-width: 767px) {
      font-size: 1.5rem;
    }
  }
`;
