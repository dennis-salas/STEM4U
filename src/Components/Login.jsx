import React from "react";
import { Form, Button, Container, Image } from "react-bootstrap";
import { useForm } from "../hook/useForm";
import "../style/loginS.css";
import { login, loginGoogle } from '../action/actions'
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";



const Login = () => {

  const dispatch = useDispatch();

  const loading = useSelector(state => state.uid)

  const [formValues, handleInputChange] = useForm({
    email: "",
    password: "",
  });

  const { email, password } = formValues;

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login(email, password))
    console.log(email, password);
  }


  const handleGoogleLogin = () => {
    dispatch(loginGoogle());
    console.log(dispatch(loginGoogle()))
  }
  return (
    <Container className="mt-5 mb-5">
      <Container className="mt-4 mb-4">
        <div className="login-root">
          <Form onSubmit={handleLogin} className="form-login">
            <Container className="row justify-content-center">
              <Image
                src="https://i.ibb.co/9nvRxgM/Logo-proyecto.png"
                alt="logo"
                className="logo"
                roundedCircle
              />
            </Container>
            <Form.Group className="mb-3 " controlId="formBasicEmail">
              <Form.Label>Email:</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Ingresa email"
                value={email}
                onChange={handleInputChange}
              />

              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Contraseña:</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Ingresa contraseña"
                value={password}
                onChange={handleInputChange}
              />

            </Form.Group>
            <Container>
              <Button
                className="btn"
                type="submit"
                disabled={loading}
              >
                Iniciar Sesion
              </Button>
              <img className="google-btn mx-4 mt-4" onClick={handleGoogleLogin} src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
            </Container>
            <Container className="auth__social-networks">
              <Container
                className="google-btn">
                <Container className="google-icon-wrapper">
                </Container>
              </Container>
            </Container>
            <Link
              to="/register"
            >
              No estas Registrado? click aqui
            </Link>
          </Form>
        </div>
      </Container>
    </Container>

  );
};

export default Login;
