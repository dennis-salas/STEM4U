
import React from "react";
import { Form, Button, Container, Image } from "react-bootstrap";
import '../style/loginS.css';

const Login = () => {
  return (
    <div className="login-root">
      <Form className="form-login">
        <Container>
          <Image src="https://i.ibb.co/9nvRxgM/Logo-proyecto.png" alt="logo" className="logo" roundedCircle/>
        </Container>
        <Form.Group className="mb-3 " controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button className="btn" type="submit">
          Iniciar Sesion
        </Button>
      </Form>
    </div>
  );
};

export default Login;
