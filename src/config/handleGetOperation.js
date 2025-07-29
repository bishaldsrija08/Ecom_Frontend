import axios from "axios";

const handleGetOperation = async (url) => {
    try {
        const response = await axios.get(`http://localhost:3000/api/${url}`, {
            withCredentials: true
        });
        return response;
    } catch (error) {
        return error;
    }
};

export default handleGetOperation;
