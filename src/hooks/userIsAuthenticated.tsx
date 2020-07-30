import { useEffect, useState } from "react";

const isAuthMOck = true;

interface IReturn {
    loading: boolean;
    isAuth: boolean;
}

function useIsAuthenticated(): IReturn {
    const [loading, setLoading] = useState(true);
    const [isAuth, setIsAuth] = useState(false);

    useEffect(() => {
        setIsAuth(!!isAuthMOck);
        setLoading(false);
    }, [setIsAuth, setLoading]);

    return { loading, isAuth };
}

export { useIsAuthenticated };
