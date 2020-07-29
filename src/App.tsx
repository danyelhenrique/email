import React from "react";
import { ThemeProvider } from "styled-components";

import InBox from "./pages/InBox";

import { DarkTheme } from "./assets/styles/themes";
import GlobalStyle from "./assets/styles/global";

const App: React.FC = () => {
    return (
        <ThemeProvider theme={DarkTheme}>
            <GlobalStyle />
            <InBox />
        </ThemeProvider>
    );
};

export default App;
