import React from "react";
import { Switch, Route, Redirect } from "react-router";
import cookie from "cookie";
import Login from "./containers/Login";
import Listings from "./containers/Listings";
import Details from "./components/Details";

// const checkAuth = () => {
  
// }

// const ProtectedRoute = ({ component: Component, ...rest }) => {
//   return (
//     <Route 
//       { ...rest }
//       render={props =>
//         checkAuth() ? <Component {...props} /> : <Redirect to='/' /> 
//       }
//     />
//   )
// }

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
