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

export const DashboardHeaderInfo = styled.section`
    ${({ theme }) => css`
        display: flex;
        justify-content: space-between;
        align-items: center;

        p {
            font-family: ${theme.font.family};
            font-size: ${theme.font.sizes.large};

            color: ${theme.colors.black};
        }
    `}
`;

export const DashboardHeaderGroup = styled.aside`
    ${({ theme }) => css`
        display: flex;
        justify-content: center;
        align-items: center;

        > section {
            margin-right: 1.6rem;
            display: flex;
            justify-content: center;
            align-items: center;
            button {
                display: flex;
                justify-content: center;
                align-items: center;

                background-color: ${theme.colors.gray};
                color: ${theme.colors.black};
                border: none;

                font-size: 2rem;
                width: 4rem;
                height: 4rem;

                &:nth-of-type(1) {
                    border-radius: 6px 0 0 6px;
                }
                &:nth-of-type(2) {
                    border-radius: 0 6px 6px 0;
                }

                &.active {
                    background-color: ${theme.colors.blue};
                    color: ${theme.colors.white};
                }
            }
        }
        > div {
            button {
                display: flex;
                justify-content: center;
                align-items: center;

                background-color: transparent;
                color: ${theme.colors.black};

                border: none;
                font-size: 2rem;
                width: 4rem;
                height: 4rem;
            }
        }
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
