import axios from "axios";

const API = axios.create({
    baseURL: `https://crudcrud.com/api/${process.env.REACT_APP_API_KEY}`,
    headers: {
        'Content-Type': 'application/json'
    }
});

export default API;