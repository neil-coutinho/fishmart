import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import StorePicker from "./StorePicker";
import App from "./App";

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={StorePicker}></Route>
                <Route  path="/store/:storeId" component={App}></Route>
                <Route  component={StorePicker}></Route>
            </Switch>
        </BrowserRouter>
    );

}

export default Router;