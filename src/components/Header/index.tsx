import React from 'react';
import * as S from './style';

// Import Assets
import Logo from '../../assets/logo.png';

// Import Components
import { ButtonPrimary } from '../Button/style';

// Types & Interfaces
type HeaderProps = {
    openNewEmployeeModal: () => void;
    typeModal: (type: 'Create' | 'Edit') => void;
}

const Header = ({ openNewEmployeeModal, typeModal }: HeaderProps) => {
    return(
        <S.HeaderContainer>
            <S.HeaderContent>
                <a href="/">
                    <img src={Logo} alt="Nutcache Brazil" />
                </a>
                <ButtonPrimary  
                    uppercase={false}
                    onClick={() => {
                        typeModal('Create');
                        openNewEmployeeModal();
                    }}
                >
                    Registre um funcionário
                </ButtonPrimary>
            </S.HeaderContent>
        </S.HeaderContainer>
    )
}

export default Header;