import React from 'react'
import { Button, Form, Container, Image } from 'react-bootstrap'
import '../style/loginS.css';
import { useForm } from '../hook/useForm';
import { useDispatch } from 'react-redux';
import { registroUsuario } from '../action/actions'
import { Link } from 'react-router-dom';



const Register = () => {

  const dispatch = useDispatch();

  const [formValues, handleInputChange, reset] = useForm({
    nombres: "",
    apellidos: "",
    email: "",
    password: ""
  });

  const { nombres, apellidos, email, password } = formValues;

  const handleRegistro = (e) => {
    e.preventDefault();
    console.log(email, password, nombres, apellidos);
    dispatch(registroUsuario(email, password, nombres, apellidos));
    reset();
  };

  return (
    <Container className="mt-5 mb-5">
      <Container className="mt-4 mb-5">
        <div className="login-root">
          <Form className="form-login" onSubmit={handleRegistro}>
            <Container className="row justify-content-center">
              <Image src="https://i.ibb.co/9nvRxgM/Logo-proyecto.png" alt="logo" className="logo" roundedCircle />
            </Container>
            <Form.Group className="mb-3 " controlId="formBasicName">
              <Form.Label>Nombres</Form.Label>
              <Form.Control type="text" placeholder="Enter name" name="nombres" value={nombres} onChange={handleInputChange} />
            </Form.Group>
            <Form.Group className="mb-3 " controlId="formBasicEmail">
              <Form.Label>Apellidos</Form.Label>
              <Form.Control type="text" placeholder="Enter lastname" name="apellidos" value={apellidos} onChange={handleInputChange} />
            </Form.Group><Form.Group className="mb-3 " controlId="formBasicLastName">
              <Form.Label>Correo electronico</Form.Label>
              <Form.Control type="email" placeholder="Enter email" name="email" value={email} onChange={handleInputChange} />
            </Form.Group><Form.Group className="mb-3 ">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control type="password" name="password" placeholder="Enter password" value={password} onChange={handleInputChange} />
            </Form.Group>
            <Button className="btn" type="submit">
              Enviar
            </Button>
            <Link
              to="/login">
              Ya estas registrada? click aqui
            </Link>
          </Form>
        </div>
      </Container>
    </Container>
  )
}

export default Register
