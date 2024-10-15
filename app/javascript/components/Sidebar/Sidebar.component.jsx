import React from 'react';
import { SidebarContainer, SidebarItems } from "./sidebar.styled";
import { Link } from "react-router-dom";

function Sidebar() {
    return (
        <SidebarContainer>
           <SidebarItems>
               <Link to="/">Home</Link>
               <Link to="/users/all">Users</Link>
               <Link to="/stores/all">Stores</Link>
               <Link to="/">Logout</Link>
           </SidebarItems>
        </SidebarContainer>
    );
}

export default Sidebar;