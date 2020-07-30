import React from "react";
import { Switch } from "react-router-dom";

import Route from "./Route";
import AuthRoute from "./AuthRoute";

import InBox from "../pages/InBox";
import Signin from "../pages/Signin";

const router: React.FC = () => {
    return (
        <Switch>
            <Route path="/" component={InBox} exact />

            <AuthRoute path="/singin" component={Signin} />
        </Switch>
    );
};

export default router;
