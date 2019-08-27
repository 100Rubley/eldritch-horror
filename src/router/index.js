import React from 'react';
import { Provider } from 'react-redux';
import { Router, Switch, Redirect, Route } from 'react-router-dom';
import { store, history } from '../redux/store';
import HomePage from '../screens/Home';
import ChooseAncient from '../screens/ChooseAncient'

import './index.css';

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Redirect exact from='/' to='/home' />
        <Route path='/home' component={HomePage} />
        <Route path='/chooseAncient' component={ChooseAncient} />
      </Switch>
    </Router>
  </Provider>
);

export default router;
