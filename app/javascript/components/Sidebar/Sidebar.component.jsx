import React from 'react';
import { SidebarContainer, SidebarItems, SidebarLink } from "./sidebar.styled";
import useSidebar from "./useSidebar";
import currentUser from "../../utils/currentUser";

function Sidebar() {
    const { activeTab, handleTabClick, handleLogout } = useSidebar();
    const { user } = currentUser();
    const roles = user.data.role;

    const isUserRole = roles.includes('user') || roles.includes('newuser');

    return (
        <SidebarContainer>
            <SidebarItems>
                {isUserRole ? (
                    <>
                        <SidebarLink
                            to="/stores/ratings"
                            onClick={() => handleTabClick('/stores/ratings')}
                            className={activeTab === '/stores/ratings' ? 'active' : ''}
                        >
                            Store Ratings
                        </SidebarLink>
                        <SidebarLink
                            to="/"
                            onClick={() => handleLogout()}
                            className={activeTab === '/logout' ? 'active' : ''}
                        >
                            Logout
                        </SidebarLink>
                    </>
                ) : (
                    <>
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
                            onClick={() => handleLogout()}
                            className={activeTab === '/logout' ? 'active' : ''}
                        >
                            Logout
                        </SidebarLink>
                    </>
                )}
            </SidebarItems>
        </SidebarContainer>
    );
}

export default Sidebar;