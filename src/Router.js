import React from "react";
import { Switch, Route, Redirect } from "react-router";
import cookie from "cookie";
import Login from "./containers/Login";
import Listings from "./containers/Listings";
import AddBusiness from './containers/AddBusiness';
import Details from "./containers/Details";

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
      <Route path="/details/:name" component={Details} />
      <Route path='/add' component={AddBusiness}/>
    </Switch>
  );
};

export default Router;
