import React from 'react';

import './DonateSection.scss';

export default function DonateSection({
  donateImage,
  donateImageText,
}: {
  donateImage: string;
  donateImageText: string;
}) {
  return (
    <section className="section-donate">
      <img src={donateImage} alt={donateImageText} />
      <a href="../../donate/donate.html" className="donate-btn">
        Donate
      </a>
    </section>
  );
}
