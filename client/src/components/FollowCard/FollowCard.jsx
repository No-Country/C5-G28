import React from "react";

const FollowCard = () => {
  return (
    <div>
      <div className="col-xl-12 row bg-light mt-2 col flex-row align-items-center justify-content-center justify-content-xl-start mx-0 py-4 pb-2 px-0">
        <div className="col-xl-2 col-md-6 mx-0 px-0 d-flex justify-content-center ">
          <img
            src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/film-the-big-lebowski-1998-the-dude-jeff-bridges-tops-pendleton-shawl-cardigan-1548360217.jpg?crop=0.545xw:1.00xh;0.312xw,0&resize=640:*"
            alt=""
            width="90"
            className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
          />
        </div>

        <div className="col-xl-5 col-12">
          <p className="text-center text-xl-left mb-0">
            <strong>Jeffrey Lebowski</strong>
          </p>
          <p className=" p-0 text-center text-xl-left">Desarrollador Backend</p>
        </div>

        <div
          type="button"
          className="btn btn-primary col-xl-3 col-5 rounded-pill d-flex align-items-center justify-content-center"
        >
          <div className="pr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-plus-lg"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
              />
            </svg>
          </div>
          <div>Seguir</div>
        </div>
      </div>
    </div>
  );
};

export default FollowCard;
