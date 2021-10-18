import React, { memo, useState } from 'react';
import * as S from './style';

// Import contexts
import { useEmployee } from '../../contexts/Employee';

// Import Assets
import {
    FiArrowRight,
} from 'react-icons/fi';

// Import Interfaces
import Employees from '../../interfaces/Employee';

// Import Components
import { ButtonPrimary } from '../../components/Button/style';
import EmployeeCardGrid from './components/EmployeeCardGrid';
import EmployeeCardRow from './components/EmployeeCardRow';
import Loading from '../../components/Loading';
import Header from '../../components/Header';
import Modal from '../../components/Modal';
import DashboardHeader from './components/DashboardHeader';

// Memoazing Components
const MemoFiArrowRight = memo(FiArrowRight);


const Dashboard = () => {
    const { employees, loading, getAllEmployees } = useEmployee();

    const [employeeInformation, setEmployeeInformation] = useState<Employees>({} as Employees);
    const [typeModal, setTypeModal] = useState<'Create' | 'Edit' | 'Delete'>('Create');
    const [typeOfView, setTypeOfView] = useState('grid');
    const [employeeId, setEmployeeId] = useState('');
    const [show, setShow] = useState(false);

    function openNewEmployeeModal() {
        setShow(true);
    }
    function closeNewEmployeeModal() {
        setShow(false);
    }

    function getEmployeeInformation(content: Employees) {
        setEmployeeInformation(content);
    }

    function getEmployeeId(id: string) {
        setEmployeeId(id);
    }

    function getTypeModal(type: 'Create' | 'Edit' | 'Delete') {
        setTypeModal(type);
    }

    return (
        <>
            <Header openNewEmployeeModal={openNewEmployeeModal} typeModal={getTypeModal} />
            <S.DashboardContainer>
                {(employees.length !== 0 && loading === false) &&
                    <>
                        <DashboardHeader
                            setTypeOfView={setTypeOfView}
                            typeOfView={typeOfView}
                            getAllEmployees={getAllEmployees}
                            totalEmployees={employees.length}
                        />
                        {
                            typeOfView === 'grid' &&
                            <S.DashboardGridView>
                                {
                                    employees.map((employee) => (
                                        <EmployeeCardGrid
                                            getEmployeedId={getEmployeeId}
                                            getTypeModal={getTypeModal}
                                            setEmployeeInformation={getEmployeeInformation}
                                            openNewEmployeeModal={openNewEmployeeModal}
                                            key={employee._id}
                                            content={employee}
                                        />
                                    ))
                                }
                            </S.DashboardGridView>
                        }
                        {
                            typeOfView === 'row' &&
                            <S.DashboardRowView>
                                {
                                    employees.map((employee) => (
                                        <EmployeeCardRow
                                            getEmployeedId={getEmployeeId}
                                            getTypeModal={getTypeModal}
                                            setEmployeeInformation={getEmployeeInformation}
                                            openNewEmployeeModal={openNewEmployeeModal}
                                            key={employee._id}
                                            content={employee}
                                        />
                                    ))
                                }
                            </S.DashboardRowView>
                        }
                    </>
                }
                {loading === true &&
                    <Loading hintText="Buscando dados dos funcionários..." />
                }
                {employees.length === 0 &&
                    <S.DashboardWithoutEmployees
                        style={{ display: `${loading ? 'none' : 'flex'}` }}
                    >
                        <p>Oops! Parece que não há funcionários registrados</p>
                        <ButtonPrimary
                            uppercase={false}
                            onClick={openNewEmployeeModal}
                        >
                            Registre agora mesmo
                            <MemoFiArrowRight />
                        </ButtonPrimary>
                    </S.DashboardWithoutEmployees>
                }
                <Modal
                    employeeId={employeeId}
                    employeeData={employeeInformation}
                    onOpenEmployeeModal={openNewEmployeeModal}
                    onCloseEmployeeModal={closeNewEmployeeModal}
                    show={show}
                    type={typeModal}
                />
            </S.DashboardContainer>
        </>
    );
}

export default Dashboard;