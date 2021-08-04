import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import axios from 'axios'
import '../style/current.css'

const CardCurrent = () => {

    const [women, setWomen] = useState([])

    useEffect(() => {

        axios.get(`http://localhost:3004/Current`)
            .then(res => {
                const listWomen = res.data;
                setWomen(listWomen);
            })

    }, [])
    return (
        <Container className="my-2">
            {

            }
            {
                women.map(ele => (
                    <Row key={ele.id} className="justify-content-center align-items-center">
                        <Col lg={6} md={12} className="mx-auto" >
                            <div className="tarjeta">
                                <div className="tarjeta-header">
                                    <div className="user">
                                        <img src={ele.image} alt="user" />
                                        <div className="user-info">
                                            <h5>{ele.name}</h5>
                                            <small>{ele.profession}</small>
                                        </div>
                                    </div>
                                </div>
                                <div className="tarjeta-body">
                                    <span className="tag tag-purple">{ele.area}</span>
                                    <p>
                                        {ele.contribution}
                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6} md={12} >
                            <iframe className="my-5" width="560" height="315" src={ele.video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </Col>
                    </Row>
                ))
            }
        </Container>
    )
}

export default CardCurrent
