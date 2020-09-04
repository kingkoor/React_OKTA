import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import SideBar from './components/layout/SideBar';


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
      {/* <h1>{width}isssss{isOpen}</h1> */}

    </div>
  );

}

export default App;
