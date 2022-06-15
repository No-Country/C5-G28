import React from "react";
import { useEffect, useState, useContext } from "react";
import { StoreContext } from "../store/storeProvider";
import { types } from "../store/storeReducer";

import axios from "axios";

import PostCardList from "../components/PostCardList/PostCardList";

import "./css/MainPost.css";

const MainPost = (props) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [posts, setPosts] = useState(false);
  const [path, setPath] = useState("");
  const [active, setActive] = useState();
  const { user, dispatch } = useContext(StoreContext);
  const URL = "http://localhost:3001/api/post";

  // console.log(user);

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

  useEffect(() => {
    getPosts(path);
    setTimeout(() => {
      console.log(posts);
      setIsLoaded(true);
    }, 4000);
  }, [path]);

  const prueba = () => {
    console.log("soy una prueba");
    try {
      axios
        .put("http://localhost:3001/api/auth/edit", {
          _id: "62a09cab39698a3e860f33b7",
          username: "juniorcoderbook",
          email: "juniorcoderbook@gmail.com",
          preferences: [{ categories: "JavaScript" }, { categories: "React" }],
        })
        .then((res) => {
          let { _id, token, userName, urlProfile, preferences } = res.data.post;
          dispatch(
            preferencesState(_id, token, userName, urlProfile, [...preferences])
          );
          console.log(preferences);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const preferencesState = (id, token, userName, urlProfile, preferences) => {
    return {
      type: types.authPreferences,
      payload: {
        id: id,
        token: token,
        userName: userName,
        urlProfile: urlProfile,
        preferences: preferences,
      },
    };
  };

  return (
    <>
      <div className="mt-5 pb-5">
        <ul className="nav nav-tabs nav-post">
          <li className="nav-item">
            <a
              className="nav-link "
              aria-current="page"
              href="#"
              onClick={prueba}
            >
              Siguiendo
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="#"
              onClick={() => {
                setPath("/preferences");
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
