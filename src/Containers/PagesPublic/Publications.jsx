import React, { useState } from 'react'
import { Container } from "react-bootstrap";
import CardTecno from "../../Components/CardTecno";
import CardScience from "../../Components/CardScience";

export const Publications = () => {

  const [categories, setCategories] = useState([])

  const handleClick = (category) => {
    setCategories(category)
    console.log(category)
  }

  return (
    <Container className="my-3">
      <div Class="caja-Tips" onClick={() => handleClick("Tecnología")}>Tecnología</div>
      <div Class="caja-Tips" onClick={() => handleClick("Ciencias")}>Ciencias</div>
      {
        categories === "Tecnología" ? <CardTecno /> : <CardScience />
      }
    </Container>
  );
};
