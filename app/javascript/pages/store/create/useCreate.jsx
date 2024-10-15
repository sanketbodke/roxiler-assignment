import currentUser from "../../../utils/currentUser";
import {useEffect, useState} from "react";
import axios from "axios";
import apiUrl from "../../../constant/apiUrl";
import {message} from "antd";
const useCreate = () => {
    const { user } = currentUser();
    const id = user.data.user.id;
    const token = user.data.token;

    const [newStore, setNewStore] = useState({
        name: '',
        email: '',
        address: '',
        user_id: ''
    });

    const [nonAdminUsers, setNonAdminUsers] = useState([])

    const handleGetUsers = async () => {
        try {
            const response = await axios.get(`${apiUrl.nonAdminUsers.replace(':id', id)}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            setNonAdminUsers(response.data?.users);
        } catch (error) {
            console.error('Error fetching users:', error);
            message.error('Failed to fetch users.');
        }
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;

        setNewStore({
            ...newStore,
            [name]: value
        });
    };

    const handleOwner = (event) => {
        setNewStore({
            ...newStore,
            user_id: event.target.value
        });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        const payload = {
            store: {
                name: newStore.name,
                email: newStore.email,
                address: newStore.address
            },
            user_id: newStore.user_id
        };

        try {
            const response = await axios.post(`${apiUrl.createStore.replace(':id', id)}`, payload, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                }
            });

            message.success('Store created successfully!');
            console.log('Store created successfully:', response.data);
        } catch (error) {
            if (error.response && error.response.data && error.response.data.message) {
                const errorMessage = error.response.data.message.join(', ');
                message.error(`${errorMessage}`);
            } else {
                message.error('Error creating Store.');
            }
            console.error('Error creating Store:', error);
        }
    };

    useEffect(() => {
        handleGetUsers()
    }, []);

    return{
        newStore,
        nonAdminUsers,
        handleInputChange,
        handleOwner,
        handleFormSubmit
    }
}

export default useCreate