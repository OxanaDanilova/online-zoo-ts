import React from 'react';
import { NavLink } from 'react-router-dom';

export default function FirstSectionHomePage() {
  return (
    <div className="wrapper-first-scr_home">
      <section className="first-section_home">
        <div className="ellips">
          <p className="first-section_home__text">
            Watch your <span>favorite</span> animal online
          </p>
        </div>
        <NavLink to="/panda" className="watch-online-btn">
          watch online
        </NavLink>
      </section>
    </div>
  );
}
