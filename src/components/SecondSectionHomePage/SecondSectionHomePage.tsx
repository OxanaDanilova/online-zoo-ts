import React from 'react';
import { NavLink } from 'react-router-dom';

import AnimalSliderHomePage from '../AnimalSliderHomePage/AnimalSliderHomePage';

export default function SecondSectionHomePage() {
  return (
    <section className="second-section_home">
      <div className="flower-decor"></div>
      <div className="second-section_home-wrapper">
        <div className="backstage-wrapper">
          <div className="backstage-picture"></div>
          <div className="backstage-text-wrapper">
            <h3 className="backstage-title">The Backstage of the Wilderness World.</h3>
            <p className="backstage-first-text">
              The site was founded on the basis of a volunteer movement to protect and care for
              animals.
            </p>
            <h6 className="backstage-subtitle">How it works</h6>
            <p className="backstage-second-text">
              The main goal is to help the animals, as well as the nature reserves and zoos where
              they are kept. We are currently working on video projects targeting pandas in China,
              eagles on an island near Los Angeles, alligators in Florida and gorillas in the Congo.
              These have a total of more than 1,500 mammals and reptiles.
            </p>
          </div>
        </div>
        <AnimalSliderHomePage />
        <NavLink to="/map" className="choose-favorite-btn">
          choose your favorite
        </NavLink>
      </div>
      <div className="palm-decor"></div>
      <div className="strelitzia-decor"></div>
    </section>
  );
}
