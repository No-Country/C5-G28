import React from "react";
import "./Preferences.css";

const Preferences = () => {
  return (
    <div className="row d-flex justify-content-center ">
      <h3 className="mb-2 px-2 font-weight-light">Tus preferidos</h3>
      <ul className="px-0 d-flex align-content-center align-items-center flex-wrap tag-preferences">
        {/* ITERAR SEGÚN PREFERENCIAS */}
        <li
          type="button"
          className="btn btn-primary mr-4 mb-1 rounded-pill px-3"
        >
          JavaScript
        </li>
        <li
          type="button"
          className="btn btn-primary mr-4 mb-1 rounded-pill px-3"
        >
          Python
        </li>
        <li
          type="button"
          className="btn btn-primary mr-4 mb-1 rounded-pill px-3"
        >
          UX/UI
        </li>
        <li
          type="button"
          className="btn btn-primary mr-4 mb-1 rounded-pill px-3"
        >
          Machine Learning
        </li>
        <li
          type="button"
          className="btn btn-primary mr-4 py-2 mb-1 rounded-pill px-3 "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            className="bi bi-arrow-bar-right"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M6 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L12.293 7.5H6.5A.5.5 0 0 0 6 8zm-2.5 7a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5z"
            />
          </svg>
        </li>
      </ul>
    </div>
  );
};

export default Preferences;