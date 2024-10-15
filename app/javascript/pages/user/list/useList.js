import {useEffect, useState} from "react";
import currentUser from "../../../utils/currentUser";
import axios from "axios";
import apiUrl from "../../../constant/apiUrl";

const useList = () => {
    const { user } = currentUser();
    const token = user.data.token;

    const [users, setUsers] = useState([])

    const handleUsers = async () => {
        const response = await axios.get(`${apiUrl.listUsers}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        setUsers(response.data)
        console.log(response.data)
    }

    useEffect(() => {
        handleUsers()
    }, [])

    return{
        users
    }
}

export default useList