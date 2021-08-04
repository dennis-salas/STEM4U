import React from 'react'
import { Button } from 'react-bootstrap'
import { startLogout } from '../../action/actions'
import { useDispatch } from 'react-redux'
import '../../style/homePrivate.css'
import { Link } from 'react-router-dom'

const HomePrivate = () => {


    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(startLogout())
    }
    return (
        <div className="bodyHomePrivate">
            <div>
                <div className="header">
                    <div className="header__bg"></div>
                    <div className="header__logo">
                        <img className="logo" src="https://i.ibb.co/9nvRxgM/Logo-proyecto.png" alt="logo" />
                    </div>
                    <h1 className="header__title">
                        Llegará un momento en que la sociedad dejará atrás los estereotipos sobre nosotras
                    </h1>
                    <div className="header__log">
                        <Button className="header__log--text sesion" onClick={handleLogout} >Cerra Sesión
                        </Button>
                    </div>
                </div>
                <div className="about">
                    <div className="about__title">
                        <Link className="about__title--text" to="/Tips">Puntos Claves | </Link>
                        <Link className="about__title--text" to="/Training">Capcitación | </Link>
                        <Link className="about__title--text" to="/EmotionalAssistance"> Asistencia Emocional</Link>
                    </div>
                    <div className="about__text">
                        <p className="about__text--content">
                            Te damos la Bienvienida a nuestro un medio de centralización y divulgación de información de las areas STEM, aqui encontraras esas herramientas necesarias para formarte en cualquier area stem y los mejores tips de empleabilidad.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePrivate