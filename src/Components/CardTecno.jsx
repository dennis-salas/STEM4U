import React, { useState, useEffect } from 'react'
import { Card, Col, Container, Row } from "react-bootstrap";
import "../style/cardPublic.css";
import axios from 'axios'

const CardTecno = () => {

  const [tecnology, setTecnology] = useState([]);

  useEffect(() => {
    axios.get("https://newsapi.org/v2/top-headlines?country=co&category=technology&apiKey=73ad4b9c8b6b41ea83873ed4eeb61081")
      .then(res => {
        const listTecnology = res.data.articles;
        setTecnology(listTecnology);
      })
  }, [])


  return (
    <Container>
      <h1>Noticias en tecnología</h1>
      {tecnology.map((ele) => (
        <Card className="cardPublic" key={ele.id}>
          <Row>
            <div className="card-text">
              <Col>
                <Card.Img
                  variant="top"
                  src={ele.urlToImage}
                  alt={ele.title}
                  className="portada"
                />
              </Col>
              <div className="title-total">
                <div className="title">{ele.author}</div>
                <h2>{ele.title}</h2>
                <div className="desc">
                  {ele.description}
                  <hr />
                  <Card.Link target="_blank" href={ele.url}>Ver mas</Card.Link>
                </div>
              </div>
            </div>
          </Row>
        </Card>
      ))}
    </Container>
  );
};
export default CardTecno;
