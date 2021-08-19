import React, { useState, useEffect } from 'react'
import Header from '../../Components/Header'
import '../../style/services.css'
import axios from "axios";
import { Card, Form, Row, Col } from "react-bootstrap";
import '../../style/training.css'


const Training = () => {

    const [categories, setCategories] = useState([]);
    const [formValue, setFormValue] = useState('')

    useEffect(() => {
        axios.get(`http://localhost:3004/TrainingCategories`).then((res) => {
            const listCategories = res.data;
            setCategories(listCategories);
        });

    }, []);

    const handleInputChange = (e) => {
        setFormValue(
            e.target.value
        );
    }
    console.log(formValue)
    console.log(categories)

    const categoryFiltro = categories.filter(ele => ele.category.includes(formValue))
    console.log(categoryFiltro)

    return (
        <div>

            <Header />
            <h1>Capacitación</h1>
            <Row >
                <Col lg={6} md={12}>
                    <h1 className="text-center">Seleccione el área:</h1>
                    <Form >
                        <div className="col-3 mx-auto">
                            <select onChange={handleInputChange}>
                                <option>Seleccione un área</option>
                                <option value="Ciencias">Ciencias</option>
                                <option value="Tecnología">Tecnología</option>
                                <option value="Ingeniería">Ingeniería</option>
                                <option value="Matemáticas">Matemáticas</option>
                            </select>
                        </div>
                    </Form>
                </Col>
                {
                    formValue !== '' ? categoryFiltro.map(ele => (
                        <Col lg={6} md={12}>
                            <div className="card-training">
                                <div className="card-header-training">
                                    <img src={ele.img} alt={ele.name} className="img-fluid mx-auto d-block img-app" />
                                </div>
                                <div className="card-body-training">
                                    <span className="tag-training tag-purple-training">{ele.category}</span>
                                    <h4>
                                        {ele.name}
                                    </h4>
                                    <p>
                                        <Card.Link href={ele.enlace} target="_blank">Ver mas</Card.Link>
                                    </p>
                                </div>
                            </div>
                        </Col>
                    )) : categories.map(ele => (
                        <Col lg={6} md={12}>
                            <div className="card-training">
                                <div className="card-header-training">
                                    <img src={ele.img} alt={ele.name} className="img-fluid mx-auto d-block img-app" />
                                </div>
                                <div className="card-body-training">
                                    <span className="tag-training tag-purple-training my-2">{ele.category}</span>
                                    <h4>
                                        {ele.name}
                                    </h4>
                                    <p>
                                        <Card.Link href={ele.enlace} target="_blank">Ver mas</Card.Link>
                                    </p>
                                </div>
                            </div>
                        </Col>
                    ))
                }
            </Row>
        </div>
    )
}

export default Training
