import React from 'react';
import {Route, Routes, Navigate} from "react-router-dom";
import AuthLayout from "../pages/auth/authLayout";
import Login from "../pages/auth/form/login/login";
import Register from "../pages/auth/form/register/register";
import PrivateRoutes from "./PrivateRoutes";
import Home from "../pages/home/home";

function AppRoutes() {
    return(
        <Routes>
            <Route path="auth" element={<AuthLayout />}>
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
            </Route>

            <Route element={<PrivateRoutes />}>
                <Route path="/" index element={<Home />} />
            </Route>
        </Routes>
    )
}

export default AppRoutes