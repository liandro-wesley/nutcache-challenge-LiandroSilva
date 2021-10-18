import API from "../ApiSettings";
import Employee from "../../interfaces/Employee";

const EditAnEmployee = async ({ 
    name,
    email,
    cpf,
    gender,
    team,
    birthDate,
    startDate 
}: Employee, id: string) => {
    try {
        const response = await API.put(`/nutemployee/${id}`, {
            name,
            email,
            cpf,
            gender,
            team,
            birthDate,
            startDate
        });
        return response;
    } catch(err) {
        throw new Error(String(err));
    }
};

export default EditAnEmployee;