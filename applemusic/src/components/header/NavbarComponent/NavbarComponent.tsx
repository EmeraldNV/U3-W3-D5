import { Navbar, Container, Row, Col, Button, Form, Collapse, Nav } from "react-bootstrap";
import {
  Shuffle,
  SkipStartFill,
  PlayFill,
  SkipEndFill,
  ArrowRepeat,
  Apple,
  VolumeUp,
  PersonFill,
  MusicNoteBeamed,
} from "react-bootstrap-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import "./NavbarComponent.css";
import { useState } from "react";

const NavbarComponent = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Collapse in={open}>
        <div id="navbarToggleExternalContent" className="d-md-none">
          <div className="collapsed-menu-bg p-4 border-bottom border-secondary">
            <Nav className="flex-column">
              <Nav.Link className="text-white py-2">Home</Nav.Link>
              <Nav.Link className="text-white py-2">Novità</Nav.Link>
              <Nav.Link className="text-white py-2">Radio</Nav.Link>
            </Nav>
          </div>
        </div>
      </Collapse>

      <Navbar className="custom-navbar">
        <Container fluid>
          <Row className="align-items-center w-100 g-0">
            <Col xs={4} md={3} className="d-flex align-items-center">
              <div className="d-md-none">
                <button className="open-menu" onClick={() => setOpen(!open)}>
                  <span className="line"></span>
                  <span className="line"></span>
                </button>
              </div>
              <div className="d-none d-md-flex align-items-center">
                <Shuffle className="icon-btn text-secondary" size={16} />
                <SkipStartFill className="icon-btn text-secondary" size={20} />
                <PlayFill className="icon-btn text-white" size={28} />
                <SkipEndFill className="icon-btn text-secondary" size={20} />
                <ArrowRepeat className="icon-btn text-secondary" size={16} />
              </div>
            </Col>

            <Col xs={4} md={6} className="d-flex justify-content-center">
              <div className="d-none d-md-flex status-bar align-items-center justify-content-center w-100">
                <Apple className="apple-logo" size={20} />
              </div>
              <div className="d-md-none d-flex align-items-center text-white fw-bold logo-mobile">
                <Apple size={22} className="me-1" />
                <span>Music</span>
              </div>
            </Col>

            <Col xs={4} md={3} className="d-flex align-items-center justify-content-end">
              <div className="d-none d-md-flex align-items-center me-3">
                <VolumeUp className="text-secondary me-2" size={16} />
                <Form.Range className="volume-slider" />
              </div>

              <button className="accedi-red-text d-md-none">Accedi</button>

              <Button className="btn-accedi d-none d-md-flex align-items-center">
                <PersonFill className="me-2" size={16} />
                Accedi
              </Button>
            </Col>
          </Row>
        </Container>
      </Navbar>

      <div className="mobile-mini-player d-md-none">
        <div className="mini-player-inner">
          <div className="music-icon-box">
            <MusicNoteBeamed size={20} />
          </div>
          <div className="flex-grow-1"></div>
          <div className="d-flex align-items-center">
            <PlayFill size={30} className="me-3 text-secondary" />
            <SkipEndFill size={30} className="text-secondary" />
          </div>
        </div>
      </div>
    </>
  );
};

export default NavbarComponent;
