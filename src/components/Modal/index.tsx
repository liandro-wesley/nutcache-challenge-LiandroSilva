import React, { memo, useRef } from 'react';

// Import Modal Types
import EmployeeModalProps from '../../interfaces/EmployeeModal';
import EmployeeCreateModal from '../../pages/Dashboard/components/EmployeeCreateModal';
import EmployeeDeleteModal from '../../pages/Dashboard/components/EmployeeDeleteModal';
import EmployeeEditModal from '../../pages/Dashboard/components/EmployeeEditModal';

import * as S from './style';



const EmployeeModal = ({
    onCloseEmployeeModal,
    onOpenEmployeeModal,
    employeeData,
    employeeId,
    show,
    type
}: EmployeeModalProps) => {
    const EmployeeModalRef = useRef<HTMLDivElement>(null);

    const closeModalByClickOutside = (e: any) => {
        if (EmployeeModalRef.current === e.target) {
            onCloseEmployeeModal();
        }
    }

    return (
        <>
            {
                show === true &&
                <S.EmployeeModalOverlay ref={EmployeeModalRef} onClick={closeModalByClickOutside}>
                    <S.EmployeeModalBody isItModalDeleteEmployee={type === 'Delete'}>
                        {type === 'Create' && <EmployeeCreateModal onCloseEmployeeModal={onCloseEmployeeModal} />}
                        {type === 'Edit' && <EmployeeEditModal employeeEdit={employeeId} onCloseEmployeeModal={onCloseEmployeeModal} employeeData={employeeData} />}
                        {type === 'Delete' && <EmployeeDeleteModal onCloseEmployeeModal={onCloseEmployeeModal} employeeId={employeeId}/>}
                    </S.EmployeeModalBody>
                </S.EmployeeModalOverlay>
            }
        </>
    );
}


export default memo(EmployeeModal);