import React from "react";
import { useEffect, useState } from "react";

import axios from "axios";

import PostCard from "../components/PostCard/PostCard";

import "./css/MainPost.css";

const MainPost = (props) => {
  const [post, setPost] = useState(true);

  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:3001/api/post/categories/machine learning",
    })
      .then((response) => {
        const { data } = response;
        setPost(data);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally((data) => {
        console.log(post);
      });
  }, []);

  return (
    <div className="mt-5 pb-5">
      <ul className="nav nav-tabs nav-post">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">
            Siguiendo
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Recomendados
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Novedades
          </a>
        </li>
      </ul>
      {/* SOLO CON FINES DEMOSTRATIVOS, ITERAR CANTIDAD DE CARDS NECESARIAS */}

      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
    </div>
  );
};

export default MainPost;
