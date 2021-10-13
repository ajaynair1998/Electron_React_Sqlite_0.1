import React from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Container,
  Col,
  Row,
  Button,
} from "react-bootstrap";
import "./navbar.css";
import { Link } from "react-router-dom";

export function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="danger" variant="dark">
      <Container fluid>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="d-flex justify-content-end"
        >
          <Nav>
            <Link to="/" className="navbar-link text-white">
              <Nav.Link href="/">Home</Nav.Link>
            </Link>

            <Link to="/Register" className="navbar-link text-white">
              <Nav.Link eventKey={2} href="#memes">
                Register
              </Nav.Link>
            </Link>

            <Link to="/Records" className="navbar-link text-white">
              <Nav.Link eventKey={3} href="#memes">
                Records
              </Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
