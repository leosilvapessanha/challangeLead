import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import LogIn from '../pages/login';
import SignIn from '../pages/signIn';
import Dashboard from '../pages/Dashboard';

const Routes: React.FC = () => (
  <>
    <Switch>
      <Route path="/" exact component={LogIn} />
      <Route path="/SignIn" exact component={SignIn} />
      <Route path="/Dashboard" exact component={Dashboard} isPrivate />
    </Switch>
  </>
);

export default Routes;
