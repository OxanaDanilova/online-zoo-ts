import React from 'react';

import Sidebar from '../../components/Sidebar/Sidebar';
import VideoSection from '../../components/VideoSection/VideoSection';
import InformationFirstSection from '../../components/InformationFirstSection/InformationFirstSection';

import './Panda.scss';
import DonateSection from '../../components/DonateSection/DonateSection';
import Strelitzia from '../../components/Strelitzia/Strelitzia';

export default function Panda() {
  const animalShortInfo = (
    <p>
      Giant pandas are very <span> unusual animals </span> that eat almost exclusively{' '}
      <span>bamboo</span>, which is very low in nutrients. Because of this, they have many unique
      adaptations for their low-energy lifestyle. Giant pandas are solitary, with males and females
      coming together only briefly to mate. Habitat loss is the primary threat to this species. Its
      popularity around the world has helped the giant panda become the focus of successful
      conservation programs.
    </p>
  );
  return (
    <section className="main-component">
      <Sidebar />
      <VideoSection
        title="Panda camera"
        videoLink={[
          'https://www.youtube.com/embed/OObOQ2GElhA',
          'https://www.youtube.com/embed/OObOQ2GElhA',
          'https://www.youtube.com/embed/OObOQ2GElhA',
          'https://www.youtube.com/embed/OObOQ2GElhA',
        ]}
      />
      <section className="information-section">
        <div className="information-wrapper">
          <h3 className="information-section-title">Giant Panda</h3>
          <InformationFirstSection
            fotoUrl={'/assets/images/inf-panda-foto.png'}
            fotoTitle="Panda"
            shortInfo={animalShortInfo}
          />
          <div className="information-second-wrapper">
            <div className="animal-information-block short-text">
              <div className="information-block">
                <h5 className="information-subtitle">Diet:</h5>
                <p className="information-description">
                  Herbivore (They also are offered nutritious high-fiber biscuits and fruits such as
                  apples or <span>sweet potatoes</span>)
                </p>
              </div>
              <div className="information-block range">
                <h5 className="information-subtitle">Range:</h5>
                <p className="information-description">
                  Eastern Asia <span>[VIEW MAP]</span>
                </p>
              </div>
              <div className="information-block habitat">
                <h5 className="information-subtitle">Habitat:</h5>
                <p className="information-description">
                  Forests (Simulation of the <span>natural environment</span>)
                </p>
              </div>

              <h5 className="information-subtitle general">General Information:</h5>
              <p className="information-description margin-top-ten">
                Giant pandas are bears and are members of the <span>Order Carnivora</span>. They are
                unique because, although they evolved among the mostly carnivorous bear species of
                the world, their diet is vegetarian. Despite the availability of other plants, they
                feed almost exclusively on bamboo.
              </p>
              <p className="information-description margin-top-twenty">
                Giant pandas communicate with one another in dense bamboo forests primarily by
                scent. Males regularly scent-mark the margins of their territories by adopting a
                “headstand” position to mark a bamboo stalk with their anogenital glands.
              </p>
              <h5 className="information-subtitle general">
                Physical features and characteristics:
              </h5>
              <p className="information-description margin-top-ten">
                The low nutrient value of bamboo figures prominently in the biology of the giant
                panda. They have extremely powerful jaws and associated muscles to crunch through
                the woody stems of bamboo. Each hand bears a{' '}
                <span>specialized metacarpal bone</span> in the wrist that functions as a thumb
                would in humans, to allow them to grasp the circular bamboo stalks. While other
                herbivorous animals, such as antelope, zebras, or rabbits, have very long digestive
                tracts, the giant panda retains an essentially bear-like digestive tract. Thus, the
                digestive efficiency of the bamboo they consume is quite low. Examination of the
                feces demonstrates that their food has been only partially digested. The low
                nutrient value of their food and their low digestive efficiency results in an animal
                that is constrained to a low-metabolism. This lifestyle explains why giant pandas
                sleep so often and why they eat such <span>enormous</span> amounts of bamboo.
              </p>
              <p className="information-description margin-top-twenty">
                Individuals do not travel long distances, and males will establish territories that
                are not particularly large compared with other species in the Order Carnivora. Adult
                females average about 230 pounds in weight, with males sometimes reaching 350
                pounds. Their hair is very dense, conserving their body heat in their cold habitats.
                Their iconic coloration remains a mystery to scientists but may aid with camouflage.
              </p>
              <h5 className="information-subtitle general">Lifestyle and reproduction:</h5>
              <p className="information-description margin-top-ten">
                Females are fertile for only a very short period of time and exhibit delayed
                implantation. Although twins are not unusual, a mother will typically only rear one
                cub. Adults are solitary, with mating pairings being quite brief. The tiny cubs are
                altricial, or not born in an advanced state of development, and are completely
                helpless, blind and deaf, and without the fur <span>necessary</span> to regulate
                their own body temperatures. As a result, maternal care is extensive. Cubs do not
                begin eating bamboo until they are around a year old.
              </p>
              <p className="information-description margin-top-twenty">
                When twins are born in zoos, extraordinary measures are taken to train the female to
                accept swapping of her cubs regularly 24 hours a day, so that she only cares for one
                a time, but that both receive adequate care.
              </p>
              <h5 className="information-subtitle general">Habitat:</h5>
              <p className="information-description margin-top-ten">
                Their preferred cool and wet bamboo forests are found at <span>elevations</span>{' '}
                between 5,000 and 10,000 feet. Cubs are raised in rocky crevices, dead trees, or
                caves.
              </p>
              <h5 className="information-subtitle general">Diet:</h5>
              <p className="information-description margin-top-ten">
                Our animal care professionals offer each adult or subadult giant panda about 80
                pounds of various bamboo species per day, and they generally select and consume only
                about third of that. They also are offered nutritious{' '}
                <span>high-fiber biscuits</span> and fruits such as apples or sweet potatoes.
              </p>
            </div>
            <button className="read-less">Read More</button>
          </div>
        </div>

        <Strelitzia />
        <div className="leav-foto-zoos"></div>
      </section>

      <DonateSection donateImage={'/assets/images/panda_bg-zoos.png'} donateImageText="Panda" />
    </section>
  );
}
