import API from "../ApiSettings";

const GetAllEmployees = async () => {
    try {
        const response = await API.get('/nutemployee');
        return response;
    } catch(err) {
        throw new Error(String(err));
    }
};

export default GetAllEmployees;