import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import "../style/cardPublic.css";

const CardPublic = ({ noticias }) => {
  const {
  author, 
  description, 
  title,
  url,
  urlToImage,
  } = noticias;
  

 
 
  return (
    <Container>
      { noticias.map((ele) => (
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
                  <Card.Link href={ele.url}>Ver mas</Card.Link>
                </div>
              </div>
            </div>
          </Row>
        </Card>
      ))}
    </Container>
  );
};
export default CardPublic;
