import React from "react";
import { Form, Button, Container, Image } from "react-bootstrap";
import { useForm } from "../hook/useForm";
import "../style/loginS.css";
import { startLoginEmailPassword, loginGoogle} from '../actions'
import { useDispatch } from "react-redux";



const Login = () => {

  const dispatch = useDispatch(); 

  const [formValues, handleInputChange] = useForm({
    email: "",
    password: "",
  });

  const { email, password } = formValues;

  const handleLogin = (e) =>
  {
    e.preventDefault();
    dispatch(startLoginEmailPassword(email, password))
    console.log(email, password);;
  }

  
  const handleGoogleLogin=()=>{
    dispatch(loginGoogle());
    console.log(dispatch(loginGoogle()))
   }
  return (
    <div className="login-root">
      <Form onSubmit={handleLogin}  className="form-login">
        <Container>
          <Image
            src="https://i.ibb.co/9nvRxgM/Logo-proyecto.png"
            alt="logo"
            className="logo"
            roundedCircle
          />
        </Container>
        <Form.Group className="mb-3 " controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control 
          type="email" 
          name= "email"
          placeholder="Enter email" 
          value = {email}
          onChange= {handleInputChange}
          />
          
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control 
          type="password" 
          name ="password"
          placeholder="Password" 
          value = {password}
          onChange ={handleInputChange}
          />
          
        </Form.Group>
        <Button className="btn" type="submit">
          Iniciar Sesion
        </Button>
        <Container className="auth__social-networks">
          <Container
            className="google-btn">
            <Container className="google-icon-wrapper">
              <img className="google-btn" onClick={handleGoogleLogin} src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
            </Container>
          </Container>
        </Container>
      </Form>
    </div>
  );
};

export default Login;
