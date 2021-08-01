import React from "react";
import Axios from 'axios'
import CardPublicaciones from "../../Components/CardPublicaciones";
import { useEffect, useState } from "react";


export const Publications = () => {
  const [noticias, setNoticias] = useState([])

  useEffect(() => {
    Axios.get('https://newsapi.org/v2/everything?q=keyword&apiKey=73ad4b9c8b6b41ea83873ed4eeb61081')
      .then(response => {
        setNoticias(response.data)
        console.log(noticias)


      })
  })


  return (
    <CardPublicaciones noticias={noticias} />


  )

}




