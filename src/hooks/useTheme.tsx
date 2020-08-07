import { useContext } from "react";
import { ThemeCTX } from "../context/theme";

function useTheme() {
    const theme = useContext(ThemeCTX);

    return { ...theme };
}

export { useTheme };
