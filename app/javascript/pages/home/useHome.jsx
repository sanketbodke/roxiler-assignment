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

    const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

    const data = [
        { name: 'Total Users', value: count.total_users },
        { name: 'Total Stores', value: count.total_stores },
        { name: 'Total Ratings', value: count.total_ratings },
    ];

    useEffect(() => {
        handleCount();
    }, []);

    return {
        count,
        loading,
        error,
        COLORS,
        data
    }
}

export default useHome