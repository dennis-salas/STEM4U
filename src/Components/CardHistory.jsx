import React, { useState, useEffect } from 'react'
import { Card, Container, Row, Col } from 'react-bootstrap'
import axios from 'axios'

const CardHistory = () => {

    const [women, setWomen] = useState([])

    useEffect(() => {

        axios.get(`http://localhost:3004/History`)
            .then(res => {
                const listWomen = res.data;
                setWomen(listWomen);
            })

    }, [])

    return (
        <Container>
            {
                women.map(ele => (
                    <Card className="my-5" key={ele.id}>
                        <Row className="justify-content-md-center align-items-center">
                            <Col md={4} sm={12}>
                                <Card.Img variant="top" src={ele.image} className="img-fluid mx-auto d-block" />
                            </Col>
                            <Col md={8} sm={12}>
                                <Card.Body>
                                    <Card.Title>{ele.name}</Card.Title>
                                    <hr className="line-purple" size={4} />
                                    <Card.Text><small className="text-muted">
                                        {ele.contribution}
                                    </small></Card.Text>
                                </Card.Body>
                            </Col>
                        </Row>
                    </Card>
                ))
            }
        </Container>
    )
}

export default CardHistory
