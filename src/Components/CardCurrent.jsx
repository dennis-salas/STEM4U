import React, { useState, useEffect } from 'react'
import { Card, Container, Row, Col } from 'react-bootstrap'
import axios from 'axios'

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
                women.map(ele => (
                    <Row key={ele.id} className="justify-content-md-center align-items-center">
                        <Col xs={6}>
                            <Card style={{ width: '18rem' }} className="my-5">
                                <Card.Img variant="top" src={ele.image} />
                                <Card.Body>
                                    <Card.Title>{ele.name}</Card.Title>
                                    <Card.Text>
                                        {ele.contribution}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={6}>
                            <iframe className="my-5" width="560" height="315" src={ele.video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </Col>
                    </Row>
                ))
            }
        </Container>
    )
}

export default CardCurrent
