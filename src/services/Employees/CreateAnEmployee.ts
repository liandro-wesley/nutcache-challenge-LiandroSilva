import API from "../ApiSettings";
import Employee from "../../interfaces/Employee";

const CreateAnEmployee = async ({ 
    name,
    email,
    cpf,
    gender,
    team,
    birthDate,
    startDate 
}: Employee) => {
    try {
        const response = await API.post('/nutemployee', {
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

export default CreateAnEmployee;