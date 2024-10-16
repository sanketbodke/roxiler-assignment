import React, { useState } from 'react';
import axios from "axios";
import { apiUrls } from "../../../../constant/apiUrl";
import { message } from 'antd';
import {useNavigate} from "react-router-dom";

const useRegister = () => {
    const navigateTo = useNavigate()
    const [user, setUser] = useState({
        email: "",
        password: "",
        password_confirmation: ""
    });
    const [loading, setLoading] = useState(false);

    const handleInputChange = (event) => {
        const { name, value } = event.target;

        setUser({
            ...user,
            [name]: value
        });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);

        try {
            const response = await axios.post(`${apiUrls.register}`, { user });

            if (response.data) {
                message.success("Registration successful!");
                navigateTo("/auth/login")
                console.log(response.data);
            }
        } catch (error) {
            message.error(error.response?.data?.message || "Registration failed. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return {
        user,
        handleInputChange,
        handleFormSubmit,
        loading,
    };
};

export default useRegister;