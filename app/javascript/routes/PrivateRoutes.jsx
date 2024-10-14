import React from 'react';
import { Outlet, Navigate } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import {useSelector} from "react-redux";
function PrivateRoutes() {
    const { currentUser } = useSelector((state) => state.user);

    return currentUser ?
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </> : <Navigate to="/auth/login" />
}

export default PrivateRoutes;