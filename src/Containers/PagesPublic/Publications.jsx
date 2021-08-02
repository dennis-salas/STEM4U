import React from "react";
import Axios from 'axios'
import { useEffect, useState } from "react";


export const Publications = () => {
  const [noticias, setNoticias] = useState([])

  useEffect(() => {
    Axios.get(`https://newsapi.org/v2/top-headlines/sources?apiKey=73ad4b9c8b6b41ea83873ed4eeb61081&category=technology&category=science`)
      .then(response => {
        setNoticias(response.data)
        console.log(noticias)


      })
  })


  return (
    <>
    HOLA BELLEZA
    </>


  )

}




