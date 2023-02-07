import React, { useState } from 'react';

import Sidebar from '../../components/Sidebar/Sidebar';
import VideoSection from '../../components/VideoSection/VideoSection';
import InformationFirstSection from '../../components/InformationFirstSection/InformationFirstSection';
import DonateSection from '../../components/DonateSection/DonateSection';
import Strelitzia from '../../components/Strelitzia/Strelitzia';
import Leaf from '../../components/Leaf/Leaf';

export default function Sloth() {
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
      Western lowland gorillas live in troops led by a dominant silverback, several adult females,
      and their offspring. There are two species of gorilla, each containing two subspecies. The two
      species are eastern and western, and the four sub-species are <span>Cross River</span> and
      <span>Western</span> Lowland (are sub-species of the Western species) and Grauer’s and
      Mountain (are sub-species of the Eastern species).
    </p>
  );
  return (
    <section className="main-component">
      <Sidebar />
      <VideoSection
        title="Sloth camera"
        videoLink={[
          'https://www.youtube.com/embed/g_L1Ay8P244',
          'https://www.youtube.com/embed/g_L1Ay8P244',
          'https://www.youtube.com/embed/g_L1Ay8P244',
          'https://www.youtube.com/embed/g_L1Ay8P244',
        ]}
      />
      <section className="information-section">
        <div className="information-wrapper">
          <h3 className="information-section-title">Sloth</h3>
          <InformationFirstSection
            fotoUrl={'assets/images/two-toeds-sloth-foto.png'}
            fotoTitle="Sloth"
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
                  Two-toed sloths are omnivorous, with a diverse diet of insects, carrion, fruits,
                  leaves and small lizards, ranging over up to 140 hectares (350 acres).
                </p>
              </div>
              <div className="information-block range">
                <h5 className="information-subtitle">Range:</h5>
                <p className="information-description">Range: Central and South America</p>
              </div>
              <div className="information-block habitat">
                <h5 className="information-subtitle">Habitat:</h5>
                <p className="information-description">Atlantic Forest</p>
              </div>

              <h5 className="information-subtitle general">General Information:</h5>
              <p className="information-description margin-top-ten">
                There are six extant sloth species in two genera – Bradypus (three–toed sloths) and
                Choloepus (two–toed sloths). Despite this traditional naming, all sloths have three
                toes on each rear limb-- although two-toed sloths have only two digits on each
                forelimb. The two groups of sloths are from different, distantly related families,
                and are thought to have evolved their morphology via parallel evolution from
                terrestrial ancestors. Besides the extant species, many species of ground sloths
                ranging up to the size of elephants (like Megatherium) inhabited both North and
                South America during the Pleistocene Epoch. However, they became extinct during the
                Quaternary extinction event around 12,000 years ago, along with most large bodied
                animals in the New World. The extinction correlates in time with the arrival of
                humans, but climate change has also been suggested to have contributed. Members of
                an endemic radiation of Caribbean sloths also formerly lived in the Greater Antilles
                but became extinct after humans settled the archipelago in the mid-Holocene, around
                6,000 years ago.
              </p>
              <h5 className="information-subtitle general hide">
                Physical features and characteristics:
              </h5>
              <p className="information-description margin-top-ten hide">
                Sloths have colour vision, but have poor visual acuity. They also have poor hearing.
                Thus, they rely on their sense of smell and touch to find food
              </p>
              <p className="information-description margin-top-twenty hide">
                Sloths have very low metabolic rates (less than half of that expected for a mammal
                of their size), and low body temperatures: 30 to 34 °C (86 to 93 °F) when active,
                and still lower when resting.
              </p>
              <p className="information-description margin-top-twenty hide">
                Sloths are solitary animals that rarely interact with one another except during
                breeding season, though female sloths do sometimes congregate, more so than do
                males.
              </p>
              <h5 className="information-subtitle general hide">Lifestyle and reproduction:</h5>
              <p className="information-description margin-top-ten hide">
                The pale- and brown-throated three-toed sloths mate seasonally, while the maned
                three-toed sloth breeds at any time of the year. The reproduction of pygmy
                three-toed sloths is currently unknown.
              </p>
              <h5 className="information-subtitle general hide">Habitat:</h5>
              <p className="information-description margin-top-ten hide">
                Although habitat is limited to the tropical rainforests of Central and South
                America, in that environment sloths are successful. On Barro Colorado Island in
                Panama, sloths have been estimated to constitute 70% of the biomass of arboreal
                mammals. Four of the six living species are currently rated least concern; the maned
                three-toed sloth (Bradypus torquatus), which inhabits Brazil s dwindling Atlantic
                Forest, is classified as `&quot;`vulnerable`&quot;`, while the island-dwelling pygmy
                three-toed sloth (B. pygmaeus) is critically endangered. Sloths`&lsquo;` lower
                metabolism confines them to the tropics and they adopt thermoregulation behaviors of
                cold-blooded animals such as sunning themselves
              </p>
              <h5 className="information-subtitle general hide">Diet:</h5>
              <p className="information-description margin-top-ten hide">
                They have made adaptations to arboreal browsing. Leaves, their main food source,
                provide very little energy or nutrients, and do not digest easily, so sloths have
                large, slow-acting, multi-chambered stomachs in which symbiotic bacteria break down
                the tough leaves. As much as two-thirds of a well-fed sloth`&lsquo;s body weight
                consists of the contents of its stomach, and the digestive process can take a month
                or more to complete.
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

      <DonateSection donateImage={'assets/images/sloth-zoo-bg.jpg'} donateImageText="Sloth" />
    </section>
  );
}
