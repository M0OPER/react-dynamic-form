import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./Introduction.css";
export default function Introduction() {
  return (
    <div className="introduction p-3 p-lg-5 mt-5">
      <Container fluid>
        <Row className="justify-content-md-center">
          <Col xs={12} md={8}>
            <h1 className="pl-2 text-center">
              Welcome to my Dynamic Form{" "}
              <span className="pt-2 pb-4">
                that you will do everything that you want
              </span>
            </h1>
            <h4 className="d-flex container-actions mt-5">
              Hola, Soy Edwin Montes, Tengo 24 años de edad, me gusta programar
              y jugar en la pc.
            </h4>
            <div className="d-flex container-actions mt-5">
              <div className="container-buttons">
                <Button href="#Servicios" className="p-3">
                  Get in touch
                </Button>

                <Button href="#Servicios" className="p-3">
                  Get in touch
                </Button>
              </div>
              <div className="btn-start-create">
                <a href="#dynamic-form">Start to create</a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
