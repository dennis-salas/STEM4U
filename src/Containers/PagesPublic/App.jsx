import React from 'react'
import Slider from '../../Components/Slider'
import { Container, Row, Col, Image } from 'react-bootstrap'

const App = () => {
    return (
        <>
            <Slider />
            <Container className="my-2">
                <h1 className="text-center">BIENVENIDA A STEM4U</h1>
                <p className="text-center"><em>"Somos un medio de centralización y divulgación de información de las areas STEM."</em></p>
                <hr />
            </Container>
            <Row className="justify-content-center align-items-center">
                <Col lg={6} md={12}>
                    <Container className="my-2">
                        <Container>
                            <h4 className="text-center">¿QUE ES STEM?</h4>
                            <p className="text-parrafo">STEM es el acrónimo de Science, Technology, Engineering and Mathematics. Se trata de una integración de las ciencias en un enfoque de enseñanza basado en la interdisciplinaridad y aplicabilidad de los conocimientos de ciencias y matemáticas. Los proyectos y actividades propuestos bajo esa finalidad tienen como objetivo la aplicación del conocimiento científico y matemático en un contexto vinculado a la tecnología y la ingeniería.
                            </p>
                        </Container>
                        <Container>
                            <li className="text-parrafo">Mujer si estas interesada en pertenecer, actualizarte o conocer más sobre las areas de STEM.</li>
                            <li className="text-parrafo">Aqui vas a poder explorar, informarte, aprender sobre lo nuevo en Ciencia, Tecnología, Matemática e Ingenieria y el impacto que las Mujeres tienen en estas áreas.</li>
                            <li className="text-parrafo">Todo lo que quieres saber sobre Ciencia, Tecnologia, Ingenieria y Matemáticas que no te habias atrevido a preguntar está aquí, dirigido a ti, de la forma en la que lo necesitas.</li>
                            <li className="text-parrafo">Entra, Registrate, Explora, Informate, Aprende y has parte de la cumunidad global de mujeres en las áreas de STEM.</li>
                        </Container>
                    </Container>
                </Col >
                <Col lg={6} md={12} className="justify-content-center">
                    <Image src="https://i.ibb.co/VBP42JS/stem-1.jpg" className="rounded mx-auto d-block" />
                </Col>
            </Row >
        </>
    )
}

export default App
