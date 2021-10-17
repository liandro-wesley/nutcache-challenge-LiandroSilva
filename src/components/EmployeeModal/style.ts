import styled, { css } from 'styled-components';

export const EmployeeModalOverlay = styled.div`
    ${({ theme }) => css`
        width: 100%;
        height: 100%;
        z-index: 10;

        background-color: rgba(133,140,145, .8);

        position: fixed;
        top: 0;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
    `}
`;

export const EmployeeModalBody = styled.main`
    ${({ theme }) => css`
        max-width: 600px;
        width: 100%;
        min-height: 240px;
        padding: 4rem 2rem 4rem 2rem;

        background-color: ${theme.colors.white};
        border-radius: 6px;
        border: 1px solid ${theme.colors.blue};

        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

        animation: 0.3s ease-in-out both fadeInTop;

        @keyframes fadeInTop {
            from {
                opacity: 0;
                transform: translateY(-20vh);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    `}
`;

export const EmployeeModalForm = styled.form`
    ${({ theme }) => css`

    `}
`;

export const EmployeeModalFormInputGroup = styled.section`
    ${({ theme }) => css`
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 2rem;

        margin-top: 1rem;
    `}
`;

export const EmployeeModalActions = styled.section`
    ${({ theme }) => css`
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 2rem;

        button {
            text-transform: uppercase;
            font-size: ${theme.font.sizes.small};
        }
    `}
`;

export const EmployeeModalDelete = styled.div`
    ${({ theme }) => css`
        display: flex;
        flex-direction: column;
        > svg {
            font-size: 3rem;
            margin: 0 auto;
            color: ${theme.colors.black};

        }
        h2, h3 {
            text-align: center;
            margin-bottom: 1.6rem;
            font-family: ${theme.font.family};
            color: ${theme.colors.black};
        }
        h2 {
            font-size: 3rem;
        }
    `}
`;