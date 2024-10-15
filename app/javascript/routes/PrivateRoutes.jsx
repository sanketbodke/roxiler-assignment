import React from 'react';
import { Outlet, Navigate } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar.component";
import Footer from "../components/Footer/Footer.component";
import {useSelector} from "react-redux";
import Sidebar from "../components/Sidebar/Sidebar.component";
import {Layout} from "../style/Global.styled";
function PrivateRoutes() {
    const { currentUser } = useSelector((state) => state.user);

    return currentUser ?
        <>
            <Navbar />
            <Layout>
                <Sidebar />
                <Outlet />
            </Layout>
            <Footer />
        </> : <Navigate to="/auth/login" />
}

export default PrivateRoutes;