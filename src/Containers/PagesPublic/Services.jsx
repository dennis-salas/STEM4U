import React from "react";
import { Container, Image, Row, Col } from 'react-bootstrap'


export const Services = () => {
  return (
    <Container>
      <Row className="justify-content-center align-items-center">
        <Col md={6} sm={12}>
          <Container className="my-2">
            <Container>
              <h3>Asistencia Emocional</h3>
              <hr />
            </Container>
            <Container>
              <p>
                Aqui puedes encontrar un espacio donde puedes aprender sobre tus
                emociones y como muchas otras mujeres, han pasado por lo que
                puedes estar pasando ahora mismo.
              </p>
            </Container>
          </Container>
        </Col>
        <Col md={6} sm={12}>
          <Image
            src="https://res.cloudinary.com/academia/image/upload/v1628053881/emociona_tlmo1x.jpg"
            roundedCircle
          />
        </Col>
      </Row>
      </Container>
  );
};


