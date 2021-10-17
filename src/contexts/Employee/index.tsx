import React, { createContext, useContext, useState, ReactNode, useCallback, useEffect,Dispatch, SetStateAction } from "react";
import Employee from "../../interfaces/Employee";
import API from "../../services/ApiSettings";
import GetAllEmployees from "../../services/Employees/GetAllEmployees";

type EmployeeConsumerProps = {
    children: ReactNode;
};

type InitalContextProps = {
    employees: Employee[];
    setEmployees: Dispatch<SetStateAction<Employee[]>>;
    loading: Boolean;
    error: string;
    getAllEmployees: () => void;
    registerAEmployee: ({ birthDate, cpf, email, gender, name, startDate, team}: Employee) => void;
    editAnEmployee: ({ birthDate, cpf, email, gender, name, startDate, team}: Employee, _id: string | undefined) => void;
}

const initialContext: InitalContextProps = { 
    employees: [],
    loading: false,
    error: '',
    setEmployees: () => {},
    getAllEmployees: () => {},
    registerAEmployee: ({ birthDate, cpf, email, gender, name, startDate, team}: Employee) => {},
    editAnEmployee: ({ birthDate, cpf, email, gender, name, startDate, team}: Employee, _id: string | undefined) => {}


};

export const EmployeeContext = createContext(initialContext);

export function useEmployee() {
    return useContext(EmployeeContext);
}

export function EmployeeConsumer({ children }: EmployeeConsumerProps) {
    const [employees, setEmployees] = useState<Employee[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const getAllEmployees = useCallback(async() => {
        try {
            setLoading(true);
            setError('');
            const response = await GetAllEmployees();
            setEmployees(response as Employee[]);
        } catch(err) {
            setLoading(false);
            setError(error);
        } finally {
            setLoading(false);
        }
    }, [error]);

    const registerAEmployee = useCallback(async({birthDate, cpf, email, gender, name, startDate, team}: Employee) => {
        try {
            setLoading(true);
            const { status, data } = await API.post<Employee>('/nutemployee', {
                name,
                email,
                gender,
                cpf,
                birthDate,
                startDate,
                team
            });
            if(status !== 201) setError('Não foi possível criar o funcionário');
            setEmployees([data, ...employees]);
        } catch(err) {
            setLoading(false)
        } finally {
            setLoading(false);
        }
    }, [employees])

    const editAnEmployee = useCallback(async({birthDate, cpf, email, gender, name, startDate, team}: Employee, _id: string | undefined) => {
        try {
            setLoading(true);
            setError('');
            const { status, data } = await API.put<Employee>(`/nutemployee/${_id}`, {
                name,
                email,
                gender,
                cpf,
                birthDate,
                startDate,
                team
            });
            if(status !== 200) {
                setError('Não foi possível atualizar os dados do funcionário');
            }
            setEmployees([data, ...employees]);
        } catch(err) {
            setLoading(false)
        } finally {
            setLoading(false);
        }
    }, [employees])

    useEffect(() => {
        getAllEmployees();
    }, [getAllEmployees])

    const value = {
        employees,
        loading,
        setEmployees,
        setLoading,
        getAllEmployees,
        registerAEmployee,
        editAnEmployee,
        error,
    };
    return (
        <EmployeeContext.Provider value={value}>
            {children}
        </EmployeeContext.Provider>
    );
}
