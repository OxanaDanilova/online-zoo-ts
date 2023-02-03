import React from 'react';

import Sidebar from '../../components/Sidebar/Sidebar';
import VideoSection from '../../components/VideoSection/VideoSection';
import InformationFirstSection from '../../components/InformationFirstSection/InformationFirstSection';
import DonateSection from '../../components/DonateSection/DonateSection';
import Strelitzia from '../../components/Strelitzia/Strelitzia';
import Leaf from '../../components/Leaf/Leaf';

export default function Cheetah() {
  const animalShortInfo = (
    <p>
      The cheetah is the world&apos;s fastest land animal.Estimates of the maximum speed attained
      range from 80 to 128 km/h (50 to 80 mph).A commonly quoted value is 112 km/h (70 mph),
      recorded in 1957, but this measurement is disputed.
    </p>
  );
  return (
    <section className="main-component">
      <Sidebar />
      <VideoSection
        title="Cheetah camera"
        videoLink={[
          'https://www.youtube.com/embed/dqOUkcpzJLg',
          'https://www.youtube.com/embed/dqOUkcpzJLg',
          'https://www.youtube.com/embed/dqOUkcpzJLg',
          'https://www.youtube.com/embed/dqOUkcpzJLg',
        ]}
      />
      <section className="information-section">
        <div className="information-wrapper">
          <h3 className="information-section-title">Cheetah</h3>
          <InformationFirstSection
            fotoUrl={'/assets/images/cheetahs.png'}
            fotoTitle="Cheetah"
            shortInfo={animalShortInfo}
          />
          <div className="information-second-wrapper">
            <div className="information-block">
              <h5 className="information-subtitle">Diet:</h5>
              <p className="information-description">
                Small to medium-sized prey weighing 20 to 60kg, but mostly less than 40 kg
              </p>
            </div>
            <div className="information-block range">
              <h5 className="information-subtitle">Range:</h5>
              <p className="information-description">Range: South Africa</p>
            </div>
            <div className="information-block habitat">
              <h5 className="information-subtitle">Habitat:</h5>
              <p className="information-description">
                various habitats, such as the grasslands of the Serengeti
              </p>
            </div>

            <h5 className="information-subtitle general">General Information:</h5>
            <p className="information-description margin-top-ten">
              The cheetah lives in three main social groups: females and their cubs, male
              &quot;coalitions&quot;, and solitary males. While females lead a nomadic life
              searching for prey in large home ranges, males are more sedentary and instead
              establish much smaller territories in areas with plentiful prey and access to females.
              The cheetah is active during the day, with peaks during dawn and dusk. It feeds on
              small- to medium-sized prey, mostly weighing under 40 kg (88 lb), and prefers
              medium-sized ungulates such as impala, springbok and Thomson&apos;s gazelles. The
              cheetah typically stalks its prey to within 60–70 m (200–230 ft), charges towards it,
              trips it during the chase and bites its throat to suffocate it to death. It breeds
              throughout the year. After a gestation of nearly three months, a litter of typically
              three or four cubs is born. Cheetah cubs are highly vulnerable to predation by other
              large carnivores such as hyenas and lions. They are weaned at around four months and
              are independent by around 20 months of age.
            </p>
            <h5 className="information-subtitle general">Physical features and characteristics:</h5>
            <p className="information-description margin-top-ten">
              The cheetah&apos;s closest relatives are the cougar (Puma concolor) and the jaguarundi
              (Herpailurus yagouaroundi). Together, these three species form the Puma lineage, one
              of the eight lineages of the extant felids; the Puma lineage diverged from the rest
              6.7 mya. The sister group of the Puma lineage is a clade of smaller Old World cats
              that includes the genera Felis, Otocolobus and Prionailurus
            </p>
            <p className="information-description margin-top-twenty">
              The oldest cheetah fossils, excavated in eastern and southern Africa, date to 3.5–3
              mya; the earliest known specimen from South Africa is from the lowermost deposits of
              the Silberberg Grotto.
            </p>
            <h5 className="information-subtitle general">Lifestyle and reproduction:</h5>
            <p className="information-description margin-top-ten">
              Cheetahs are induced ovulators and can breed throughout the year.
            </p>
            <p className="information-description margin-top-twenty">
              Females can have their first litter at two to three years of age. Polyestrous, females
              have an oestrus (&quot;heat&quot;) cycle is 12 days long on average, but it can vary
              from three days to a month.
            </p>

            <h5 className="information-subtitle general">Habitat:</h5>
            <p className="information-description margin-top-ten">
              Unlike many other felids, among cheetahs, females tend to occupy larger areas compared
              to males. Females typically disperse over large areas in pursuit of prey, but they are
              less nomadic and roam in a smaller area if prey availability in the area is high. As
              such, the size of their home range depends on the distribution of prey in a region. In
              central Namibia, where most prey species are sparsely distributed, home ranges average
              554–7,063 km2 (214–2,727 sq mi), whereas in the woodlands of the Phinda Game Reserve
              (South Africa), which have plentiful prey, home ranges are 34–157 km2 (13–61 sq mi) in
              size. Cheetahs can travel long stretches overland in search of food; a study in the
              Kalahari Desert recorded an average displacement of nearly 11 km (6.8 mi) every day
              and walking speeds ranged between 2.5 and 3.8 km/h (1.6 and 2.4 mph).
            </p>
            <h5 className="information-subtitle general">Diet:</h5>
            <p className="information-description margin-top-ten">
              They are the major component of the diet in certain areas, such as Dama and Dorcas
              gazelles in the Sahara, impala in the eastern and southern African woodlands,
              springbok in the arid savannas to the south and Thomson&apos;s gazelle in the
              Serengeti. Smaller antelopes like the common duiker are a frequent prey in the
              southern Kalahari. Larger ungulates are typically avoided, though nyala, whose males
              weigh around 120 kg (260 lb), were found to be the major prey in a study in the Phinda
              Game Reserve. In Namibia cheetahs are the major predators of livestock.
            </p>
            <p className="information-description margin-top-ten">
              The diet of the Asiatic cheetah consists of chinkara, desert hare, goitered gazelle,
              urial, wild goats and livestock; in India cheetahs used to prey mostly on
              blackbuck.There are no records of cheetahs killing humans.Cheetahs in the Kalahari
              have been reported feeding on citron melons for their water content.
            </p>
            <button className="read-less">Read Less</button>
          </div>
        </div>

        <Strelitzia />
        <Leaf />
      </section>

      <DonateSection donateImage={'/assets/images/cheetah-zoos-bg.jpg'} donateImageText="Cheetah" />
    </section>
  );
}
