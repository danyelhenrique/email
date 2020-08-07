import React, { createContext, useState } from "react";

interface IConfigurationPanel {
    isOpen: boolean;
    toogleMenu(): void;
}

export const ConfigurationPanelCtx = createContext({} as IConfigurationPanel);

const ConfigurationPanel: React.FC = ({ children }) => {
    const [menuIsOpen, setMenuIsOpen] = useState(false);

    function toogleMenu() {
        setMenuIsOpen(!menuIsOpen);
    }

    return (
        <ConfigurationPanelCtx.Provider
            value={{ isOpen: menuIsOpen, toogleMenu }}
        >
            {children}
        </ConfigurationPanelCtx.Provider>
    );
};

export default ConfigurationPanel;
