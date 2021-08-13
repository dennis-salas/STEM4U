import React from 'react'
import { Container } from 'react-bootstrap'

const Interest = () => {
    return (
        <div>
           <h1>Enlaces de interes</h1>
      <p className="text-center">
        <em>
          En esta sección encontraras canales, podcast que te pueden ayudar
        </em>
      </p>
      <hr />
      <Container>
        <li>
          Este canal de encontraras podcast de temas muy variados sobre la mente{" "}
          <a href="https://www.youtube.com/channel/UCYxGNI8Au74jEMY5hZTyNgg" target="_blank">
            {" "}
            Entiende tu mente{" "}
          </a>
        </li>
        <li>
          ¿Cuántos años llevan diciendo que van a cambiar, ahorrar, viajar o
          bajar de pesa? Pero nada de eso pasa.{" "}
          <a href="https://youtu.be/dyjXSG-kVkk" target="_blank"> Podcast </a>
        </li>
        <li>
          Todos es Posible es el mensaje de Motivación Personal mas Poderoso y
          te recomendamos escucharle con Audifonos !!
          <a href="https://youtu.be/1XwTcRWT8AA" target="_blank">Todo es Posible</a>
        </li>
        <li>
          Todo lo recuperaré al doble, correré el riesgo porque todo lo que
          necesito ya lo llevo por dentro. !!
          <a href="https://youtu.be/F3G-_MahXyk" target="_blank">CORRERÉ EL RIESGO</a>
        </li>
        <li>
          En este podcast la Psicóloga Maria Elena Badillo te comparte con su
          toque único y amoroso claves esenciales para escucharte a ti misma,
          para amarte, elevar tu poder personal y tu esencia divina como la gran
          mujer que eres.
          <a href="https://youtu.be/gSotMaPlxIo" target="_blank">
            Mujer, eleva tu Poder Personal{" "}
          </a>
        </li>
        <li>
          Margarita nos habla sobre la importancia de controlar nuestro dialogo
          interior y como esto puede llevarnos al éxito o al fracaso.
          <a href="https://youtu.be/uhZzB5hid6M" target="_blank">
            Cambia tu mente, cambia tu vida{" "}
          </a>
        </li>
      </Container> 
        </div>
    )
}

export default Interest
