import React from "react";
import { Navbar, Container } from "react-bootstrap";

const NavbarComponent = () => {
  return (
    <Navbar  variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <strong>Github-API</strong>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
