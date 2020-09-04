import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import SideBar from './components/layout/SideBar';
import Body from './components/layout/Body';
import { Security } from "@okta/okta-react";

const App = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [width, setWidth] = useState(-1);

  const config = {
    clientId: "0oa5dp5db3QMIMzPM357",
    issuer: "https://dev-339211.okta.com/oauth2/default",
    redirectUri: "http://localhost:3000/implicit/callback",
    scopes: ["openid", "profile", "email"],
    pkce: true,
  };


  const updateWidth = () => {
    setWidth(window.innerWidth);
    if (window.innerWidth > 576) {
      setIsOpen(true)
    }
    else { setIsOpen(false) }
  }
  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, [width]);


  return (
    <Security {...config}>
      <div className="App wrapper">
        <SideBar toggle={() => setIsOpen(!isOpen)} isOpen={isOpen} />
        <Body toggle={() => setIsOpen(!isOpen)} isOpen={isOpen} />


      </div>
    </Security>
  );

}

export default App;
