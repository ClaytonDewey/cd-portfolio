import React from "react";
import { Link } from "react-scroll";
import Nav from "./Nav";

const Header = ({ Link }) => {
  return (
    <div id="home">
      <Nav Link={Link} />
      <header className="header__index">
        <div className="header__wrapper">
          <div className="page-header">
            <img
              src="img/profile.jpeg"
              className="header__image-profile"
              alt=""
            />
            <h1>Clayton Dewey</h1>
            <p className="subhead">Front End Developer</p>
            <p className="text-center">
              <i className="fab fa-jedi-order"></i>
            </p>
          </div>

          <Link
            className="scroll-down"
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <div className="visually-hidden">About Me</div>
          </Link>
        </div>
      </header>
    </div>
  );
};

export default Header;
