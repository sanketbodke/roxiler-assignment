import currentUser from "../../../utils/currentUser";
import {useEffect, useState} from "react";
import axios from "axios";
import apiUrl from "../../../constant/apiUrl";
import {message} from "antd";

const useCreateRating = () => {
    const { user } = currentUser();
    const token = user.data.token;

    const [stores, setStores] = useState([]);
    const [selectedStoreId, setSelectedStoreId] = useState('');
    const [score, setScore] = useState(1);

    const getStores = async () => {
        try {
            const response = await axios.get(apiUrl.listStores, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setStores(response.data);
        } catch (error) {
            console.error("Error fetching stores:", error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.post(`${apiUrl.add_rating.replace(':id', selectedStoreId)}`, {
                rating: {
                    score: score,
                },
            }, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setSelectedStoreId('');
            setScore(1);
            message.success('Rating added');
        } catch (error) {
            console.error("Error adding rating:", error);
            message.error(error);
        }
    };

    useEffect(() => {
        getStores();
    }, []);

    return{
        stores,
        selectedStoreId,
        setSelectedStoreId,
        setScore,
        score,
        handleSubmit
    }

}

export default useCreateRating