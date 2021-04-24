import React, { Fragment, useState } from 'react';
import { Dropdown, DropdownButton, Modal, Button } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const Topbar = () => {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Fragment>
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
                  <Dropdown.Item onClick={() => window.open('https://wiki.gbl.gg/w/Melty_Blood/MBAACC')}>Mizuumi</Dropdown.Item>
                  <Dropdown.Item onClick={() => window.open('https://drunkardshade.com/category/melty-blood/')}>Melty Bits</Dropdown.Item>
                  <Dropdown.Item onClick={() => window.open('http://melty.games/')}>Melty.Games</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Header>Discord servers</Dropdown.Header>
                  <Dropdown.Item eventKey="3">Melty Blood</Dropdown.Item>
                  <Dropdown.Item onClick={() => window.open('https://discord.gg/uUFEKTD2Ss')}>Melty Brasil</Dropdown.Item>
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
                    <form>
                      <input type="text" name="username" placeholder="Username"></input>
                      <input type="password" name="password" placeholder="Password"></input>
                    </form>
                  </Modal.Body>
                  <Modal.Footer>
                      <button type="submit">Sign in</button>
                      <button type="submit"><img src="../assets/buttons/Discord-LogoWordmark-White.png"/></button>
                  </Modal.Footer>
                </Modal>
              </li>
            </ul>
          </div>
        </div>
    </Fragment>
  );
};

export default function () {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Topbar} />
      </Switch>
    </Router>
  );
}
