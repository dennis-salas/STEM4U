import React, { useState, useEffect } from "react";
import axios from "axios";
import "../style/cardPublic.css";
import { Card, Col, Container, Row } from "react-bootstrap";

const CardScience = () => {
  const [science, setScience] = useState([]);
  useEffect(() => {
    axios.get("https://newsapi.org/v2/top-headlines?country=co&category=science&apiKey=73ad4b9c8b6b41ea83873ed4eeb61081")
      .then(res => {
        const listScience = res.data.articles;
        setScience(listScience);
      })
  }, [])
  return (
    <Container>
      {science.map((ele) => (
        <Card className="cardPublic" key={ele.id}>
          <Row>
            <div className="card-text">
              <Col>
                <Card.Img
                  variant="top"
                  src={ele.urlToImage}
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
  )
}

export default CardScience
