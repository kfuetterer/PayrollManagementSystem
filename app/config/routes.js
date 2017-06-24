import React from "react";
import { Route, IndexRoute, Router, browserHistory } from "react-router";

import Container from "../components/Container";
import Home from "../components/Home";
import Login from "../components/Login";

const routes = (
  <Router history={browserHistory}>
    <HomeRoute path='/' component={MasterPage}>
      <IndexRoute component={IndexPage} />
      <LoginRoute path='/login' component={LoginPage} />
      <AuthenticatedRoute>
        <Route path='/profile' component={ProfilePage} />
      </AuthenticatedRoute>
    </HomeRoute>
  </Router>
);

export default routes;
