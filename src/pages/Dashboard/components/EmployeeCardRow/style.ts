import styled, { css } from 'styled-components';

export const EmployeeCardContainer = styled.section`
    ${({ theme }) => css`
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        border: 1px solid ${theme.colors.gray};
        border-radius: 6px;

        min-height: 200px;
    `}
`;

export const EmployeeCardContent = styled.article`
    ${({ theme }) => css`
        max-width: 800px;

        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 1.6rem;

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
                font-size: ${theme.font.sizes.xlarge};
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
        flex-direction: column;
        justify-content: space-between;
        align-items: center;

        padding: 2rem;
        border-radius: 0 6px 6px 0;
        background-color: ${theme.colors.gray};

        height: 100%;

        h2 {
            font-size: ${theme.font.sizes.small};
            font-family: ${theme.font.family};
            font-weight: ${theme.font.weight.medium};

            color: ${theme.colors.black};
            user-select: none;
        }

        > div {
            display: flex;
            flex-direction: column-reverse;
            button + button {
                margin-bottom: 0.8rem;
            }
            button {
                font-size: ${theme.font.sizes.large};
                color: ${theme.colors.black};

                outline: none;
                border: none;
                background-color: transparent;
            }
        }
    `}
`;