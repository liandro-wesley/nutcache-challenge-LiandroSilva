import React, { useState, useEffect, useCallback, FormEvent } from 'react';
import * as S from './style';

// Import Utils
import { isCPF, isEmail } from '../../../../utils/validators';

// Import Global Interfaces
import Employee from '../../../../interfaces/Employee';

import { useEmployee } from '../../../../contexts/Employee';

// Import Components
import { ButtonDisabled, ButtonEdit, ButtonPrimary } from '../../../../components/Button/style';
import SelectInput from '../../../../components/SelectInput';
import TextInput from '../../../../components/TextInput';
import Loading from '../../../../components/Loading';
import { FiCheckCircle } from 'react-icons/fi';

type EmployeeEditModalProps = {
    onCloseEmployeeModal: () => void;
    employeeData: Employee;
    employeeEdit: string;
}

const genderOptions = [
    {
        identifier: 'gender',
        data: {
            id: 'Masculino',
            placeholder: 'Masculino'
        }
    },
    {
        identifier: 'gender',
        data: {
            id: 'Feminino',
            placeholder: 'Feminino'
        }
    },
    {
        identifier: 'gender',
        data: {
            id: 'Outro',
            placeholder: 'Outro'
        }
    }
];
const teamOptions = [
    {
        identifier: 'team',
        data: {
            id: 'non',
            placeholder: '---'
        }
    },
    {
        identifier: 'team',
        data: {
            id: 'Front-end',
            placeholder: 'Front-end'
        }
    },
    {
        identifier: 'team',
        data: {
            id: 'Back-end',
            placeholder: 'Back-end'
        }
    },
    {
        identifier: 'team',
        data: {
            id: 'Mobile',
            placeholder: 'Mobile'
        }
    }
]

const EmployeeEditModal = ({ onCloseEmployeeModal, employeeData, employeeEdit }: EmployeeEditModalProps) => {
    const { editAnEmployee, loading, successful, setSuccessful } = useEmployee();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [cpf, setCpf] = useState('');
    const [gender, setGender] = useState('');
    const [team, setTeam] = useState('');
    const [startDate, setStartDate] = useState('');
    const [birthDate, setBirthDate] = useState('');

    const setCurrentValue = useCallback(() => {
        setName(employeeData.name);
        setEmail(employeeData.email);
        setCpf(employeeData.cpf);
        setGender(employeeData.gender);
        setStartDate(employeeData.startDate);
        setTeam(employeeData.team);
    }, [employeeData.cpf, employeeData.email, employeeData.gender, employeeData.name, employeeData.startDate, employeeData.team]);

    const handeEditAnEmployee = ({ birthDate, cpf, email, gender, name, startDate, team }: Employee, id: string, event: FormEvent) => {
        event.preventDefault();
        editAnEmployee({ birthDate, cpf, email, gender, name, startDate, team }, id);
    }

    useEffect(() => {
        setCurrentValue();
    }, [setCurrentValue]);

    return (
        <S.EmployeeEditContainer>
            {
                (loading === false && successful === false) &&
                <S.EmployeeEditForm onSubmit={(event) => {
                    handeEditAnEmployee({ birthDate, cpf, email, gender, name, startDate, team }, employeeEdit, event);
                }}>
                    <TextInput
                        valid={name.length !== 0 ? name.length > 2 : true}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Insira seu nome"
                        mask="WithoutMask"
                        required={true}
                        value={name}
                        type="text"
                        id="name"
                    />
                    <TextInput
                        valid={email.length >= 3 ? isEmail(email) : true}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Insira um e-mail válido"
                        mask="WithoutMask"
                        required={true}
                        value={email}
                        type="email"
                        id="email"
                    />
                    <TextInput
                        valid={cpf.length >= 3 ? isCPF(cpf) : true}
                        onChange={(e) => setCpf(e.target.value)}
                        placeholder="Insira um CPF válido"
                        mask="CPF"
                        required={true}
                        value={cpf}
                        type="text"
                        id="cpf"
                    />
                    <S.EmployeeEditGroupFields groupFor={2} spacing={1}>
                        <SelectInput
                            onChange={(e) => setGender(e.target.value)}
                            placeholder="Qual o gênero?"
                            optionList={genderOptions}
                            required={false}
                            value={gender}
                            valid={true}
                            id="gender"
                        />
                        <SelectInput
                            onChange={(e) => setTeam(e.target.value)}
                            placeholder="Qual time atua?"
                            optionList={teamOptions}
                            required={false}
                            value={team}
                            valid={true}
                            id="team"
                        />
                    </S.EmployeeEditGroupFields>
                    <S.EmployeeEditGroupFields groupFor={2} spacing={1}>
                        <TextInput
                            labelForDateInput="Mês e ano que foi contratado"
                            onChange={(e) => setStartDate(e.target.value)}
                            placeholder="MM/YYYY"
                            mask="MonthAndYear"
                            value={startDate}
                            required={true}
                            id="startDate"
                            valid={true}
                            type="text"
                        />
                    </S.EmployeeEditGroupFields>
                    <S.EmployeeEditGroupFields groupFor={2} spacing={3}>
                        <ButtonDisabled
                            onClick={onCloseEmployeeModal}
                            uppercase={true}
                        >
                            Cancelar
                        </ButtonDisabled>
                        <ButtonEdit
                            type="submit"
                            uppercase={true}
                        >
                            Editar
                        </ButtonEdit>
                    </S.EmployeeEditGroupFields>
                </S.EmployeeEditForm>
            }
            {
                (loading === true && successful === false) &&
                <Loading hintText="Editando dados do funcionário" />
            }
            {
                (loading === false && successful === true) &&
                <S.EmployeeEditSuccesful>
                    <FiCheckCircle />
                    <h2>Funcionário editado com sucesso!</h2>
                    <p>Pronto, agora as informações estão atualizadas!</p>
                    <ButtonPrimary
                        onClick={() => {
                            onCloseEmployeeModal();
                            setSuccessful(false);
                        }}
                        uppercase={true}
                    >
                        Retonar para tela inicial
                    </ButtonPrimary>
                </S.EmployeeEditSuccesful>
            }
        </S.EmployeeEditContainer>
    )
};

export default EmployeeEditModal;