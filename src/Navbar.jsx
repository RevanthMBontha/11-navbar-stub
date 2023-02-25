import React, { useState, useRef, useEffect } from 'react';
import { FaBars, FaTwitter } from 'react-icons/fa';
import { links, socials } from './data';
import logo from './logo.svg';
import logo2 from './logo-2.svg';

const Navbar = () => {
  const [areLinksVisible, setAreLinksVisible] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (areLinksVisible) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = '0px';
    }
  }, [areLinksVisible]);

  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo2} alt="logo" />
          <button
            className={`nav-toggle ${areLinksVisible && 'nav-toggle-rotated'}`}
            onClick={() => setAreLinksVisible(!areLinksVisible)}
          >
            <FaBars />
          </button>
        </div>
        <div className="links-container" ref={linksContainerRef}>
          <ul className="links" ref={linksRef}>
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <ul className="social-icons">
          {socials.map((social) => {
            const { id, url, icon } = social;
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
