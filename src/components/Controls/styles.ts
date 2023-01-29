import styled from 'styled-components';

export const ControlsContainer = styled.div`
  align-items: center;
  border-radius: 6px;
  background: ${(props) => props.theme['gray-400']};
  display: flex;
  gap: 0.25rem;
  min-height: 2.375rem;
  min-width: 5rem;

  button {
    align-items: center;
    border-radius: 6px;
    background: ${(props) => props.theme['gray-400']};
    border: none;
    cursor: pointer;
    display: flex;
    padding: 0.5rem;
  }

  span {
    color: ${(props) => props.theme['gray-900']};
    align-items: flex-end;
    display: flex;
    justify-content: flex-end;
  }

  .minus-icon,
  .plus-icon {
    color: ${(props) => props.theme['purple-500']};
    margin-bottom: 0.25rem;
  }
`;
