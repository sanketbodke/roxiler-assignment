import React from 'react';
import { SidebarContainer, SidebarItems, SidebarLink } from "./sidebar.styled";
import useSidebar from "./useSidebar";

function Sidebar() {
    const { activeTab, handleTabClick } = useSidebar();

    return (
        <SidebarContainer>
            <SidebarItems>
                <SidebarLink
                    to="/"
                    onClick={() => handleTabClick('/')}
                    className={activeTab === '/' ? 'active' : ''}
                >
                    Home
                </SidebarLink>
                <SidebarLink
                    to="/users/all"
                    onClick={() => handleTabClick('/users/all')}
                    className={activeTab === '/users/all' ? 'active' : ''}
                >
                    Users
                </SidebarLink>
                <SidebarLink
                    to="/stores/all"
                    onClick={() => handleTabClick('/stores/all')}
                    className={activeTab === '/stores/all' ? 'active' : ''}
                >
                    Stores
                </SidebarLink>
                <SidebarLink
                    to="/"
                    onClick={() => handleTabClick('/')}
                    className={activeTab === '/logout' ? 'active' : ''}
                >
                    Logout
                </SidebarLink>
            </SidebarItems>
        </SidebarContainer>
    );
}

export default Sidebar;