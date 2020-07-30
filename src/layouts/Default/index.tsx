import React from "react";

import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import MessagesPanel from "../../components/MessagesPanel";

import { Main } from "./styles";

const LayoutDefault: React.FC = ({ children }) => {
    return (
        <>
            <Header />
            <Main>
                <Sidebar />
                <MessagesPanel />
                {children}
            </Main>
        </>
    );
};

export default LayoutDefault;
