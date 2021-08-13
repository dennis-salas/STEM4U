import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
const HV = () => {
    return (
        <Container className="my-4">
            <Row>
                <Col md={3} sm={6}>
                    <img className="mx-auto d-block img-fluid img-app" src="https://i.ibb.co/jV9grtJ/hoja-de-vida.jpg" alt="imagen" />
                </Col>
                <Col md={9} sm={6}>
                    <h1 className="my-2">Guía para crear tu hoja de vida</h1>
                    <hr />
                    <p className="text-parrafo">Se dice que en promedio los reclutadores solo se detienen a ver una hoja de vida durante 7seg, con base a esto el 80% de las hojas de vida son descartadas porque contienen falta de ortografía o simplemente expone claramente las competencias que invitan a leer la hoja detenidamente, por ello es importante que elabores una hoja de vida con una estructura orientada hacia la vacante que te estas postulando, seleccionando las habilidades que te interesa destacar.</p>
                    <h5 className="subtitleHV">Para lograr ese primer objetivo responde las siguientes preguntas</h5>
                    <ul>
                        <li>¿Cual es la vacante que te estas postulando?</li>
                        <li>¿Que sabes hacer? </li>
                    </ul>
                </Col>

            </Row>
            <Row>
                <Col md={12} sm={12}>
                    <p className="text-parrafo">Respondiendo la primera pregunta téndras claros los objetivos que persigues con la empresa, y sábras de que forma expresar tus competencias.</p>
                    <p className="text-parrafo">Orienta la segunda respuesta enfatizando los conocimientos o habilidades específicas que se requieren para realizar las tareas relacionadas a la vacante que estas aplicando de esta manera téndras mayor posibilidad de interesar al reclutador.</p>
                </Col>
            </Row>
            <Row>
                <h1>Tipos de hojas de vida</h1>
                <hr />
                <Col md={6} sm={12}>
                    <h3>Hoja de vida Cronológica</h3>
                    <p className="text-parrafo">En este tipo de hoja de vida se ordena la información según su fecha desde la experiencia profesional más reciente a la más antigua, sirve para demostrar tu evolución profesional, las empresas en las que has trabajado y el tiempo que permaneciste en ellas.</p>
                </Col>
                <Col md={6} sm={12}>
                    <h3>Hoja de vida Funcional</h3>
                    <p className="text-parrafo">En este tipo de hoja agrupa la información por temas debes resaltar tus competencias, habilidades y logros, el inconveniente con este tipo de hoja es que oculta el tiempo en cada trabajo y no manifiesta las empresas en las que trabajaste.</p>
                </Col>
            </Row>
            <Row>
                <h1>Secciones de la hoja de vida</h1>
                <hr />
                <Col md={6} sm={12}>
                    <h3>Datos Personales</h3>
                    <p className="text-parrafo">Los datos personales es lo primero que se debe mostrar </p>
                    <ul>
                        <li>Foto</li>
                        <li>Nombre Completo</li>
                        <li>Teléfono de contacto (mínimo dos)</li>
                        <li>Correo electrónico</li>
                        <li>Ciudad</li>
                        <li>Carrera</li>
                        <li>Puesto a aplicar</li>
                    </ul>
                </Col>
                <Col md={6} sm={12}>
                    <h3>Experiencia laboral</h3>
                    <p className="text-parrafo">En esta sección menciona los puestos que has desempeñado y los lugares donde has estado. Utiliza la formula: Meta + Acción ejecutada = Resultado; con ella darás a conocer tus habilidades e información relevante de manera concreta.</p>
                    <ul>
                        <li>Cargo desempeñado</li>
                        <li>Nombre de la empresa</li>
                        <li>Fecha de inicio y fin de labores</li>
                        <li>Funciones (en palabras clave)</li>
                    </ul>
                </Col>
            </Row>
            <Row>
                <Col md={6} sm={12}>
                    <h3>Formación académica</h3>
                    <p className="text-parrafo">Escribe solo el titulo de estudios máximo que tengas</p>
                    <ul>
                        <li>Nombre curso/diplomado/taller</li>
                        <li>Institución académica</li>
                        <li>Intensidad horaria</li>
                        <li>Fecha de certificación</li>
                    </ul>
                </Col>
                <Col md={6} sm={12}>
                    <h3>Información complementaria</h3>
                    <p className="text-parrafo">Coloca los idiomas y el porcentaje que tienes de dominio, así como el manejo que tienes de informática entre otros.</p>
                    <ul>
                        <li>Competencias personales</li>
                        <li>Manejo de idiomas</li>
                        <li>Manejo de programas</li>
                    </ul>
                </Col>
            </Row>
            <h3>Claves a tener en cuenta</h3>
            <ul>
                <li>Deber ser máximo 2 páginas</li>
                <li>Debe estar perfilado de acuerdo a la vacante.</li>
                <li>En la hoja de vida no se deben incluir datos que no se puedan defender en la entrevista.</li>
                <li>Reglas de las C: claro, corto, concreto, confiable, coherente y convincente.</li>
            </ul>
        </Container>
    )
}

export default HV
