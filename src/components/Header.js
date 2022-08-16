import React from "react";
import Nav from "./Nav";

const Header = () => {
  return (
    <>
      <Nav />
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

          <a href="#about" className="scroll-down">
            <div className="visually-hidden">About Me</div>
          </a>
        </div>
      </header>
    </>
  );
};

export default Header;
