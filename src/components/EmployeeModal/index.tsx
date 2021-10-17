import React, { memo, useRef, useState, FormEvent, useEffect } from 'react';
import { FiTrash2 } from 'react-icons/fi';
import { useEmployee } from '../../contexts/Employee';
import Employees from '../../interfaces/Employee';
import { isEmail } from '../../utils/validators';
import { ButtonDelete, ButtonDisabled, ButtonSuccess } from '../Button/style';
import Loading from '../Loading';
import SelectInput from '../SelectInput';
import TextInput from '../TextInput';
import * as S from './style';

type EmployeeModalProps = {
    type: 'Create' | 'Edit' | 'Delete';
    show: boolean;
    employeeInformation?: Employees;
    onCloseEmployeeModal: () => void;
}

const EmployeeModal = ({ type, employeeInformation, show, onCloseEmployeeModal }: EmployeeModalProps) => {
    // React Core
    const EmployeeModalRef = useRef<HTMLDivElement>(null);
    const { loading, registerAEmployee, editAnEmployee } = useEmployee();

    // Form Fields
    const [birthDate, setBirthDate] = useState('');
    const [startDate, setStartDate] = useState('');
    const [gender, setGender] = useState('');
    const [email, setEmail] = useState('');
    const [team, setTeam] = useState('');
    const [name, setName] = useState('');
    const [cpf, setCpf] = useState('');

    console.log('Genero: ', gender);

    const clearFileds = () => {
        setName('');
        setEmail('');
        setCpf('');
        setBirthDate('');
        setStartDate('');
        setTeam('');
        setGender('');
    }

    const closeModal = () => {
        clearFileds();
        onCloseEmployeeModal();
    }

    const closeModalByClickOutside = (e: any) => {
        if (EmployeeModalRef.current === e.target) {
            closeModal();
        }
    }

    const handleRegisterAnEmployee = ({ birthDate, cpf, email, gender, name, startDate, team }: Employees, event: FormEvent) => {
        event.preventDefault();
        registerAEmployee({ birthDate, cpf, email, gender, name, startDate, team });
    }

    const handleEditAnEmployee = ({ birthDate, cpf, email, gender, name, startDate, team, _id }: Employees, event: FormEvent) => {
        event.preventDefault();
        editAnEmployee({birthDate, cpf, email, gender, name, startDate, team}, employeeInformation?._id);
    }

    useEffect(() => {
        if (type === 'Edit') {
            setBirthDate(`${employeeInformation?.birthDate !== undefined && employeeInformation?.birthDate}`);
            setStartDate(`${employeeInformation?.startDate !== undefined && employeeInformation?.startDate}`);
            setGender(`${employeeInformation?.gender !== undefined && employeeInformation?.gender}`);
            setEmail(`${employeeInformation?.email !== undefined && employeeInformation?.email}`);
            setName(`${employeeInformation?.name !== undefined && employeeInformation?.name}`);
            setTeam(`${employeeInformation?.team !== undefined && employeeInformation?.team}`);
            setCpf(`${employeeInformation?.cpf !== undefined && employeeInformation?.cpf}`);
        }
    }, [employeeInformation?.birthDate, employeeInformation?.cpf, employeeInformation?.email, employeeInformation?.gender, employeeInformation?.name, employeeInformation?.startDate, employeeInformation?.team, type])

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
    return (
        <>
            {
                show === true &&
                <S.EmployeeModalOverlay ref={EmployeeModalRef} onClick={closeModalByClickOutside}>
                    {
                        type === 'Delete' ? (
                            <S.EmployeeModalBody>
                                <S.EmployeeModalForm>
                                    <S.EmployeeModalDelete>
                                        <FiTrash2 />
                                        <h2>Excluir funcionário</h2>
                                        <h3>Quer mesmo excluir esse funcionário? Ele será apagado pra sempre.</h3>
                                        <S.EmployeeModalActions>
                                            <ButtonDisabled onClick={closeModal}>
                                                Cancelar
                                            </ButtonDisabled>
                                            <ButtonDelete>
                                                Excluir
                                            </ButtonDelete>
                                        </S.EmployeeModalActions>
                                    </S.EmployeeModalDelete>
                                </S.EmployeeModalForm>
                            </S.EmployeeModalBody>
                        ) : (
                            <S.EmployeeModalBody>
                                {
                                    loading === false ? (
                                    <S.EmployeeModalForm onSubmit={(event) => {
                                        if(type === 'Create') {
                                            handleRegisterAnEmployee({ name, email, cpf, birthDate, gender, team, startDate }, event)
                                        } 
                                        if(type === 'Edit') {
                                            handleEditAnEmployee({ name, email, cpf, birthDate, gender, team, startDate}, event)
                                        }
                                    }}>
                                        <TextInput
                                            mask="WithoutMask"
                                            type="text"
                                            id="name"
                                            placelhoder="Insira seu nome"
                                            valid={name.length !== 0 ? name.length > 3 : true}
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            required={true}
                                        />
                                        <TextInput
                                            mask="WithoutMask"
                                            type="email"
                                            id="email"
                                            placelhoder="Insira um E-mail válido"
                                            valid={email.length >= 3 ? isEmail(email) : true}
                                            value={email}
                                            required={true}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                        <TextInput
                                            mask="CPF"
                                            type="text"
                                            id="cpf"
                                            placelhoder="Insira um CPF válido"
                                            valid={cpf.length !== 0 ? cpf.length > 3 : true}
                                            value={cpf}
                                            required={true}
                                            onChange={(e) => setCpf(e.target.value)}
                                        />
                                        <S.EmployeeModalFormInputGroup>
                                            <SelectInput 
                                                id="gender"
                                                value={team}
                                                optionList={teamOptions}
                                                onChange={(e) => setTeam(e.target.value)}
                                                required={false}
                                                valid={true}
                                                placeholder="Em qual time atua?"
                                            />
                                            <SelectInput 
                                                id="gender"
                                                value={gender}
                                                optionList={genderOptions}
                                                onChange={(e) => setGender(e.target.value)}
                                                required={true}
                                                valid={true}
                                                placeholder="Qual o gênero?"
                                            />
                                        </S.EmployeeModalFormInputGroup>
                                        <S.EmployeeModalFormInputGroup>
                                            <TextInput
                                                mask="MonthAndYear"
                                                type="text"
                                                id="startDate"
                                                placelhoder="MM/YYYY"
                                                labelForDateInput="Mês e ano que foi contratado"
                                                valid={true}
                                                value={startDate}
                                                required={true}
                                                onChange={(e) => setStartDate(e.target.value)}
                                            />
                                            <TextInput
                                                mask="Date"
                                                type="text"
                                                id="birthDate"
                                                placelhoder="DD/MM/YYY"
                                                labelForDateInput="Data de nascimento"
                                                valid={true}
                                                value={birthDate}
                                                required={true}
                                                onChange={(e) => setBirthDate(e.target.value)}
                                            />
                                        </S.EmployeeModalFormInputGroup>
                                        <S.EmployeeModalActions>
                                            <ButtonDisabled onClick={closeModal}>
                                                Cancelar
                                            </ButtonDisabled>
                                            <ButtonSuccess type="submit">
                                                {type === 'Create' ? 'Salvar dados' : 'Editar dados'}
                                            </ButtonSuccess>
                                        </S.EmployeeModalActions>
                                    </S.EmployeeModalForm>
                                    ) : (
                                        <Loading hintText={type === 'Create' ? 'Registrando novo functionário' : 'Editando funcionário'} />
                                    )
                                }
                            </S.EmployeeModalBody>
                        )
                    }
                </S.EmployeeModalOverlay>
            }
        </>
    );
}


export default memo(EmployeeModal);