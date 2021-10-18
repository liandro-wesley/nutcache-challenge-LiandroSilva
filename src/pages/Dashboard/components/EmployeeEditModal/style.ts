import styled, { css } from 'styled-components';

export const EmployeeEditContainer = styled.section`
    ${({theme}) => css`
        width: 100%;
    `}
`;

export const EmployeeEditForm = styled.form`
    ${({theme}) => css`
        width: 100%;
    `}
`;


type EmployeeEditGroupFieldsProps = {
    groupFor: number;
    spacing: number;
}

export const EmployeeEditGroupFields = styled.div<EmployeeEditGroupFieldsProps>`
    ${({theme, groupFor, spacing}) => css`
        display: grid;
        grid-template-columns: ${groupFor ? `repeat(${groupFor}, 1fr)` : 'repeat(2, 1fr)'};
        gap: 2rem;

        margin-top: ${spacing !== 0 ? `${spacing}rem` : '0'};
    `}
`;

export const EmployeeEditSuccesful = styled.div`
    ${({theme}) => css`
        display: flex;
        flex-direction: column;
        align-items: center;

        font-family: ${theme.font.family};
        color: ${theme.colors.black};

        > svg {
            font-size: 4rem;
            margin-bottom: 3rem;
        }

        h2 {
            font-size: 2rem;
            margin-bottom: 1rem;
        }

        p {
            max-width: 270px;
            margin-bottom: 3rem;

            text-align: center;
            font-size: 1.6rem;
        }
    `}
`;