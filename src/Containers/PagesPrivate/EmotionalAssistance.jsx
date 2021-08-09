import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Header from "../../Components/Header";

const EmotionalAssistance = () => {
  return (
    <div>
      <Header />
      <h1>Asistencia emocional</h1>
      <Container className="forum">
        <h3>Foro</h3>
      </Container>
      <Container className="motivacion">
        <h3>Motivación y Inteligencia Emocional</h3>
        <Row>
          <Col xs={6} md={4}>
            <figure class="effect-marley">
              <img src="https://res.cloudinary.com/academia/image/upload/v1628516984/habitos-gente-efectiva-default_tkzlfx.jpg" />
              <figcaption>
                <h4>Sinopsis:</h4>
                <p>
                  Básicamente, nuestro carácter está compuesto por nuestros
                  hábitos. Los hábitos son factores poderosos en nuestras vidas.
                  Dado que son pautas consistentes, a menudo inconscientes, de
                  modo constante y cotidiano expresan nuestro carácter y generan
                  nuestra efectividad… o inefectividad. Según dijo alguna vez el
                  gran educador Horace Mann: “Los hábitos son como hebras. Si
                  día tras día las trenzamos en una cuerda, pronto resultará
                  irrompible”.
                </p>
              </figcaption>
            </figure>
          </Col>
          <Col xs={6} md={4}>
            <figure class="effect-marley">
              <img src="https://res.cloudinary.com/academia/image/upload/v1628516984/habitos-gente-efectiva-default_tkzlfx.jpg" />
              <figcaption>
                <h4>sweet marley</h4>
                <p>Marley tried to convince her but she was not interested.</p>
              </figcaption>
            </figure>
          </Col>
          <Col xs={6} md={4}>
            <figure class="effect-marley">
              <img src="https://res.cloudinary.com/academia/image/upload/v1628516984/habitos-gente-efectiva-default_tkzlfx.jpg" />
              <figcaption>
                <h4>sweet marley</h4>
                <p>Marley tried to convince her but she was not interested.</p>
              </figcaption>
            </figure>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default EmotionalAssistance;
