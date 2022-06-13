import React from "react";
import { useEffect, useState } from "react";

import axios from "axios";

import PostCardList from "../components/PostCardList/PostCardList";

import "./css/MainPost.css";

const MainPost = (props) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [posts, setPosts] = useState();

  // const getPostData = async () => {
  //   const data = await fetch(
  //     "http://localhost:3001/api/post/categories/machine learning"
  //   );
  //   const response = await data.json();
  //   console.log(response.post);
  //   setPosts(response.post);
  //   setTimeout(() => {
  //     setIsLoaded(true);
  //   }, 3000);
  // };
  // getPostData();

  useEffect(() => {
    setIsLoaded(false);
    axios({
      method: "get",
      url: "http://localhost:3001/api/post/categories/machine learning",
    })
      .then((response) => {
        const { data } = response;
        return data.post;
      })
      .then((response) => {
        console.log(response);
        setPosts(response);
        setTimeout(() => {
          setIsLoaded(true);
        }, 4000);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
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
        {isLoaded ? <PostCardList posts={posts} /> : <div>CARGANDO...</div>}
      </div>
    </>
  );
};

export default MainPost;
