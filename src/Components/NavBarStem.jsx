import React from 'react'
import { Navbar, Container, Nav, Image, Button, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const NavBarStem = () => {
    return (
        <div>
            <Navbar expand="lg">
                <Container >
                    <Navbar.Brand >
                        <Image src="https://i.ibb.co/9nvRxgM/Logo-proyecto.png" alt="logo" className="logo" roundedCircle />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" >
                        <Nav className="me-auto">
                            <Link className="nav-link" to="/">Inicio</Link>
                            <Link className="nav-link" to="/Publications">Publicaciones</Link>
                            <Link className="nav-link" to="/Services">Servicios</Link>
                            <Link className="nav-link" to="/Stories">Historias</Link>
                            <Link className="nav-link" to="/Contact">Contacto</Link>
                        </Nav>
                        <Nav>
                            <Link className="nav-link mb-4" to="/Register">
                                <Button className="btn-register me-3">
                                    Crear cuenta</Button>
                            </Link>
                            <Link className="nav-link mb-4" to="/Login">
                                <Button className="btn-login "> Acceder</Button>
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavBarStem;
