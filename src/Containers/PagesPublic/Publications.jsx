import React from "react";
import axios from "axios";
import CardPublic from "../../Components/CardPublic";
import { useEffect, useState } from "react";

export const Publications = ({}) => {
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
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
