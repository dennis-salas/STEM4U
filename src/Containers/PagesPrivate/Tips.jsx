import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import Brand from '../../Components/Brand'
import Company from '../../Components/Company'
import Header from '../../Components/Header'
import HV from '../../Components/HV'
import LinkedIn from '../../Components/LinkedIn'
import WorkIterview from '../../Components/WorkIterview'
import '../../style/tips.css'

const Tips = () => {

    const [category, setCategory] = useState([])

    const handleClick = (category) => {
        setCategory(category)
    }
    return (
        <div>
            <Header />
            <Container>
                <div Class="caja-Tips" onClick={() => handleClick("Hoja de vida")}>Hoja de vida</div>
                <div Class="caja-Tips" onClick={() => handleClick("Entrevista de trabajo")}>Entrevista de trabajo</div>
                <div Class="caja-Tips" onClick={() => handleClick("LinkedIn")}>LinkedIn</div>
                <div Class="caja-Tips" onClick={() => handleClick("Marca Personal")}>Marca Personal</div>
                <div Class="caja-Tips" onClick={() => handleClick("Investigación Empresarial")}>Investigación Empresarial</div>
                {
                    category === "Investigación Empresarial" ? <Company /> : category === "Marca Personal" ? <Brand /> : category === "LinkedIn" ? <LinkedIn /> : category === "Entrevista de trabajo" ? <WorkIterview /> : category === "Hoja de vida" ? <HV /> : console.log("no existe")
                }

            </Container>
        </div>
    )
}

export default Tips
