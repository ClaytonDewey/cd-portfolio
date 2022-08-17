import React, { useState, useEffect } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

const Nav = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [scrollNav, setScrollNav] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollNav(window.scrollY > 50);
    });
  }, []);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

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
          <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={() => {
              setIsNavOpen(false);
              scrollToTop();
            }}
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
