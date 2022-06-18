import React from "react";

const PostCardMini = (img,username) => {
  return (
    <div className="mt-4">
      <div className="row  justify-content-start align-items-center px-0 mx-0 mt-3">
        <div className="col-1 col-lg-2 d-md-flex justify-content-start justify-content-lg-start px-0 d-none margin-right">
          <img
            src={img ? img : "https://i1.sndcdn.com/artworks-000582163358-xw0eap-t500x500.jpg"}
            alt="profile"
            width="60"
            className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm "
          />
        </div>
        <div className="text-left">
          <p className="my-0 ">
            Por <strong className="">{username}</strong>
          </p>
          <p className="text-white">Desarrollador</p>
        </div>
      </div>
    </div>
  );
};

export default PostCardMini;
