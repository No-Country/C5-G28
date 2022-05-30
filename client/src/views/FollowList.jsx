import React from "react";

import FollowCard from "../components/FollowCard/FollowCard";

const FollowList = () => {
  return (
    <div className="my-5">
      <div>
        <h5>Personas a las que seguir</h5>
      </div>
      <div className="col-md-12 row d-flex justify-content-center justify-content-md-between mx-0">
        <FollowCard />
        <FollowCard />
      </div>
    </div>
  );
};

export default FollowList;
