import React, { memo, FormEvent } from 'react';
import * as S from './style';

// Import Contexts
import { useEmployee } from '../../../../contexts/Employee';

// Import Components
import { ButtonDisabled, ButtonDelete, ButtonPrimary } from '../../../../components/Button/style';
import Loading from '../../../../components/Loading';
import { FiCheckCircle, FiTrash2 } from 'react-icons/fi';

type EmployeeDeleteModalProps = {
    employeeId: string;
    onCloseEmployeeModal: () => void;
}

const MemoFiTrash2 = memo(FiTrash2);

const EmployeeDeleteModal = ({ onCloseEmployeeModal, employeeId }: EmployeeDeleteModalProps) => {
    const { deleteAnEmployee, loading, successful, setSuccessful } = useEmployee();
    const handleDeleteAnEmployee = (id: string, event: FormEvent) => {
        event.preventDefault();
        deleteAnEmployee(id);
    }
    return (
        <S.EmployeeDeleteContainer>
            {
                (loading === false && successful === false) &&
                <>
                    <MemoFiTrash2 />
                    <h2>Excluir funcionário</h2>
                    <p>Quer mesmo excluir este funcionário? Essa ação não é reversível!</p>
                    <S.EmployeeDeleteForm onSubmit={(event) => handleDeleteAnEmployee(employeeId, event)}>
                        <S.EmployeeDeleteGroupFields groupFor={2} spacing={3}>
                            <ButtonDisabled
                                uppercase={true}
                                onClick={onCloseEmployeeModal}
                            >
                                Cancelar
                            </ButtonDisabled>
                            <ButtonDelete
                                uppercase={true}
                            >
                                Excluir
                            </ButtonDelete>
                        </S.EmployeeDeleteGroupFields>
                    </S.EmployeeDeleteForm>
                </>
            }
            {
                (loading === true && successful === false) &&
                <Loading hintText="Excluindo funcionário" />
            }
            {
                (loading === false && successful === true) &&
                <S.EmployeeDeleteSuccesful>
                    <FiCheckCircle />
                    <h2>Funcionário excluído com sucesso!</h2>
                    <ButtonPrimary
                        onClick={() => {
                            onCloseEmployeeModal();
                            setSuccessful(false);
                        }}
                        uppercase={true}
                    >
                        Retonar para tela inicial
                    </ButtonPrimary>
                </S.EmployeeDeleteSuccesful>
            }
        </S.EmployeeDeleteContainer>
    )
};

export default EmployeeDeleteModal;