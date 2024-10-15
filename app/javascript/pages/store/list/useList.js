import {useEffect, useState} from "react";
import currentUser from "../../../utils/currentUser";
import axios from "axios";
import apiUrl from "../../../constant/apiUrl";

const storeList = () => {
    const { user } = currentUser();
    const token = user.data.token;

    const [stores, setStores] = useState([])

    const handleStores = async () => {
        const response = await axios.get(`${apiUrl.listStores}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        setStores(response.data)
        console.log(response.data)
    }

    useEffect(() => {
        handleStores()
    }, [])

    return{
        stores
    }
}

export default storeList