import styled from 'styled-components';

export const SelectedProductContainer = styled.div`
  border-bottom: 1px solid ${(props) => props.theme['gray-300']};
  display: flex;
  padding: 3rem 0;
  justify-content: space-between;
  width: calc(100% - 2.75rem);

  .product__wrapper {
    align-items: flex-start;
    display: flex;
    gap: 1.25rem;

    img {
      height: 4rem;
      margin: auto;
      width: 4rem;
    }
  }

  h3 {
    color: ${(props) => props.theme['gray-800']};
    font-size: 1rem;
    font-weight: 400;
  }

  .controls__wrapper {
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .buttons__wrapper {
    display: flex;
    gap: 0.5rem;
  }

  .controls {
    align-items: center;
    border-radius: 6px;
    background: ${(props) => props.theme['gray-400']};
    display: flex;
    flex-direction: row;
    gap: 0.25rem;

    button {
      align-items: center;
      border-radius: 6px;
      background: ${(props) => props.theme['gray-400']};
      border: none;
      display: flex;
      font-size: 0.75rem;
      gap: 0.25rem;
      line-height: 160%;
      padding: 0.5rem;
      text-transform: uppercase;
    }

    .minus-icon,
    .plus-icon,
    .trash-icon {
      color: ${(props) => props.theme['purple-500']};
      margin-bottom: 0.25rem;
    }

    span {
      align-items: flex-end;
      color: ${(props) => props.theme['gray-900']};
      display: flex;
      justify-content: flex-end;
    }
  }

  .price {
    font-weight: 700;
  }
`;
