import React from 'react'
import { Container, Col, Row, Image } from 'react-bootstrap'

const WorkIterview = () => {
    return (
        <Container className="my-2">
            <Row>
                <h1>Guía para entrevistas de trabajos</h1>
                <hr />
                <Col md={4} sm={12}>
                    <h3 className="my-2">Haz tu tarea</h3>
                    <ul>
                        <li>Investiga sobre la plata y empresa que te entrevistará.</li>
                        <li>Solicita la descripción del puesto al que quieres aplicar</li>
                        <li>Pregunta por el nombre de tu entrevistador</li>
                    </ul>
                    <h3 className="my-2">Crea una ruta</h3>
                    <hr />
                    <p className="text-parrafo">Verifica el camino que tomarás y planea llegar al menos 15 minutos antes para que repases tus notas y puedas ir al baño. De ninguna manera llegues tarde o justo a tiempo a la cita.</p>
                    <h3 className="my-2">Documentación</h3>
                    <hr />
                    <ul>
                        <li>Haz una lista de los documentos que te piden.</li>
                        <li>Lleva una identificación oficial</li>
                        <li>Busca que tus referencias sean lo más profesionales posibles. No necesariamente amigos, sino colegas exitosos, supervisores o jefes que has tenido en el pasado. No te preocupes sino las tienes. </li>
                        <li>Lleva una copia extra de tu hoja de vida.</li>
                    </ul>
                </Col>
                <Col md={4} sm={12}>
                    <Image src="https://i.ibb.co/0j1Jbyd/entrevista-de-trabajo.jpg" alt="mujer" className="mx-auto d-block img-fluid" />
                    <h3 className="my-2">Durante la entrevista</h3>
                    <hr />
                    <ul>
                        <li>Apaga tu celular.</li>
                        <li>Ten buena actitud.</li>
                        <li>Demuestra iniciativa y curiosidad.</li>
                        <li>Explica tu interés en la vacante.</li>
                        <li>En referencia al sueldo, permite la negociación.</li>
                    </ul>
                </Col>
                <Col md={4} sm={12}>
                    <h3 className="my-2">Practica tus respuestas</h3>
                    <hr />
                    <p className="text-parrafo">Indentificá las habilidades que te harán destacar sobre otros candidatos y prepara una respuesta para aquellos aspectos que consideres débiles sobre tu hoja de vida </p>
                    <p className="text-parrafo">Considera lo siguiente:</p>
                    <ul>
                        <li>¿Cuáles son tus fortalezas y debilidades?</li>
                        <li>¿Por qué quieres trabajar ahí?</li>
                        <li>Por qué deberían contratarte?</li>
                        <li>¿Por qué dejaste tu último empleo?</li>
                    </ul>
                    <h3 className="my-2">Vestimenta</h3>
                    <hr />
                    <ul>
                        <li>Una ropa limpia y planchada, con colores discretos</li>
                        <li>Verifica que tu calzado este limpio y que sea de tipo cerrado</li>
                        <li>Preséntate con el cabello bien peinado y con las uñas de las manos limpias</li>
                        <li>Usa un maquillaje discreto con colores suaves</li>
                        <li>Faldas y vestidos por la rodilla no cortos ni descotes</li>
                    </ul>
                </Col>
            </Row>
        </Container>
    )
}

export default WorkIterview
