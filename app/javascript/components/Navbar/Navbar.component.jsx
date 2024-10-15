import React from 'react';
import {Logo, NavbarContainer} from "./Navbar.styled";
import {Container} from "../../style/Global.styled";
import CurrentUser from "../../utils/currentUser";
function Navbar() {

    const {user} = CurrentUser()

    const email = user.data.user.email

    return (
        <NavbarContainer>
                <Logo>STORE RATING</Logo>
                <p>{email}</p>
        </NavbarContainer>
    );
}

export default Navbar;