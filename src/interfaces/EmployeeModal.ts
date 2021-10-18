import Employee from "./Employee";

export default interface EmployeeModalProps {
    type: 'Create' | 'Edit' | 'Delete';
    show: boolean;
    employeeId: string;
    employeeData: Employee;

    onCloseEmployeeModal: () => void;
    onOpenEmployeeModal: () => void;
}