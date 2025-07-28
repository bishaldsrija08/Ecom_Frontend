import axios from "axios";

const handlePostOperation = async (url, data) => {
    try {
        const response = await axios.post(`http://localhost:3000/api/${url}`, data, {
            withCredentials: true
        });
        return response;
    } catch (error) {
        return error;
    }
};

export default handlePostOperation;
