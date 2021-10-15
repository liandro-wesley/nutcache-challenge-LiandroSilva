import styled, { css } from 'styled-components';

const ButtonReset = styled.button`
    ${({ theme }) => css`
        font-size: ${theme.font.sizes.normal};
        font-weight: ${theme.font.weight.normal};
        font-family: ${theme.font.family};
        transition: all .2s;
        padding: 1.6rem;

        border: none;
        outline: none;
        border-radius: 4px;
    `}
`;

export const ButtonPrimary = styled(ButtonReset)`
    ${({ theme }) => css`
        background-color: ${theme.colors.blue};
        color: ${theme.colors.white};

        &:hover {
            box-shadow: 0 0 0 3px ${theme.colors.blueLight};
            filter: brightness(.9);
        }
        &:focus {
            filter: brightness(1);
            box-shadow: 0 0 0 3px ${theme.colors.blueLight};
        }
    `}
`;
