import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en/translation.json";
import pt from "./locales/pt/translation.json";

const resources = {
    en: pt,
    pt: en,
};

i18n.use(initReactI18next).init({
    resources,
    lng: "pt",
    whitelist: ["pt", "en"],
    keySeparator: false,
    interpolation: {
        escapeValue: false,
    },
});

export default i18n;
