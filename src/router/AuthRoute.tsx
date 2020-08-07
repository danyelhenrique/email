import React from "react";
import { Route, RouteProps, Redirect } from "react-router-dom";

import { useIsAuthenticated } from "../hooks/userIsAuthenticated";
import AuthtLayout from "../layouts/Auth";

const AuthRoute = ({ component: Component, path, ...rest }: RouteProps) => {
    const { isAuthenticated, loading } = useIsAuthenticated();

    if (loading) {
        return <div> </div>;
    }

    if (isAuthenticated) {
        return <Redirect to="/" />;
    }

    return (
        <AuthtLayout>
            <Route component={Component} path={path} {...rest} />
        </AuthtLayout>
    );
};

export default AuthRoute;
