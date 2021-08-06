import React from 'react'
import '../../style/homePrivate.css'
import { Link } from 'react-router-dom'
import Header from '../../Components/Header'

const HomePrivate = () => {

    return (
            <div>
                <Header/>
                <div className="about">
                    <div className="about__title">
                        <div className="links">
                            <Link className="about__title--text" to="/Tips">Puntos Claves | </Link>
                            <Link className="about__title--text" to="/Training">Capacitación | </Link>
                            <Link className="about__title--text" to="/EmotionalAssistance"> Asistencia Emocional</Link>
                        </div>
                    </div>
                    <div className=" container about__text">
                        <p className="about__text--content">
                            Te damos la Bienvienida a nuestro un medio de centralización y divulgación de información de las areas STEM, aqui encontraras esas herramientas necesarias para formarte en cualquier area stem y los mejores tips de empleabilidad.
                        </p>
                    </div>
                </div>
            </div>
        
    )
}

export default HomePrivate