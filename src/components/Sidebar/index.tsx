import React from "react";
import { useInboxMail } from "../../hooks/useInboxMail";

import { userMenu } from "../../hooks/useMenu";
import ListItem from "./ListItem";

import { SidebarContainer } from "./styles";

const Sidebar: React.FC = () => {
    const sidebarData = userMenu();
    const { setMails } = useInboxMail();

    async function getSubMenuData(e: Event, id: number) {
        await setMails(id);
    }
    return (
        <SidebarContainer>
            <nav className="scroll">
                <ul>
                    {sidebarData &&
                        sidebarData.map((menu) => (
                            <ListItem content={menu} key={menu.id}>
                                <ul>
                                    {menu.subMenus.map((sub) => (
                                        <ListItem
                                            key={sub.id}
                                            content={sub}
                                            hasMore={false}
                                            handleClick={({ event }) =>
                                                getSubMenuData(event, sub.id)
                                            }
                                        />
                                    ))}
                                </ul>
                            </ListItem>
                        ))}
                </ul>
            </nav>
        </SidebarContainer>
    );
};

export default Sidebar;
