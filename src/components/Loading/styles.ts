import styled, { css } from 'styled-components';

export const LoadingContainer = styled.section`
    ${({ theme }) => css`
        width: 100%;
        height: 100%;

        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
    `}
`;

export const LoadingSpinner = styled.svg`
    ${({ theme }) => css`
    width: 70px;
    height: 70px;
    
    margin-bottom: 2rem;
    animation: rotate 2s linear infinite;

    & .path {
        stroke: ${theme.colors.blue};
        stroke-linecap: round;
        animation: dash 1.5s ease-in-out infinite;
    }
    @keyframes rotate {
        100% {
            transform: rotate(360deg);
        }
    }
    @keyframes dash {
        0% {
            stroke-dasharray: 1, 150;
            stroke-dashoffset: 0;
        }
        50% {
            stroke-dasharray: 90, 150;
            stroke-dashoffset: -35;
        }
        100% {
            stroke-dasharray: 90, 150;
            stroke-dashoffset: -124;
        }
    }
    `}
`;

export const LoadingHintText = styled.p`
    ${({ theme }) => css`
        font-family: ${theme.font.family};
        font-size: ${theme.font.sizes.xlarge};
        font-weight: ${theme.font.weight.normal};

        color: ${theme.colors.black};

    `}
`;
