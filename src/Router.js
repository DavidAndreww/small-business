import React from "react";
import { Switch, Route } from "react-router";
import Login from "./components/Login";
import Listings from "./components/Listings";
import Details from "./components/Details";

const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/listings" component={Listings} />
      <Route path="/details/:id" component={Details} />
    </Switch>
  );
};

export default Router;
