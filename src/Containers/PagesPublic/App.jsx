import React from 'react'
import Slider from '../../Components/Slider'
import { Container, Row, Col, Image } from 'react-bootstrap'

const App = () => {
    return (
        <>
            <Slider />
            <Container className="my-2">
                <h3 className="text-center">BIENVENIDA A STEM4U</h3>
                <p className="text-center"><em>"Somos un medio de centralización y divulgación de información de las áreas STEM."</em></p>
                <hr />
            </Container>
            <Row className="justify-content-center align-items-center">
                <Col lg={6} md={12}>
                    <Container className="my-2">
                        <Container>
                            <h4 className="text-center-appHome">¿QUÉ ES STEM?</h4>
                            <p className="text-parrafo">STEM es el acrónimo de Science, Technology, Engineering and Mathematics. Se trata de una integración de las ciencias en un enfoque de enseñanza basado en la interdisciplinaridad y aplicabilidad de los conocimientos de ciencias y matemáticas. Los proyectos y actividades propuestos bajo esa finalidad tienen como objetivo la aplicación del conocimiento científico y matemático en un contexto vinculado a la tecnología y la ingeniería.
                            </p>
                        </Container>
                        <Container>
                            <li className="text-parrafo">Mujer si estas interesada en pertenecer, actualizarte o conocer más sobre las áreas de STEM.</li>
                            <li className="text-parrafo">Aquí vas a poder explorar, informarte, aprender sobre lo nuevo en Ciencia, Tecnología, Matemáticas e Ingeniería y el impacto que las Mujeres tienen en estas áreas.</li>
                            <li className="text-parrafo">Todo lo que quieres saber sobre Ciencia, Tecnología, Ingeniería y Matemáticas que no te habías atrevido a preguntar está aquí, dirigido a ti, de la forma en la que lo necesitas.</li>
                            <li className="text-parrafo">Entra, registrate, explora, informate, aprende y has parte de la comunidad global de mujeres en las áreas de STEM.</li>
                        </Container>
                    </Container>
                </Col >
                <Col lg={6} md={12}>
                    <Image src="https://i.ibb.co/tPzrFnD/stem-1.jpg" className="mx-auto d-block img-fluid img-app" />
                </Col>
            </Row >
        </>
    )
}

export default App
