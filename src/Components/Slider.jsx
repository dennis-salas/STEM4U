import React from 'react'
import { Carousel } from 'react-bootstrap'

const Slider = () => {
    return (
        <div>
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block baner-img"
                        src="https://i.ibb.co/gFFXWF7/Matem-tic.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Mujeres en la Matemática</h3>
                        <p className="text-slider">He hecho muchas aventuras, desde rafting en aguas bravas hasta bungee jumping. Pero creo que lo más intrépido fue ser sede de los Premios Emmy. Fue abrumador, y definitivamente tuve que dejar el miedo en la puerta. </p>
                        <h3>Emmy Noether</h3>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block baner-img"
                        src="https://i.ibb.co/yn5RKP8/Cientifica.jpg"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Mujeres en Ciencias</h3>
                        <p className="text-slider">Llegará un momento en que la sociedad dejará atrás los estereotipos sobre nosotras</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block baner-img"
                        src="https://i.ibb.co/vjgt1r1/programadora.jpg"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Mujeres en Tecnología</h3>
                        <p className="text-slider">No estás sola! Siéntete parte de una gran comunidad de las mujeres en tecnología del mundo. Juntas superaremos todos los desafíos que vengan.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block baner-img"
                        src="https://i.ibb.co/XzdXm6P/ingeniera.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Mujeres en Ingenieria </h3>
                        <p className="text-slider">Nunca tendré miedo de exponer mis ideas, por más disparatadas que suenen</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Slider
