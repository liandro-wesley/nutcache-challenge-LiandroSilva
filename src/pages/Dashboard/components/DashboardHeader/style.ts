import styled, { css } from 'styled-components';

export const DashboardHeaderContainer = styled.section`
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

export const DashboardHeaderActionsGroup = styled.div`
    ${({ theme }) => css`
        display: flex;
        justify-content: space-between;
        align-items: center;
    `}
`;

export const DashboardHeaderViewMode = styled.div`
    ${({ theme }) => css`
        display: flex;
        justify-content: center;
        align-items: center;

        margin-right: 1.6rem;

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
    `}
`;

export const DashboardHeaderForceUpdate = styled.div`
    ${({ theme }) => css`
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
    `}
`;
