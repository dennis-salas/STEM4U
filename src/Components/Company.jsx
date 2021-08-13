import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'

const Company = () => {
    return (
        <Container className="my-4">
            <Row>
                <Col md={3} sm={6}>
                    <img className="mx-auto d-block img-fluid img-app" src="https://i.ibb.co/1G05hXj/company.jpg" alt="imagen" />
                </Col>
                <Col md={9} sm={6}>
                    <h1>Investigación Empresarial</h1>
                    <p className="text-parrafo">Alguna de las cualidades más valoradas en el mundo empresarial son la fidelidad y el compromiso que tiene un empleado con los objetivos, metas y desarrollo de la empresa, donde labore, por esa razón es necesario que realices una investigación sobre la empresa en que vas  postularte, los aspectos más relevantes de la empresa como misión, visión, valores, directivos actuales entre otros, los aspectos externos de la empresa como su posicionamiento comercial, competencias, ventas realizadas o fluctuación de su economía, obten esta información por medio de herramientas como los motores de búsquedas de internet o una red de contactos confiable para asegurar la veracidad de la información, al mencionar estos datos en una entrevista lograras transmitir tu interés en ser parte de su equipo de trabajo mostrando el compromiso y fidelidad que podrías ofrecer a la empresa</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h3>Herramientas de investigación</h3>
                    <p className="text-parrafo">Es indispensable que utilices las herramientas correctas para investigar a la empresa con información confiable. Los buscadores son las herramientas principales para localizar páginas, documentos, noticias, imágenes o videos en internet. Para utilizarlos, sólo debes ingresar palabras clave de la información que necesitas en la caja de búsqueda y analizar los resultados arrojados. Toma en cuenta que:</p>
                    <ul>
                        <li>Estos están ordenados por grado de relevancia.</li>
                        <li>La caja de búsqueda cuenta con sugerencias que te facilitan el trabajo.</li>
                        <li>No todos los resultados estarán verdaderamente relacionados con el tema que investigas, por lo que debes analizarlos.</li>
                        <li>En la misma búsqueda puedes encontrar sitios, imágenes, videos, mapas y noticias.</li>
                        <li>Los resultados pueden filtrarse por región, idioma, fecha, tamaño, y otros parámetros.</li>
                        <li>Puedes obtenerse más resultados si pruebas con palabras claves.</li>
                        <li>Existen buscadores especializados que arrojan resultados sobre un mismo tema.</li>
                        <li>El historial de busquedas puede influir en los resultados que obtengas, para evitarlo, activa la opción modo incognito.</li>
                    </ul>
                </Col>
            </Row>
            <Row>
                <Col md={6} sm={6}>
                    <h3>¿Que buscar?</h3>
                    <p>La información más relevante que puedes encontrar en internet sobre una empresa es:</p>
                    <ul>
                        <li>Declaración de objetivos</li>
                        <li>Informes anuales</li>
                        <li>Bienes y servicios que ofrecen</li>
                        <li>Clientes</li>
                        <li>Preguntas frecuentes</li>
                        <li>Programas que patrocinan la empresa</li>
                    </ul>
                </Col>
                <Col md={6} sm={6}>
                    <h3>Red de contactos</h3>
                    <p className="text-parrafo">Las personas que trabajan o que están familiarizadas con la empresa, incluso sus competidores, son fuentes con información que no podrás encontrar en internet. Éstas pueden compartir contigo:</p>
                    <ul>
                        <li>Las últimas novedades</li>
                        <li>Tendencias</li>
                        <li>Actualizaciones</li>
                        <li>Metas de la empresa</li>
                    </ul>
                </Col>
            </Row>
            <Row>
                <h3>Investigación interna de la empresa</h3>
                <p className="text-parrafo">La investigación interna de la empresa esta constituida por la misión, visión, personas que la conforman y otros aspectos relevantes, para realizar una investigación de la empresa, informate sobre su giro, historia y actividades en su página web, esta información se encuentra regularmente en la sección acerca de nosotros, identifica el perfil de las vacantes publicadas para conocer las habilidades que requieren, puedes conseguir esta información en su bolsa de trabajo aunque no todas las empresas cuentan con una, investiga sobre el ambiente de trabajo, puedes consultar ranking en diversos sitios y publicaciones o en las redes sociales, busca noticias de la compañía así podras informarte sobre la rotación de los ejecutivos, lanzamientos de nuevos productos, premios que se le hallan otorgado y reportes de ingresos.</p>
            </Row>
        </Container>
    )
}

export default Company
