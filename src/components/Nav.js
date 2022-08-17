import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";

const Nav = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  }, []);

  return (
    <nav
      className={`nav__primary ${isNavOpen ? "open" : ""} ${
        scroll ? "bg-dark" : ""
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
          <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={() => setIsNavOpen(false)}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={() => setIsNavOpen(false)}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="portfolio"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={() => setIsNavOpen(false)}
          >
            Portfolio
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={() => setIsNavOpen(false)}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
