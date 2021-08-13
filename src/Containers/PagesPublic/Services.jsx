import React from "react";
import { Container, Image, Row, Col } from "react-bootstrap";

export const Services = () => {
  return (
    <Container>
      <Row className="justify-content-around align-items-center">
        <Col md={6} sm={12}>
          <Container className="my-2">
            <Container>
              <h3>Asistencia Emocional</h3>
              <hr />
            </Container>
            <Container>
              <p className="text-parrafo">
                Aquí puedes encontrar un espacio donde puedes aprender sobre tus
                emociones y como muchas otras mujeres, han pasado por lo que
                puedes estar pasando ahora mismo.
              </p>
            </Container>
          </Container>
        </Col>
        <Col md={6} sm={12} >
          <Image
            className="image-services mx-auto d-block"
            src="https://res.cloudinary.com/academia/image/upload/v1628053881/emociona_tlmo1x.jpg"
            roundedCircle
          />
        </Col>
        <Col md={6} sm={12}>
          <Container className="my-2">
            <Container>
              <h3>Capacitaciones</h3>
              <hr />
            </Container>
            <Container>
              <p className="text-parrafo">
                Aquí podrás potenciar todas las habilidades técnicas y
                esenciales para crear un perfil más competitivo para la vida y
                el mercado laboral bajo lineamientos de autoaprendizaje y
                experiencia actuales.
              </p>
            </Container>
          </Container>
        </Col>
        <Col md={6} sm={12}>
          <Image
            className="image-services mx-auto d-block"
            src="https://res.cloudinary.com/academia/image/upload/v1628125746/capacitacion_tvzu20.jpg"
            roundedCircle
          />
        </Col>
        <Col md={6} sm={12}>
          <Container className="my-2">
            <Container>
              <h3>Puntos Claves</h3>
              <hr />
            </Container>
            <Container>
              <p className="text-parrafo">
                En esta sección encontraras los mejores consejos para que domines las entrevistas de trabajo,
                también los sitios web más usados para postularle a ofertas y lo más importarte como elaborar tu
                hoja de vida moderna, que esperas, registrate y descubre aquí las recomendaciones más actuales para obtener tu trabajo deseado.
              </p>
            </Container>
          </Container>
        </Col>
        <Col md={6} sm={12}>
          <Image
            className="image-services mx-auto d-block"
            src="https://res.cloudinary.com/academia/image/upload/v1628125748/tips_uephlo.jpg"
            roundedCircle
          />
        </Col>
      </Row>
    </Container>
  );
};
