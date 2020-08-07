import React, { useState, useEffect } from "react";
import { ConfigurationPanel } from "../../hooks/configurationPanel";
import { useTheme } from "../../hooks/useTheme";

import Switch from "react-switch";
import { useTranslation } from "react-i18next";

import { MdClose } from "react-icons/md";

import { Container, Header, ThemeButton, Language, SelectBtn } from "./styles";

const initial_state = {
    en: false,
    pt: false,
};

interface ILanguage {
    en: boolean;
    pt: boolean;
}

const ConfigurationPanelComponent: React.FC = () => {
    const { i18n } = useTranslation();
    const { isOpen, toogleMenu } = ConfigurationPanel();

    const [activeLanguage, setActiveLanguage] = useState<string>("en");

    const [languages, setlanguages] = useState<ILanguage>({ ...initial_state });

    const { toogleTheme, isDarkMode } = useTheme();

    useEffect(() => {
        const language = localStorage.getItem("@EMAIL/LANGUAGE");

        if (language) {
            setActiveLanguage(language);
        } else {
            localStorage.setItem("@EMAIL/LANGUAGE", "en");
            setActiveLanguage("en");
        }
    }, []);

    useEffect(() => {
        setlanguages({ ...initial_state, [activeLanguage]: true });
    }, [setlanguages, activeLanguage]);

    useEffect(() => {
        i18n.changeLanguage(activeLanguage);
    }, [activeLanguage, setActiveLanguage, setlanguages, i18n]);

    function handleChange(e: any) {
        const lan: string = e.target.name;
        setlanguages({ ...initial_state, [lan]: true });
        setActiveLanguage(lan);
        localStorage.setItem("@EMAIL/LANGUAGE", lan);
    }

    return (
        <Container isOpen={isOpen}>
            <Header>
                <h3>Configurações</h3>
                <button onClick={toogleMenu}>
                    <MdClose />
                </button>
            </Header>
            <ThemeButton>
                <span>Dark Mode</span>
                <label>
                    <Switch
                        onChange={toogleTheme}
                        checked={isDarkMode}
                        onColor="#86d3ff"
                        onHandleColor="#2693e6"
                        handleDiameter={12}
                        uncheckedIcon={false}
                        checkedIcon={false}
                        boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                        activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                        height={20}
                        width={56}
                        className="react-switch"
                        id="material-switch"
                    />
                </label>
            </ThemeButton>
            <Language>
                <h3>Linguagem</h3>
                <SelectBtn>
                    <span>English</span>
                    <input
                        type="checkbox"
                        name="en"
                        onChange={handleChange}
                        checked={languages.en}
                    />
                </SelectBtn>
                <SelectBtn>
                    <span>Portugues</span>
                    <input
                        type="checkbox"
                        name="pt"
                        onChange={handleChange}
                        checked={languages.pt}
                    />
                </SelectBtn>
            </Language>
        </Container>
    );
};

export default ConfigurationPanelComponent;
