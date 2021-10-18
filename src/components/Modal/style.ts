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

type EmployeeModalProps = {
    isItModalDeleteEmployee: boolean;
}

export const EmployeeModalBody = styled.main<EmployeeModalProps>`
    ${({ theme, isItModalDeleteEmployee }) => css`
        max-width: ${isItModalDeleteEmployee ? '440px' : '600px'};
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