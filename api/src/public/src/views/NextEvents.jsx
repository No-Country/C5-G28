import React from "react";

import EventsCard from "../components/EventsCard/EventsCard";

const NextEvents = () => {
  return (
    <>
      <div className="my-5">
        <div className="col-9 px-0">
          <h4 className=" btn-primary  px-4 py-2">
            {" "}
            <strong>PRÓXIMOS EVENTOS</strong>
          </h4>
        </div>
        <div className="row">
          <EventsCard />
        </div>
      </div>
    </>
  );
};

export default NextEvents;
