import React, { useState } from 'react';
import axios from "axios";
import { apiUrls } from "../../../../constant/apiUrl";
import { message } from 'antd';
import { logInStart, logInSuccess ,logInFailure } from "../../../../redux/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import {useNavigate} from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { useCookies } from "react-cookie";

const useLogin = () => {
    const navigateTo = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();

    const { loading, errors } = useSelector((state) => state.user);
    const [_, setCookies] = useCookies(["access_token"]);

    const [user, setUser] = useState({
        email: "",
        password: ""
    });

    const [isLoading, setIsLoading] = useState(false);

    const handleInputChange = (event) => {
        const { name, value } = event.target;

        setUser({
            ...user,
            [name]: value
        });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true);

        try {
            const response = await axios.post(`${apiUrls.login}`, user);

            if (response.data) {
                message.success("Login successful!");
                console.log(response.data);
                dispatch(logInStart());
                dispatch(logInSuccess(response));
                setCookies("access_token", response.data.token);
                navigateTo("/")
            }
        } catch (error) {
            message.error(error.response?.data?.message || "Login failed. Please try again.");
            setIsLoading(false)
            dispatch(logInFailure());
        } finally {
            setIsLoading(false);
        }
    };

    return {
        user,
        handleInputChange,
        handleFormSubmit,
        isLoading,
    };
};

export default useLogin;