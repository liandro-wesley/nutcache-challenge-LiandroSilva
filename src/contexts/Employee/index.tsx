import React, {
    createContext,
    useContext,
    useState,
    ReactNode,
    useCallback,
    useEffect,
    Dispatch,
    SetStateAction
} from "react";

// Import Interfaces
import Employee from "../../interfaces/Employee";

// Import Services
import DeleteAnEmployee from '../../services/Employees/DeleteAnEmployee';
import CreateAnEmployee from '../../services/Employees/CreateAnEmployee';
import GetAllEmployees from "../../services/Employees/GetAllEmployees";
import EditAnEmployee from '../../services/Employees/EditAnEmployee';

type EmployeeConsumerProps = {
    children: ReactNode;
};

type InitalContextProps = {
    setEmployees: Dispatch<SetStateAction<Employee[]>>;
    setSuccessful: Dispatch<SetStateAction<boolean>>;
    employees: Employee[];
    loading: boolean;
    successful: boolean;
    error: string;
    createAnEmployee: ({ birthDate, cpf, email, gender, name, startDate, team }: Employee) => void;
    editAnEmployee: ({ birthDate, cpf, email, gender, name, startDate, team }: Employee, id: string) => void;
    deleteAnEmployee: (id: string) => void;
    getAllEmployees: () => void;
}

const initialContext: InitalContextProps = {
    employees: [],
    loading: false,
    successful: false,
    error: '',
    editAnEmployee: ({ birthDate, cpf, email, gender, name, startDate, team }: Employee, id: string) => { },
    deleteAnEmployee: (id: string) => { },
    createAnEmployee: ({ birthDate, cpf, email, gender, name, startDate, team }: Employee) => { },
    getAllEmployees: () => {},
    setEmployees: () => {},
    setSuccessful: () => {}
};

export const EmployeeContext = createContext(initialContext);

export function useEmployee() {
    return useContext(EmployeeContext);
}

export function EmployeeConsumer({ children }: EmployeeConsumerProps) {
    const [employees, setEmployees] = useState<Employee[]>([]);
    const [successful, setSuccessful] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');


    const getAllEmployees = useCallback(async () => {
        try {
            setLoading(true);
            setError('');

            const response = await GetAllEmployees();

            if (response.status !== 200) return setError('Não possível retornar os dados do funcionário');
            if (response.status === 200) return setEmployees(response.data as Employee[])
        } catch (error) {
            setLoading(false);
            return error;
        } finally {
            setLoading(false);
        }
    }, []);

    const createAnEmployee = useCallback(async ({ birthDate, cpf, email, gender, name, startDate, team }: Employee) => {
        try {
            setSuccessful(false);
            setLoading(true);
            setError('');

            const response = await CreateAnEmployee({ birthDate, cpf, email, gender, name, startDate, team });
            if (response.status !== 201) return setError('Não possível registrar o funcionário');
            if (response.status === 201) {
                setSuccessful(true);
                setEmployees([...employees, response.data as Employee])
            }
        } catch (error) {
            setLoading(false);
            return error;
        } finally {
            setLoading(false);
        }
    }, [employees])

    const editAnEmployee = useCallback(async ({ birthDate, cpf, email, gender, name, startDate, team }: Employee, id: string) => {
        try {
            setSuccessful(false);
            setLoading(true);
            setError('');
            const response = await EditAnEmployee({ birthDate, cpf, email, gender, name, startDate, team }, id);
            if (response.status !== 200) return setError('Não possível editar o funcionário');
            if (response.status === 200) {
                setSuccessful(true);
                getAllEmployees();
            }
        } catch (error) {
            setLoading(false);
            return error;
        } finally {
            setLoading(false);
        }
    }, [getAllEmployees])

    const deleteAnEmployee = useCallback(async (id: string) => {
        try {
            setSuccessful(false);
            setLoading(true);
            setError('');
            const response = await DeleteAnEmployee(id);
            if (response.status !== 200) return setError('Não possível excluir o funcionário');
            if (response.status === 200) {
                setSuccessful(true);
                getAllEmployees();
            }
        } catch (error) {
            setLoading(false);
            return error;
        } finally {
            setLoading(false);
            setSuccessful(false);
        }
    }, [getAllEmployees])

    useEffect(() => {
        getAllEmployees();
    }, [getAllEmployees]);


    const value = {
        createAnEmployee,
        deleteAnEmployee,
        getAllEmployees,
        editAnEmployee,
        setEmployees,
        setSuccessful,
        employees,
        successful,
        loading,
        error,
    };
    return (
        <EmployeeContext.Provider value={value}>
            {children}
        </EmployeeContext.Provider>
    );
}
