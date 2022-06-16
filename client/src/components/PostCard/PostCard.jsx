import React from "react";

import "./PostCard.css";
import { Link } from "react-router-dom";

export const PostCard = ({ post }) => {
  const { title, username, content, urlPhoto, likes, categories, date } = post;
  return (
    <Link to="/post" className="color animate__animated animate__fadeInUpBig animate__slow">
      <div className="row  mt-5 d-flex align-items-center mx-0">
        <div className="col-md-9 p-4 shadow-4 rounded-3 text-left">
          <div>
            <h2>{title}</h2>
            <p className="content-post">{content}</p>
          </div>

          <div className=" d-flex align-items-center justify-content-between">
            <div className="col-10 flex-row d-flex justify-content-start p-0">
              {/* RECIBIR ETIQUETAS E ITERAR */}
              <ul className="px-0 btn-postcard">
                <li
                  type="button"
                  className="btn btn-primary rounded-pill px-3 mr-2 mt-2"
                >
                  {categories}
                </li>
              </ul>
            </div>

            <div className="d-flex align-items-center justify-content-end col-md-2 px-0">
              <div>
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  className="bi bi-bookmark-plus"
                  viewBox="0 0 16 16"
                >
                  <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z" />
                  <path d="M8 4a.5.5 0 0 1 .5.5V6H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V7H6a.5.5 0 0 1 0-1h1.5V4.5A.5.5 0 0 1 8 4z" />
                </svg>
              </div>
              <div className="px-0 pl-md-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  className="bi bi-three-dots"
                  viewBox="0 0 16 16"
                >
                  <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3 d-none d-md-block">
          <img
            style={{ width: "100%" }}
            src={urlPhoto}
            alt=""
            className="img-fluid rounded-start"
          />
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
