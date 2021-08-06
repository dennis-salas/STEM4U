import React from 'react'
import Header from '../../Components/Header'
import '../../style/services.css'

const Training = () => {
    return (
        <div>
            <Header/>
            <h1>Capacitación</h1>
            <div class="row services ms-5" >
                <div class="col-sm-4">
                    <h1>Seleccione el área:</h1>
                    <div class="custom-control custom-checkbox">
                        <input type="checkbox" class="custom-control-input" id="customCheck1" />
                        <label class="custom-control-label" for="customCheck1">Ciencias</label>
                    </div>
                    <div class="custom-control custom-checkbox">
                        <input type="checkbox" class="custom-control-input" id="customCheck1" />
                        <label class="custom-control-label" for="customCheck1">Tecnologias</label>
                    </div>
                    <div class="custom-control custom-checkbox">
                        <input type="checkbox" class="custom-control-input" id="customCheck1" />
                        <label class="custom-control-label" for="customCheck1">Ingenieria</label>
                    </div>
                    <div class="custom-control custom-checkbox">
                        <input type="checkbox" class="custom-control-input" id="customCheck1" />
                        <label class="custom-control-label" for="customCheck1">Matematicas</label>
                    </div>

                </div>
                <div class="col-sm-6">
                    <div class="container">
                        <div class="row col-xs-12">
                            <div class="card">
                                <img class="card-img-top" src="https://www.gob.mx/cms/uploads/image/file/469900/blog_CAPACITACI_N.png" alt="Card image cap" />
                                <div class="card-body">
                                    <h5 class="card-title">Matematicas</h5>
                                    <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                                </div>
                            </div>
                            <div class="card">
                                <img class="card-img-top" src="https://www.gob.mx/cms/uploads/image/file/469900/blog_CAPACITACI_N.png" alt="Card image cap" />
                                <div class="card-body">
                                    <h5 class="card-title">Tecnologias</h5>
                                    <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                                </div>
                            </div>
                            <div class="card">
                                <img class="card-img-top" src="https://www.gob.mx/cms/uploads/image/file/469900/blog_CAPACITACI_N.png" alt="Card image cap" />
                                <div class="card-body">
                                    <h5 class="card-title">Ingenieria</h5>
                                    <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                                </div>
                            </div>
                            <div class="card">
                                <img class="card-img-top" src="https://www.gob.mx/cms/uploads/image/file/469900/blog_CAPACITACI_N.png" alt="Card image cap" />
                                <div class="card-body">
                                    <h5 class="card-title">Ciencias</h5>
                                    <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Training
