import { info } from 'electron-log';
import React, { Fragment } from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const Hello = () => {
 
  const [isShown, setIsShown] = useState(false, 0);
  const infos = ["Play against human opponents over the network or create a lobby room.", "msg2"];

  return (
    <Fragment>
      <div className="Hello">
        <div className="TopBar">
          <h1>Lunar Launcher</h1>  
        </div>
        <div className="Menu-title">
          <button type="button" className="Netplay" onMouseEnter={() => {setIsShown(true)}}
        onMouseLeave={() => setIsShown(false)}>
            Netplay
          </button>
          <button type="button" className="Offline" onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}>
            Offline
          </button>
          <button type="button" className="Spectate" onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}>
            Spectate
          </button>
          <button type="button" className="Replays" onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}>
            Replays
          </button>
          <button type="button" className="Controls" onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}>
            Controls
          </button>
          <button type="button" className="Settings" onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}>
            Settings
          </button>
        </div>
        <div className="Info">
          <h3>Information</h3>
          <div className="Text">
            <p>{isShown &&(
              infos[0]
            )}</p>
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
