import React from "react";
import "../style/books.css";
import { Container, Carousel } from "react-bootstrap";

const Books = () => {
  return (
    <Container>
      <h1>Motivación y Inteligencia Emocional</h1>
      <p className="text-center">
        <em>
          En esta sección encontraras libros sobre inteligencia emocional y
          motivación
        </em>
      </p>
      <hr />
      <Carousel fade>
        <Carousel.Item>
          <div className="image text-center">
            <img
              src="https://res.cloudinary.com/academia/image/upload/v1628979498/poder_confiar_yjsdcd.jpg"
              alt=""
              className="img-slide"
            />
          </div>
          <Carousel.Caption>
            <h1 className="title">El poder de confiar en ti</h1>
            <p>
              El poder de confiar en ti te invita
              a convertirte en tu propio coach y a ser tu propio guía con pautas
              y ejercicios para que aprendas a sentirte bien y a hacer realidad
              tus verdaderos deseos y aspiraciones.
            </p>
            <a
              href="https://drive.google.com/file/d/1Pl9F_Bkeo0tVNi2lh8LK28JlnwYovpoU/view"
              className="btn btn-primary"
              download="habitos"
              target="_blank"
              rel="noopener"
            >
              descargar
            </a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="image text-center">
            <img
              src="https://res.cloudinary.com/academia/image/upload/v1628803293/emocional.jpg"
              alt=""
            />
          </div>
          <Carousel.Caption>
            <h1 className="title">La inteligencia emocional</h1>
            <p>
              Goleman nos descubre que existen formas distintas de ser
              inteligente y tiene que ver más con la auto-conciencia, el control
              de los impulsos, la persistencia, el entusiasmo, la empatía, la
              auto-motivación o las habilidades sociales que con los
              coeficientes intelectuales.
            </p>
            <a
              href="https://ciec.edu.co/wp-content/uploads/2017/08/La-Inteligencia-Emocional-Daniel-Goleman-1.pdf"
              className="btn btn-primary"
              download="habitos"
              target="_blank"
            >
              descargar
            </a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="image text-center">
            <img
              src="https://res.cloudinary.com/academia/image/upload/v1628516984/habitos-gente-efectiva-default_tkzlfx.jpg"
              alt=""
            />
          </div>

          <Carousel.Caption>
            <h1 className="title">
              Los 7 habitos de las personas altamente efectivas
            </h1>
            <p>
              Básicamente, nuestro carácter está compuesto por nuestros hábitos.
              Los hábitos son factores poderosos en nuestras vidas.
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
          <div className="image text-center">
            <img
              src="https://res.cloudinary.com/academia/image/upload/v1628986093/411BED6jDbL_zpa9wi.jpg"
              alt=""
              className="img-slide"
            />
          </div>
          <Carousel.Caption>
            <h1 className="title">El espiritu creativo</h1>
            <p>
              El espíritu creativo es algo más que una iluminación ocasional o un suceso caprichoso.
              Cuando se despierta, el espíritu creativo anima un estilo de ser: una vida llena del deseo de innovar,
              de explorar nuevas formas de acometer tareas y de convertir sueños en realidad.
            </p>
            <a
              href="https://drive.google.com/file/d/15ppDdE6US8qKD2Xgd2l5wTRDxSiRr855/view?usp=sharing"
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
