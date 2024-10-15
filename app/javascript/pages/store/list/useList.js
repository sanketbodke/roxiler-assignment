import { useEffect, useState } from "react";
import currentUser from "../../../utils/currentUser";
import axios from "axios";
import apiUrl from "../../../constant/apiUrl";

const useList = () => {
    const { user } = currentUser();
    const token = user.data.token;

    const [stores, setStores] = useState([]);

    const handleStores = async () => {
        try {
            const response = await axios.get(`${apiUrl.listStores}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setStores(response.data);
        } catch (error) {
            console.error('Error fetching stores:', error);
        }
    };

    useEffect(() => {
        handleStores();
    }, []);

    return {
        stores
    };
};

export default useList;