import { Col } from "react-bootstrap";
import type { ImainCards } from "../../../../assets/interfaces/interface.MainCardComponent";
import "./MainCardComponent.css";

function MainCardComponent(props: ImainCards) {
  return (
    <Col lg={6} className="px-2 text-light mainCard">
      <h6>{props.title}</h6>
      <p>{props.description}</p>
      <img src={props.url} alt={props.alt || "default alt"} className="imgMainCard rounded-3 img-fluid" />
    </Col>

    
  );
}

export default MainCardComponent;
