import styled from 'styled-components';

export const SelectedProductContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 3rem 2.75rem;

  .product__wrapper {
    align-items: flex-start;
    display: flex;

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
    display: inline-flex;
    gap: 0.5rem;
    margin: auto;
  }

  .controls {
    border-radius: 6px;
    background: ${(props) => props.theme['gray-400']};
    display: flex;
    flex-direction: row;
    gap: 0.25rem;
    padding: 0.5rem;

    button {
      align-items: center;
      background: ${(props) => props.theme['gray-400']};
      border: none;
      /* color: ${(props) => props.theme['purple-500']}; */
      display: flex;

      .trash-icon {
        color: ${(props) => props.theme['purple-500']};
      }
    }

    span {
      color: ${(props) => props.theme['gray-900']};
      align-items: flex-end;
      display: flex;
      justify-content: flex-end;
    }
  }
`;
