import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import { ThemeContext } from "../ThemeContext";  // 新增
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserCircle,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import "../styles.css";  // 全局引入 styles.css

function Navigation() {
  const { user, logout } = useContext(AuthContext);
  const { theme, toggleTheme } = useContext(ThemeContext);  // 新增
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
                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={handleLogout}>
                    Logout
                  </NavDropdown.Item>
                  <NavDropdown title="Settings" id="settings-nav-dropdown" alignRight>
                    <NavDropdown.Item onClick={toggleTheme}>  {/* 新增 */}
                      {theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}  {/* 新增 */}
                    </NavDropdown.Item>  {/* 新增 */}
                  </NavDropdown>
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
