<<<<<<< HEAD
import React from "react";
import axios from "axios";
import CardPublic from "../../Components/CardPublic";
import { useEffect, useState } from "react";
=======
import React, { useState, useEffect } from 'react'
import axios from 'axios'
>>>>>>> 38f261ba113c79c8559853dd1eaa93a28b61bc4d

export const Publications = ({}) => {
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
<<<<<<< HEAD
    axios.get(
      `https://newsapi.org/v2/top-headlines/sources?apiKey=73ad4b9c8b6b41ea83873ed4eeb61081&category=technology&category=science`
    ).then((response) => {
      const listNoticias = response.data
      setNoticias(listNoticias);
      console.log(noticias);
    });
  },[]);
   
  return (
    <div>
     <h1>hola</h1>
  </div>
  );
};
=======
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




>>>>>>> 38f261ba113c79c8559853dd1eaa93a28b61bc4d
