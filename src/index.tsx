import React from "react";
import ReactDOM from "react-dom";
import "./i18n";
import { Router } from "react-router-dom";
import history from "./services/history";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
    <React.StrictMode>
        <Router history={history}>
            <App />
        </Router>
    </React.StrictMode>,
    document.getElementById("root")
);

serviceWorker.unregister();
