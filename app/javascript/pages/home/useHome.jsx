import React, { useEffect, useState } from 'react';
import axios from "axios";
import currentUser from "../../utils/currentUser";
import apiUrl from "../../constant/apiUrl";
import {message} from "antd";

const useHome = () => {
    const { user } = currentUser();
    const token = user?.data?.token;

    const [count, setCount] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const handleCount = async () => {
        setLoading(true);
        try {
            const response = await axios.get(apiUrl.count, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            console.log(response.data);
            setCount(response.data);
            setError(null);
        } catch (error) {
            console.error('Error fetching count:', error);
            setError('Error fetching data');
            message.error('Error fetching count');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        handleCount();
    }, []);

    return {
        count,
        loading,
        error
    }
}

export default useHome