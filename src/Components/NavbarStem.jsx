import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'

const NavbarStem = () => {
    return (
        <div>
            <Navbar bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="#home">STEM</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link>Inicio</Nav.Link>
                        <Nav.Link>Publicaciones</Nav.Link>
                        <Nav.Link>Servicios</Nav.Link>
                        <Nav.Link>Contacto</Nav.Link>
                        <Nav.Link>Historias</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavbarStem
