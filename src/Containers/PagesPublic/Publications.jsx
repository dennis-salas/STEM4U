import React, { useState, useEffect } from 'react'
import CardPublic from '../../Components/CardPublic'
import axios from 'axios'

export const Publications = () => {
  const [noticias, setNoticias] = useState([]);
  useEffect(() => {
    axios.get("https://newsapi.org/v2/top-headlines?country=co&apiKey=73ad4b9c8b6b41ea83873ed4eeb61081")
      .then(res => {
        const listNoticias = res.data.articles;
        setNoticias(listNoticias);
      })
  }, [])

  console.log("un articulo", noticias[1])
  return (
    <div>
      <CardPublic noticias={noticias} />
    </div>
  )

}




