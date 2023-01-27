import React from 'react';

import { VideoSectionT } from '../../types';

import './VideoSection.scss';

export default function VideoSection({ title, videoLink }: VideoSectionT) {
  return (
    <section className="main-wrapper">
      <section className="first-section">
        <h3 className="camera-title">{title}</h3>
        <iframe
          className="video-animal"
          width="560"
          height="315"
          src={videoLink[0]}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </section>
      <section className="animal-slider-section">
        <ul className="animal-slider">
          <li className="arrow arrow-left">
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
          </li>
          {videoLink.map((videoAn, index) => {
            return (
              <li className="animal-slider-item" key={index}>
                <iframe
                  className="animal-cam"
                  width="560"
                  height="315"
                  src={videoAn}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </li>
            );
          })}

          <li className="arrow arrow-right">
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
          </li>
        </ul>
      </section>
    </section>
  );
}
