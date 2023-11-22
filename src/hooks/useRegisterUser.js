import { useState } from "react"
import { useAuthContext } from "./useAuthContext"
import { axiosInstance } from "../lib/axios";
import { getInputErrorMessages } from "../lib/helpers";

export const useRegisterUser = () => {
    const [errors, setErrors] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    const {dispatch} = useAuthContext(null);

    const registerUser = async ({ name, username, email, password, password_confirmation }) => {
        setIsLoading(true);
        setErrors(null);

        try {
            const { data:response } = await axiosInstance.post('/users', { name, username, email, password, password_confirmation });

            localStorage.setItem('user', response.data);

            dispatch({ type: 'LOGIN', payload: response.data });
            setIsLoading(false);
        } catch (error) {
            setErrors(getInputErrorMessages(error.response?.data))
            setIsLoading(false);
        }
    }

    return { registerUser, isLoading, errors }
}