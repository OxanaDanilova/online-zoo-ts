import React from 'react';

import './FourthSectionHomePage.scss';

export default function FourthSectionHomePage() {
  const baseURL = ''; /* 'online-zoo-ts/' */
  return (
    <section className="fourth-section">
      <div className="testimonials-wrapper">
        <h3 className="testimonials-title">Testimonials</h3>
        <ul className="testimonials-cards">
          <li className="testimonials-card">
            <div className="user-data-wrapper">
              <img src={`${baseURL}assets/icons/user-icon3.png`} className="avatar" alt="avatar" />
              <div className="user-text-data">
                <h6 className="user-name">Michael John</h6>
                <ul className="posting-data">
                  <li>Local Austria</li>
                  <li>•</li>
                  <li>Today</li>
                </ul>
              </div>
            </div>
            <p className="testimonials-card__text">
              The best online zoo I’ve met. My son delighted very much ljves to watch gouillas.
              Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve
              met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways
              to instill a love for animals. The best online zoo I’ve met. My son delighted very
              much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for
              animals.The best online zoo I’ve met. My son delighted very much ljves to watch
              gouillas. Online zoo is one jf the ways to instill a love for animals.
            </p>
          </li>
          <li className="testimonials-card">
            <div className="user-data-wrapper">
              <img src={`${baseURL}assets/icons/user-icon2.png`} className="avatar" alt="avatar" />
              <div className="user-text-data">
                <h6 className="user-name">Oskar Samborska</h6>
                <ul className="posting-data">
                  <li>Local Austria</li>
                  <li>•</li>
                  <li>Yesterday</li>
                </ul>
              </div>
            </div>
            <p className="testimonials-card__text">
              My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to
              instill a love for animals.The best online zoo I’ve met. The best online zoo I’ve met.
              My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to
              instill a love for animals.The best online zoo I’ve met. My son delighted very much
              ljves to watch gouillas. Online zoo is one jf the ways to instill a love for
              animals.The best online zoo I’ve met. My son delighted very much ljves to watch
              gouillas. The best online zoo I’ve met. My son delighted very much ljves to watch
              gouillas. Online zoo is one jf the ways to instill a love for animals.The best online
              zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf
              the ways to instill a love for animals.
            </p>
          </li>
          <li className="testimonials-card">
            <div className="user-data-wrapper">
              <img src={`${baseURL}assets/icons/user-icon3.png`} className="avatar" alt="avatar" />
              <div className="user-text-data">
                <h6 className="user-name">Fredericka Michelin</h6>
                <ul className="posting-data">
                  <li>Local Austria</li>
                  <li>•</li>
                  <li>Yesterday</li>
                </ul>
              </div>
            </div>
            <p className="testimonials-card__text">
              Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve
              met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways
              to instill a love for animals.The best online zoo I’ve met. My son delighted very much
              ljves to watch gouillas. The best online zoo I’ve met. My son delighted very much
              ljves to watch gouillas. Online zoo is one jf the ways to instill a love for
              animals.The best online zoo I’ve met. My son delighted very much ljves to watch
              gouillas. Online zoo is one jf the ways to instill a love for animals. The best online
              zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf
              the ways to instill a love for animals.The best online zoo I’ve met. My son delighted
              very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for
              animals.
            </p>
          </li>
          <li className="testimonials-card">
            <div className="user-data-wrapper">
              <img src={`${baseURL}assets/icons/user-icon4.png`} className="avatar" alt="avatar" />
              <div className="user-text-data">
                <h6 className="user-name">Mila Riksha</h6>
                <ul className="posting-data">
                  <li>Local Austria</li>
                  <li>•</li>
                  <li>Yesterday</li>
                </ul>
              </div>
            </div>
            <p className="testimonials-card__text">
              My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to
              instill a love for animals.The best online zoo I’ve met. My son delighted very much
              ljves to watch gouillas. Online zoo is one jf the ways to instill a love for
              animals.The best online zoo I’ve met. My son delighted very much ljves to watch
              gouillas. Online zoo is one jf the ways to instill a love for animals.The best online
              zoo I’ve met. My son delighted very much ljves to watch gouillas. The best online zoo
              I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the
              ways to instill a love for animals.The best online zoo I’ve met. My son delighted very
              much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for
              animals.
            </p>
          </li>
        </ul>
        <input className="testimonials-bar" type="range" min="1" max="3" defaultValue="1" />
        <button className="leave-feedback-btn">leave feedback</button>
      </div>

      <div className="dekor-leav"></div>
    </section>
  );
}
