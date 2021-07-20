import React from 'react'
import { Navbar, Container, Nav, Image, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const NavBarStem = () => {
    return (
        <div>
            <Navbar>
                <Container>
                    <Navbar.Brand >
                        <Image src="https://i.ibb.co/9nvRxgM/Logo-proyecto.png" alt="logo" className="logo" roundedCircle/>
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <Link className="nav-link" to="/">Inicio</Link>
                        <Link className="nav-link" to="/Publications">Publicaciones</Link>
                        <Link className="nav-link" to="/Services">Servicios</Link>
                        <Link className="nav-link" to="/Stories">Historias</Link>
                        <Link className="nav-link" to="/Contact">Contacto</Link>
                        <Link className="nav-link"> 
                        <Button className="btn-register me-3"> Crear cuenta</Button>
                        <Button className="btn-login"> Acceder</Button>
                        </Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavBarStem;
