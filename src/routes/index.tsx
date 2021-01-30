import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LogIn from '../pages/login';
import Dashboard from '../pages/Dashboard';

const Routes: React.FC = () => (
  <>
    <Switch>
      <Route path="/" exact component={LogIn} />
      <Route path="/Dashboard" exact component={Dashboard} />
    </Switch>
  </>
);

export default Routes;
