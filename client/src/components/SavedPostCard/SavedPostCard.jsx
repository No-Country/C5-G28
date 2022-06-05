import React from "react";

const SavedPostCard = () => {
  return (
    <div className="row  mt-5 d-flex align-items-center mx-0 border mb-5">
      <div className="col-md-4 d-none d-md-block">
        <img
          style={{ width: "100%" }}
          src="https://media.istockphoto.com/photos/positive-woman-video-calling-using-laptop-at-home-picture-id1333405308?k=20&m=1333405308&s=612x612&w=0&h=dVMykfJjxolA8Pu0-narX694yHAWSZyZerKvvI6XfCA="
          alt="Trendy Pants and Shoes"
          className="img-fluid rounded-start"
        />
      </div>
      <div className="col-md-8 p-4 shadow-4 rounded-3 text-left">
        <div>
          <h3>¿Cuál es la diferencia entre UX y UI?</h3>
          <p>
            Lorem ipsum algo blablabla yeah já nope ipsumalgo blablabla yeah ajá
            ea opa nope ipsum algo blablabla yeah já
          </p>
        </div>
        <div className="d-flex row justify-content-start align-items-center mb-2 col-12">
          <div className=" mx-0 px-2 d-flex justify-content-center ">
            <img
              src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/film-the-big-lebowski-1998-the-dude-jeff-bridges-tops-pendleton-shawl-cardigan-1548360217.jpg?crop=0.545xw:1.00xh;0.312xw,0&resize=640:*"
              alt=""
              width="30"
              className="d-none d-sm-flex img-fluid rounded-circle m-0 shadow-sm"
            />
          </div>
          <p className="my-0 text-left">
            Publicación de <strong>Jeffrey Lebowsky</strong>
          </p>
        </div>

        <div className=" d-flex align-items-center justify-content-between">
          <div className="col-12 col-xl-10 flex-row d-flex justify-content-start p-0">
            <button
              type="button"
              className="btn btn-primary rounded-pill px-3 mr-2 mt-2"
            >
              Añadir a una lista
            </button>
            <div className="btn btn-primary rounded-pill px-3 mr-2 mt-2 d-flex flex-column justify-content-center">
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
    </div>
  );
};

export default SavedPostCard;
