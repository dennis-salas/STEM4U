<<<<<<< HEAD
import React from "react";
import { Container, Image, Row, Col } from 'react-bootstrap'


export const Services = () => {
  return (
    <Container>
      <Row className="justify-content-center align-items-center">
        <Col md={6} sm={12}>
          <Container className="my-2">
            <Container>
              <h3>Asistencia Emocional</h3>
              <hr />
            </Container>
            <Container>
              <p>
                Aqui puedes encontrar un espacio donde puedes aprender sobre tus
                emociones y como muchas otras mujeres, han pasado por lo que
                puedes estar pasando ahora mismo.
              </p>
            </Container>
          </Container>
        </Col>
        <Col md={6} sm={12}>
          <Image
            src="https://res.cloudinary.com/academia/image/upload/v1628053881/emociona_tlmo1x.jpg"
            roundedCircle
          />
        </Col>
      </Row>
      </Container>
  );
};
=======
import React from 'react'
import '../../style/services.css'

export const Services = () => {
    return (
            <div class="row services ms-5" >
                <div class="col-sm-4">
                    <h1>Seleccione el área:</h1>
                    <div class="custom-control custom-checkbox">
                        <input type="checkbox" class="custom-control-input" id="customCheck1" />
                        <label class="custom-control-label" for="customCheck1">Ciencias</label>
                    </div>
                    <div class="custom-control custom-checkbox">
                        <input type="checkbox" class="custom-control-input" id="customCheck1" />
                        <label class="custom-control-label" for="customCheck1">Tecnologias</label>
                    </div>
                    <div class="custom-control custom-checkbox">
                        <input type="checkbox" class="custom-control-input" id="customCheck1" />
                        <label class="custom-control-label" for="customCheck1">Ingenieria</label>
                    </div>
                    <div class="custom-control custom-checkbox">
                        <input type="checkbox" class="custom-control-input" id="customCheck1" />
                        <label class="custom-control-label" for="customCheck1">Matematicas</label>
                    </div>

                </div>
                <div class="col-sm-6">
                    <div class="container">
                        <div class="row col-xs-12">
                            <div class="card">
                                <img class="card-img-top" src="https://www.gob.mx/cms/uploads/image/file/469900/blog_CAPACITACI_N.png" alt="Card image cap" />
                                <div class="card-body">
                                    <h5 class="card-title">Matematicas</h5>
                                    <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                                </div>
                            </div>
                            <div class="card">
                                <img class="card-img-top" src="https://www.gob.mx/cms/uploads/image/file/469900/blog_CAPACITACI_N.png" alt="Card image cap" />
                                <div class="card-body">
                                    <h5 class="card-title">Tecnologias</h5>
                                    <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                                </div>
                            </div>
                            <div class="card">
                                <img class="card-img-top" src="https://www.gob.mx/cms/uploads/image/file/469900/blog_CAPACITACI_N.png" alt="Card image cap" />
                                <div class="card-body">
                                    <h5 class="card-title">Ingenieria</h5>
                                    <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                                </div>
                            </div>
                            <div class="card">
                                <img class="card-img-top" src="https://www.gob.mx/cms/uploads/image/file/469900/blog_CAPACITACI_N.png" alt="Card image cap" />
                                <div class="card-body">
                                    <h5 class="card-title">Ciencias</h5>
                                    <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
    )
}
>>>>>>> 38f261ba113c79c8559853dd1eaa93a28b61bc4d
