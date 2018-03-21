import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import DatePicker from './DatePicker';
import App from "./App";
import NotFound from "./NotFound";

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={DatePicker} />
            <Route path="/date/:dateValue" component={App} />
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
)

export default Router;