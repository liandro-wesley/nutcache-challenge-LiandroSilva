import styled, { css } from 'styled-components';

export const TextInputContainer = styled.div`
    ${({ theme }) => css`
        position: relative;
        margin-bottom: 2.5rem;
    `}
`;

type TextInputProps = {
    valid: boolean;
}

export const TextInput = styled.input<TextInputProps>`
    ${({ theme, valid }) => css`
        width: 100%;
        position: relative;

        font-size: ${theme.font.sizes.normal};
        font-family: ${theme.font.family};
        
        padding: 1.6rem;
        z-index: 2;

        border-radius: 4px;
        border: 1px solid ${valid === true ? theme.colors.gray : theme.colors.red};
        color: ${valid === true ? theme.colors.black : theme.colors.red};
        box-sizing: border-box;
        transition: all 0.2s;

        &::placeholder {
            color: ${theme.colors.black};
            font-size: ${theme.font.sizes.small};
        }

        &:focus {
            border-color: ${valid === true ? theme.colors.blue : theme.colors.red};
        }

        &:focus + label {
            margin-top: 0;
            top: -40%;
            z-index: 2;
            transition: all 0.2s;
            color: ${valid === true ? theme.colors.blue : theme.colors.red};
        }
    `}
`;


export const TextInputLabel = styled.label`
    ${({ theme }) => css`
    position: absolute;
        width: 100%;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        

        font-size: ${theme.font.sizes.small};
        font-family: ${theme.font.family};
        font-weight: ${theme.font.weight.normal};

        color: ${theme.colors.black};
        transition: 0.5;
    `}
`;

export const DateInputLabel = styled.label`
    ${({ theme }) => css`
    position: absolute;
        width: 100%;
        top: -40%;
        bottom: 0;
        left: 0;
        right: 0;
        

        font-size: ${theme.font.sizes.small};
        font-family: ${theme.font.family};
        font-weight: ${theme.font.weight.normal};

        color: ${theme.colors.black};
        transition: 0.5;
    `}
`;