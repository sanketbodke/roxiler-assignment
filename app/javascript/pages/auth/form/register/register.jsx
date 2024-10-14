import React from 'react';
import { Form, FormHeading, Input, Label, Button } from "../Form.styled";
import { Link } from "react-router-dom";
import useRegister from "./useRegister";
import { Spin } from 'antd';

function Register() {
    const {
        user,
        handleInputChange,
        handleFormSubmit,
        loading,
    } = useRegister();

    return (
        <Form onSubmit={handleFormSubmit}>
            <FormHeading>Register</FormHeading>
            <Label htmlFor="email">Email</Label>
            <Input
                type="email"
                name="email"
                value={user.email}
                onChange={handleInputChange}
            />

            <Label htmlFor="password">Password</Label>
            <Input
                type="password"
                name="password"
                value={user.password}
                onChange={handleInputChange}
            />

            <Label htmlFor="password_confirmation">Password Confirmation</Label>
            <Input
                type="password"
                name="password_confirmation"
                value={user.password_confirmation}
                onChange={handleInputChange}
            />

            <Button type="submit" disabled={loading}>
                {loading ? <Spin size="small" /> : "Register"}
            </Button>

            <Link to={"/auth/login"}>Already have an account? Login</Link>
        </Form>
    );
}

export default Register;