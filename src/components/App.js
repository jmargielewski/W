import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import MainLayout from '../containers/layout/MainLayout';
import requireAuth from './hoc/requireAuth';

import Home from './Home';
import Signup from '../containers/auth/Signup';
import Signin from '../containers/auth/Signin';
import Signout from '../containers/auth/Signout';
import Dashboard from '../containers/Dashboard';

const AppRoute = ({ component: Component, layout: Layout, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      <Layout>
        <Component {...props} />
      </Layout>
    )}
  />
);

const App = () => (
  <div className="container">
    <Router basename={'/'}>
      <Switch>
        <AppRoute exact path="/" layout={MainLayout} component={Home} />
        <Route path='/signup' component={ Signup } />
        <Route path='/signin' component={ Signin } />
        <Route path='/signout' component={ Signout } />
        <Route path='/dashboard' component={ requireAuth(Dashboard) } />
      </Switch>
    </Router>
  </div>
);

export default App;
