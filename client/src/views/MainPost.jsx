import React,{useContext} from "react";

import PostCard from "../components/PostCard/PostCard";
import { StoreContext } from "../store/storeProvider";
import "./css/MainPost.css";

const MainPost = (props) => {
  const {user} = useContext(StoreContext);
  console.log(user);
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
