import React from 'react';
import {Navigate, Outlet} from "react-router-dom";
import {useSelector} from "react-redux";
import {AuthLayoutImage, FormContainer} from "./form/Form.styled";
function AuthLayout(){
    const { currentUser } = useSelector((state) => state.user);

    const isAuthenticated = currentUser;

    return(
        <>
            {isAuthenticated ? (
                <Navigate to="/" />
            ) : (
                <>
                    <FormContainer>
                        <Outlet />
                        <AuthLayoutImage src={"https://i.postimg.cc/FHhjkN07/Auth-Image.jpg"}/>
                    </FormContainer>
                </>
            )}
        </>
    )
}

export default AuthLayout;