import { axiosInstance } from "../lib/axios";

const registerUser = async ({ name, username, email, password, password_confirmation }) => {
    let isLoading = false;
    try {
        const { data } = await axiosInstance.post('/users', { name, username, email, password, password_confirmation });

        return {
            data: data.data,
            isLoading,
            errors: null
        }
    } catch (error) {
        throw error.response.data;
    }
}

const exportedObject = {
    registerUser
}

export default exportedObject