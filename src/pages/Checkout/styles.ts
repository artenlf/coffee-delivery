import styled from 'styled-components';

export const InfoContainer = styled.section`
  h2 {
    font-family: 'Baloo 2', cursive;
    font-size: 1.125rem;
    font-weight: 700;
    margin-bottom: 1rem;
  }
`;

export const FormContainer = styled.form`
  background: ${(props) => props.theme['gray-100']};
  height: 23.25rem;
  padding: 2.5rem;
  width: 40rem;

  .title__container {
    display: flex;
    gap: 0.5rem;
    margin-bottom: 2rem;

    .location-icon {
      color: ${(props) => props.theme['yellow-700']};
    }

    h3 {
      color: ${(props) => props.theme['gray-800']};
    }

    p {
      font-size: 0.875rem;
    }
  }

  fieldset {
    border: none;
    display: flex;
    flex-wrap: wrap;
    gap: 0.25rem;
    padding: 0.75rem;
  }
`;

export const InputContainer = styled.input`
  background: ${(props) => props.theme['gray-200']};
  border: 1px solid ${(props) => props.theme['gray-300']};
  border-radius: 4px;
  height: 2.625rem;
  width: 12.5rem;
`;
