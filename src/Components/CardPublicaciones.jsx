import React from "react";
import { Card, Figure } from "react-bootstrap";
import '../style/cardPublicaciones.css';

const CardPublicaciones = () => {
   
  return (
    <div>
      <h1>Noticias resaltantes de las areas STEM</h1>
      <Card className="card__content">
        <Figure>
        <Card.Img variant="top" src="https://www.masscience.com/wp-content/uploads/2021/06/Staphylococcus-Aureus.jpeg" />
        </Figure>
        <Card.Body>
          <Card.Title>Efectos en los organismos causados por Staphylococcus Aureus</Card.Title>
          <Card.Text>
          EFECTOS EN LOS ORGANISMOS CAUSADOS POR STAPHYLOCOCCUS AUREUS. UNIVERSIDAD NACIONAL AUTÓNOMA DE MÉXICO UNIVERSIDAD ST JOHN´S STAPHYLOCOCCUS AUREUS RESISTENCIA A 
          LOS ANTIBIÓTICOS GUTIÉRREZ SAUCEDO JAKELINE.1 ARCERO CASTAÑEDA GUILLERMO.1 ESPINOZA ECHEVERRÍA
          </Card.Text>
          <Card.Link href="#">Ver mas</Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardPublicaciones;
