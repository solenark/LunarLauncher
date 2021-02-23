import { info } from 'electron-log';
import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const Hello = () => {

  return (
    <Fragment>
      <div className="Hello">
        <div className="Menu-title">
          <button type="button" className="Netplay" onMouseEnter={() => info(0)}>
            Netplay
          </button>
          <button type="button" className="Offline">
            Offline
          </button>
          <button type="button" className="Spectate">
            Spectate
          </button>
          <button type="button" className="Replays">
            Replays
          </button>
          <button type="button" className="Controls">
            Controls
          </button>
          <button type="button" className="Settings">
            Settings
          </button>
        </div>
      </div>
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
