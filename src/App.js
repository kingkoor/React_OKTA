import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import SideBar from './components/layout/SideBar';
import Body from './components/layout/Body';


const App = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [width, setWidth] = useState(-1);

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
    <div className="App wrapper">
      <SideBar toggle={() => setIsOpen(!isOpen)} isOpen={isOpen} />
      <Body toggle={() => setIsOpen(!isOpen)} isOpen={isOpen} />


    </div>
  );

}

export default App;
