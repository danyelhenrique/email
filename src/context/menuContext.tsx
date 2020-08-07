import React, { createContext, useState, useEffect } from "react";

import api from "../services/api";

interface ISubMenu {
    id: number;
    name: string;
}
interface ISidebar {
    id: number;
    name: string;
    subMenus: ISubMenu[];
}

export const MenuContext = createContext([] as ISidebar[]);

const Menu: React.FC = ({ children }) => {
    const [sidebarData, setSidebarData] = useState<ISidebar[]>([]);

    useEffect(() => {
        async function createSidebarMenu() {
            const { data } = await api.get<ISidebar[]>("menus");
            setSidebarData(data);
        }
        createSidebarMenu();
    }, [setSidebarData]);

    return (
        <MenuContext.Provider value={sidebarData}>
            {children}
        </MenuContext.Provider>
    );
};

export default Menu;
