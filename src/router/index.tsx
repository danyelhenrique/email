import React from "react";
import { Switch } from "react-router-dom";

import Route from "./Route";
import AuthRoute from "./AuthRoute";

import InBox from "../pages/InBox";
import Signin from "../pages/Signin";
import Register from "../pages/Register";

const router: React.FC = () => {
    return (
        <Switch>
            <Route path="/" component={InBox} exact isPrivate />

            <AuthRoute path="/signin" component={Signin} />
            <AuthRoute path="/register" component={Register} />
        </Switch>
    );
};

export default router;
