import React from 'react'
import '../style/footer.css'
export const Footer = () => {
    return (
        <footer class="container-fluid bg-grey py-5">
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <div class="row">
                            <div class="col-md-6 ">
                                <div class="logo-part">
                                    <img src="https://i.ibb.co/9nvRxgM/Logo-proyecto.png" class="w-50 logo-footer" />
                                    <p><i class="fa fa-location-arrow"></i> Academia Geek</p>
                                    <p><i class="fa fa-phone"></i>  +57 3107542173 - 3165715140  </p>
                                    <p><i class="fa fa fa-envelope"></i> info@stem4u.com  </p>
                                </div>
                            </div>
                            <div class="col-md-6 px-4">
                                <h6> Sobre nosotros</h6>
                                <p>Las mujeres tenemos mucho poder y usamos las tecnologías para vivir en igualdad.</p>
                                <a href="/Contact" class="btn-footer"> Contactanos</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="row">
                            <div class="col-md-6 px-4">
                                <h6> Explorar</h6>
                                <div class="row ">
                                    <div class="col-md-6">
                                        <ul>
                                            <li> <a href="/"> Inicio</a> </li>
                                            <li> <a href="Publications"> Publicaciones</a> </li>
                                            <li> <a href="/Services"> Servicios</a> </li>
                                            <li> <a href="/Stories"> Historia</a> </li>
                                            <li> <a href="/Contact"> Contacto</a> </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 ">
                                <h6> Redes sociales</h6>
                                <div class="social">
                                    <a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a>
                                    <a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a>
                                </div>
                                <form class="form-footer my-3">
                                    <input type="text" placeholder="Busca aquí...." name="search" />
                                    <input type="button" value="Ir" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <p class="text-center">Copyright @2021 | Designed With by  <a href="#">Grupo STEM4U</a></p>
        </footer>
    )
}
