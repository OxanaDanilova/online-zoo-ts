import React from 'react';

import './Map.scss';

export default function Map() {
  return (
    <section className="map-section">
      <div className="map-wrapper">
        <div className="map">
          <p className="usa">United States</p>
          <p className="los-angeles">Los Angeles</p>
          <p className="florida">Florida</p>
          <p className="congo">Congo</p>
          <p className="china">China</p>
          <div className="eagle-block">
            <div className="first-eagle-icon"></div>
            <svg
              className="eagle-point"
              width="26"
              height="33"
              viewBox="0 0 26 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.0556641 12.9303C0.0556641 5.87332 5.77566 0.15332 12.8317 0.15332C19.8887 0.15332 25.6087 5.87332 25.6087 12.9303C25.6087 14.1933 25.4227 15.4123 25.0817 16.5673C23.2627 23.9243 12.7747 32.1533 12.7747 32.1533C12.7747 32.1533 0.925664 22.8623 0.228664 15.1953L0.259664 15.1893C0.127664 14.4573 0.0556641 13.7023 0.0556641 12.9303ZM12.6577 15.7763C15.5447 15.7763 17.8847 13.4353 17.8847 10.5483C17.8847 7.66132 15.5447 5.32132 12.6577 5.32132C9.77166 5.32132 7.43166 7.66132 7.43166 10.5483C7.43166 13.4353 9.77166 15.7763 12.6577 15.7763Z"
                fill="#4B9200"
              />
            </svg>

            <div className="second-eagle-icon"></div>
            <div className="popup popup-eagles">
              <p className="animal">Eagles</p>
              <p className="location">Los Angeles, USA</p>
              <button className="watch-online">Watch online</button>
            </div>
          </div>

          <div className="crocodile-block">
            <div className="crocodile-icon"></div>
            <svg
              className="crocodile-point"
              width="26"
              height="33"
              viewBox="0 0 26 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.0556641 12.9303C0.0556641 5.87332 5.77566 0.15332 12.8317 0.15332C19.8887 0.15332 25.6087 5.87332 25.6087 12.9303C25.6087 14.1933 25.4227 15.4123 25.0817 16.5673C23.2627 23.9243 12.7747 32.1533 12.7747 32.1533C12.7747 32.1533 0.925664 22.8623 0.228664 15.1953L0.259664 15.1893C0.127664 14.4573 0.0556641 13.7023 0.0556641 12.9303ZM12.6577 15.7763C15.5447 15.7763 17.8847 13.4353 17.8847 10.5483C17.8847 7.66132 15.5447 5.32132 12.6577 5.32132C9.77166 5.32132 7.43166 7.66132 7.43166 10.5483C7.43166 13.4353 9.77166 15.7763 12.6577 15.7763Z"
                fill="#4B9200"
              />
            </svg>
            <div className="popup popup-alligators">
              <p className="animal">Alligators</p>
              <p className="location">Florida, USA</p>
              <button className="watch-online">Watch online</button>
            </div>
          </div>

          <div className="gorillas-block">
            <div className="gorillas-icon"></div>
            <svg
              className="gorillas-point"
              width="26"
              height="33"
              viewBox="0 0 26 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.0556641 12.9303C0.0556641 5.87332 5.77566 0.15332 12.8317 0.15332C19.8887 0.15332 25.6087 5.87332 25.6087 12.9303C25.6087 14.1933 25.4227 15.4123 25.0817 16.5673C23.2627 23.9243 12.7747 32.1533 12.7747 32.1533C12.7747 32.1533 0.925664 22.8623 0.228664 15.1953L0.259664 15.1893C0.127664 14.4573 0.0556641 13.7023 0.0556641 12.9303ZM12.6577 15.7763C15.5447 15.7763 17.8847 13.4353 17.8847 10.5483C17.8847 7.66132 15.5447 5.32132 12.6577 5.32132C9.77166 5.32132 7.43166 7.66132 7.43166 10.5483C7.43166 13.4353 9.77166 15.7763 12.6577 15.7763Z"
                fill="#4B9200"
              />
            </svg>
            <div className="popup popup-gorillas">
              <p className="animal">Gorillas</p>
              <p className="location">Congo</p>
              <button className="watch-online">Watch online</button>
            </div>
          </div>

          <div className="panda-block">
            <div className="one-panda-icon"></div>
            <svg
              className="one-panda-point"
              width="26"
              height="33"
              viewBox="0 0 26 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.0556641 12.9303C0.0556641 5.87332 5.77566 0.15332 12.8317 0.15332C19.8887 0.15332 25.6087 5.87332 25.6087 12.9303C25.6087 14.1933 25.4227 15.4123 25.0817 16.5673C23.2627 23.9243 12.7747 32.1533 12.7747 32.1533C12.7747 32.1533 0.925664 22.8623 0.228664 15.1953L0.259664 15.1893C0.127664 14.4573 0.0556641 13.7023 0.0556641 12.9303ZM12.6577 15.7763C15.5447 15.7763 17.8847 13.4353 17.8847 10.5483C17.8847 7.66132 15.5447 5.32132 12.6577 5.32132C9.77166 5.32132 7.43166 7.66132 7.43166 10.5483C7.43166 13.4353 9.77166 15.7763 12.6577 15.7763Z"
                fill="#4B9200"
              />
            </svg>

            <div className="pandas-icon"></div>
            <svg
              className="pandas-point"
              width="26"
              height="33"
              viewBox="0 0 26 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.0556641 12.9303C0.0556641 5.87332 5.77566 0.15332 12.8317 0.15332C19.8887 0.15332 25.6087 5.87332 25.6087 12.9303C25.6087 14.1933 25.4227 15.4123 25.0817 16.5673C23.2627 23.9243 12.7747 32.1533 12.7747 32.1533C12.7747 32.1533 0.925664 22.8623 0.228664 15.1953L0.259664 15.1893C0.127664 14.4573 0.0556641 13.7023 0.0556641 12.9303ZM12.6577 15.7763C15.5447 15.7763 17.8847 13.4353 17.8847 10.5483C17.8847 7.66132 15.5447 5.32132 12.6577 5.32132C9.77166 5.32132 7.43166 7.66132 7.43166 10.5483C7.43166 13.4353 9.77166 15.7763 12.6577 15.7763Z"
                fill="#4B9200"
              />
            </svg>
            <div className="popup popup-pandas">
              <p className="animal">Pandas</p>
              <p className="location">China</p>
              <button className="watch-online">Watch online</button>
            </div>
          </div>
        </div>
        <div className="scale-wrapper">
          <div className="scale-sign">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 0C14.3432 0 13 1.3432 13 3V13H3C1.3432 13 0 14.3431 0 16C0 17.6568 1.3432 19 3 19H13V29C13 30.6569 14.3432 32 16 32C17.6569 32 19 30.6569 19 29V19H29C30.6568 19 32 17.6568 32 16C32 14.3431 30.6568 13 29 13H19V3C19 1.3432 17.6569 0 16 0Z"
                fill="#333B41"
              />
            </svg>
          </div>
          <div className="scale-sign">
            <svg
              width="32"
              height="6"
              viewBox="0 0 32 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3.13094 6H28.823C30.5727 6 32 4.64234 32 3.0219C32 1.35766 30.5727 0 28.823 0H3.13094C1.42734 0 0 1.35766 0 3.0219C0 4.64234 1.42734 6 3.13094 6Z"
                fill="#333B41"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
