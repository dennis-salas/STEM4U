import React from "react";
import { Container } from "react-bootstrap";
import Header from "../../Components/Header";
import Interest from "../../Components/Interest";
import Motivation from "../../Components/Motivation";
import Books from "../../Components/Books";
import {Forum} from "../../Components/Forum";
import { useState } from "react";
import '../../style/assistance.css'



const EmotionalAssistance = () => {
  const [categoryE, setCategoryE] = useState([])

  const handleClick = (categoryE) => {
      setCategoryE(categoryE)
  }
  return (
    <div>
      <Header />
      <h1>Asistencia Emocional</h1>
      <p className="text-center">
        <em>
        En esta sección encontraras un espacio, para compartir experiencias con otras mujeres, libros, podcast y canales.
        </em>
      </p>
      <hr />
      <Container className="forum" onClick={() => handleClick("Foro")}>
        <h3>Foro</h3>
        <hr />
          <img src="https://res.cloudinary.com/academia/image/upload/v1628697851/foro_oobi6q.jpg" className="img-foro" alt="foro"/>
      </Container>
      <Container>
                <div className="caja-Tips" onClick={() => handleClick("Motivacion")}>Motivación</div>
                <div className="caja-Tips" onClick={() => handleClick("Libros")}> Libros Recomendados</div>
                <div className="caja-Tips" onClick={() => handleClick("Enlaces")}> Enlaces de interes</div>
                {
                     categoryE === "Enlaces" ? <Interest /> : categoryE === "Libros" ? <Books /> : categoryE === "Motivacion" ? <Motivation /> : categoryE === "Foro" ? <Forum /> : console.log("no existe")
                }

            </Container>
    </div>
  );
};

export default EmotionalAssistance;
