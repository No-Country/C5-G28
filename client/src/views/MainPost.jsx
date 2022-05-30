import React from "react";

import PostCard from "../components/PostCard/PostCard";

const MainPost = (props) => {
  return (
    <div className="mt-5 pb-5">
      <ul class="nav nav-tabs">
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
