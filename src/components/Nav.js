import React, { useState, useEffect } from "react";

const Nav = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [scrollNav, setScrollNav] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollNav(window.scrollY > 50);
    });
  }, []);

  return (
    <nav
      className={`nav__primary ${isNavOpen ? "open" : ""} ${
        scrollNav ? "bg-dark" : ""
      }`}
    >
      <button onClick={() => setIsNavOpen(!isNavOpen)} className="nav__toggler">
        <span className="icon__bar top__bar"></span>
        <span className="icon__bar top__bar"></span>
        <span className="icon__bar top__bar"></span>
        <span className="visually-hidden">Toggle navigation</span>
      </button>

      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
