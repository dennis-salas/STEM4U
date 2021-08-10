import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'

const Brand = () => {
    return (
        <Container className="my-4">
            <Row>
                <Col md={4} sm={6}>
                    <img className="mx-auto d-block img-fluid img-app" src="https://i.ibb.co/t8QnTwj/1-9.jpg" alt="imagen" />
                </Col>
                <Col md={8} sm={6}>
                    <h1>Cómo desarrollar tu marca personal</h1>
                    <hr />
                    <h3>¿Qué es la marca personal?</h3>
                    <p className="text-parrafo">La Marca Personal es la manera en que te perciben el resto de personas gracias a cada acción que llevas a cabo, comunicas y transmites a diario tanto en el entorno digital como offline. Tu marca personal es importante. Indispensable. Representa tu visión, actitud y sincronía con tu vida profesional. Te abrirá puertas. </p>
                    <p className="text-parrafo">¿Qué sucede? ¿Por qué hay una percepción negativa sobre esto? ¿Por qué no me contratan o me ascienden?. Los mejores puestos, o los más interesantes, no se los dejan a personas que encuentran "aleatoriamente" en un CV u hoja de vida. Se los dan a los que percibieron en su rango de atención. Las empresas se pelean a profesionales de los que han leído, visto o que los ayudaron con alguna situación particular. Se busca desesperadamente a individuos que sean interesantes, congruentes y a quienes puedan confiarles responsabilidades más grandes por toda la atracción y actitud que tienen. Los directivos saben que al incorporar personas destacadas en sus equipos, el valor de una organización aumenta. No por el nivel de popularidad que este tenga, sino por la filosofía que esta persona trae consigo. Cuando trabajas con gente así, inevitablemente la imitarás y les irá mucho mejor a todos. ¿Cuántas personas son extraordinarias? ¿Cuántas llevan siempre a un nivel alto sus acciones? No te estoy pidiendo que seas famoso. Sólo enfoca la perspectiva. No seas del promedio. Accede a un nivel superior en personas, lugares, eventos, responsabilidades, etc. Con una actitud fulminante y positiva hacia tu sector. Muestra al mundo un propósito concreto, plasmado en lo que hacen día a día tus productos y servicios. Te prometo que todo lo que quieras ser, llegará naturalmente bajo este método.</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h3>Pasos para construir tu marca personal</h3>
                    <ol>
                        <li className="text-parrafo">Define tus objetivos: Una correcta estrategia de marca personal se inicia y debe iniciarse con la definición de los objetivos, la definición de tus objetivos será la primera tarea. Los objetivos son de muy diversa naturaleza y pueden comenzar respondiendo preguntas como las siguientes:
                            <ul>
                                <li>¿Qué objetivos profesionales deseas?</li>
                                <li>¿Hasta dónde quieres llegar?</li>
                                <li>¿Conseguir nuevo empleo, clientes…?</li>
                                <li>¿Generar nuevas oportunidades, contactos…?</li>
                                <li>¿Dónde estarás en tres años?</li>
                            </ul>
                        </li>
                        <li className="text-parrafo">Determina tu público objetivo: Definir quién es tu público objetivo te ayudará a generar no solo un buen contenido sino el correcto para lograr tus metas.</li>
                        <li className="text-parrafo">Define tu mensaje y tu tono de comunicación: Uno de los principios y consejos para desarrollar tu marca personal es el uso de palabras e idea simples para transmitir el mensaje. Siempre siendo totalmente fiel a ti mismo describiendo realmente quien eres. Se positivo, abierto, motiva a tu público con el fin de generar confianza y con ello fidelidad tu marca.</li>
                        <li className="text-parrafo">Planifica tus acciones: Hasta ahora hemos pensado, identificando, diagnosticado y creado el armazón de tu marca persona pero… ¡Ya ha llegado la hora de pasar a la acción! Una marca personal no crece sola, ha de estar en continuo movimiento. Todo el movimiento de tu marca personal ha de estar guiado bajo una planificación de determinadas acciones. La planificación de las acciones debe estar unida a una constancia inquebrantable orientada a alcanzar los objetivos deseados.</li>
                    </ol>
                </Col>
            </Row>
        </Container>
    )
}

export default Brand
