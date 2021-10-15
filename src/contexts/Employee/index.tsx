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
    getAllEmployees: () => void;
}

const initialContext: InitalContextProps = { 
    employees: [],
    loading: false,
    setEmployees: () => {},
    getAllEmployees: () => {}

};

export const EmployeeContext = createContext(initialContext);

export function useEmployee() {
    return useContext(EmployeeContext);
}

export function EmployeeConsumer({ children }: EmployeeConsumerProps) {
    const [employees, setEmployees] = useState<Employee[]>([]);
    const [loading, setLoading] = useState(false);
    // const { setLoading } = useLoading();

    const getAllEmployees = useCallback(async() => {
        try {
            setLoading(true);
            const response = await GetAllEmployees();
            setEmployees(response as Employee[]);
        } catch(err) {
            setLoading(false);
        } finally {
            setLoading(false);
        }
    }, [setLoading]);

    useEffect(() => {
        getAllEmployees();
    }, [getAllEmployees])

    const value = {
        employees,
        loading,
        setEmployees,
        setLoading,
        getAllEmployees,
    };
    return (
        <EmployeeContext.Provider value={value}>
            {children}
        </EmployeeContext.Provider>
    );
}
