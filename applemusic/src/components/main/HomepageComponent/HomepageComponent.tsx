import { Col, Container, Row } from "react-bootstrap";
import "./HomepageComponent.css";
import MainCardComponent from "./MainCardComponent/MainCardComponent";
import type { HomepageProps, ImainCards } from "../../../assets/interfaces/interface.MainCardComponent";
import img1a from "../../../../public/media/1a.png";
import img1b from "../../../../public/media/1b.png";
import SecondaryCardComponent from "./SecondaryCardComponent/SecondaryCardComponent";

const mainCards: ImainCards[] = [
  {
    url: img1a,
    title: "NUOVA STAZIONE RADIO",
    description: "Rilassati, al resto pensiamo Noi. Ascolta Apple Music Chill",
    alt: "chill",
  },
  {
    url: img1b,
    title: "NUOVA STAZIONE RADIO",
    description: "Ecco la nuova casa della musica latina",
    alt: "latin",
  },
];
function HomepageComponent(props: HomepageProps) {
  return (
    <>
      <Container fluid className=" novita bg-dark d-flex flex-column justify-center">
        <Row>
          <Col xs={12} className="d-flex justify-content-center">
            <Col xs={12} className="px-4">
              <h1 className="my-4">Novita'</h1>
              <hr className="hr bg-light w-100" />

              <Col xs={12} className="mainCardContainer d-flex justify-content-around mb-5">
                {mainCards.map((card, index) => (
                  <MainCardComponent
                    key={index}
                    url={card.url}
                    alt={card.alt}
                    title={card.title}
                    description={card.description}
                  />
                ))}
              </Col>
              <Col xs={12} className="SecondaryCardContainer d-flex  flex-wrap mt-5">
                <h4 className="my-4">Nuovi episodi radio</h4>
                <hr className="hr bg-light w-100" />
              </Col>
              <Col xs={12} className="SecondaryCardContainer d-flex">
                {props.songs.map((card) => (
                  <SecondaryCardComponent
                    key={card.id}
                    url={card.album.cover_medium} //
                    description={card.artist.name} //
                  />
                ))}
              </Col>
            </Col>
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default HomepageComponent;
