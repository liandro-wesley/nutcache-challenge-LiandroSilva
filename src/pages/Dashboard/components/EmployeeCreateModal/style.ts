import styled, { css } from 'styled-components';

export const EmployeeCreateContainer = styled.section`
    ${({theme}) => css`
        width: 100%;
    `}
`;

export const EmployeeCreateForm = styled.form`
    ${({theme}) => css`
        width: 100%;
    `}
`;


type EmployeeCreateGroupFieldsProps = {
    groupFor: number;
    spacing: number;
}

export const EmployeeCreateGroupFields = styled.div<EmployeeCreateGroupFieldsProps>`
    ${({theme, groupFor, spacing}) => css`
        display: grid;
        grid-template-columns: ${groupFor ? `repeat(${groupFor}, 1fr)` : 'repeat(2, 1fr)'};
        gap: 2rem;

        margin-top: ${spacing !== 0 ? `${spacing}rem` : '0'};
    `}
`;

export const EmployeeCreateSuccesful = styled.div`
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