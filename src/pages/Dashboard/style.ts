import styled, { css } from 'styled-components';

export const DashboardContainer = styled.main`
    ${({ theme }) => css`
        max-width: 1200px;
        width: 100%;
        margin: 0 auto;

        margin-top: 4.5rem;
        padding-bottom: 4.5rem;
    `}
`;

export const DashboardGridView = styled.section`
    ${({ theme }) => css`
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 2rem;

        margin-top: 6rem;
    `}
`;

export const DashboardRowView = styled.section`
    ${({ theme }) => css`
        display: grid;
        grid-template-columns: 1fr;
        gap: 2rem;

        margin-top: 6rem;
    `}
`;
export const DashboardWithoutEmployees = styled.section`
    ${({ theme }) => css`
        justify-content: center;
        align-items: center;
        flex-direction: column;

        height: 100%;

        p {
            font-family: ${theme.font.family};
            font-size: ${theme.font.sizes.large};

            color: ${theme.colors.black};
            margin-bottom: 1.6rem;
        }

        a {
            display: flex;
            justify-content: center;
            align-items: center;

            font-size: ${theme.font.sizes.normal};
            font-family: ${theme.font.family};

            color: ${theme.colors.blue};
            padding: 0.8rem;
            transition: all .2s;

            text-decoration: none;

            > svg {
                margin-left: .8rem;
                margin-top: 1px;
            }

            &:hover {
                text-decoration: underline;
            }
        }
    `}
`;
