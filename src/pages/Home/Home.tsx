import React from 'react';

import FirstSectionHomePage from '../../components/FirstSectionHomePage/FirstSectionHomePage';
import FourthSectionHomePage from '../../components/FourthSectionHomePage/FourthSectionHomePage';
import SecondSectionHomePage from '../../components/SecondSectionHomePage/SecondSectionHomePage';
import ThirdSectionHomePage from '../../components/ThirdSectionHomePage/ThirdSectionHomePage';

import '../Home/Home.scss';

export default function Home() {
  return (
    <div className="main-wrapper_home">
      <FirstSectionHomePage />
      <SecondSectionHomePage />
      <ThirdSectionHomePage />
      <FourthSectionHomePage />
    </div>
  );
}
