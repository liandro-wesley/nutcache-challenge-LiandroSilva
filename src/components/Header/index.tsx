import React from 'react';
import * as S from './style';

import Logo from '../../assets/logo.png';
import { ButtonPrimary } from '../Button/style';

const Header = () => {
    return(
        <S.HeaderContainer>
            <S.HeaderContent>
                <a href="/">
                    <img src={Logo} alt="Nutcache Brazil" />
                </a>
                <ButtonPrimary>
                    Registre um funcionário
                </ButtonPrimary>
            </S.HeaderContent>
        </S.HeaderContainer>
    )
}

export default Header;