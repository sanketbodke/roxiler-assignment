import currentUser from "../../../utils/currentUser";
import {useState} from "react";
import axios from "axios";
import apiUrl from "../../../constant/apiUrl";
import {message} from "antd";
const useCreate = () => {
    const { user } = currentUser();
    const id = user.data.user.id;
    const token = user.data.token;

    const [newUser, setNewUser] = useState({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
        role: ''
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;

        setNewUser({
            ...newUser,
            [name]: value
        });
    };

    const handleRoleChange = (event) => {
        setNewUser({
            ...newUser,
            role: event.target.value
        });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        const payload = {
            user: {
                name: newUser.name,
                email: newUser.email,
                password: newUser.password,
                password_confirmation: newUser.password_confirmation
            },
            role: newUser.role
        };

        try {
            const response = await axios.post(`${apiUrl.createUser.replace(':id', id)}`, payload, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                }
            });

            message.success('User created successfully!');
            console.log('User created successfully:', response.data);
        } catch (error) {
            if (error.response && error.response.data && error.response.data.message) {
                const errorMessage = error.response.data.message.join(', ');
                message.error(`${errorMessage}`);
            } else {
                message.error('Error creating user.');
            }
            console.error('Error creating user:', error);
        }
    };

    return{
        newUser,
        handleInputChange,
        handleRoleChange,
        handleFormSubmit
    }
}

export default useCreate