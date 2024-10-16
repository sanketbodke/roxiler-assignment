import { useState } from "react";

const useSidebar = () => {
    const [activeTab, setActiveTab] = useState('/');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return {
        activeTab,
        handleTabClick,
    };
};

export default useSidebar;