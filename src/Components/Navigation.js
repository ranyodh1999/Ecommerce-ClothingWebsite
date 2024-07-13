import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../CSS/App.css";
function Navigation() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      {" "}
      <Container>
        {" "}
        <Navbar.Brand href="#home">Home</Navbar.Brand>{" "}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />{" "}
        <Navbar.Collapse id="responsive-navbar-nav">
          {" "}
          <Nav className="me-auto">
            {" "}
            <Nav.Link href="#features">Features</Nav.Link>{" "}
            <Nav.Link href="#pricing">Pricing</Nav.Link>{" "}
            <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
              {" "}
              <NavDropdown.Item href="#action/3.1">
                Action
              </NavDropdown.Item>{" "}
              <NavDropdown.Item href="#action/3.2">
                {" "}
                Another action{" "}
              </NavDropdown.Item>{" "}
              <NavDropdown.Item href="#action/3.3">
                Something
              </NavDropdown.Item>{" "}
              <NavDropdown.Divider />{" "}
              <NavDropdown.Item href="#action/3.4">
                {" "}
                Separated link{" "}
              </NavDropdown.Item>{" "}
            </NavDropdown>{" "}
          </Nav>{" "}
          <Nav>
            {" "}
            <Nav.Link href="Signup">SignUp</Nav.Link>{" "}
            <Nav.Link eventKey={2} href="Login">
              {" "}
              Login{" "}
            </Nav.Link>{" "}
            <Nav.Link eventKey={2} href="Cart">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-cart"
                viewBox="0 0 16 16"
              >
                {" "}
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />{" "}
              </svg>{" "}
            </Nav.Link>{" "}
          </Nav>{" "}
        </Navbar.Collapse>{" "}
      </Container>{" "}
    </Navbar>
  );
}
export default Navigation;
