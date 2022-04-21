import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function NavbarForm() {
  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Nav>
          <Link
            className="mx-2"
            style={{ textDecoration: 'none' }}
            to="/new-patient"
          >
            Hasta Kayıt
          </Link>
          <Link className="mx-2" style={{ textDecoration: 'none' }} to="/patients">
            Hasta Listesi
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
