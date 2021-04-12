import React, { Fragment, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Topbar from '../components/Topbar'; 

const Offline = () => {
 
  const [message,setMessage] = useState('');
  const infos = [
    'Local matches Player vs Player.', 
    'Play against the CPU with the difficulty setted in the game.',
    'Practice and learn about the game and the characters.',
    'Test your abilities in different levels of combo trials.',
  ];

  return (
    <Fragment>
      <div className="Hello">
        <Topbar/>
        <div className="Menu-title">
          <button type="button" className="Netplay" onMouseEnter={() => setMessage(infos[0])} onMouseLeave={() => setMessage("")}>
            Versus <br/>Player
          </button>
          <button type="button" className="Offline" onMouseEnter={() => setMessage(infos[1])} onMouseLeave={() => setMessage("")}>
            Versus <br/>CPU
          </button>
          <button type="button" className="Spectate" onMouseEnter={() => setMessage(infos[2])} onMouseLeave={() => setMessage("")}>
            Training
          </button>
          <button type="button" className="Replays" onMouseEnter={() => setMessage(infos[3])} onMouseLeave={() => setMessage("")}>
            Trials
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

export default function () {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Offline} />
      </Switch>
    </Router>
  );
}
