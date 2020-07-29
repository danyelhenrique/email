import React from "react";

import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import MessagesPanel from "../../components/MessagesPanel";

import { Main, Content } from "./styles";

const InBox: React.FC = () => {
    return (
        <>
            <Header />

            <Main>
                <Sidebar />
                <MessagesPanel />
                <Content />
            </Main>
        </>
    );
};

export default InBox;
