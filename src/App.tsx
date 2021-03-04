//import { info } from 'electron-log';
import React, { Fragment, useState } from 'react';
import { Dropdown, DropdownButton, Modal, Button } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const Hello = () => {
 
  const [message, setMessage] = useState("");
  const infos = [
    "Play against human opponents over the network or create a lobby room.", 
    "Play versus CPU/Player, start trainning mode or run a tournament.",
    "Watch a match in progress.",
    "Rewatch matchs saved in your computer or acess Melty.games repository.",
    "Select and configure the controller/s.",
    "User’s general preferences for the Lunar launcher."
  ];

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Fragment>
      <div className="Hello">
        <div className="TopBar">
          <h1>Lunar Launcher</h1>  
          <div className="Top-menu">
            <ul>
              <li>
                <DropdownButton
                  menuAlign="right"
                  title="Important links"
                  id="dropdown-menu-align-right"
                >
                  <Dropdown.Item eventKey="1">Mizuumi</Dropdown.Item>
                  <Dropdown.Item eventKey="2">Melty.Games</Dropdown.Item>
                  <Dropdown.Item eventKey="2">Melty Bits</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Header>Discord servers</Dropdown.Header>
                  <Dropdown.Item eventKey="3">Melty Blood</Dropdown.Item>
                  <Dropdown.Item eventKey="4">Melty Brasil</Dropdown.Item>
                  <Dropdown.Item eventKey="5">MeltySud</Dropdown.Item>
                </DropdownButton>
              </li>
              <li>
                <Button variant="primary" onClick={handleShow}>
                  Login
                </Button>

                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Login</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <input type="text" name="username" value="Username"></input>
                    <input type="text" name="password" value="Password"></input>
                  </Modal.Body>
                  <Modal.Footer>

                  </Modal.Footer>
                </Modal>
              </li>
            </ul>
          </div>
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
