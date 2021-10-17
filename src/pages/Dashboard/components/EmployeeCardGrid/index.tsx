import React from 'react';
import ReactTooltip from 'react-tooltip';
import Employees from '../../../../interfaces/Employee';
import * as S from './style'

import { FiTrash2, FiEdit } from 'react-icons/fi';
import { toMonthAndYear } from '../../../../utils/parsers';

type EmployeeCardProps = {
    content: Employees;
    openNewEmployeeModal: () => void;
    setEmployeeInformation: (content: Employees) => void;
    getTypeModal: (type: 'Create' | 'Edit' | 'Delete') => void;
}

const EmployeeCardGrid = ({ content, openNewEmployeeModal, getTypeModal, setEmployeeInformation }: EmployeeCardProps) => {
    return(
        <S.EmployeeCardContainer>
            <S.EmployeeCardContent>
                <article>
                    <h2>Nome do funcionário</h2>
                    <p>{content.name}</p>
                </article>
                <article>
                    <h2>E-mail do funcionário</h2>
                    <p>{content.email}</p>
                </article>
                <article>
                    <h2>Time onde o funcionário atua</h2>
                    <p>{content.team}</p>
                </article>
                <article>
                    <h2>Data em que foi contratado</h2>
                    <p>{toMonthAndYear(content.startDate)}</p>
                </article>
            </S.EmployeeCardContent>
            <S.EmployeeCardActions>
                <h2>Ações</h2>
                <div>
                    <button 
                        onClick={() => {
                            getTypeModal('Edit');
                            openNewEmployeeModal();
                            setEmployeeInformation(content);
                        }} 
                        data-tip="React-tooltip" 
                        data-for="Edit"
                    >
                        <FiEdit />
                    </button>
                    <button
                        onClick={() => {
                            getTypeModal('Delete')
                            openNewEmployeeModal();
                        }}
                        data-tip="React-tooltip" 
                        data-for="Delete"
                    >
                        <FiTrash2 />
                    </button>
                    <ReactTooltip
                        className="tooltip__bottom--dark"
                        id="Edit" 
                        place="bottom" 
                        type="dark" 
                        effect="solid"
                    >
                        Alterar informações
                    </ReactTooltip>
                    <ReactTooltip
                        className="tooltip__bottom--dark"
                        id="Delete" 
                        place="bottom" 
                        type="dark" 
                        effect="solid"
                    >
                        Deletar funcionário
                    </ReactTooltip>
                </div>
            </S.EmployeeCardActions>
        </S.EmployeeCardContainer>
    );
}

export default EmployeeCardGrid;