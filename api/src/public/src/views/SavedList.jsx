import React from "react";
import ListCard from "../components/ListCard/ListCard";

const SavedList = () => {
  return (
    <div className="mb-5">
      <div className="d-flex flex-row align-items-center justify-content-between">
        <h3 className="text-left">Tus listas</h3>
        <button
          type="button"
          className="btn btn-primary rounded-pill px-3 mr-2 "
        >
          Crear una nueva lista
        </button>
      </div>
      <div className="d-flex flex-column align-items-center">
        <ListCard />
        <ListCard />
        <ListCard />
        <ListCard />
      </div>
    </div>
  );
};

export default SavedList;
