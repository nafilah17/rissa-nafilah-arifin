import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

const NavbarComponent = () => {
  return (
    <Navbar  variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <strong>Github-API</strong>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
