import React from "react";
import { Redirect, Route as R, RouteProps } from "react-router-dom";

import { useIsAuthenticated } from "../hooks/userIsAuthenticated";
import DefaultLayout from "../layouts/Default";

interface IRouteProps extends RouteProps {
    isPrivate?: boolean;
}

const Route = ({ component: Component, path, ...rest }: IRouteProps) => {
    const { isPrivate = false } = rest;

    const { isAuthenticated, loading } = useIsAuthenticated();

    if (loading) {
        return <div> </div>;
    }

    if (!isAuthenticated && isPrivate) {
        return <Redirect to="/signin" />;
    }

    return (
        <DefaultLayout>
            <R component={Component} path={path} {...rest} />
        </DefaultLayout>
    );
};

export default Route;
