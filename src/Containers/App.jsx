import React from 'react'
import Slider from '../Components/Slider'
import { Container } from 'react-bootstrap'

const App = () => {
    return (
        <>
            <Slider />
            <Container className="my-3">
                <h1 className="text-center">STEM4U Te da la bienvenida.</h1>
                <p className="text-center"><em>"Somos un medio de centralización y divulgación de información de las areas STEM."</em></p>
                <hr></hr>
                <Container>
                    <ul>
                        <li>Mujer si estas interesada en pertenecer, actualizarte o conocer más sobre las areas de STEM.</li>
                        <li>Aqui vas a poder explorar, informarte, aprender sobre lo nuevo en Ciencia, Tecnología, Matemática e Ingenieria y el impacto que las Mujeres tienen en estas áreas.</li>
                        <li>Todo lo que quieres saber sobre Ciencia, Tecnologia, Ingenieria y Matemáticas que no te habias atrevido a preguntar está aquí, dirigido a ti, de la forma en la que lo necesitas.</li>
                        <li>Entra, Registrate, Explora, Informate, Aprende y has parte de la cumunidad global de mujeres en las áreas de STEM.</li>
                    </ul>
                </Container>
                <Container>
                    <h1 className="text-center">¿Algunas se preguntarán que son las areas STEM?</h1>
                    <p className="text-parrafo">STEM es el acrónimo de Science, Technology, Engineering and Mathematics. Se trata de una integración de las ciencias en un enfoque de enseñanza basado en la interdisciplinaridad y aplicabilidad de los conocimientos de ciencias y matemáticas. Los proyectos y actividades propuestos bajo esa finalidad tienen como objetivo la aplicación del conocimiento científico y matemático en un contexto vinculado a la tecnología y la ingeniería.
                    </p>
                </Container>
            </Container>
        </>
    )
}

export default App
