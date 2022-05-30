import React from "react";

const EventsCard = () => {
  return (
    <div className="row bg-light border mt-5 d-flex align-items-center mx-0 text-center text-md-left">
      <div className="col-md-5">
        <img
          style={{ width: "100%" }}
          src="https://res.cloudinary.com/practicaldev/image/fetch/s--HLY8DYqm--/c_imagga_scale,f_auto,fl_progressive,h_1080,q_auto,w_1080/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/beddis55yiwtrptixyar.jpg"
          alt="Trendy Pants and Shoes"
          className="img-fluid rounded-start"
        />
      </div>
      <div className="col-md-7 p-4 shadow-4 rounded-3">
        <div>
          <h5>
            <strong>Aprende REACT</strong>
          </h5>
          <p className="my-0">Comienza en 20 minutos</p>
          <p>Organizado por: User2504</p>
        </div>
        <div className="col-12 flex-row d-flex justify-content-center justify-content-md-start">
          <div
            type="button"
            className="btn btn-primary d-flex align-items-center"
          >
            <div className="pr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                class="bi bi-box-arrow-in-right"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z"
                />
                <path
                  fill-rule="evenodd"
                  d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"
                />
              </svg>
            </div>
            <div>Ver evento</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsCard;
