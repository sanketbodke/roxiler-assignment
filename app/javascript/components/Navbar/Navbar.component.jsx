import React from 'react';
import {Logo, NavbarContainer} from "./Navbar.styled";
import {Container} from "../../style/Global.styled";
import CurrentUser from "../../utils/currentUser";
import { Link } from "react-router-dom";

function Navbar() {

    const {user} = CurrentUser()

    const email = user.data.user.email

    return (
        <NavbarContainer>
            <Logo>STORE RATING</Logo>
            <Link to="/user/profile">
                <p>{email}</p>
            </Link>
        </NavbarContainer>
    );
}

export default Navbar;