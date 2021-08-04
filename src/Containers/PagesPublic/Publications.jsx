import React, { useState, useEffect } from 'react'
import axios from 'axios'


export const Publications = () => {
  const [noticias, setNoticias] = useState([])

  useEffect(() => {
    axios.get(`https://newsapi.org/v2/top-headlines/sources?apiKey=73ad4b9c8b6b41ea83873ed4eeb61081&category=technology&category=science`)
      .then(res => {
        const listNoticias = res.data.sources;
        setNoticias(listNoticias);
      })
  }, [])


  console.log(noticias)

  return (
    <div>
      {
        noticias.map(ele => (
          <div key={ele.id}>
            <h1>{ele.name}</h1>
          </div>
        ))
      }
    </div>


  )

}




