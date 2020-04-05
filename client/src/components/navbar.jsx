import React, { useState } from "react";
import { Button, Nav, Navbar, NavDropdown, Form, FormControl } from "react-bootstrap";

const NavBarComponent = (props) => {


  return (
		<Navbar bg="dark" variant="dark" expand="sm" sticky="top">
		<Navbar.Brand href="#home">The Pub</Navbar.Brand>
		<Navbar.Toggle aria-controls="basic-navbar-nav" />
		<Navbar.Collapse id="basic-navbar-nav">
			<Nav className="mr-auto">
				<Nav.Link href="#home">Home</Nav.Link>
				<Nav.Link href="#link">Link</Nav.Link>
			</Nav>
			<Nav>
				<Button>Cart</Button>
			</Nav>
		</Navbar.Collapse>
	</Navbar>
  );
};

export default NavBarComponent;
