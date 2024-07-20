import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserCircle,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";

function Navigation() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/Login");
  };

  const getInitials = (name) => {
    if (!name) return "";
    const initials = name
      .split(" ")
      .map((n) => n[0])
      .join("");
    return initials.toUpperCase();
  };

  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="/home">
          Home
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            {" "}
            {user && (
              <>
                <Nav.Link as={Link} to="/cart">
                  <FontAwesomeIcon icon={faShoppingCart} size="lg" />
                </Nav.Link>
                <NavDropdown
                  title={
                    <span>
                      <FontAwesomeIcon icon={faUserCircle} size="lg" />{" "}
                      {getInitials(user.name)}
                    </span>
                  }
                  id="profile-nav-dropdown"
                  alignRight
                >
                  <NavDropdown.Item as={Link} to="#profile">
                    Profile
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="#settings">
                    Settings
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={handleLogout}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
