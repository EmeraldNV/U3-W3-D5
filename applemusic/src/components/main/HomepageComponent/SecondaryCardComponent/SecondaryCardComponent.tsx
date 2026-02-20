import { Col } from "react-bootstrap";
import type { IsecondaryCards } from "../../../../assets/interfaces/interface.MainCardComponent";

function SecondaryCardComponent(props: IsecondaryCards) {
  return (
    <>
      <Col lg={2} md={6} className="px-2 text-light mainCard">
        
        <img src={props.url} alt={props.alt || "default alt"} className="imgMainCard rounded-3 img-fluid" />
        <p>{props.description}</p>
      </Col>
    </>
  );
}

export default SecondaryCardComponent;
