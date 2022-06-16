import React from "react";
import { useParams, useEffect, useState } from "react-router-dom";
import { Perfil } from "../PerfilPost/Perfil";
import axios from "axios";

const PerfilContainer = () => {
  const { _id } = useParams();
  const [isLoaded, setIsLoaded] = useState(false);
  const [post, setPost] = useState(true);
  const URL = "http://localhost:3001/api/post/article/";

  const getPosts = (id) => {
    axios({
      method: "get",
      url: `${URL}${id}`,
    })
      .then((response) => {
        const { data } = response;

        return data.post;
      })
      .then((response) => {
        setPost(response);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    setIsLoaded(false);
    getPosts(_id);
    setTimeout(() => {
      setIsLoaded(true);
    }, 2000);
  }, []);

  return (
    <div>{isLoaded ? <Perfil post={post} /> : <div>CARGANDO...</div>}</div>
  );
};

export default PerfilContainer;
