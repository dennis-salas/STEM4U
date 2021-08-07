import React from "react";
import { Container, Image, Row, Col } from "react-bootstrap";

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
            className="image-services"
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
              <p>
                Aqui podrás potenciar todas las habilidades tecnicas y
                esenciales para crear un perfil mas competitivo para la vida y
                el mercado laboral bajo lineamientos de autoaprendizaje y
                experiencia actuales.
              </p>
            </Container>
          </Container>
        </Col>
        <Col md={6} sm={12}>
          <Image
            className="image-services"
            src="https://res.cloudinary.com/academia/image/upload/v1628125746/capacitacion_tvzu20.jpg"
            roundedCircle
          />
        </Col>
        <Col md={6} sm={12}>
          <Container className="my-2">
            <Container>
              <h3>Puntos Clave</h3>
              <hr />
            </Container>
            <Container>
              <p>
              En esta seccion encontraras los mejores consejos para que domines las entrevistas de trabajo ,  
              tambien los sitios web mas usados para postularle a ofertas y lo mas importarte como elaborar tu 
              hoja de vida moderna, que esperas registrate y descubre aqui las recomendaciones mas actuales para obtener tu trabajo deseado
              </p>
            </Container>
          </Container>
        </Col>
        <Col md={6} sm={12}>
          <Image
            className="image-services"
            src="https://res.cloudinary.com/academia/image/upload/v1628125748/tips_uephlo.jpg"
            roundedCircle
          />
        </Col>
      </Row>
    </Container>
  );
};
