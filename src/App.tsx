//import { info } from 'electron-log';
import React, { Fragment } from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const Hello = () => {
 
  const [message, setMessage] = useState("");
  const infos = [
    "Play against human opponents over the network or create a lobby room.", 
    "Play versus CPU/Player, start trainning mode or run a tournament.",
    "Watch a match in progress.",
    "Rewatch matchs saved in your computer or acess Melty.games repository.",
    "Select the controller/s and configure it/them.",
    "User’s general preferences for the Lunar launcher."
  ];

  return (
    <Fragment>
      <div className="Hello">
        <div className="TopBar">
          <h1>Lunar Launcher</h1>  
        </div>
        <div className="Menu-title">
          <button type="button" className="Netplay" onMouseEnter={() => setMessage(infos[0])} onMouseLeave={() => setMessage("")}>
            Netplay
          </button>
          <button type="button" className="Offline" onMouseEnter={() => setMessage(infos[1])} onMouseLeave={() => setMessage("")}>
            Offline
          </button>
          <button type="button" className="Spectate" onMouseEnter={() => setMessage(infos[2])} onMouseLeave={() => setMessage("")}>
            Spectate
          </button>
          <button type="button" className="Replays" onMouseEnter={() => setMessage(infos[3])} onMouseLeave={() => setMessage("")}>
            Replays
          </button>
          <button type="button" className="Controls" onMouseEnter={() => setMessage(infos[4])} onMouseLeave={() => setMessage("")}>
            Controls
          </button>
          <button type="button" className="Settings" onMouseEnter={() => setMessage(infos[5])} onMouseLeave={() => setMessage("")}>
            Settings
          </button>
        </div>
        <div className="Info">
          <h3>Information</h3>
          <div className="Text">
            <p>{message}</p>
          </div>   
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
