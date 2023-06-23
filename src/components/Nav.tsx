import React, { useState, useEffect } from 'react';

const Nav = ({ Link, animateScroll }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [scrollNav, setScrollNav] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScrollNav(window.scrollY > 50);
    });
  }, []);

  return (
    <nav
      className={`nav__primary ${isNavOpen ? 'open' : ''} ${
        scrollNav ? 'bg-dark' : ''
      }`}>
      <button onClick={() => setIsNavOpen(!isNavOpen)} className='nav__toggler'>
        <span className='icon__bar top__bar'></span>
        <span className='icon__bar top__bar'></span>
        <span className='icon__bar top__bar'></span>
        <span className='visually-hidden'>Toggle navigation</span>
      </button>

      <ul>
        <li>
          <Link
            onClick={() => {
              if (isNavOpen) {
                setIsNavOpen(false);
              }
            }}
            href='#main'
            activeClass='active'
            to='home'
            spy={true}
            smooth={true}
            duration={750}>
            Home
          </Link>
        </li>
        <li>
          <Link
            onClick={() => {
              if (isNavOpen) {
                setIsNavOpen(false);
              }
            }}
            href='#about'
            activeClass='active'
            to='about'
            spy={true}
            smooth={true}
            offset={-70}
            duration={750}>
            About
          </Link>
        </li>
        <li>
          <Link
            onClick={() => {
              if (isNavOpen) {
                setIsNavOpen(false);
              }
            }}
            href='#portfolio'
            activeClass='active'
            to='portfolio'
            spy={true}
            smooth={true}
            offset={-70}
            duration={750}>
            Portfolio
          </Link>
        </li>
        <li>
          <Link
            onClick={() => {
              if (isNavOpen) {
                setIsNavOpen(false);
              }
            }}
            href='#contact'
            activeClass='active'
            to='contact'
            spy={true}
            smooth={true}
            offset={-70}
            duration={750}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
