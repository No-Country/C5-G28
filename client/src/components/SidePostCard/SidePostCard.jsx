import React from "react";

const SidePostCard = () => {
  return (
    <div className="mt-4">
      <h5 className="text-left">
        Recursos que todo Desarrollador Front-end debería tener en sus
        marcadores
      </h5>
      <div className="row  justify-content-start align-items-center px-0 mx-0">
        <div className="col-1 col-lg-3 d-md-flex justify-content-start justify-content-lg-center px-0 d-none">
          <img
            src="https://i1.sndcdn.com/artworks-000582163358-xw0eap-t500x500.jpg"
            alt=""
            width="60"
            className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm "
          />
        </div>
        <div className="text-left">
          <p className="my-0 ">
            Por <strong>John Titor</strong>
          </p>
          <p>Desarrollador Front-end</p>
        </div>
      </div>
      <hr className="d-sm-block d-md-none" />
    </div>
  );
};

export default SidePostCard;
