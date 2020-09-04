import React from "react";
import classNames from "classnames";
import { Container } from "react-bootstrap";
import TopBar from "./TopBar";
import HomePage from "../pages/HomePage";
import HelpPage from "../pages/HelpPage";
import { Switch, Route } from "react-router-dom";
import { SecureRoute, LoginCallback } from "@okta/okta-react";

const Body = ({ isOpen, toggle }) => {
  const CALLBACK_PATH = "/implicit/callback";
  return (
    <Container fluid className={classNames("content", { "is-open": isOpen })}>
      <Route path={CALLBACK_PATH} component={LoginCallback} />
      <TopBar toggle={toggle} />
      <Switch>
        <SecureRoute exact path="/" component={HomePage} />
        <SecureRoute path="/help" component={HelpPage} />
      </Switch>
    </Container>
  );
};

export default Body;
