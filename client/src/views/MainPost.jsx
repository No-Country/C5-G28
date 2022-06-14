import React from "react";
import { useEffect, useState } from "react";

import axios from "axios";

import PostCardList from "../components/PostCardList/PostCardList";

import "./css/MainPost.css";

const MainPost = (props) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [posts, setPosts] = useState(false);
  const [path, setPath] = useState("");
  const [active, setActive] = useState();
  const URL = "http://localhost:3001/api/post";

  const getPosts = (path) => {
    console.log(path);
    axios({
      method: "get",
      url: `${URL}${path}`,
    })
      .then((response) => {
        const { data } = response;

        return data.post.slice(0, 4);
      })
      .then((response) => {
        setPosts(response);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // const prueba = (path) => {
  //   // if (e.target.classList.contains("nav-link")) {
  //   // const id = e.target.id;
  //   // e.target.classList.add("active");
  //   getPosts(path);
  //   console.log("soy un nav");
  //   // }
  // };

  useEffect(() => {
    getPosts(path);
    setTimeout(() => {
      setIsLoaded(true);
    }, 4000);
  }, [path]);

  return (
    <>
      <div className="mt-5 pb-5">
        <ul className="nav nav-tabs nav-post">
          <li className="nav-item">
            <a
              className="nav-link "
              aria-current="page"
              href="#"
              onClick={() => {
                setPath("/categories/machine learning");
              }}
            >
              Siguiendo
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="#"
              onClick={() => {
                setPath("/categories/React");
              }}
            >
              Recomendados
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link active"
              href="#"
              onClick={() => {
                setPath("");
              }}
            >
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
