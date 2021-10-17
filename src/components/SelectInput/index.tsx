import React, { InputHTMLAttributes, memo, ReactNode, useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import * as S from './style';


const MemoFiChevronDown = memo(FiChevronDown);

type OptionList = {
    identifier: string;
    data: {
        id: string;
        placeholder: string;
    }
}

type SelectInputProps = {
    onChange: ReactNode;
    required: boolean;
    placeholder: string;
    value: ReactNode;
    valid?: boolean;
    id: string;
    optionList: OptionList[];
} & InputHTMLAttributes<HTMLSelectElement>

const SelectInput = ({ id, valid, onChange, value, required, placeholder, optionList}: SelectInputProps) => {

    return(
        <S.SelectInputContainer>
            <MemoFiChevronDown />
            <S.SelectInputOptionContainer value={value} onChange={onChange} required={required}>
                {
                    optionList.map((option, index) => (
                        <>
                            <S.SelectInputOption key={option.data.id} value={option.data.placeholder}>
                                {option.data.placeholder}
                            </S.SelectInputOption>
                        </>
                    ))
                }
            </S.SelectInputOptionContainer>
            <S.SelectInputLabel>
                {placeholder}
            </S.SelectInputLabel>
        </S.SelectInputContainer>
    );
}

export default SelectInput;