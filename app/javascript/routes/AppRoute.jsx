import React from 'react';
import {Route, Routes, Navigate} from "react-router-dom";
import AuthLayout from "../pages/auth/authLayout";
import Login from "../pages/auth/form/login/login";
import Register from "../pages/auth/form/register/register";
import PrivateRoutes from "./PrivateRoutes";
import Home from "../pages/home/home";
import CreateUser from "../pages/user/create/create";
import CreateStore from "../pages/store/create/create";
import ListUsers from "../pages/user/list/list";
import ListStores from "../pages/store/list/list";
import Profile from "../pages/profile/profile";
import UserRatings from "../pages/rating/userRatings/userRatings";
import CreateRating from "../pages/rating/create/create";

function AppRoutes() {
    return(
        <Routes>
            <Route path="auth" element={<AuthLayout />}>
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
            </Route>

            <Route element={<PrivateRoutes />}>
                <Route path="/" index element={<Home />} />
                <Route path="/users/create" element={<CreateUser />}/>
                <Route path="/users/all" element={<ListUsers />}/>
                <Route path="/stores/all" element={<ListStores />}/>
                <Route path="/stores/create" element={<CreateStore />}/>
                <Route path="/user/profile" element={<Profile />}/>
                <Route path="/stores/ratings" element={<UserRatings />} />
                <Route path="/stores/ratings/add" element={<CreateRating />} />
            </Route>
        </Routes>
    )
}

export default AppRoutes