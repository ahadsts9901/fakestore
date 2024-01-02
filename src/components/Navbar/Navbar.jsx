import React, { useState, useRef, useEffect } from "react";
import "./Navbar.css";

const Navbar = () => {


  const [showNav, setShowNav] = useState(true);

  return (
    <>
      <div className="navBar">
        <h2>FakeStore</h2>
      </div>
    </>
  );
};

export default Navbar;
