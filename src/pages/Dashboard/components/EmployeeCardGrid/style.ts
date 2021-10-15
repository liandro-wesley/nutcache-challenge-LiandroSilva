import styled, { css } from 'styled-components';

export const EmployeeCardContainer = styled.section`
    ${({ theme }) => css`
        display: flex;
        flex-direction: column;

        border: 1px solid ${theme.colors.gray};
        border-radius: 6px;

        height: 270px;
    `}
`;

export const EmployeeCardContent = styled.article`
    ${({ theme }) => css`
        padding: 2rem;
        flex: 1;

        article {
            h2 {
                font-size: ${theme.font.sizes.small};
                font-family: ${theme.font.family};
                font-weight: ${theme.font.weight.normal};

                color: #556877;
                margin-bottom: 0.5rem;
            }
            p {
                font-size: ${theme.font.sizes.normal};
                font-family: ${theme.font.family};
                font-weight: ${theme.font.weight.normal};

                color: ${theme.colors.black};
                margin-bottom: 1rem;
            }
            &:last-of-type {
                p { 
                    margin-bottom: 0;
                }
            }
        }
    `}
`;


export const EmployeeCardActions = styled.div`
    ${({ theme }) => css`
        display: flex;
        justify-content: space-between;
        align-items: center;

        padding: 2rem;
        border-radius: 0 0 6px 6px;
        background-color: ${theme.colors.gray};

        height: 4rem;

        h2 {
            font-size: ${theme.font.sizes.small};
            font-family: ${theme.font.family};
            font-weight: ${theme.font.weight.medium};

            color: ${theme.colors.black};
            user-select: none;
        }

        > div {
            button + button {
                margin-left: 0.8rem;
            }
            button {
                font-size: ${theme.font.sizes.normal};
                color: ${theme.colors.black};

                outline: none;
                border: none;
                background-color: transparent;
            }
        }
    `}
`;