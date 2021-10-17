import styled, { css } from 'styled-components';

export const SelectInputContainer = styled.div`
    ${({ theme }) => css`
        position: relative;

        display: flex;
        flex-direction: column;
        width: 100%;

        margin-bottom: 2.5rem;

        > svg {
            position: absolute;
            right: 1.6rem;
            z-index: 90;
            top: 44%;

            font-size: ${theme.font.sizes.large};
            color: ${theme.colors.black};
        }

    `}
`;

export const SelectInputOptionContainer = styled.select`
    ${({ theme }) => css`
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        top: 5rem;
        
        background-color: ${theme.colors.white};
        border: 1px solid ${theme.colors.gray};
        
        margin-top: 1rem;
        width: 100%;
        padding: 1.6rem;
        cursor: pointer;
        z-index: 3;

        transition: all .4s;
        overflow: hidden;

        &:active {
            border: 1px solid ${theme.colors.blue};
        }

        &:active + label {
            color: ${theme.colors.blue};
        }
    `}
`;

export const SelectInputLabel = styled.label`
    ${({ theme }) => css`
        position: absolute;
        width: 100%;
        top: -1rem;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 2;

        font-size: ${theme.font.sizes.small};
        font-family: ${theme.font.family};
        font-weight: ${theme.font.weight.normal};
        transition: all 0.2s;

        color: ${theme.colors.black};
    `}
`;

export const SelectInputOption = styled.option`
    ${({ theme }) => css`
        color: ${theme.colors.black};
        padding: 0 !important;


        &:hover {
            background-color: ${theme.colors.blue};
            color: ${theme.colors.white};
        }
    `}
`;