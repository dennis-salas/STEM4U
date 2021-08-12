import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Header from '../../Components/Header'
import '../../style/services.css'
import axios from "axios";
import { Card, Form } from "react-bootstrap";

const Training = () => {

    const [categories, setCategories] = useState([]);
    const [formValue, setFormValue] = useState({})

    useEffect(() => {
        axios.get(`http://localhost:3004/TrainingCategories`).then((res) => {
            const listCategories = res.data;
            setCategories(listCategories);
        });

    }, []);

    const handleInputChange = ({ target }) => {
        setFormValue({
            ...formValue,
            [target.name]: target.value
        });
    }
    console.log(formValue)

    return (
        <div>
            <Header />
            <h1>Capacitación</h1>
            <div className="row services ms-5" >
                <div className="col-sm-4">
                    <h1>Seleccione el área:</h1>
                    <Form >
                        <div onChange={handleInputChange}>
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" name="ciencias" value="ciencias" />
                                <label className="custom-control-label" for="customCheck1">Ciencias</label>
                            </div>
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" name="tecnologia" value="tecnologia" />
                                <label className="custom-control-label" for="customCheck1">Tecnologia</label>
                            </div>
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" name="ingenieria" value="ingenieria" />
                                <label className="custom-control-label" for="customCheck1">Ingeniería</label>
                            </div>
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" name="matematicas" value="matematicas" />
                                <label className="custom-control-label" for="customCheck1">Matemáticas</label>
                            </div>
                        </div>
                    </Form>
                </div>
                {
                    categories.map(ele => (
                        <div className="col-sm-6" key={ele.id}>
                            <div className="container">
                                <div className="row col-xs-12">
                                    <div className="card">
                                        <img className="card-img-top img-fluid" src={ele.img} alt="CardImage" />
                                        <div className="card-body">
                                            <h5 className="card-title">{ele.category}</h5>
                                            <p className="card-text">{ele.name}</p>
                                            <Card.Link target="_blank" href={ele.enlace}>Ver mas</Card.Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Training
