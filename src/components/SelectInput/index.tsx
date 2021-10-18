import React, { InputHTMLAttributes, memo, ReactNode } from 'react';
import * as S from './style';

import { FiChevronDown } from 'react-icons/fi';

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

const SelectInput = ({ id, valid, onChange, value, required, placeholder, optionList }: SelectInputProps) => {

    return (
        <S.SelectInputContainer>
            <MemoFiChevronDown />
            <S.SelectInputOptionContainer value={value} onChange={onChange} required={required}>
                {
                    optionList.map((option) => (
                        <S.SelectInputOption key={option.data.id} value={option.data.placeholder}>
                            {option.data.placeholder}
                        </S.SelectInputOption>

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