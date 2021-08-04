import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import "../style/cardPublic.css";



const CardPublic = ({noticias}) => {
 const {id, urlToImage,category,name, description, url}= noticias;

 
  return (
    <Container>
        
           
              <Card className="cardPublic" >
              <Row>
              <div className="card-text">
              <Col>
                  <Card.Img variant="top" src={urlToImage} className="portada"/>
              </Col>
                  <div className="title-total">
                    <div className="title">{category}</div>
                    <h2>{name}</h2>
                    <div className="desc">
                     {description}
                      <hr />
                      <Card.Link href={url}></Card.Link>
                    </div>
                  </div>
                </div>
                </Row>
                </Card>
    </Container>
)
}
export default CardPublic;
