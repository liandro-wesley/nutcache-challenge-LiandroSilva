import React, { memo } from 'react';
import ReactTooltip from 'react-tooltip';
import Employees from '../../../../interfaces/Employee';
import * as S from './style'

import { FiTrash2, FiEdit } from 'react-icons/fi';

type EmployeeCardProps = {
    content: Employees;
    getEmployeedId: (id: string) => void;
    openNewEmployeeModal: () => void;
    setEmployeeInformation: (content: Employees) => void;
    getTypeModal: (type: 'Create' | 'Edit' | 'Delete') => void;
}

const MemoFiTrash2 = memo(FiTrash2);
const MemoFiEdit = memo(FiEdit);
const MemoReactTooltip = memo(ReactTooltip);


const EmployeeCardRow = ({ content, openNewEmployeeModal, getTypeModal, setEmployeeInformation, getEmployeedId }: EmployeeCardProps) => {
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
                    <p>{content?.startDate}</p>
                </article>
            </S.EmployeeCardContent>
            <S.EmployeeCardActions>
                <h2>Ações</h2>
                <div>
                    <button 
                        data-tip="React-tooltip" 
                        data-for="Edit"
                        onClick={() => {
                            getTypeModal('Edit');
                            openNewEmployeeModal();
                            setEmployeeInformation(content);
                            getEmployeedId(`${content._id !== undefined ? content._id : ''}`)
                        }} 
                    >
                        <MemoFiEdit />
                    </button>
                    <button 
                        data-tip="React-tooltip" 
                        data-for="Delete"
                        onClick={() => {
                            getTypeModal('Delete')
                            openNewEmployeeModal();
                            getEmployeedId(`${content._id !== undefined ? content._id : ''}`)

                        }}
                    >
                        <MemoFiTrash2 />
                    </button>
                    <MemoReactTooltip
                        className="tooltip__right--dark"
                        id="Edit" 
                        place="right" 
                        type="dark" 
                        effect="solid"
                    >
                        Alterar informações
                    </MemoReactTooltip>
                    <MemoReactTooltip
                        className="tooltip__right--dark"
                        id="Delete" 
                        place="right" 
                        type="dark" 
                        effect="solid"
                    >
                        Deletar funcionário
                    </MemoReactTooltip>
                </div>
            </S.EmployeeCardActions>
        </S.EmployeeCardContainer>
    );
}

export default EmployeeCardRow;