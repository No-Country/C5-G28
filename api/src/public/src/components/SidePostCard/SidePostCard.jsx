import React from "react";

const SidePostCard = () => {
  return (
    <div className="mt-4">
      <h5 className="text-left text-white">
        Recursos que todo Desarrollador Front-end debería tener en sus
        marcadores
      </h5>
      <div className="row  justify-content-start align-items-center px-0 mx-0 mt-3">
        <div className="col-1 col-lg-2 d-md-flex justify-content-start justify-content-lg-start px-0 d-none margin-right">
          <img
            src="https://i1.sndcdn.com/artworks-000582163358-xw0eap-t500x500.jpg"
            alt=""
            width="60"
            className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm "
          />
        </div>
        <div className="text-left">
          <p className="my-0 ">
            Por <strong className="">John Titor</strong>
          </p>
          <p className="text-white">Desarrollador Front-end</p>
        </div>
      </div>
    </div>
  );
};

export default SidePostCard;
