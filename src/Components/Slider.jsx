import React from 'react'
import { Carousel } from 'react-bootstrap'

const Slider = () => {
    return (
        <div>
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/gFFXWF7/Matem-tic.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Mujeres en la Matemática</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/yn5RKP8/Cientifica.jpg"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Mujeres en Ciencias</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/vjgt1r1/programadora.jpg"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Mujeres en Tecnología</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/XzdXm6P/ingeniera.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Mujeres en Ingenieria </h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Slider
