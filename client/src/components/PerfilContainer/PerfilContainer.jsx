import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Perfil } from "../PerfilPost/Perfil";
import axios from "axios";

export const PerfilContainer = () => {
  const { id } = useParams();
  const [isLoaded, setIsLoaded] = useState(false);
  const [post, setPost] = useState({});
  const URL = REACT_APP_API_URL+"post/article/";

  const getPosts = (id) => {
    axios({
      method: "get",
      url: `${URL}${id}`,
    })
      .then((response) => {
        const { data } = response;
        setPost(data.post[0]);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    setIsLoaded(false);
    getPosts(id);
    setTimeout(() => {

      setIsLoaded(true);
    }, 2000);
  },[id]);

  return (
    <div>{isLoaded ? <Perfil post={post} /> : <div>CARGANDO...</div>}</div>
  );
};
