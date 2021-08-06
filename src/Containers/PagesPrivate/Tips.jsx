import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'

const Tips = () => {
    return (
        <Container>
            <Row>
                <Col md={3} sm={6}>
                    <img className="img.leftHV my-2" src="https://i.ibb.co/jV9grtJ/hoja-de-vida.jpg" alt="imagen" />
                </Col>
                <Col md={9} sm={6}>
                    <h1 className="my-2">Guia para crear</h1>
                    <hr />
                    <p className="textHV">Se dice que en promedio los reclutadores solo se detienen a ver una hoja de vida durante 7seg, con base a esto el 80% de las hojas de vida son descartadas porque contienen falta de ortografía o simplemente expone claramente las competencias que invitan a leer la hoja detenidamente, por ello es importante que elebores una hoja de vida con una estructura orientada hacia la vacante que te estas postulando, seleccionando las habiladades que te interesa destacar.</p>
                    <h5 className="subtitleHV">Para lograr ese primer objetivo responde las siguientes preguntas</h5>
                    <ul>
                        <li>¿Cual es la vacante que te estas postulando?</li>
                        <li>¿Que sabes hacer? </li>
                    </ul>
                </Col>

            </Row>
            <Row>
                <Col md={12} sm={12}>
                    <p>Respondiendo la primera pregunta tendras claros los objetivos que persigues con la empresa, y sabras de que forma expresar tus competencias.</p>
                    <p>Orienta la segunda respuesta enfatizando los conocimientos o habilidades especifícas que se requieren para realizar las tareas relacionadas a la vacante que estas aplicando de esta manera tendras mayor posibilidad de interesar al reclutador.</p>
                </Col>
            </Row>
            <Row>
                <h2>Tipos de hojas de vida</h2>
                <Col md={6} sm={12}>
                    <h5><li>Hoja de vida Cronológica</li></h5>
                    <p>En este tipo de hoja de vida se ordena la información segun su fecha desde la experiencia profesional mas reciente a la más antigua, sirve para demostrar tu evolución profesional, las empresas en las que has trabajado y el tiempo que permaneciste en ellas.</p>
                </Col>
                <Col md={6} sm={12}>
                    <h5><li>Hoja de vida Funcional</li></h5>
                    <p>En esta tipo de hoja agrupa la información por temas debes resaltar tus competencias, habilidades y logros, el incoveniente con este tipo de hoja es que oculta el tiempo en cada trabajo y no manifiesta las empresa en las que trabajaste</p>
                </Col>
            </Row>
            <Row>
                <h2>Secciones de la hoja de vida</h2>
                <Col md={3} sm={12}>
                    <h5>Datos Personales</h5>
                    <p>Los datos personales es lo primero que se debe mostrar </p>
                    <ul>
                        <li>Foto</li>
                        <li>Nombre Completo</li>
                        <li>Telefono de contacto (mínimo dos)</li>
                        <li>Correo electrónico</li>
                        <li>Ciudad</li>
                        <li>Carrera</li>
                        <li>Puesto a aplicar</li>
                    </ul>
                </Col>
                <Col md={3} sm={12}>
                    <h5>Formación academica</h5>
                    <p>Escribe solo el titulo de estudios maximo que tengas</p>
                    <ul>
                        <li>Nombre curso/diplomado/taller</li>
                        <li>Institución académica</li>
                        <li>Intensidad horaria</li>
                        <li>Fecha de certificación</li>
                    </ul>
                </Col>
                <Col md={3} sm={12}>
                    <h5>Experiencia laboral</h5>
                    <p>En esta sección menciona los puestos que has desempeñado y los lugares donde has estado. utiliza la formula: Meta + Acción ejeutada = Resultado; con ella daras a conocer tus habilidades e información relevante de manera concreta.</p>
                    <ul>
                        <li>Cargo desempeñado</li>
                        <li>Nombre de la empresa</li>
                        <li>Fecha de inicio y fin de labores</li>
                        <li>Funciones (en palabras clave)</li>
                    </ul>
                </Col>
                <Col md={3} sm={12}>
                    <h5>Información complementaria</h5>
                    <p>Coloca los idiomas y el porcentaje que tienes de dominio, asi como el manejo que tienes de informática entre otros.</p>
                    <ul>
                        <li>Competencias personales</li>
                        <li>Manejo de idiomas</li>
                        <li>Manejo de programas</li>
                    </ul>
                </Col>
            </Row>
        </Container >
    )
}

export default Tips
