import React from 'react';
import ReactDOM from 'react-dom';
import { IndexRoute, Route, browserHistory } from 'react-router';
import ReactStormpath, { Router, HomeRoute, LoginRoute, AuthenticatedRoute } from 'react-stormpath';
import { MasterPage } from '../components/MasterPage';
import { IndexPage } from "../components/IndexPage";
import { LoginPage } from "../components/LoginPage";
import { ProfilePage } from "../components/ProfilePage";

ReactStormpath.init();

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
