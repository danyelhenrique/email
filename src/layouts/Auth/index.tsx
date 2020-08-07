import React from "react";

import { Main } from "./styles";

const AuthLayout: React.FC = ({ children }) => {
    return <Main>{children}</Main>;
};

export default AuthLayout;
