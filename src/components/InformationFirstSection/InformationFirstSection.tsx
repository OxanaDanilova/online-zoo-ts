import React from 'react';

import { InformationFirstSectionT } from '../../types';

import './InformationFirstSection.scss';

export default function InformationFirstSection({
  fotoUrl,
  fotoTitle,
  shortInfo,
}: InformationFirstSectionT) {
  return (
    <div className="information-first-wrapper">
      <img className="information-foto" src={fotoUrl} alt={fotoTitle} />
      <div className="information-text">
        <>{shortInfo}</>
        <a href="" className="feed-friend-btn">
          Feed a friend now
        </a>
      </div>
    </div>
  );
}
