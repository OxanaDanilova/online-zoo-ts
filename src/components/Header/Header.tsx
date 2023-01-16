import React from 'react';

import './Header.scss';

export default function Header() {
  return (
    <header>
      <div className="header-wrapper">
        <a href="#" className="logo-wrapper">
          <div className="logo-picture"></div>
          <h1 className="logo-text">PetStory online</h1>
        </a>
        <nav>
          <ul className="nav-menu">
            <li className="nav-menu-item">
              <a href="#" className="activ">
                About
              </a>
            </li>
            <li className="nav-menu-item">
              <a href="pages/map/map.html">Map</a>
            </li>
            <li className="nav-menu-item">
              <a href="pages/zoos/panda/panda.html">Zoos</a>
            </li>
            <li className="nav-menu-item">
              <a href="">Contact us</a>
            </li>
            <li className="nav-menu-item">
              <a href="https://www.figma.com/file/jfEFwkXVj1WRq7sUHDr8os/PetStory-online">
                Designed by ©
              </a>
            </li>
          </ul>
          <svg
            className="burger-menu"
            width="18"
            height="10"
            viewBox="0 0 18 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="18" height="2" rx="1" fill="white" />
            <rect y="4" width="18" height="2" rx="1" fill="white" />
            <rect y="8" width="18" height="2" rx="1" fill="white" />
          </svg>
        </nav>
      </div>
    </header>
  );
}
