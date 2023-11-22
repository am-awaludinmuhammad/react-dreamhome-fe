import { useState } from "react"
import { useAuthContext } from "./useAuthContext"
import { axiosInstance } from "../lib/axios";
import { getInputErrorMessages } from "../lib/helpers";

export const useLogin = () => {
    const [errors, setErrors] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    const {dispatch} = useAuthContext(null);

    const login = async ({ username, password }) => {
        setIsLoading(true);
        setErrors(null);

        try {
            const { data:response } = await axiosInstance.post('/auth/login', { username, password });
            localStorage.setItem('user', JSON.stringify(response.data));

            dispatch({ type: 'LOGIN', payload: response.data });
            setIsLoading(false);
        } catch (error) {
            setErrors(getInputErrorMessages(error.response?.data))
            setIsLoading(false);
        }
    }

    return { login, isLoading, errors }
}