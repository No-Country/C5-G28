import React from "react";
import Preferences from "../Preferences/Preferences";

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
            <Preferences />
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
