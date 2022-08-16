import React from "react";
import { Link } from "react-scroll";

const Nav = () => {
  return (
    <nav className="nav__primary">
      {/* <button className="nav__toggler">
        <span className="icon__bar top__bar"></span>
        <span className="icon__bar top__bar"></span>
        <span className="icon__bar top__bar"></span>
        <span className="visually-hidden">Toggle navigation</span>
      </button> */}

      <ul>
        <li>
          <Link
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
