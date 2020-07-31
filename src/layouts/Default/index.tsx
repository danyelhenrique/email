import React from "react";

import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import MessagesPanel from "../../components/MessagesPanel";
import InboxPanel from "../../components/InboxPanel";

import { Main } from "./styles";

const LayoutDefault: React.FC = ({ children }) => {
    return (
        <Main>
            <Header />
            <Sidebar />
            <MessagesPanel />
            <InboxPanel />
            {children}
        </Main>
    );
};

export default LayoutDefault;
