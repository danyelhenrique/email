import { useContext } from "react";
import { MenuContext } from "../context/menuContext";

function userMenu() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const menu = useContext(MenuContext);

    return menu;
}

export { userMenu };
