import React from "react";

import Routes from "./router";
import MailContext from "./context/inboxMail";
import MenuContext from "./context/menuContext";
import ConfigurationPanels from "./context/configurationPanels";
import UserContext from "./context/userContext";

import Theme from "./context/theme";

import GlobalStyle from "./assets/styles/global";
import "./assets/styles/css/resizable.css";

const App: React.FC = () => {
    return (
        <UserContext>
            <Theme>
                <GlobalStyle />
                <ConfigurationPanels>
                    <MenuContext>
                        <MailContext>
                            <Routes />
                        </MailContext>
                    </MenuContext>
                </ConfigurationPanels>
            </Theme>
        </UserContext>
    );
};

export default App;
