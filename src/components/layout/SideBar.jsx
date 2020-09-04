import React from "react";
import { Nav, Button } from "react-bootstrap";
import classNames from "classnames";
import { Link } from "react-router-dom";

const SideBar = ({ isOpen, toggle }) => (
  <div className={`${classNames("sidebar", { "is-open": isOpen })}`}>
    <div className="sidebar-header">
      <Button
        variant="link"
        onClick={toggle}
        style={{ color: "#fff" }}
        className="mt-4"
      >
        <i className="fas fa-times" pull="right" size="xs"></i>
      </Button>
      <h3>Labor Allocation</h3>
    </div>

    <Nav className="flex-column navbar-expand-lg pt-2">
      <p className="ml-3">Heading</p>

      <Nav.Item className="active">
        <Link to="/" className="nav-link text-uppercase">
          <i className="fas fa-home mr-2"></i>HOME
        </Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/report" className="nav-link text-uppercase">
          <i className="fas fa-briefcase mr-2"></i>
          REPORT
        </Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/help" className="nav-link text-uppercase">
          <i className="fas fa-question mr-2"></i>
          HELP
        </Link>
      </Nav.Item>
    </Nav>
  </div>
);
export default SideBar;
