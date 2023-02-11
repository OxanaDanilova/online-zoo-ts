import React from 'react';
import { NavLink } from 'react-router-dom';

import './Header.scss';

export default function Header() {
  return (
    <header>
      <div className="header-wrapper">
        <NavLink to="/" className="logo-wrapper">
          <div className="logo-picture"></div>
          <h1 className="logo-text">PetStory online</h1>
        </NavLink>
        <nav>
          <ul className="nav-menu">
            <li className="nav-menu-item">
              <NavLink to="/">About</NavLink>
            </li>
            <li className="nav-menu-item">
              <NavLink to="/map">Map</NavLink>
            </li>
            <li className="nav-menu-item">
              <NavLink to="/panda">Zoos</NavLink>
            </li>
            <li className="nav-menu-item">
              <a
                href="https://www.figma.com/file/jfEFwkXVj1WRq7sUHDr8os/PetStory-online"
                target="_blank"
                rel="noreferrer"
              >
                Designed by ©
              </a>
            </li>
            <li className="nav-menu-item">
              <a href="https://github.com/OxanaDanilova" target="_blank" rel="noreferrer">
                Developed by ©
              </a>
            </li>
          </ul>
          <div className="menu-container burger-menu">
            <input type="checkbox" />
            <div></div>
            <div></div>
            <div></div>
            <ul className="list-categories">
              <li className="nav-menu-item">
                <NavLink to="/">About</NavLink>
              </li>
              <li className="nav-menu-item">
                <NavLink to="/map">Map</NavLink>
              </li>
              <li className="nav-menu-item">
                <NavLink to="/panda">Zoos</NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}
