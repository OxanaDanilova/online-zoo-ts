import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import './AnimalSliderHomePage.scss';

const animalArr = [
  {
    fotoURL: 'assets/images/giant-pandas-foto.png',
    fotoName: 'giant-pandas',
    title: 'giant Pandas',
    subtitle: 'Native to Southwest China',
    icon: 'assets/icons/banana-bamboo_icon.svg',
    link: '/panda',
  },
  {
    fotoURL: 'assets/images/eagles-foto.png',
    fotoName: 'eagles',
    title: 'Eagles',
    subtitle: 'Native to South America',
    icon: 'assets/icons/meet-fish_icon.svg',
    link: '/eagle',
  },
  {
    fotoURL: 'assets/images/cheetahs.png',
    fotoName: 'cheetahs',
    title: 'cheetahs',
    subtitle: 'Native to Africa',
    icon: 'assets/icons/meet-fish_icon.svg',
    link: '/cheetah',
  },
  {
    fotoURL: 'assets/images/gorillas-foto.png',
    fotoName: 'gorillas',
    title: 'Gorillas',
    subtitle: 'Native to Congo',
    icon: 'assets/icons/banana-bamboo_icon.svg',
    link: '/gorilla',
  },
  {
    fotoURL: 'assets/images/alligator-slide-1000.png',
    fotoName: 'alligator',
    title: 'Alligators',
    subtitle: 'Native to Southeastern U. S.',
    icon: 'assets/icons/meet-fish_icon.svg',
    link: '/alligator',
  },
  {
    fotoURL: 'assets/images/penguins-foto.png',
    fotoName: 'penguins',
    title: 'Penguins',
    subtitle: 'Native to Antarctica',
    icon: 'assets/icons/meet-fish_icon.svg',
    link: '/penguin',
  },
  {
    fotoURL: 'assets/images/two-toeds-sloth-foto.png',
    fotoName: 'two-toeds-sloth',
    title: 'Two-toed Sloth',
    subtitle: 'Mesoamerica, South America',
    icon: 'assets/icons/banana-bamboo_icon.svg',
    link: '/sloth',
  },
];

export default function AnimalSliderHomePage() {
  const [slidePosition, setSlidePosition] = useState(0);

  const baseURL = ''; /* 'online-zoo-ts/' */
  return (
    <div className="slider-wrapper">
      <div
        className="arrow_home arrow-left_home"
        onClick={() => setSlidePosition(slidePosition + 1)}
      >
        <svg
          width="18"
          height="10"
          viewBox="0 0 18 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.00179 9.10745L5.10646 9.2094L5.21112 9.10745L5.35128 8.97092L5.46159 8.86347L5.35128 8.75602L1.74841 5.24656L17 5.24656H17.15V5.09656V4.90344V4.75344H17L1.74878 4.75344L5.35129 1.24398L5.46158 1.13653L5.35128 1.02909L5.21112 0.892552L5.10646 0.790595L5.00179 0.892553L0.895334 4.89275L0.785027 5.0002L0.895338 5.10764L5.00179 9.10745Z"
            fill="white"
            stroke="white"
            strokeWidth="0.3"
          />
        </svg>
      </div>

      <ul className="slider">
        {animalArr.map((animal, index) => {
          return (
            <li key={index} style={{ transform: `translateX(${slidePosition * 107}%)` }}>
              <NavLink to={animal.link} className="slider-item">
                <img
                  className="animal-foto"
                  src={`${baseURL}${animal.fotoURL}`}
                  alt={animal.fotoName}
                />
                <div className="slider-item-description">
                  <div className="slider-item-text">
                    <h4 className="slider-item-title">{animal.title}</h4>
                    <h6 className="slider-item-subtitle">{animal.subtitle}</h6>
                  </div>
                  <img className="slider-item-icon" src={`${baseURL}${animal.icon}`} />
                </div>
              </NavLink>
            </li>
          );
        })}
      </ul>
      <div
        className="arrow_home arrow-right_home"
        onClick={() => setSlidePosition(slidePosition - 1)}
      >
        <svg
          width="18"
          height="10"
          viewBox="0 0 18 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.9982 0.892548L12.8935 0.7906L12.7889 0.892552L12.6487 1.02908L12.5384 1.13653L12.6487 1.24398L16.2516 4.75344H1H0.85V4.90344V5.09656V5.24656H1H16.2512L12.6487 8.75602L12.5384 8.86347L12.6487 8.97091L12.7889 9.10745L12.8935 9.2094L12.9982 9.10745L17.1047 5.10725L17.215 4.9998L17.1047 4.89236L12.9982 0.892548Z"
            fill="white"
            stroke="white"
            strokeWidth="0.3"
          />
        </svg>
      </div>
    </div>
  );
}
