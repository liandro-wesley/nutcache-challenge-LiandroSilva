import React, { useState, FormEvent } from 'react';
import * as S from './style';

// Import Utils
import { isCPF, isEmail } from '../../../../utils/validators';

// Import Interfaces
import Employee from '../../../../interfaces/Employee';

// Import Contexts
import { useEmployee } from '../../../../contexts/Employee';

// Import Components
import { ButtonDisabled, ButtonPrimary, ButtonSuccess } from '../../../../components/Button/style';
import SelectInput from '../../../../components/SelectInput';
import TextInput from '../../../../components/TextInput';
import Loading from '../../../../components/Loading';
import {
    FiCheckCircle
} from 'react-icons/fi';


type EmployeeCreateModalProps = {
    onCloseEmployeeModal: () => void;
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

const EmployeeCreateModal = ({ onCloseEmployeeModal }: EmployeeCreateModalProps) => {
    const { createAnEmployee, loading, setSuccessful, successful } = useEmployee();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [cpf, setCpf] = useState('');
    const [gender, setGender] = useState('');
    const [team, setTeam] = useState('');
    const [startDate, setStartDate] = useState('');
    const[birthDate, setBirthDate] = useState('');

    const handeCreateAnEmployee = ({ birthDate, cpf, email, gender, name, startDate, team }: Employee, event: FormEvent) => {
        event.preventDefault();
        createAnEmployee({ birthDate, cpf, email, gender, name, startDate, team });
    }
    return (
        <S.EmployeeCreateContainer>
            {
                (loading === false && successful === false) &&
                <S.EmployeeCreateForm onSubmit={(event) => handeCreateAnEmployee({ 
                    birthDate, 
                    cpf, 
                    email, 
                    gender, 
                    name, 
                    startDate, 
                    team 
                    }, event)}
                >
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
                    <S.EmployeeCreateGroupFields groupFor={2} spacing={1}>
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
                    </S.EmployeeCreateGroupFields>
                    <S.EmployeeCreateGroupFields groupFor={2} spacing={1}>
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
                    </S.EmployeeCreateGroupFields>
                    <S.EmployeeCreateGroupFields groupFor={2} spacing={3}>
                        <ButtonDisabled 
                            onClick={onCloseEmployeeModal}
                            uppercase={true}
                        >
                            Cancelar
                        </ButtonDisabled>
                        <ButtonSuccess
                            type="submit"
                            uppercase={true}
                        >
                            Registrar
                        </ButtonSuccess>
                    </S.EmployeeCreateGroupFields>
                </S.EmployeeCreateForm>
            }
            {
                (loading === true && successful === false ) &&
                <Loading hintText="Registrando novo funcionário"/>
            }
                        {
                (loading === false && successful === true ) &&
                <S.EmployeeCreateSuccesful>
                    <FiCheckCircle />
                    <h2>Funcionário criado com sucesso!</h2>
                    <p>Perfeito, agora temos mais um colaborador cadastrado!</p>
                    <ButtonPrimary
                        onClick={() => {
                            onCloseEmployeeModal();
                            setSuccessful(false);
                        }}
                        uppercase={true}
                    >
                        Retonar para tela inicial
                    </ButtonPrimary>
                </S.EmployeeCreateSuccesful>
            }
        </S.EmployeeCreateContainer>
    )
};

export default EmployeeCreateModal;