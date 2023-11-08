import React, { useState, useRef, useEffect } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { List, XLg } from "react-bootstrap-icons";

const Navbar = () => {
  const routes = [
    {
      element: "Home",
      path: "/",
    },
    {
      element: "About",
      path: "/about",
    },
    {
      element: "Contact",
      path: "/contact",
    },
    {
      element: "Admin",
      path: "/admin",
    },
  ];

  const [showNav, setShowNav] = useState(true);

  return (
    <>
      <div className="navBar">
        <h2>FakeStore</h2>
        <List
          className="burgerIcon"
          onClick={() => {
            setShowNav(!showNav);
          }}
        />

        <ul style={{ display: `${showNav ? "flex" : "none"}` }}>
          <XLg
            className="navCross"
            onClick={() => {
              setShowNav(!showNav);
            }}
          />
          {routes.map((route, index) => {
            return (
              <>
                <Link key={index} to={`${route.path}`}>
                  <li>{route.element}</li>
                </Link>
              </>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
