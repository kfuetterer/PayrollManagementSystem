import React from 'react';
import ReactDOM from 'react-dom';
import { IndexRoute, Route, browserHistory, Router } from 'react-router';
import MasterPage from '../components/MasterPage';
import LoginPage from "../components/LoginPage";
import ProfilePage from "../components/ProfilePage";
import SignUp from "../components/SignUp";

const routes = (
  <Router history={browserHistory}>
    <Route path='/' component={MasterPage}>
      <IndexRoute component={LoginPage} />
      <Route path='signup' component={SignUp} />
      <Route path='profile' component={ProfilePage} />
    </Route>
  </Router>
);

export default routes;