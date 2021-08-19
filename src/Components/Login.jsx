import React from "react";
import { Form, Button, Container, Image } from "react-bootstrap";
import { useForm } from "../hook/useForm";
import "../style/loginS.css";
import { loginEmailPassword, loginGoogle } from '../action/actions'
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
    dispatch(loginEmailPassword(email, password))
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
          <Form className="form-login" onSubmit={handleLogin}>
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
                className="btn w-100"
                type="submit"
                disabled={loading}
              >
                Iniciar sesión
              </Button>
              <Button
                onClick={handleGoogleLogin}
                className="btn w-100"
              >
                <img className="google-btn" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                <p className="text-white">Iniciar sesión con cuenta google</p>
              </Button>
            </Container>
            <Link
              to="/register"
            >
              <p className="link-register">No estas Registrada?</p>
            </Link>
          </Form >
        </div >
      </Container >
    </Container >

  );
};

export default Login;
