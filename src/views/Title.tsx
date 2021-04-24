import React, { Fragment, useState } from 'react';
import { Link, BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Topbar from '../components/Topbar';
import Offline from './Offline';

const Title = () => {
 
  const [message,setMessage] = useState('');
  const infos = [
    'Play against human opponents over the network or create a lobby room.', 
    'Play versus CPU/Player, start trainning mode or run a tournament.',
    'Watch a match in progress.',
    'Rewatch matchs saved in your computer or acess Melty.games repository.',
    'Select and configure the controller/s.',
    'User’s general preferences for the Lunar launcher.'
  ];

  return (
    <Fragment>
      <div className="Hello">
        <Topbar/>  
        <div className="Menu">
          <button type="button" className="Netplay" onMouseEnter={() => setMessage(infos[0])} onMouseLeave={() => setMessage("")}>
            Online
          </button>
          <Link to="/offline">
            <button type="button" className="Offline" onMouseEnter={() => setMessage(infos[1])} onMouseLeave={() => setMessage("")}>
              Offline
            </button>
          </Link>
          <button type="button" className="Spectate" onMouseEnter={() => setMessage(infos[2])} onMouseLeave={() => setMessage("")}>
            Spectate
          </button>
          <button type="button" className="Replays Disabled" onMouseEnter={() => setMessage(infos[3])} onMouseLeave={() => setMessage("")}>
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

export default function () {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Title} />
        <Route path="/offline" component={Offline} />
      </Switch>
    </Router>
  );
}
