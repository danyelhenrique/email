import React, { useState, createContext, useMemo, useEffect } from "react";
import { ThemeProvider, DefaultTheme } from "styled-components";

import { DarkTheme, LightTheme } from "../assets/styles/themes";

interface IContext {
    toogleTheme(): void;
    activeTheme: DefaultTheme;
    isDarkMode: boolean;
}
export const ThemeCTX = createContext({} as IContext);

const Theme: React.FC = ({ children }) => {
    const [theme, setTheme] = useState(DarkTheme);
    const isDarkMode = useMemo(() => theme === DarkTheme, [theme]);

    useEffect(() => {
        const themeLocalStorage = localStorage.getItem("@EMAIL/THEME");

        if (themeLocalStorage) {
            setTheme(JSON.parse(themeLocalStorage));
        } else {
            localStorage.setItem("@EMAIL/THEME", JSON.stringify(DarkTheme));
            setTheme(DarkTheme);
        }
    }, []);

    function toogleTheme() {
        const newTheme = theme === DarkTheme ? LightTheme : DarkTheme;
        setTheme(newTheme);
        localStorage.setItem("@EMAIL/THEME", JSON.stringify(newTheme));
    }

    return (
        <ThemeCTX.Provider
            value={{ toogleTheme, isDarkMode, activeTheme: theme }}
        >
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </ThemeCTX.Provider>
    );
};

export default Theme;
