import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const Hello = () => {
  return (
    <div>
      <div className="Hello">
        <div className="Menu-title">
          <button type="button" className="Netplay">
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
    </div>
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
