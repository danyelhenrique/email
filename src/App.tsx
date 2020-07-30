import React from "react";
import { ThemeProvider } from "styled-components";

import Routes from "./router";

import { DarkTheme } from "./assets/styles/themes";
import GlobalStyle from "./assets/styles/global";

const App: React.FC = () => {
    return (
        <ThemeProvider theme={DarkTheme}>
            <GlobalStyle />
            <Routes />
        </ThemeProvider>
    );
};

export default App;
