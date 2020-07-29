import "styled-components";

interface IThemeInterface {
    background: string;
    colors: {
        primary: string;
        secondary: string;
        tertiary: string;
        text: string;
        border: string;
    };
    primaryFont: string;
    secundaryFont?: string;
}

declare module "styled-components" {
    interface DefaultTheme extends IThemeInterface {}
}
