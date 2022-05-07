import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import Button from './Button';
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link><Link to="/">Home</Link></Nav.Link>
              <Nav.Link><Link to="/about">About us</Link></Nav.Link>
              <Nav.Link href="https://careers.entiros.se/" target="_blank">Careers</Nav.Link>
              <Nav.Link href="https://entiros.se/resources" target="_blank">Resources</Nav.Link>
              <Button text="Book a demo" className="navbar-btn" />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
