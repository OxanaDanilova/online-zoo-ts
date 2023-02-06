import React from 'react';

import Sidebar from '../../components/Sidebar/Sidebar';
import VideoSection from '../../components/VideoSection/VideoSection';
import InformationFirstSection from '../../components/InformationFirstSection/InformationFirstSection';
import DonateSection from '../../components/DonateSection/DonateSection';
import Strelitzia from '../../components/Strelitzia/Strelitzia';
import Leaf from '../../components/Leaf/Leaf';

export default function Penguin() {
  const animalShortInfo = (
    <p>
      Penguins (order Sphenisciformes, family Spheniscidae) are a group of aquatic flightless birds.
      They live almost exclusively in the Southern Hemisphere: only one species, the Galápagos
      penguin, is found north of the Equator.
    </p>
  );
  return (
    <section className="main-component">
      <Sidebar />
      <VideoSection
        title="Penguin camera"
        videoLink={[
          'https://www.youtube.com/embed/nRmmCVW_078',
          'https://www.youtube.com/embed/nRmmCVW_078',
          'https://www.youtube.com/embed/nRmmCVW_078',
          'https://www.youtube.com/embed/nRmmCVW_078',
        ]}
      />
      <section className="information-section">
        <div className="information-wrapper">
          <h3 className="information-section-title">Penguin</h3>
          <InformationFirstSection
            fotoUrl={'assets/images/penguins-foto.png'}
            fotoTitle="Penguin"
            shortInfo={animalShortInfo}
          />
          <div className="information-second-wrapper">
            <div className="information-block">
              <h5 className="information-subtitle">Diet:</h5>
              <p className="information-description">
                Penguins eat krill (a shrimp-like crustacean in the family Euphausiidae), squids,
                and fishes.
              </p>
            </div>
            <div className="information-block range">
              <h5 className="information-subtitle">Range:</h5>
              <p className="information-description">Antarctic coasts, the Subantarctic regions</p>
            </div>
            <div className="information-block habitat">
              <h5 className="information-subtitle">Habitat:</h5>
              <p className="information-description">
                Angola, Antarctica, Argentina, Australia, Chile, Namibia, South Africa.
              </p>
            </div>
            <h5 className="information-subtitle general">General Information:</h5>
            <p className="information-description margin-top-ten">
              Most penguins feed on krill, fish, squid and other forms of sea life which they catch
              with their bills and swallow it whole while swimming. A penguin has a spiny tongue and
              powerful jaws to grip slippery prey.
            </p>
            <h5 className="information-subtitle general">Physical features and characteristics:</h5>
            <p className="information-description margin-top-ten">
              Penguins are superbly adapted to aquatic life. Their wings have evolved to become
              flippers, useless for flight in the air. In the water, however, penguins are
              astonishingly agile. Penguins&apos; swimming looks very similar to birds&apos; flight
              in the air.Within the smooth plumage a layer of air is preserved, ensuring buoyancy.
              The air layer also helps insulate the birds in cold waters. On land, penguins use
              their tails and wings to maintain balance for their upright stance.
            </p>
            <p className="information-description margin-top-twenty">
              All penguins are countershaded for camouflage – that is, they have black backs and
              wings with white fronts.A predator looking up from below (such as an orca or a leopard
              seal) has difficulty distinguishing between a white penguin belly and the reflective
              water surface. The dark plumage on their backs camouflages them from above.
            </p>
            <h5 className="information-subtitle general">Living and recently extinct species:</h5>
            <p className="information-description margin-top-ten">
              The number of extinct penguin species is debated. Depending on which authority is
              followed, penguin biodiversity varies between 17 and 20 living species, all in the
              subfamily Spheniscinae. Some sources consider the white-flippered penguin a separate
              Eudyptula species, while others treat it as a subspecies of the little blue
              penguin;the actual situation seems to be more complicated. Similarly, it is still
              unclear whether the royal penguin is a separate species or merely a color morph of the
              macaroni penguin. The status of the rockhopper penguins is also unclear.
            </p>
            <h5 className="information-subtitle general">Habitat:</h5>
            <p className="information-description margin-top-ten">
              Although almost all penguin species are native to the Southern Hemisphere, they are
              not found only in cold climates, such as Antarctica. In fact, only a few species of
              penguin actually live so far south. Several species live in the temperate zone; one,
              the Galápagos penguin, lives as far north as the Galápagos Islands, but this is only
              made possible by the cold, rich waters of the Antarctic Humboldt Current that flows
              around these islands. Also, though the climate of the Arctic and Antarctic regions is
              similar, there are no penguins found in the Arctic.
            </p>
            <h5 className="information-subtitle general">Diet:</h5>
            <p className="information-description margin-top-ten">
              Penguins eat krill (a shrimp-like crustacean in the family Euphausiidae), squids, and
              fishes. Various species of penguins have slightly different food preferences, which
              reduce competition among species. (See Appendix for information on diet for each
              species.) The smaller penguin species of the Antarctic and the subantarctic primarily
              feed on krill and squids. Species found farther north tend to eat fishes. Adélie
              penguins feed primarily on small krill, while chinstraps forage for large krill.
              Emperor and king penguins mainly eat fishes and squids.
            </p>
            <button className="read-less">Read Less</button>
          </div>
        </div>

        <Strelitzia />
        <Leaf />
      </section>

      <DonateSection donateImage={'assets/images/penguin-zoos-bg.png'} donateImageText="Penguin" />
    </section>
  );
}
