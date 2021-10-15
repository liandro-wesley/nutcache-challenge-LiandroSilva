import React from 'react';
import * as S from './styles';

type LoadingProps = {
    hintText: string;
}

const Loading = ({ hintText }: LoadingProps) => {
    return(
        <S.LoadingContainer>
            <S.LoadingSpinner viewBox="0 0 50 50">
                <circle
                    className="path"
                    cx="25"
                    cy="25"
                    r="20"
                    fill="none"
                    strokeWidth="4"
                />
            </S.LoadingSpinner>
            <S.LoadingHintText>{hintText}</S.LoadingHintText>
        </S.LoadingContainer>
    );
}


export default Loading;