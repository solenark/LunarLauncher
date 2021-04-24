import React, { Component, Fragment, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Topbar from '../components/Topbar';
import ArrowBack from '../../assets/chevron_left_white_36dp.svg';


const Offline = () => {
 
  const [message,setMessage] = useState('');
  const infos = [
    'Local match Player vs Player.', 
    'Play against the CPU with the difficulty setted in the game.',
    'Practice and learn about the game and the characters.',
    'Test your abilities in different levels of combo trials.',
  ];

  return (
    <Fragment>
      <div className="Hello">
        <Topbar/>
          <div className="Page-title"><button type="button"><img src={ArrowBack} alt="icon back" /></button><h1>Offline</h1></div>
          <div className="Menu">
            <button type="button" className="VsPlayer" onMouseEnter={() => setMessage(infos[0])} onMouseLeave={() => setMessage("")}>
              Versus <br/>Player
            </button>
            <button type="button" className="VsCpu" onMouseEnter={() => setMessage(infos[1])} onMouseLeave={() => setMessage("")}>
              Versus CPU
            </button>
            <button type="button" className="Training" onMouseEnter={() => setMessage(infos[2])} onMouseLeave={() => setMessage("")}>
              Training
            </button>
            <button type="button" className="Trials Disabled" onMouseEnter={() => setMessage(infos[3])} onMouseLeave={() => setMessage("")}>
              Combo Trials
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
