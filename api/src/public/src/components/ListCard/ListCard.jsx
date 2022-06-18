import React from "react";

const ListCard = () => {
  return (
    <div className="row  border mt-5 d-flex align-items-center mx-0 col-12 col-xl-8 py-4 justify-content-center ">
      <div className="col-xl-5 d-flex flex-column justify-content-center align-content-center align-items-center text-center text-xl-left ">
        <h4>Lista 1</h4>
        <button
          type="button"
          className="btn btn-primary rounded-pill px-3 mt-2"
        >
          Ver lista
        </button>
      </div>
      <div className="d-none col-xl-7 d-xl-flex flex-column justify-content-center align-items-center align-content-center">
        <div>
          <img
            src="https://blog.wildix.com/wp-content/uploads/2020/06/react-logo.jpg"
            alt=""
            className="img-fluid rounded-start col-10"
          />
        </div>
        <p>5 elementos almacenados</p>
      </div>
    </div>
  );
};

export default ListCard;
