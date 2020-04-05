import React from "react";
import { Button, Nav, Navbar, ButtonGroup } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
const NavBarComponent = (props) => {
  return (
    <Navbar bg="dark" variant="dark" expand="sm" sticky="top">
      <LinkContainer to="/">
      <Navbar.Brand>The Pub</Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
        <LinkContainer to="/">
          <Nav.Link>
            All Products
					</Nav.Link>
        </LinkContainer>
        </Nav>
        <Nav className="navbar-buttons">
          <ButtonGroup>
          <LinkContainer to="/cart">
            <Button variant="outline-light">Cart</Button>
          </LinkContainer>
          <LinkContainer to="/checkout">
            <Button variant="outline-light">Checkout</Button>
          </LinkContainer>
          </ButtonGroup>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBarComponent;
