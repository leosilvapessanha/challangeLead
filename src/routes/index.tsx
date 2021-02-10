import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LogIn from '../pages/login';
import SignIn from '../pages/signIn';
import Dashboard from '../pages/Dashboard';

const Routes: React.FC = () => (
  <>
    <Switch>
      <Route path="/" exact component={LogIn} />
      <Route path="/SignIn" exact component={SignIn} />
      <Route path="/Dashboard" exact component={Dashboard} />
    </Switch>
  </>
);

export default Routes;
