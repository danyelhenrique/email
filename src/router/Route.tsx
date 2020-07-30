import React from "react";
import { Redirect, Route as R, RouteProps } from "react-router-dom";

import { useIsAuthenticated } from "../hooks/userIsAuthenticated";
import DefaultLayout from "../layouts/Default";

interface IRouteProps extends RouteProps {
    isPrivate?: boolean;
}

const Route = ({ component: Component, path, ...rest }: IRouteProps) => {
    const { isPrivate = false } = rest;

    const { isAuth, loading } = useIsAuthenticated();

    if (loading) {
        return <h1>load</h1>;
    }
    if (!isAuth && isPrivate) {
        return <Redirect to="/singin" />;
    }

    return (
        <DefaultLayout>
            <R component={Component} path={path} {...rest} />
        </DefaultLayout>
    );
};

export default Route;
