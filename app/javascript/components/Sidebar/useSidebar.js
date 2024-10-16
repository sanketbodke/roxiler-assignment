import { useState } from "react";
import {useCookies} from "react-cookie";

const useSidebar = () => {
    const [activeTab, setActiveTab] = useState('/');
    const [cookie, setCookie, removeCookie] = useCookies();

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    const handleLogout = () => {
        removeCookie('access_token', { path: '/' });
        localStorage.removeItem('persist:root');
        window.location.reload();
    };

    return {
        activeTab,
        handleTabClick,
        handleLogout
    };
};

export default useSidebar;