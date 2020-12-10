import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <Navbar bg="dark" variant="dark" fixed="top" expand="lg">
      <Navbar.Brand as={Link} to="/">
        <img
          alt=""
          src="./logo512.png"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
        Rick & Morty World
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/characters">
            Characters
          </Nav.Link>
          <Nav.Link as={Link} to="/locations">
            Locations
          </Nav.Link>
          <Nav.Link as={Link} to="/episodes">
            Episodes
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
