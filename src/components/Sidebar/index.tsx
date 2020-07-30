import React, { useEffect, useState } from "react";

import api from "../../services/api";

import ListItem from "./ListItem";

import { SidebarContainer } from "./styles";

interface ISubMenu {
    id: number;
    name: string;
}
interface ISidebar {
    id: number;
    name: string;
    subMenus: ISubMenu[];
}

const mock: ISidebar[] = [
    {
        id: 1,
        name: "Conta 1",
        subMenus: [
            {
                id: 11,
                name: "Caixa de entrada",
            },
            {
                id: 12,
                name: "Caixa de saída",
            },
        ],
    },
    {
        id: 2,
        name: "Conta 2",
        subMenus: [
            {
                id: 22,
                name: "Inbox",
            },
        ],
    },
    {
        id: 3,
        name: "Conta 3",
        subMenus: [
            {
                id: 33,
                name: "Entrada",
            },
            {
                id: 34,
                name: "Vip",
            },
            {
                id: 35,
                name: "Lixo",
            },
        ],
    },
];

interface IContent {
    name: string;
    id: number;
}

const Sidebar: React.FC = () => {
    const [sidebarData, setSidebarData] = useState<ISidebar[] | null>(mock);

    // useEffect(() => {
    //     async function createSidebarMenu() {
    //         const { data } = await api.get<ISidebar[]>("menus");
    //         setSidebarData(data);
    //     }
    //     createSidebarMenu();
    // }, []);

    function handleClick({ data }: { data: IContent }) {
        console.log("data", data);
    }

    return (
        <SidebarContainer>
            <nav className="scroll">
                <ul>
                    {sidebarData &&
                        sidebarData.map((menu) => (
                            <>
                                <ListItem content={menu}>
                                    <ul>
                                        {menu.subMenus.map((sub) => (
                                            <ListItem
                                                content={sub}
                                                hasMore={false}
                                                handleClick={handleClick}
                                            />
                                        ))}
                                    </ul>
                                </ListItem>
                            </>
                        ))}
                </ul>
            </nav>
        </SidebarContainer>
    );
};

export default Sidebar;
