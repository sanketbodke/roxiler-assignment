import { useState, useEffect } from "react";
import currentUser from "../../../utils/currentUser";
import apiUrls from "../../../constant/apiUrl";
import axios from "axios";

const useListStore = () => {
    const { user } = currentUser();
    const [stores, setStores] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const id = user.data.user.id;
    const token = user.data.token;

    const listUserStores = async () => {
        try {
            const response = await axios.get(`${apiUrls.listOwnersStore.replace(":id", id)}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            console.log(response.data)
            setStores(response.data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        listUserStores();
    }, []);

    return { stores, loading, error };
};

export default useListStore;