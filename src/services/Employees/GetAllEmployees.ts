import Employees from "../../interfaces/Employee";
import API from "../ApiSettings";

const GetAllEmployees = async () => {
    try {
        const { data } = await API.get<Employees[]>('/nutemployee');
        return data;
    } catch(err) {
        return err;
    }
};

export default GetAllEmployees;