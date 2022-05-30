import React from "react";

const Usercard = () => {
  return (
    <div className="col bg-light border py-4">
      <div className="row col-md-12 d-flex align-items-center">
        <div className="col-md-9 col-lg-12 col-xl-9">
          <div className="my-4 text-center text-md-left">
            <h2 className="mb-0">BIENVENIDO RAPHAEL</h2>
            <h5 className="mt-0">Desarrollador Front-end React</h5>
          </div>
          <div className="d-none d-md-block text-center text-md-left">
            <h3 className="mb-2">Tus preferidos</h3>
            <ul className="px-0">
              {/* ITERAR SEGÚN PREFERENCIAS */}
              <li type="button" className="btn btn-primary mr-4 mb-1">
                JavaScript
              </li>
              <li type="button" className="btn btn-primary mr-4 mb-1">
                Python
              </li>
              <li type="button" className="btn btn-primary mr-4 mb-1">
                UX/UI
              </li>
              <li type="button" className="btn btn-primary mr-4 mb-1">
                Machine Learning
              </li>
            </ul>

            <div type="button" className="btn btn-primary mr-4 py-2 mt-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                className="bi bi-arrow-bar-right"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M6 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L12.293 7.5H6.5A.5.5 0 0 0 6 8zm-2.5 7a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5z"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="col-md-3 d-flex justify-content-center d-lg-none d-xl-block">
          <img
            src="https://4bgowik9viu406fbr2hsu10z-wpengine.netdna-ssl.com/wp-content/uploads/2020/03/Portrait_5-1.jpg"
            alt=""
            width="160"
            className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
          />
        </div>
      </div>

      <div className="row col-md-12 d-flex justify-content-between mt-4 text-center text-md-left">
        <h5 className="col-md-9">Desarrollo Front-end</h5>
        <h5 className="col-md-3 text-center">
          Progreso - <strong>46%</strong>
        </h5>
      </div>
    </div>
  );
};

export default Usercard;
