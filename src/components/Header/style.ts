import styled, { css } from 'styled-components';

export const HeaderContainer = styled.header`
    ${({ theme }) => css`
        background-color: ${theme.colors.white};
        border-bottom: 1px solid ${theme.colors.gray};
        
        height: 8rem;
        padding: 1rem;
    `}
`;

export const HeaderContent = styled.section`
    ${({ theme }) => css`
        display: flex;
        align-items: center;
        justify-content: space-between;

        max-width: 1200px;
        width: 100%;
        height: 100%;
        margin: 0 auto;

        img {
            width: 16rem;
        }

        button {
            font-weight: ${theme.font.weight.medium};
        }
    `}
`;
