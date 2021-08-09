import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import Header from '../../Components/Header'
import { Link } from 'react-router-dom'

const Tips = () => {
    return (
        <div>
            <Header />
            <Container>
                <Row>
                    <Col md={3} sm={6}>
                        <img className="mx-auto d-block img-fluid img-app" src="https://i.ibb.co/jV9grtJ/hoja-de-vida.jpg" alt="imagen" />
                    </Col>
                    <Col md={9} sm={6}>
                        <h1 className="my-2">Guía para crear tu hoja de vida</h1>
                        <hr />
                        <p className="text-parrafo">Se dice que en promedio los reclutadores solo se detienen a ver una hoja de vida durante 7seg, con base a esto el 80% de las hojas de vida son descartadas porque contienen falta de ortografía o simplemente expone claramente las competencias que invitan a leer la hoja detenidamente, por ello es importante que elebores una hoja de vida con una estructura orientada hacia la vacante que te estas postulando, seleccionando las habiladades que te interesa destacar.</p>
                        <h5 className="subtitleHV">Para lograr ese primer objetivo responde las siguientes preguntas</h5>
                        <ul>
                            <li>¿Cual es la vacante que te estas postulando?</li>
                            <li>¿Que sabes hacer? </li>
                        </ul>
                    </Col>

                </Row>
                <Row>
                    <Col md={12} sm={12}>
                        <p className="text-parrafo">Respondiendo la primera pregunta tendras claros los objetivos que persigues con la empresa, y sabras de que forma expresar tus competencias.</p>
                        <p className="text-parrafo">Orienta la segunda respuesta enfatizando los conocimientos o habilidades especifícas que se requieren para realizar las tareas relacionadas a la vacante que estas aplicando de esta manera tendras mayor posibilidad de interesar al reclutador.</p>
                    </Col>
                </Row>
                <Row>
                    <h1>Tipos de hojas de vida</h1>
                    <hr />
                    <Col md={6} sm={12}>
                        <h3>Hoja de vida Cronológica</h3>
                        <p className="text-parrafo">En este tipo de hoja de vida se ordena la información segun su fecha desde la experiencia profesional mas reciente a la más antigua, sirve para demostrar tu evolución profesional, las empresas en las que has trabajado y el tiempo que permaneciste en ellas.</p>
                    </Col>
                    <Col md={6} sm={12}>
                        <h3>Hoja de vida Funcional</h3>
                        <p className="text-parrafo">En esta tipo de hoja agrupa la información por temas debes resaltar tus competencias, habilidades y logros, el incoveniente con este tipo de hoja es que oculta el tiempo en cada trabajo y no manifiesta las empresa en las que trabajaste.</p>
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
                            <li>Telefono de contacto (mínimo dos)</li>
                            <li>Correo electrónico</li>
                            <li>Ciudad</li>
                            <li>Carrera</li>
                            <li>Puesto a aplicar</li>
                        </ul>
                    </Col>
                    <Col md={6} sm={12}>
                        <h3>Experiencia laboral</h3>
                        <p className="text-parrafo">En esta sección menciona los puestos que has desempeñado y los lugares donde has estado. utiliza la formula: Meta + Acción ejeutada = Resultado; con ella daras a conocer tus habilidades e información relevante de manera concreta.</p>
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
                        <h3>Formación academica</h3>
                        <p className="text-parrafo">Escribe solo el titulo de estudios maximo que tengas</p>
                        <ul>
                            <li>Nombre curso/diplomado/taller</li>
                            <li>Institución académica</li>
                            <li>Intensidad horaria</li>
                            <li>Fecha de certificación</li>
                        </ul>
                    </Col>
                    <Col md={6} sm={12}>
                        <h3>Información complementaria</h3>
                        <p className="text-parrafo">Coloca los idiomas y el porcentaje que tienes de dominio, asi como el manejo que tienes de informática entre otros.</p>
                        <ul>
                            <li>Competencias personales</li>
                            <li>Manejo de idiomas</li>
                            <li>Manejo de programas</li>
                        </ul>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col>
                        <h1>Guía para entrevistas de trabajos</h1>
                        <hr />
                        <h3>Haz tu tarea</h3>
                        <ul>
                            <li>Investiga sobre la plata y empresa que te entrevistará.</li>
                            <li>Solicita la descripción del puesto al que quieres aplicar</li>
                            <li>Pregunta por el nombre de tu entevistador</li>
                        </ul>
                        <h3>Crea una ruta</h3>
                        <p>Verifica el camino que tomarás y planea llegar al menos 15 minutos antes para que repases tus notas y puedas ir al baño. De ninguna manera llegues tarde o justo a tiempo a la cita.</p>
                        <h3>Documentación</h3>
                        <ul>
                            <li>Haz una lista de los documentos que te piden.</li>
                            <li>Lleva una identificación oficial</li>
                            <li>Busca que tus referencias sean lo más profesionales posibles. No necesariamente amigos, sino colegas exitosos, supervisores o jefes que has tenido en el pasado. No te preocupes sino las tienes. </li>
                            <li>Lleva una copia extra de tu hoja de vida.</li>
                        </ul>
                        <h3>Practicas tus respuestas</h3>
                        <p>Indentifica las habilidades que te harán destacar sobre otros candidatos y prepara una respuesta para aquellos aspectos que consideres débiles sobre tu hoja de vida </p>
                        <p>Considera lo siguiente:</p>
                        <ul>
                            <li>¿Cuáles son tus fortalezas y debilidades?</li>
                            <li>¿Por qué quieres trabajar ahi?</li>
                            <li>Por qué deberian contratarte?</li>
                            <li>¿Por qué dejaste tu último empleo?</li>
                        </ul>
                        <h3>Vestimenta</h3>
                        <ul>
                            <li>Una ropa limpia y planchada, con colores discretos</li>
                            <li>Verifica qu tu calzado este limpio y que sea de tipo cerrado</li>
                            <li>Presétate con el cabello bien peinado y con las uñas de las manos limpias</li>
                            <li>Usa un maquillaje discreto con colores suaves</li>
                            <li>Faldas y vestidos por la rodilla no cortos ni descotes</li>
                        </ul>
                        <h3>Durante la entrevista</h3>
                        <ul>
                            <li>Apaga tu celular.</li>
                            <li>Ten buena actitud.</li>
                            <li>Demuestra iniciativa y curiosidad.</li>
                            <li>Explica tu interés en la vacante.</li>
                            <li>En referencia al sueldo, permite la negciación.</li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Tips
