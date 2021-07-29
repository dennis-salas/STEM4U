import React, { useState, useEffect } from 'react'
import { Container, Button, Row, Col } from 'react-bootstrap'
import axios from 'axios'
import CardHistory from '../Components/CardHistory'
import CardCurrent from '../Components/CardCurrent'

export const Stories = () => {

    const [section, setSection] = useState([])
    const [type, setType] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:3004/category`)
            .then(res => {
                const listSection = res.data;
                setSection(listSection);
            })
    }, [])

    const handleClick = (name) => {
        setType(name)
        console.log(type)
    }

    return (
        <Container className="my-3">
            <Row >
                {
                    section.map(ele => (
                        <Col xs={6} key={ele.id}>
                            <Button className="btn-login btn"
                                onClick={() => handleClick(ele.name)}
                            >{ele.section}</Button>
                        </Col>
                    ))
                }
            </Row>
            {
                (type === History) ?
                    <CardHistory />
                    : <CardCurrent />
            }
        </Container>
    )
}
