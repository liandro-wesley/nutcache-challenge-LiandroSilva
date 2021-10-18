import React, { memo } from 'react';
import * as S from './style';

// Import Components
import ReactTooltip from 'react-tooltip';

// Import Assets
import {
    FiGrid,
    FiList,
    FiRefreshCw
} from 'react-icons/fi';

type DashboardHeaderProps = {
    typeOfView: string;
    totalEmployees: number;
    setTypeOfView: (type: string) => void;
    getAllEmployees: () => void;
}

// Component Memorization
const MemoFiGrid = memo(FiGrid);
const MemoFiList = memo(FiList);
const MemoFiRefreshCw = memo(FiRefreshCw);
const MemoReactTooltip = memo(ReactTooltip);

const DashboardHeader = ({ typeOfView, setTypeOfView, getAllEmployees, totalEmployees }: DashboardHeaderProps) => {
    return (
        <S.DashboardHeaderContainer>
            <p>Total de funcionários registrados: {totalEmployees}</p>
            <S.DashboardHeaderActionsGroup>
                <S.DashboardHeaderViewMode>
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
                </S.DashboardHeaderViewMode>
                <S.DashboardHeaderForceUpdate>
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
                </S.DashboardHeaderForceUpdate>
            </S.DashboardHeaderActionsGroup>
        </S.DashboardHeaderContainer>
    );
}

export default DashboardHeader;