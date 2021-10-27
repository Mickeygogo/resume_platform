import React from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import routes from './router.config';
import buildRoutes from './router.tool';

const RouterPage = () => {
  return (
    <Router>
      <Switch>{buildRoutes(routes)}</Switch>
    </Router>
  );
};

export default RouterPage;
