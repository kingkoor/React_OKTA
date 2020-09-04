import React from "react";
import classNames from "classnames";
import { Container } from "react-bootstrap";
import TopBar from "./TopBar";
import HomePage from "../pages/HomePage";
import HelpPage from "../pages/HelpPage";
import { Switch, Route } from "react-router-dom";

const Body = ({ isOpen, toggle }) => (
  <Container fluid className={classNames("content", { "is-open": isOpen })}>
    <TopBar toggle={toggle} />
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/help" component={HelpPage} />
    </Switch>
  </Container>
);

export default Body;
