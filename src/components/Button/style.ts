import styled, { css } from 'styled-components';

type ButtonProps = {
    uppercase: boolean;
}

const ButtonReset = styled.button<ButtonProps>`
    ${({ theme, uppercase }) => css`
        font-size: ${theme.font.sizes.normal};
        font-weight: ${theme.font.weight.medium};
        font-family: ${theme.font.family};
        transition: all .2s;
        padding: 1.6rem;

        text-transform: ${uppercase ? 'uppercase' : 'initial'};

        border: none;
        outline: none;
        border-radius: 4px;

        display: flex;
        justify-content: center;
        align-items: center;

        > svg {
            margin-left: 0.8rem;
        }
    `}
`;

export const ButtonPrimary = styled(ButtonReset)`
    ${({ theme }) => css`
        background-color: ${theme.colors.blue};
        color: ${theme.colors.white};

        &:hover {
            filter: brightness(.9);
        }
        &:focus {
            box-shadow: 0 0 0 3px ${theme.colors.blue};
        }
    `}
`;

export const ButtonDisabled = styled(ButtonReset)`
    ${({ theme }) => css`
        background-color: ${theme.colors.gray};
        color: ${theme.colors.black};

        &:hover {
            filter: brightness(.9);
        }
        &:focus {
            box-shadow: 0 0 0 3px ${theme.colors.gray};
        }
    `}
`;

export const ButtonSuccess = styled(ButtonReset)`
    ${({ theme }) => css`
        background-color: ${theme.colors.green};
        color: ${theme.colors.white};

        &:hover {
            filter: brightness(.9);
        }
        &:focus {
            box-shadow: 0 0 0 3px ${theme.colors.green};
        }
    `}
`;

export const ButtonEdit = styled(ButtonReset)`
    ${({ theme }) => css`
        background-color: #F6C923;
        color: ${theme.colors.white};

        &:hover {
            filter: brightness(.9);
        }
        &:focus {
            box-shadow: 0 0 0 3px #F6C923;
        }
    `}
`;

export const ButtonDelete = styled(ButtonReset)`
    ${({ theme }) => css`
        background-color: ${theme.colors.red};
        color: ${theme.colors.white};

        &:hover {
            filter: brightness(.9);
        }
        &:focus {
            box-shadow: 0 0 0 3px ${theme.colors.red};
        }
    `}
`;

