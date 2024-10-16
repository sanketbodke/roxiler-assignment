import { useState } from "react";

const useSidebar = () => {
    const [activeTab, setActiveTab] = useState('/');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    const handleLogout = () => {
        Cookies.remove('access_token');
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