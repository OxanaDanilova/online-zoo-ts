import React, { useState } from 'react';

import Sidebar from '../../components/Sidebar/Sidebar';
import VideoSection from '../../components/VideoSection/VideoSection';
import InformationFirstSection from '../../components/InformationFirstSection/InformationFirstSection';
import DonateSection from '../../components/DonateSection/DonateSection';
import Strelitzia from '../../components/Strelitzia/Strelitzia';
import Leaf from '../../components/Leaf/Leaf';

export default function Eagle() {
  const [shortText, setShortText] = useState(true);
  const readMore = () => {
    if (shortText) {
      setShortText(false);
    } else {
      setShortText(true);
    }
  };
  const animalShortInfo = (
    <p>
      There are about <span>40 species</span> of these birds in the world. The largest eagle is the{' '}
      <span>Golden Eagle</span>. It reaches a length of 95 cm and a wingspan of over two meters. Its
      plumage ranges from golden to t. brown. They nest exclusively in mountainous areas. They hunt
      in pairs and mainly during daylight hours. They feed on birds, squirrels, martens, hares and
      even larger animals.
    </p>
  );
  return (
    <section className="main-component">
      <Sidebar />
      <VideoSection
        title="Eagle camera"
        videoLink={[
          'https://www.youtube.com/embed/E5T2eHM8tcI',
          'https://www.youtube.com/embed/E5T2eHM8tcI',
          'https://www.youtube.com/embed/E5T2eHM8tcI',
          'https://www.youtube.com/embed/E5T2eHM8tcI',
        ]}
      />
      <section className="information-section">
        <div className="information-wrapper">
          <h3 className="information-section-title">Eagle</h3>
          <InformationFirstSection
            fotoUrl={'assets/images/eagle-zoos-foto.png'}
            fotoTitle="Eagle"
            shortInfo={animalShortInfo}
          />
          <div className="information-second-wrapper">
            <div
              className={
                shortText ? 'animal-information-block short-text' : 'animal-information-block'
              }
            >
              <div className="information-block">
                <h5 className="information-subtitle">Diet:</h5>
                <p className="information-description">Carnivore (Fish, lizards, snakes, mice)</p>
              </div>
              <div className="information-block range">
                <h5 className="information-subtitle">Range:</h5>
                <p className="information-description">Range: Eurasia and Africa</p>
              </div>
              <div className="information-block habitat">
                <h5 className="information-subtitle">Habitat:</h5>
                <p className="information-description">
                  Mountainous or semi-open landscapes (Simulation of the natural environment)
                </p>
              </div>

              <h5 className="information-subtitle general">General Information:</h5>
              <p className="information-description margin-top-ten">
                Eagles choose a mate for life. They <span>build large</span> and strong nests, using
                branches. They lay two eggs each. While the female incubates them, the male takes
                care of her feeding. The hatched offspring can be seen immediately, and are covered
                with down. The nature of the predator forces the chicks from a young age to fight
                for their survival. Often one can observe the larger chick trying to push the
                younger brother out of the nest. Sometimes it may even kill it by fighting for food.
                In cases where there is enough food, several chicks grow in the nests.
              </p>
              <h5 className="information-subtitle general hide">
                Physical features and characteristics:
              </h5>
              <p className="information-description margin-top-ten hide">
                The eagle is a bird of prey in the hawk family. It is one of the largest birds. The
                body length of an adult bird varies from 73 to 89 cm, with long wings up to 2.5 m in
                wingspan, a short tail and strong paws. The massive beak and sharp claws are the
                main weapons of this raptor.
              </p>
              <p className="information-description margin-top-twenty hide">
                Excellent vision allows the eagle to spot a mouse, snake, or lizard from a great
                height. The eyeball is large and occupies a lot of space in the skull, so eye
                mobility is low, but the well-developed neck makes up for this{' '}
                <span>disadvantage</span>. Eagles use their hearing more for communication than for
                hunting. The sense of smell is poorly developed.
              </p>
              <h5 className="information-subtitle general hide">Lifestyle and reproduction:</h5>
              <p className="information-description margin-top-ten hide">
                Eagles choose a mate for life. They build large and strong nests, using branches.
                They lay two eggs each. While the female incubates them, the male takes care of her
                feeding. The hatched offspring can be seen immediately, and are covered with down.
                The nature of the predator forces the chicks from a young age to fight for their
                survival. Often one can observe the larger chick trying to push the younger brother
                out of the nest. Sometimes it may even kill it by fighting for food. In cases where
                there is enough food, several chicks grow in the nests.
              </p>
              <h5 className="information-subtitle general hide">Habitat:</h5>
              <p className="information-description margin-top-ten hide">
                They can be found in the forests, tundras, steppes, and even deserts of{' '}
                <span>Eurasia, North America</span>, and
                <span>Africa</span>.
              </p>
              <h5 className="information-subtitle general hide">Diet:</h5>
              <p className="information-description margin-top-ten hide">
                They usually hunt alone. The eagle may hover for a long time at a high altitude,
                looking for prey, or sit on an elevated position and observe the surroundings in
                search of prey. As a rule, only killed prey goes as food, carrion rarely makes it
                into their
                <span>diet</span>. It all depends on the type of bird. It can be both insects and
                large mammals. At the moment of attack, the eagle sharply lowers down, grabs the
                victim with its paws and strikes it with its beak. The stunned creature is no longer
                able to resist.
              </p>
            </div>
            <button className="read-less" onClick={() => readMore()}>
              {shortText ? 'Read More' : 'Read Less'}
            </button>
          </div>
        </div>

        <Strelitzia />
        <Leaf />
      </section>

      <DonateSection donateImage={'assets/images/eagle_zoos-bg.png'} donateImageText="Eagle" />
    </section>
  );
}
