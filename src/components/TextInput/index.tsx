import React, { InputHTMLAttributes, ReactNode } from 'react';
import * as S from './style';

import valueMask from '../../utils/valueMask';


type TextInputProps = {
    onChange: ReactNode;
    mask: 'CPF' | 'MonthAndYear' | 'WithoutMask' | 'Date';
    labelForDateInput?: string;
    placeholder: string;
    required: boolean;
    value: string;
    valid: boolean;
    type: string;
    id: string;
} & InputHTMLAttributes<HTMLInputElement>

const TextInput = ({ id, type, valid, placeholder, onChange, value, required, mask, labelForDateInput }: TextInputProps) => {

    return (
        <S.TextInputContainer>
            <S.TextInput
                valid={valid}
                type={type}
                placeholder={placeholder}
                id={id}
                autoComplete="off"
                value={valueMask({ mask, value })}
                onChange={onChange}
                required={required}
            />
            {
                (mask === 'Date' || mask === 'MonthAndYear') ? (
                    <S.DateInputLabel htmlFor={id}>
                        {labelForDateInput}
                    </S.DateInputLabel>
                ) : (
                    <S.TextInputLabel htmlFor={id}>
                        {placeholder}
                    </S.TextInputLabel>
                )
            }
        </S.TextInputContainer>
    );
}

export default TextInput;