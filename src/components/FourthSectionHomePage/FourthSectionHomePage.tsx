import React, { useState } from 'react';

import './FourthSectionHomePage.scss';

const testimonialsArr = [
  {
    imgURL: 'assets/icons/user-icon3.png',
    userName: 'Michael Johns',
    location: 'Local Austria',
    time: 'Today',
    text: `The best online zoo I’ve met. My son delighted very much loves to watch gorillas.
        Online zoo is one of the ways to instill a love for animals.The best online zoo I’ve
        met. My son delighted very much ljves to watch gorillas. Online zoo is one jf the ways
        to instill a love for animals. The best online zoo I’ve met. My son delighted very
        much ljves to watch gorillas. Online zoo is one jf the ways to instill a love for
        animals.The best online zoo I’ve met. My son delighted very much ljves to watch
        gorillas. Online zoo is one jf the ways to instill a love for animals.`,
  },
  {
    imgURL: 'assets/icons/user-icon2.png',
    userName: 'Oskar Samborska',
    location: 'Local Austria',
    time: 'Yesterday',
    text: `My son delighted very much ljves to watch gorillas. Online zoo is one of the ways to
    instill a love for animals.The best online zoo I’ve met. The best online zoo I’ve met.
    My son delighted very much ljves to watch gorillas. Online zoo is one jf the ways to
    instill a love for animals.The best online zoo I’ve met. My son delighted very much
    loves to watch gorillas. Online zoo is one jf the ways to instill a love for
    animals.The best online zoo I’ve met. My son delighted very much ljves to watch
    gorillas. The best online zoo I’ve met. My son delighted very much ljves to watch
    gorillas. Online zoo is one jf the ways to instill a love for animals.The best online
    zoo I’ve met. My son delighted very much ljves to watch gorillas. Online zoo is one jf
    the ways to instill a love for animals.`,
  },
  {
    imgURL: 'assets/icons/user-icon3.png',
    userName: 'Fredericka Michelin',
    location: 'New York',
    time: 'Today',
    text: `Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve
    met. My son delighted very much ljves to watch gorillas. Online zoo is one jf the ways
    to instill a love for animals.The best online zoo I’ve met. My son delighted very much
    ljves to watch gorillas. The best online zoo I’ve met. My son delighted very much
    ljves to watch gorillas. Online zoo is one jf the ways to instill a love for
    animals.The best online zoo I’ve met. My son delighted very much ljves to watch
    gorillas. Online zoo is one jf the ways to instill a love for animals. The best online
    zoo I’ve met. My son delighted very much loves to watch gorillas. Online zoo is one jf
    the ways to instill a love for animals.The best online zoo I’ve met. My son delighted
    very much ljves to watch gorillas. Online zoo is one jf the ways to instill a love for
    animals.`,
  },
  {
    imgURL: 'assets/icons/user-icon4.png',
    userName: 'Mila Riksha',
    location: 'Berlin',
    time: '09.01.2023',
    text: `My daughter delighted very much loves to watch pandas. Online zoo is one of the ways to
    instill a love for animals.The best online zoo I’ve met. Online zoo is one jf the ways to instill a love for
    animals.The best online zoo I’ve met. My daughter delighted very much ljves to watch
    gorillas. Online zoo is one jf the ways to instill a love for animals.The best online
    zoo I’ve met. My daughter delighted very much ljves to watch gorillas. The best online zoo
    I’ve met. My son delighted very much ljves to watch gorillas. Online zoo is one jf the
    ways to instill a love for animals.The best online zoo I’ve met. My daughter delighted very
    much ljves to watch gorillas. Online zoo is one of the ways to instill a love for
    animals.`,
  },
  {
    imgURL: 'assets/icons/user-icon3.png',
    userName: 'Michael Johns',
    location: 'Local Austria',
    time: 'Today',
    text: `The best online zoo I’ve met. My son delighted very much loves to watch gorillas.
        Online zoo is one of the ways to instill a love for animals.The best online zoo I’ve
        met. My son delighted very much ljves to watch gorillas. Online zoo is one jf the ways
        to instill a love for animals. The best online zoo I’ve met. My son delighted very
        much ljves to watch gorillas. Online zoo is one jf the ways to instill a love for
        animals.The best online zoo I’ve met. My son delighted very much ljves to watch
        gorillas. Online zoo is one jf the ways to instill a love for animals.`,
  },
  {
    imgURL: 'assets/icons/user-icon2.png',
    userName: 'Oskar Samborska',
    location: 'Local Austria',
    time: 'Yesterday',
    text: `My son delighted very much ljves to watch gorillas. Online zoo is one of the ways to
    instill a love for animals.The best online zoo I’ve met. The best online zoo I’ve met.
    My son delighted very much ljves to watch gorillas. Online zoo is one jf the ways to
    instill a love for animals.The best online zoo I’ve met. My son delighted very much
    loves to watch gorillas. Online zoo is one jf the ways to instill a love for
    animals.The best online zoo I’ve met. My son delighted very much ljves to watch
    gorillas. The best online zoo I’ve met. My son delighted very much ljves to watch
    gorillas. Online zoo is one jf the ways to instill a love for animals.The best online
    zoo I’ve met. My son delighted very much ljves to watch gorillas. Online zoo is one jf
    the ways to instill a love for animals.`,
  },
  {
    imgURL: 'assets/icons/user-icon3.png',
    userName: 'Fredericka Michelin',
    location: 'New York',
    time: 'Today',
    text: `Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve
    met. My son delighted very much ljves to watch gorillas. Online zoo is one jf the ways
    to instill a love for animals.The best online zoo I’ve met. My son delighted very much
    ljves to watch gorillas. The best online zoo I’ve met. My son delighted very much
    ljves to watch gorillas. Online zoo is one jf the ways to instill a love for
    animals.The best online zoo I’ve met. My son delighted very much ljves to watch
    gorillas. Online zoo is one jf the ways to instill a love for animals. The best online
    zoo I’ve met. My son delighted very much loves to watch gorillas. Online zoo is one jf
    the ways to instill a love for animals.The best online zoo I’ve met. My son delighted
    very much ljves to watch gorillas. Online zoo is one jf the ways to instill a love for
    animals.`,
  },
  {
    imgURL: 'assets/icons/user-icon4.png',
    userName: 'Mila Riksha',
    location: 'Berlin',
    time: '09.01.2023',
    text: `My daughter delighted very much loves to watch pandas. Online zoo is one of the ways to
    instill a love for animals.The best online zoo I’ve met. Online zoo is one jf the ways to instill a love for
    animals.The best online zoo I’ve met. My daughter delighted very much ljves to watch
    gorillas. Online zoo is one jf the ways to instill a love for animals.The best online
    zoo I’ve met. My daughter delighted very much ljves to watch gorillas. The best online zoo
    I’ve met. My son delighted very much ljves to watch gorillas. Online zoo is one jf the
    ways to instill a love for animals.The best online zoo I’ve met. My daughter delighted very
    much ljves to watch gorillas. Online zoo is one of the ways to instill a love for
    animals.`,
  },
];

