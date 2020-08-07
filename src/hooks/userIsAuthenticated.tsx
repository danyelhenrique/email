import { useContext, useState } from "react";
import { UserCTX } from "../context/userContext";

function useIsAuthenticated() {
    const user = useContext(UserCTX);
    const [loading] = useState(false);

    return { loading, ...user };
}

export { useIsAuthenticated };
