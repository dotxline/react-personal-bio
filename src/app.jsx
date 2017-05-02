import React from "react";
import ReactDOM from "react-dom";
import routes from "./config/routes";
import { Router, browserHistory } from "react-router";
import makeRoutes from './config/routes.jsx';

const appEntry = <Router history={browserHistory}>{makeRoutes()}</Router>

ReactDOM.render(appEntry, document.getElementById("app"));
