import React, { useState, useEffect } from "react";

const Nav = ({ Link, animateScroll }) => {
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
          <Link
            href="#main"
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="#about"
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="#portfolio"
            activeClass="active"
            to="portfolio"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Portfolio
          </Link>
        </li>
        <li>
          <Link
            href="#contact"
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
