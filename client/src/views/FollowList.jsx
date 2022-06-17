import React from "react";

import FollowCard from "../components/FollowCard/FollowCard";

const FollowList = () => {
  return (
    <div className="my-5">
      <div className="text-left">
        <h5>Personas a las que seguir</h5>
      </div>
      {/* <div className="col-md-12 column d-flex-column justify-content-center justify-content-md-between mx-0 px-0">
        <FollowCard />
        <FollowCard />
        <FollowCard />
      </div> */}
      <div className="row mx-0 px-0">
        <FollowCard />
      </div>
    </div>
  );
};

export default FollowList;
