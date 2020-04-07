import React from "react";
import { Button, Nav, Navbar, ButtonGroup } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavBarComponent = ({setModalShow}) => {
  return (
    <Navbar bg="light" variant="light" expand="md" sticky="top">
      <span className="nav-span">
      <LinkContainer to="/">
        <Navbar.Brand>The Pub</Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <LinkContainer to="/">
            <Nav.Link>All Products</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/clothing">
            <Nav.Link>Clothing</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/souvenir">
            <Nav.Link>Souvenir</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/events">
            <Nav.Link>Events</Nav.Link>
          </LinkContainer>
        </Nav>
        <Nav className="navbar-buttons">
          <ButtonGroup>
              <Button variant="outline-dark" onClick={() => setModalShow(true)}>
                <FontAwesomeIcon icon="shopping-cart" />
              </Button>
            <LinkContainer to="/checkout/cart">
              <Button variant="outline-dark"><FontAwesomeIcon icon="cash-register" /></Button>
            </LinkContainer>
          </ButtonGroup>
        </Nav>  
      </Navbar.Collapse>
      </span>
    </Navbar>
  );
};

export default NavBarComponent;
