import React from 'react';
import { Form, FormHeading, Input, Label, Button } from "../Form.styled";
import { Link } from "react-router-dom";
import useLogin from "./useLogin";
import { Spin } from 'antd';

function Login() {
    const {
        user,
        handleInputChange,
        handleFormSubmit,
        isLoading,
    } = useLogin();

    return (
        <Form onSubmit={handleFormSubmit}>
            <FormHeading>Login</FormHeading>

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

            <Button type="submit" disabled={isLoading}>
                {isLoading ? <Spin size="small" /> : "Login"}
            </Button>

            <Link to={"/auth/register"}>Don't have an account? Register</Link>
        </Form>
    );
}

export default Login;