import React from 'react'
import { Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../style/footer.css'
export const Footer = () => {
    return (
        <footer className="container-fluid bg-grey py-2">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-md-6 ">
                                <div className="logo-part">
                                    <Image src="https://i.ibb.co/9nvRxgM/Logo-proyecto.png" className="w-50 logo-footer" roundedCircle />
                                    <p><i className="fa fa-location-arrow"></i> Academia Geek</p>
                                    <p><i className="fa fa-phone"></i>  +57 3107542173 - 3165715140  </p>
                                    <p><i className="fa fa fa-envelope"></i> info@stem4u.com  </p>
                                </div>
                            </div>
                            <div className="col-md-6 px-2">
                                <h6> Sobre nosotros</h6>
                                <p>Las mujeres tenemos mucho poder y usamos las tecnologías para vivir en igualdad.</p>
                                <a href="/Contact" className="btn-footer"> Contactanos</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-md-6 px-4">
                                <h6> Explorar</h6>
                                <div className="row ">
                                    <div className="col-md-6">
                                        <ul>
                                            <li> <Link to="/"> Inicio</Link> </li>
                                            <li> <Link to="Publications"> Publicaciones</Link> </li>
                                            <li> <Link to="/Services"> Servicios</Link> </li>
                                            <li> <Link to="/Stories"> Historia</Link> </li>
                                            <li> <Link to="/Contact"> Contacto</Link> </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 ">
                                <h6> Redes sociales</h6>
                                <div className="social">
                                    <Link ><i className="fa fa-facebook" aria-hidden="true"></i></Link>
                                    <Link ><i className="fa fa-instagram" aria-hidden="true"></i></Link>
                                </div>
                                <form className="form-footer my-2">
                                    <input type="text" placeholder="Busca aquí...." name="search" />
                                    <input type="button" value="Ir" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <p className="text-center">Copyright @2021 | Designed With by  <Link>Grupo STEM4U</Link></p>
        </footer>
    )
}