export default function FourthSectionHomePage() {
  const [position, setPosition] = useState(0);

  const changeRange = (range: string) => {
    setPosition(+range * -1);
  };

  const baseURL = ''; /* 'online-zoo-ts/' */
  return (
    <section className="fourth-section">
      <div className="testimonials-wrapper">
        <h3 className="testimonials-title">Testimonials</h3>
        <ul className="testimonials-cards">
          {testimonialsArr.map((card, index) => {
            return (
              <li
                className="testimonials-card"
                key={index}
                style={{ transform: `translateX(${position * 106}%)` }}
              >
                <div className="user-data-wrapper">
                  <img src={`${baseURL}${card.imgURL}`} className="avatar" alt="avatar" />
                  <div className="user-text-data">
                    <h6 className="user-name">{card.userName}</h6>
                    <ul className="posting-data">
                      <li>{card.location}</li>
                      <li>•</li>
                      <li>{card.time}</li>
                    </ul>
                  </div>
                </div>
                <p className="testimonials-card__text">{card.text}</p>
              </li>
            );
          })}
        </ul>
        <input
          className="testimonials-bar"
          type="range"
          min="0"
          max="3"
          defaultValue="0"
          onChange={(e) => changeRange(e.target.value)}
        />
        <button className="leave-feedback-btn">leave feedback</button>
      </div>

      <div className="dekor-leav"></div>
    </section>
  );
}
