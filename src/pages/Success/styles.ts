import styled from 'styled-components';

export const SuccessContainer = styled.main`
  display: flex;
  flex-direction: column;

  h2 {
    color: ${(props) => props.theme['yellow-700']};
    font-family: 'Baloo 2', cursive;
    font-size: 2rem;
    font-weight: 800;
    margin-bottom: 0.25rem;
  }
  h3 {
    color: ${(props) => props.theme['gray-800']};
    font-size: 1.25rem;
    font-weight: 400;
    margin-bottom: 2.5rem;
  }

  .checkout__wrapper {
    align-items: flex-start;
    display: flex;
    justify-content: space-between;

    img {
      height: 18.3125rem;
      width: 30.75rem;
    }
  }

  .checkout__container {
    background: linear-gradient(
          ${(props) => props.theme['bg-color']},
          ${(props) => props.theme['bg-color']}
        )
        padding-box,
      linear-gradient(
          to right,
          ${(props) => props.theme['yellow-600']},
          ${(props) => props.theme['purple-500']}
        )
        border-box;
    border: 1px solid transparent;
    border-radius: 6px 36px;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    justify-content: center;
    max-width: 33%;
    padding: 2.5rem;
    width: 100%;

    .info__wrapper {
      align-items: center;
      display: flex;
      flex-direction: row;
      gap: 0.75rem;

      span {
        font-weight: 700;
      }

      .location__container,
      .timer__container,
      .currency__container {
        align-items: center;
        border-radius: 999px;
        color: ${(props) => props.theme['bg-color']};
        display: flex;
        height: 2rem;
        justify-content: center;
        width: 2rem;
      }

      .location__container {
        background: ${(props) => props.theme['purple-500']};
      }

      .timer__container {
        background: ${(props) => props.theme['yellow-600']};
      }

      .currency__container {
        background: ${(props) => props.theme['yellow-700']};
      }
    }
  }
`;
