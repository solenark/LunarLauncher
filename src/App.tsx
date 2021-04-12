import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Title from './views/Title';
import Offline from './views/Offline';

const Hello = () => {

  return (
    <Fragment>
        <Offline/>
    </Fragment>
  );
};

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Hello} />
      </Switch>
    </Router>
  );
}
