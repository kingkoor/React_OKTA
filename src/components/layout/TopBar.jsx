import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar, Button } from "react-bootstrap";
import { useOktaAuth } from "@okta/okta-react";

const TopBar = ({ toggle }) => {
  const { authState, authService } = useOktaAuth();
  const [userInfo, setUserInfo] = useState(null);

  const logout = async () => {
    authService.logout("/");
  };

  useEffect(() => {
    if (!authState.isAuthenticated) {
      // When user isn't authenticated, forget any user info
      setUserInfo(null);
    } else {
      authService.getUser().then((info) => {
        setUserInfo(info);
        console.log(info);
      });
    }
  }, [authState, authService]); // Update if authState changes

  return (
    <Navbar
      bg="light"
      className="navbar shadow-sm p-3 mb-3 bg-white rounded"
      expand
    >
      <Button variant="outline-info" onClick={toggle}>
        <i className="fas fa-align-left"></i>
      </Button>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto" navbar>
          <Link to="/" className="nav-link text-uppercase ml-5">
            <i className="fas fa-home"></i>&nbsp;&nbsp;Home
          </Link>
          <Link to="/report" className="nav-link text-uppercase ml-5">
            <i className="fas fa-book"></i>&nbsp;&nbsp;Report
          </Link>
          <Link to="/help" className="nav-link text-uppercase ml-5">
            <i className="fas fa-question"></i>&nbsp;&nbsp;Help
          </Link>
          <a
            href="/#"
            className="nav-link text-uppercase ml-5"
            onClick={logout}
          >
            Logout
          </a>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default TopBar;
