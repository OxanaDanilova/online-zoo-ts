import React, { useState } from 'react';

import Sidebar from '../../components/Sidebar/Sidebar';
import VideoSection from '../../components/VideoSection/VideoSection';
import InformationFirstSection from '../../components/InformationFirstSection/InformationFirstSection';
import DonateSection from '../../components/DonateSection/DonateSection';
import Strelitzia from '../../components/Strelitzia/Strelitzia';
import Leaf from '../../components/Leaf/Leaf';

export default function Alligator() {
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
      Alligators differ from other members of the crocodile family in having a{' '}
      <span>wider snout</span>; their eyes are more dorsal (at the top of the head). Large
      alligators eyes glow red; small alligators eyes glow green. Alligators can be spotted in the
      dark by this sign.
    </p>
  );
  return (
    <section className="main-component">
      <Sidebar />
      <VideoSection
        title="Alligator camera"
        videoLink={[
          'https://www.youtube.com/embed/Vqzg8JakhjI',
          'https://www.youtube.com/embed/Vqzg8JakhjI',
          'https://www.youtube.com/embed/Vqzg8JakhjI',
          'https://www.youtube.com/embed/Vqzg8JakhjI',
        ]}
      />
      <section className="information-section">
        <div className="information-wrapper">
          <h3 className="information-section-title">Alligator Lowland Gorilla</h3>
          <InformationFirstSection
            fotoUrl={'assets/images/alligator-zoo.png'}
            fotoTitle="Alligator"
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
                <p className="information-description">
                  Carnivore (Fish, lizards, <span>snakes</span>, mice)
                </p>
              </div>
              <div className="information-block range">
                <h5 className="information-subtitle">Range:</h5>
                <p className="information-description">Florida, United States of America</p>
              </div>
              <div className="information-block habitat">
                <h5 className="information-subtitle">Habitat:</h5>
                <p className="information-description">
                  Alligators live mostly in fresh brackish water, in marshes, canals, and lakes
                </p>
              </div>

              <h5 className="information-subtitle general">General Information:</h5>
              <p className="information-description margin-top-ten">
                Alligators are large, semi-aquatic, carnivorous reptiles with four paws and a huge
                tail that is half the length of an animal, helps them move around in water used to
                make water pools in the dry seasons (alligator holes), used as weapons, and stores
                fat that helps them overwinter. Alligators are cold-blooded; their bodies do not
                produce heat. They get it by basking in the sun.
              </p>
              <h5 className="information-subtitle general hide">
                Physical features and characteristics:
              </h5>
              <p className="information-description margin-top-ten hide">
                There are two types of alligators: the American alligator, which grows to 19 feet
                (3.5 m) long and up to 600 pounds (270 kg), and the Chinese alligator, which grows
                to 6 feet (1.8 m) long.
              </p>
              <p className="information-description margin-top-twenty hide">
                Having four paws, they swim very well, mainly using their tail to move through the
                water and, to a lesser extent, using their webbed feet.
              </p>
              <p className="information-description margin-top-twenty hide">
                Alligators are stooping (as are many reptiles); they walk in a flat-footed manner.
                On land, they can move relatively quickly, but only in short bursts. Different
                species have
                <span>different speeds</span>, which also depends on the type of movement (crawling,
                paddling, swimming). Alligators are the fastest crocodiles on earth, they can move
                at speeds of up to 17 km per hour. They swim at a speed of about 10 km per hour.
                Crawling, the animal can travel 5-10 km per hour.
              </p>
              <h5 className="information-subtitle general hide">Lifestyle and reproduction:</h5>
              <p className="information-description margin-top-ten hide">
                Alligators are usually solitary animals. They live 30 to 35 years in the wild, and
                up to 50 years in captivity. These animals have a wide range of calls and
                vocalizations. These calls are used in mating, defining territory, and distress
                calls (babies grunt to alert their mother when in danger), etc.
              </p>
              <p className="information-description margin-top-twenty hide">
                Alligators breed in the spring from April to May. One month after noisy mating and
                bonding rituals, the female lays up to 50 eggs in a large (three feet high and six
                feet wide) nest, which is made of dirt, leaves, and twigs on non-wet ground.
                Alligators do not incubate their <span>eggs</span> so as not to crush them. The
                vegetation that rots in the nest keeps the future babies warm.
              </p>
              <p className="information-description margin-top-twenty hide">
                The temperature in the nest determines the sex of the chicks. If the eggs were
                incubated at 93 degrees Fahrenheit (34 degrees Celsius), the embryo develops as a
                male; temperatures below 86 degrees Fahrenheit (30 degrees Celsius) result in a
                female embryo. The would-be mother alligator guards the nest from predators. The
                eggs hatch after 2 months, producing chicks about 6 inches long (15 cm). A group of
                babies (called a pod) are protected by the female for a year.
              </p>
              <h5 className="information-subtitle general hide">Habitat:</h5>
              <p className="information-description margin-top-ten hide">
                Alligators live mostly in fresh brackish water, in marshes, canals, and lakes. The
                American alligator is found only in the southeastern United States, the Chinese
                alligator is found in the lower basin of the Yangtze River that flows in China.
              </p>
              <h5 className="information-subtitle general hide">Diet:</h5>
              <p className="information-description margin-top-ten hide">
                Alligators are awake and feed mostly at night. Younger ones eat insects, shrimp,
                snails, fish, tadpoles, and frogs. Adults eat fish, birds, turtles, reptiles, and
                mammals. They swallow their prey whole. Their conical teeth are used to catch their
                prey without tearing it to pieces. The animal has about 80 teeth; a lost tooth
                recovers quickly.
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

      <DonateSection donateImage={'assets/images/alligator-zoo-bg.png'} donateImageText="Gorilla" />
    </section>
  );
}
