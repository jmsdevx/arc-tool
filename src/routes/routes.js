import React from "react";
import { Route, Switch } from "react-router-dom";
import App from "../App";

//todo: add fade to route transitions

export default (
  <Switch>
    <Route path="/:archetype?" exact component={App} />
  </Switch>
);
