import React from "react";
import { useEffect, useState, useContext } from "react";
import { StoreContext } from "../store/storeProvider";
import { types } from "../store/storeReducer";
import { PreferencesContext } from "../store/PreferencesContext";

import axios from "axios";

import PostCardList from "../components/PostCardList/PostCardList";

import "./css/MainPost.css";

const MainPost = (props) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [posts, setPosts] = useState(false);
  const { preference } = useContext(PreferencesContext);
  const [path, setPath] = useState(`/categories/${preference}`);
  const [active, setActive] = useState("Novedades");
  const URL = "http://localhost:3001/api/post";

  const getPosts = (path) => {
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

  useEffect(() => {
    active === "Recomendados"
      ? setPath(`/categories/${preference}`)
      : setPath("");

    setIsLoaded(false);
    getPosts(path);
    setTimeout(() => {
      setIsLoaded(true);
    }, 2000);
  }, [path, preference, active]);

  return (
    <>
      <div className="mt-5 pb-5 animate__animated animate__fadeInUpBig animate__slow">
        <ul className="nav nav-tabs nav-post">
          <li className="nav-item">
            <button
              className={`${
                active === "Novedades" ? "nav-link active" : "nav-link"
              }`}
              href="#"
              onClick={() => {
                setActive("Novedades");
              }}
            >
              Novedades
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`${
                active === "Recomendados" ? "nav-link active" : "nav-link"
              }`}
              href="#"
              onClick={() => {
                setActive("Recomendados");
              }}
            >
              Recomendados
            </button>
          </li>
        </ul>
        {isLoaded ? <PostCardList posts={posts} /> : <div>CARGANDO...</div>}
      </div>
    </>
  );
};

export default MainPost;
