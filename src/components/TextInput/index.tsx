import React, { InputHTMLAttributes, ReactNode, FormEvent ,useCallback } from 'react';
import * as S from './style';

import { CPF, MonthAndYear, GeneralDate } from './masks';

type TextInputProps = {
    onChange?: ReactNode;
    mask: 'CPF' | 'MonthAndYear' | 'WithoutMask' | 'Date';
    labelForDateInput?: string;
    placelhoder: string;
    required: boolean;
    value?: ReactNode;
    valid: boolean;
    type: string;
    id: string;
} & InputHTMLAttributes<HTMLInputElement>

const TextInput = ({ id, type, valid, placelhoder, onChange, value, required, mask, labelForDateInput }: TextInputProps) => {

    const handleOnKeyUp = useCallback((e: FormEvent<HTMLInputElement>) => {
        if(mask === "CPF") {
            CPF(e);
        } if(mask === "MonthAndYear") {
            MonthAndYear(e)
        } if(mask === 'Date') {
            GeneralDate(e);
        } else {
            return e.currentTarget.value;
        }
    }, [mask]);

    return(
        <S.TextInputContainer>
            <S.TextInput
                valid={valid}
                type={type}
                placeholder={placelhoder} 
                id={id}
                autoComplete="off"
                value={value}
                onChange={onChange}
                required={required}
                onKeyUp={handleOnKeyUp}
            />
            {
                (mask === 'Date' || mask === 'MonthAndYear') ? (
                    <S.DateInputLabel htmlFor={id}>
                        {labelForDateInput}
                    </S.DateInputLabel>
                ) : ''
            }
            {
                (mask === 'Date' || mask === 'MonthAndYear') ? '' : (
                    <S.TextInputLabel htmlFor={id}>
                        {placelhoder}
                    </S.TextInputLabel>
                )
            }
        </S.TextInputContainer>
    );
}

export default TextInput;