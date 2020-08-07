import React, { useState, createContext, useEffect } from "react";
import { useHistory } from "react-router-dom";

interface IContext {
    isAuthenticated: boolean;
    signin(): void;
    signout(): void;
    register(): void;
}
export const UserCTX = createContext({} as IContext);

const Theme: React.FC = ({ children }) => {
    const history = useHistory();
    const [isAuthenticated, setAuthenticated] = useState(false);
    useEffect(() => {
        const isAuth = localStorage.getItem("@EMAIL/SESSION");
        if (isAuth) {
            setAuthenticated(JSON.parse(isAuth));
        }
    }, []);
    function signin() {
        setAuthenticated(true);
        localStorage.setItem("@EMAIL/SESSION", "true");

        history.push("/");
    }
    function signout() {
        setAuthenticated(false);
        localStorage.removeItem("@EMAIL/SESSION");
        history.push("/signin");
    }
    function register() {
        history.push("/signin");
    }
    return (
        <UserCTX.Provider
            value={{ signin, signout, register, isAuthenticated }}
        >
            {children}
        </UserCTX.Provider>
    );
};

export default Theme;
