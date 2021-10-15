import React from 'react';
import ReactTooltip from 'react-tooltip';
import Employees from '../../../../interfaces/Employee';
import * as S from './style'

import { FiTrash2, FiEdit } from 'react-icons/fi';

type EmployeeCardProps = {
    content: Employees;
}

const EmployeeCardGrid = ({ content }: EmployeeCardProps) => {
    return(
        <S.EmployeeCardContainer>
            <S.EmployeeCardContent>
                <article>
                    <h2>Nome do funcionário</h2>
                    <p title={content.name}>{`${content.name.substring(0, 21)} ${content.name.length >= 21 ? '...' : ''}`}</p>
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
                    <p>{content.startDate}</p>
                </article>
            </S.EmployeeCardContent>
            <S.EmployeeCardActions>
                <h2>Ações</h2>
                <div>
                    <button data-tip="React-tooltip" data-for="Edit"><FiEdit /></button>
                    <button data-tip="React-tooltip" data-for="Delete"><FiTrash2 /></button>
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