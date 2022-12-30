import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        line-height: 130%;
    }

    :focus {
        outline: 0;
        border-radius: 6px;
        box-shadow: 0 0 0 2px ${(props) => props.theme['purple-500']};
    }

    body {
            background: ${(props) => props.theme['bg-color']};
            color: ${(props) => props.theme['gray-700']};
            -webkit-font-smoothing: antialiased;
            @media (max-width: 1439px) {
                padding: 0 2rem;
            }
    }

    body, input, textarea, button {
        font-family: 'Roboto', sans-serif;
        font-size: 1rem;
        font-weight: 400;
    }

    main {
        padding: 5.75rem 10rem;

        @media (max-width: 1439px) {
            padding: 2rem;
        }
    }
`;
