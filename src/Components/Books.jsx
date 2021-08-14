import React from "react";
import "../style/books.css";
import { Container, Carousel} from "react-bootstrap";


const Books = () => {
  return (
    <Container>
      <h1>Motivación y Inteligencia Emocional</h1>
      <p className="text-center">
        <em>
          En esta sección encontraras libros sobre inteligencia emocional y motivación
        </em>
      </p>
      <hr />
      <Carousel fade>
        <Carousel.Item>
        <div className="image">
              <img
                src="https://res.cloudinary.com/academia/image/upload/v1628803293/emocional.jpg"
                alt=""
                className="img-slide"
              />
            </div>
          <Carousel.Caption>
          <h1 className="title">Los 7 habitos de las personas altamente efectivas</h1>
              <p>
                Básicamente, nuestro carácter está compuesto por nuestros
                hábitos. Los hábitos son factores poderosos en nuestras vidas.
              </p>
              <a
                href="https://www.colegiorudolfsteiner.edu.ec/pdf/Los-7-Habitos-de-las-Personas-Altamente-Efectivas.pdf"
                className="btn btn-primary"
                download="habitos"
                target="_blank"
              >
                descargar
              </a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <div className="image">
              <img
                src="https://res.cloudinary.com/academia/image/upload/v1628803293/emocional.jpg"
                alt=""
              />
            </div>
          <Carousel.Caption>
          <h1 className="title">titulo</h1>
              <p>
                Básicamente, nuestro carácter está compuesto por nuestros
                hábitos. Los hábitos son factores poderosos en nuestras vidas.
              </p>
              <a
                href="https://www.colegiorudolfsteiner.edu.ec/pdf/Los-7-Habitos-de-las-Personas-Altamente-Efectivas.pdf"
                className="btn btn-primary"
                download="habitos"
                target="_blank"
              >
                descargar
              </a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <div className="image">
              <img
                src="https://res.cloudinary.com/academia/image/upload/v1628516984/habitos-gente-efectiva-default_tkzlfx.jpg"
                alt=""
              />
            </div>

          <Carousel.Caption>
            <h1 className="title">titulo</h1>
              <p>
                Básicamente, nuestro carácter está compuesto por nuestros
                hábitos. Los hábitos son factores poderosos en nuestras vidas.
              </p>
              <a
                href="https://www.colegiorudolfsteiner.edu.ec/pdf/Los-7-Habitos-de-las-Personas-Altamente-Efectivas.pdf"
                className="btn btn-primary"
                download="habitos"
                target="_blank"
              >
                descargar
              </a>
          </Carousel.Caption>
          </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export default Books;
