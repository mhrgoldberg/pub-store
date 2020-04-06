import React from "react";
import { Button, Nav, Navbar, ButtonGroup } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
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
                Cart{" "}
                <svg
                  className="bi bi-bag"
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M14 5H2v9a1 1 0 001 1h10a1 1 0 001-1V5zM1 4v10a2 2 0 002 2h10a2 2 0 002-2V4H1z"
                    clipRule="evenodd"
                  />
                  <path d="M8 1.5A2.5 2.5 0 005.5 4h-1a3.5 3.5 0 117 0h-1A2.5 2.5 0 008 1.5z" />
                </svg>
              </Button>
            <LinkContainer to="/checkout">
              <Button variant="outline-dark" >Checkout</Button>
            </LinkContainer>
          </ButtonGroup>
        </Nav>  
      </Navbar.Collapse>
      </span>
    </Navbar>
  );
};

export default NavBarComponent;
