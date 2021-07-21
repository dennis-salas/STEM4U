import React from 'react'
import { Button, Form, Container, Image} from 'react-bootstrap'
import '../style/loginS.css';

const Register = () => {
    return (
        <div className="login-root">
      <Form className="form-login">
        <Container>
          <Image src="https://i.ibb.co/9nvRxgM/Logo-proyecto.png" alt="logo" className="logo" roundedCircle/>
        </Container>
        <Form.Group className="mb-3 " controlId="formBasicName">
          <Form.Label>Nombres</Form.Label>
          <Form.Control type="text" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3 " controlId="formBasicEmail">
          <Form.Label>Apellido</Form.Label>
          <Form.Control type="text" placeholder="Enter lastname" />
        </Form.Group><Form.Group className="mb-3 " controlId="formBasicLastName">
          <Form.Label>Correo electronico</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group><Form.Group className="mb-3 " controlId="formBasicEmail">
          <Form.Label>Edad</Form.Label>
          <Form.Control type="number" placeholder="Enter age" />
        </Form.Group><Form.Group className="mb-3 ">
          <Form.Label>Telefono</Form.Label>
          <Form.Control type="phone" placeholder="Enter phone" />
        </Form.Group><Form.Group className="mb-3 ">
          <Form.Label>Ciudad</Form.Label>
          <Form.Control type="text" placeholder="Enter city" />
        </Form.Group>
        <Form.Group className="mb-3 ">
          <Form.Label>Dirección </Form.Label>
          <Form.Control type="text" placeholder="Enter address" />
        </Form.Group>
        <Form.Group className="mb-3 ">
          <Form.Label>Ocupación </Form.Label>
          <Form.Control type="text" placeholder="Enter occupation"/>
        </Form.Group>
        <Button className="btn" type="submit">
          Enviar
        </Button>
      </Form>
      </div>
    )
}

export default Register
