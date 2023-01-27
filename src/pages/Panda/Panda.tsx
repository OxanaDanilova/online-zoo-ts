import React from 'react';

import Sidebar from '../../components/Sidebar/Sidebar';

import './Panda.scss';

export default function Panda() {
  return (
    <section className="main-component">
      <Sidebar />
      <section className="main-wrapper">
        <section className="first-section">
          <h3 className="camera-title">Panda camera</h3>
          <iframe
            className="video-animal"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/OObOQ2GElhA"
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
            <li className="animal-slider-item">
              <iframe
                className="animal-cam"
                width="560"
                height="315"
                src="https://www.youtube.com/embed/OObOQ2GElhA"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </li>
            <li className="animal-slider-item">
              <iframe
                className="animal-cam"
                width="560"
                height="315"
                src="https://www.youtube.com/embed/OObOQ2GElhA"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </li>
            <li className="animal-slider-item">
              <iframe
                className="animal-cam"
                width="560"
                height="315"
                src="https://www.youtube.com/embed/OObOQ2GElhA"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </li>
            <li className="animal-slider-item">
              <iframe
                className="animal-cam"
                width="560"
                height="315"
                src="https://www.youtube.com/embed/OObOQ2GElhA"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </li>
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
      <section className="information-section">
        <div className="information-wrapper">
          <h3 className="information-section-title">Giant Panda</h3>
          <div className="information-first-wrapper">
            <div className="information-foto"></div>
            <div className="information-text">
              <p>
                Giant pandas are very <span> unusual animals </span> that eat almost exclusively{' '}
                <span>bamboo</span>, which is very low in nutrients. Because of this, they have many
                unique adaptations for their low-energy lifestyle. Giant pandas are solitary, with
                males and females coming together only briefly to mate. Habitat loss is the primary
                threat to this species. Its popularity around the world has helped the giant panda
                become the focus of successful conservation programs.
              </p>
              <a href="" className="feed-friend-btn">
                Feed a friend now
              </a>
            </div>
          </div>
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

        <div className="strelitzia-zoos"></div>
        <div className="leav-foto-zoos"></div>
      </section>

      <section className="section-donate">
        <a href="../../donate/donate.html" className="donate-btn">
          Donate
        </a>
      </section>
    </section>
  );
}
