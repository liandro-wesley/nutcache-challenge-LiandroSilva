import API from "../ApiSettings";

const DeleteAnEmployee = async (id: string) => {
    try {
        const response = await API.delete(`/nutemployee/${id}`);
        return response;
    } catch(err) {
        throw new Error(String(err));
    }
};

export default DeleteAnEmployee;