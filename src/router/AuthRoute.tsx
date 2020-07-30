import React from "react";
import { Route, RouteProps } from "react-router-dom";

const AuthRoute = ({ component: Component, path, ...rest }: RouteProps) => {
    return <Route component={Component} path={path} {...rest} />;
};

export default AuthRoute;
