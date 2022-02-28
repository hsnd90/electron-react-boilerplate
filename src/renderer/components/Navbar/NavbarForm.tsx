import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function NavbarForm() {
  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link>
            <Link to="/">Anasayfa</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/patients">Hasta Listesi</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/forms">Form Listesi</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/form/barsak-yonetim">Form Listesi</Link>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
