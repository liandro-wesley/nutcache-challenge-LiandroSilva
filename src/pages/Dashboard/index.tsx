import React, { memo, useState } from 'react';
import Header from '../../components/Header';
import Loading from '../../components/Loading';
import { useEmployee } from '../../contexts/Employee';
import { 
    FiArrowRight,
    FiGrid,
    FiList,
    FiRefreshCw
} from 'react-icons/fi';
import * as S from './style';
import EmployeeCardGrid from './components/EmployeeCardGrid';
import ReactTooltip from 'react-tooltip';
import EmployeeCardRow from './components/EmployeeCardRow';
import EmployeeModal from '../../components/EmployeeModal';
import Employees from '../../interfaces/Employee';
import { ButtonPrimary } from '../../components/Button/style';

const MemoFiArrowRight = memo(FiArrowRight);
const MemoFiGrid = memo(FiGrid);
const MemoFiList = memo(FiList);
const MemoFiRefreshCw = memo(FiRefreshCw);
const MemoReactTooltip = memo(ReactTooltip);


const Dashboard = () => {
    const [typeOfView, setTypeOfView] = useState('grid');
    const [typeModal, setTypeModal] = useState<'Create' | 'Edit' | 'Delete'>('Create');
    const [show, setShow] = useState(false);
    const [employeeInformation, setEmployeeInformation] = useState<Employees>();
    const { employees, loading, getAllEmployees } = useEmployee();

    function openNewEmployeeModal() {
        setShow(true);
    }
    function closeNewEmployeeModal() {
        setShow(false);
    }

    function getEmployeeInformation(content: Employees) {
        setEmployeeInformation(content);
    }

    function getTypeModal(type: 'Create' | 'Edit' | 'Delete') {
        setTypeModal(type);
    } 

    return(     
        <>
            <Header openNewEmployeeModal={openNewEmployeeModal} typeModal={getTypeModal} />
            <S.DashboardContainer>
                {(employees.length !== 0 && loading === false) &&
                    <>
                        <S.DashboardHeaderInfo>
                            <p>Total de funcionários registrados: {employees.length}</p>
                            <S.DashboardHeaderGroup>
                                <section>
                                    <button 
                                        className={`${typeOfView === 'grid' && 'active'}`}
                                        onClick={() => setTypeOfView('grid')}
                                    >
                                        <MemoFiGrid />
                                    </button>
                                    <button 
                                        className={`${typeOfView === 'row' && 'active'}`}
                                        onClick={() => setTypeOfView('row')}
                                    >
                                        <MemoFiList />
                                    </button>
                                </section>
                                <div>
                                    <button 
                                        data-tip="React-tooltip" 
                                        data-for="ForceUpdate"
                                        onClick={getAllEmployees}
                                    >
                                        <MemoFiRefreshCw />
                                    </button>
                                    <MemoReactTooltip
                                        className="tooltip__bottom--dark"
                                        id="ForceUpdate" 
                                        place="bottom" 
                                        type="dark" 
                                        effect="solid"
                                    >
                                        Atualizar
                                    </MemoReactTooltip>
                                </div>
                            </S.DashboardHeaderGroup>
                        </S.DashboardHeaderInfo>
                        {
                            typeOfView === 'grid' &&
                            <S.DashboardGridView>
                                {
                                    employees.map((employee) => (
                                        <EmployeeCardGrid
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
                        style={{display: `${loading ? 'none' : 'flex'}`}}
                    >
                        <p>Oops! Parece que não há funcionários registrados</p>
                        <ButtonPrimary onClick={openNewEmployeeModal}>
                            Registre agora mesmo 
                            <MemoFiArrowRight />
                        </ButtonPrimary>
                    </S.DashboardWithoutEmployees>
                }
                <EmployeeModal 
                    employeeInformation={employeeInformation} 
                    onCloseEmployeeModal={closeNewEmployeeModal} 
                    show={show} 
                    type={typeModal} 
                />
            </S.DashboardContainer>
        </>
    );
}

export default Dashboard;